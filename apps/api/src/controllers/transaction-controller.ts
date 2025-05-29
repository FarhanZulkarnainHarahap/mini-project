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
    const { eventId, totalTicket, ticketId } = req.body;
    const userId = req.user.id;

    const event = await prisma.event.findUnique({ where: { id: eventId } });
    if (!event) {
      res.status(404).json({ message: "Event not found" });
      return;
    }

    const ticket = await prisma.ticket.findUnique({ where: { id: ticketId } });
    if (!ticket) {
      res.status(404).json({ message: "ticket not found" });
      return;
    }

    const ticketType = ticket.ticketType;

    let totalPrice = 0;

    if (ticketType === "REGULAR") {
      return (totalPrice = ticket.price);
    } else if (ticketType === "VIP") {
      return (totalPrice = ticket.price);
    } else if (ticketType === "VVIP") {
      return (totalPrice = ticket.price);
    }

    const localId = uuid();

    await prisma.$transaction(async (tx) => {
      // Our own transaction
      await tx.transaction.create({
        data: {
          id: localId,
          eventId,
          userId,
          ticketId,
          totalTicket,
          totalPrice,
        },
      });

      await tx.ticket.update({
        where: { id: ticketId },
        data: { seat: { decrement: totalTicket } },
      });
    });

    // Midtrans transaction
    const midtransTransaction = await snap.createTransaction({
      transaction_details: {
        order_id: localId,
        gross_amount: totalPrice,
      },
      item_details: [
        {
          id: event.id,
          name: event.title,
          quantity: totalTicket,
          price: ticket.price,
        },
      ],
      customer_details: {
        full_name: req.user.fullName,
        email: req.user.email,
      },
    });

    res.status(201).json({
      message: "Transaction Created",
      data: { midtransTransaction },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create transaction" });
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
