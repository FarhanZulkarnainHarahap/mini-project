import { Request, Response } from "express";
import { PrismaClient, TicketType } from "../generated/prisma/index.js";
import { MidtransClient } from "midtrans-node-client";
import { v7 as uuid } from "uuid";

const prisma = new PrismaClient();
const snap = new MidtransClient.Snap({
  isProduction: process.env.NODE_ENV === "production" ? true : false,
  serverKey: process.env.MIDTRANS_SANDBOX_SERVER_KEY,
});

export async function createTransaction(req: Request, res: Response) {
  try {
    const { eventId, ticketId, totalTicket, voucherId, discountId } = req.body;
    const userId = req.user.id;
    const [event, ticket, voucher, discount] = await Promise.all([
      prisma.event.findUnique({ where: { id: eventId } }),
      prisma.ticket.findUnique({ where: { id: ticketId } }),
      prisma.voucher.findUnique({ where: { id: voucherId } }),
      prisma.discount.findUnique({ where: { id: discountId } }),
    ]);

    if (!eventId || !ticketId || !totalTicket) {
      res
        .status(400)
        .json({ message: "eventId, ticketId dan totalTicket wajib diisi" });
      return;
    }

    if (!event) {
      res.status(404).json({ message: "Event tidak ditemukan" });
      return;
    }
    if (!ticket) {
      res.status(404).json({ message: "Tiket tidak ditemukan" });
      return;
    }
    if (ticket.seat < totalTicket) {
      res.status(400).json({ message: "Kursi tidak mencukupi" });
      return;
    }

    // Hitung harga awal
    let totalPrice = ticket.price * totalTicket;

    // Apply voucher jika ada
    let appliedVoucher = null;
    if (voucherId) {
      appliedVoucher = await prisma.voucher.findUnique({
        where: { id: voucherId },
      });
      if (!appliedVoucher) {
        res.status(404).json({ message: "Voucher tidak ditemukan" });
        return;
      }

      // Misal diskon fixed amount
      const totalPrice = appliedVoucher.discountPercent;
    }

    // Apply discount jika ada
    let appliedDiscount = null;
    if (discountId) {
      appliedDiscount = await prisma.discount.findUnique({
        where: { id: discountId },
      });
      if (!appliedDiscount)
        return res.status(404).json({ message: "Diskon tidak ditemukan" });

      // Misal diskon persentase
      totalPrice *= 1 - appliedDiscount.discountPercent / 100;
    }

    // Tidak boleh negatif
    if (totalPrice < 0) totalPrice = 0;

    const orderId = uuid();

    await prisma.$transaction(async (tx) => {
      await tx.transaction.create({
        data: {
          id: orderId,
          userId,
          eventId,
          ticketId,
          voucherId,
          discountId,
          totalTicket,
          totalPrice,
          status: "PENDING",
        },
      });

      await tx.ticket.update({
        where: { id: ticketId },
        data: {
          seat: { decrement: totalTicket },
        },
      });
    });

    const midtransTransaction = await snap.createTransaction({
      transaction_details: {
        order_id: orderId,
        gross_amount: Math.floor(totalPrice),
      },
      item_details: [
        {
          id: ticket.id,
          name: `${event.title} - ${ticket.ticketType}`,
          quantity: totalTicket,
          price: ticket.price,
        },
      ],
      customer_details: {
        first_name: req.user.firstName,
        email: req.user.email,
      },
    });

    res.status(201).json({
      message: "Transaksi berhasil dibuat",
      data: { midtransTransaction },
    });
  } catch (err) {
    console.error("createTransaction error:", err);
    res.status(500).json({ message: "Gagal membuat transaksi" });
  }
}

export async function updateTransactionStatus(req: Request, res: Response) {
  try {
    const data = req.body;

    console.log(data);

    await prisma.transaction.update({
      where: { id: data.order_id },
      data: { status: "PAID" },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to update transaction status" });
  }
}
