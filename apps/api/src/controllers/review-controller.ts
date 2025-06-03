import { Request, Response } from "express";
import { PrismaClient } from "../generated/prisma/index.js";

const prisma = new PrismaClient();

export async function createOneReview(req: Request, res: Response) {
  try {
    const { description, rating, eventId } = req.body;
    const userId = req.user.id;

    // Validasi minimal input
    if (!userId || !eventId || !rating) {
      res.status(400).json({
        message: "userId, eventId, and rating are required",
      });
      return;
    }

    // Validasi rating harus 1–5
    if (rating < 1 || rating > 5) {
      res.status(400).json({
        message: "Rating must be between 1 and 5",
      });
      return;
    }

    // (Opsional) Cek jika user sudah review event ini
    const existingReview = await prisma.review.findFirst({
      where: {
        userId,
        eventId,
      },
    });

    if (existingReview) {
      res.status(400).json({
        message: "You have already reviewed this event",
      });
      return;
    }

    // Buat review
    const review = await prisma.review.create({
      data: {
        userId,
        eventId,
        rating,
        description,
        // imageReview bisa disimpan jika field-nya tersedia di schema
      },
      include: {
        User: true, // jika ingin info user
      },
    });

    res.status(201).json({
      message: "Review created successfully",
      data: review,
    });
  } catch (error) {
    console.error("Create review error:", error);
    res.status(500).json({
      message: "Failed to create review",
    });
  }
}

export async function getComment(req: Request, res: Response) {
  try {
    const event = await prisma.event.findMany({
      include: {
        Review: {
          include: {
            User: true,
          },
        },
      },
    });
    res.status(200).json({ data: event });
  } catch (error) {}
}
