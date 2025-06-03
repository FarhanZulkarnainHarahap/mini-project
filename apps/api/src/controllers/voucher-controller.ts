import { Request, Response } from "express";
import { PrismaClient } from "../generated/prisma/index.js";
import { v4 as uuidv4 } from "uuid";
const prisma = new PrismaClient();

export async function createVoucher(req: Request, res: Response) {
  try {
    const {
      eventId,
      ticketId,
      description,
      code,
      discountPercent,
      maxUses,
      validUntil,
    } = req.body;

    // Validasi minimal
    if (
      !eventId ||
      !ticketId ||
      !description ||
      !discountPercent ||
      !maxUses ||
      !validUntil
    ) {
      res
        .status(400)
        .json({ message: "Semua field wajib diisi, kecuali kode (optional)." });
      return;
    }

    // Cek apakah ticketId valid dan milik eventId yang sama
    const ticket = await prisma.ticket.findFirst({
      where: {
        id: ticketId,
        eventId: eventId,
      },
    });

    if (!ticket) {
      res.status(404).json({
        message: "Tiket tidak ditemukan atau tidak sesuai dengan event.",
      });
      return;
    }

    // Generate kode unik jika tidak disediakan
    const voucherCode =
      code ||
      `${description.slice(0, 4)}-${uuidv4().slice(0, 8).toUpperCase()}`;

    // Buat voucher baru
    const newVoucher = await prisma.voucher.create({
      data: {
        eventId,
        ticketId,
        description,
        code: voucherCode,
        discountPercent: Number(discountPercent),
        maxUses: Number(maxUses),
        validUntil: new Date(validUntil),
      },
    });

    res.status(201).json({
      message: "Voucher berhasil dibuat.",
      voucher: newVoucher,
    });
  } catch (error: any) {
    console.error("Error saat membuat voucher:", error);
    if (error.code === "P2002") {
      res
        .status(409)
        .json({ message: "Kode voucher sudah digunakan. Gunakan kode lain." });
      return;
    }
    res.status(500).json({
      message: "Terjadi kesalahan pada server.",
      error: error.message,
    });
  }
}

export const getAllVouchers = async (req: Request, res: Response) => {
  try {
    const vouchers = await prisma.voucher.findMany({
      include: {
        Event: true,
        Ticket: true, // jika ingin tampilkan detail tiket juga
      },
      orderBy: {
        validUntil: "asc", // contoh: urut berdasarkan tanggal kedaluwarsa
      },
    });

    res.status(200).json({
      success: true,
      data: vouchers,
    });
  } catch (error) {
    console.error("Error fetching vouchers:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
