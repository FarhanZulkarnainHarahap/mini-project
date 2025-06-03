import { Request, Response } from "express";
import { PrismaClient } from "../generated/prisma/index.js";
import { cloudinary } from "../configs/cloudinary-config.js";
import fs from "fs/promises";
import { ListCategory, TicketType } from "../generated/prisma/index.js";
import {
  Event,
  EventImage,
  ImagePreview,
  ImageContent,
} from "../generated/prisma/index.js";

const prisma = new PrismaClient();

export async function getAllEvents(req: Request, res: Response) {
  try {
    /* ------------------------------- pagination ------------------------------- */

    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const skip = (page - 1) * limit;
    const title = req.query.title as string;

    const allEvents = await prisma.event.findMany({});
    const paginationEvents = await prisma.event.findMany({
      where: { title: { contains: title, mode: "insensitive" } },

      skip: skip,
      take: +limit,
      include: {
        User: true,
        EventImage: { include: { ImagePreview: true, ImageContent: true } },
        Ticket: true,
        Review: true,
        Voucher: true,
        Discount: true,
      },
    });

    const events = paginationEvents.map((event) => {
      const imagePreview: { id: string | null; url: string }[] = [];
      const imageContent: { id: string | null; url: string }[] = [];

      for (const el of event.EventImage) {
        /* ------------------------------ Image Content ----------------------------- */
        if (el.ImageContent?.id && el.ImageContent?.url) {
          imageContent.push({
            id: el.ImageContent.id,
            url: el.ImageContent.url,
          });
        }

        /* ------------------------------ Image Preview ----------------------------- */
        if (el.ImagePreview?.id && el.ImagePreview?.url) {
          imagePreview.push({
            id: el.ImagePreview?.id || null, // fallback if no id
            url: el.ImagePreview.url,
          });
        }
      }

      return { ...event, imagePreview, imageContent };
    });

    res.status(200).json({
      data: events,
      totalPages: Math.ceil(allEvents.length / +limit),
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to get all events data" });
  }
}

export async function createOneEvents(req: Request, res: Response) {
  try {
    const {
      title,
      description,
      location,
      startDate,
      endDate,
      category,
      JSONTickets,
    } = req.body;
    const files = req.files as {
      [key: string]: Express.Multer.File[];
    };
    const userId = req.user.id;

    const tickets = JSON.parse(JSONTickets);

    if (
      !title ||
      !description ||
      !location ||
      !startDate ||
      !endDate ||
      !category ||
      !files
    ) {
      res.status(400).json({ message: "Missing required fields" });
      return;
    }

    if (!Object.values(ListCategory).includes(category)) {
      res.status(400).json({ message: "Invalid category role" });
      return;
    }

    const imagePreviewData: { url: string }[] = [];
    const imageContentData: { url: string }[] = [];

    for (const key in files) {
      for (const el of files[key]) {
        const result = await cloudinary.uploader.upload(el.path, {
          folder: "Events-mini-project",
        });

        if (key === "imagePreview") {
          imagePreviewData.push({ url: result.secure_url });
        }

        if (key == "imageContent") {
          imageContentData.push({ url: result.secure_url });
        }
        await fs.unlink(el.path);
      }
    }

    const events = await prisma.event.create({
      data: {
        userId,
        title,
        description,
        location,
        category,
        startDate: new Date(startDate),
        endDate: new Date(endDate),

        EventImage: {
          create: [
            ...imagePreviewData.map((image) => ({
              ImagePreview: { create: image },
            })),
            ...imageContentData.map((image) => ({
              ImageContent: { create: image },
            })),
          ],
        },
        Ticket: {
          create: [
            {
              ticketType: TicketType.REGULAR,
              price: tickets.reguler.price,
              seat: tickets.reguler.seat,
            },
            {
              ticketType: TicketType.VIP,
              price: tickets.VIP.price,
              seat: tickets.VIP.seat,
            },
            {
              ticketType: TicketType.VVIP,
              price: tickets.VVIP.price,
              seat: tickets.VVIP.seat,
            },
          ],
        },
      },
    });
    const resultEvent = JSON.stringify(events);
    res.status(201).json({ message: "Event was Created", data: resultEvent });
    console.log("Created Event", events);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create event" });
  }
}

export async function getEventById(req: Request, res: Response) {
  try {
    const { eventId } = req.params;

    const eventbyid = await prisma.event.findUnique({
      where: {
        id: eventId,
      },
      include: {
        User: true,
        EventImage: {
          include: {
            ImagePreview: true,
            ImageContent: true,
          },
        },
      },
    });

    if (!eventbyid) {
      res.status(404).json({ message: "Event not found" });
      return;
    }
    const imagePreview: { id: string | null; url: string }[] = [];
    const imageContent: { id: string | null; url: string }[] = [];

    for (const el of eventbyid.EventImage) {
      // ------------------------------ Image Content -----------------------------
      if (el.ImageContent?.id && el.ImageContent?.url) {
        imageContent.push({
          id: el.ImageContent.id,
          url: el.ImageContent.url,
        });
      }

      // ------------------------------ Image Preview -----------------------------
      if (el.ImagePreview?.url) {
        imagePreview.push({
          id: el.ImagePreview?.id || null, // fallback if no id
          url: el.ImagePreview.url,
        });
      }
    }

    // Return response dengan imagePreview dan imageContent yang sudah diproses
    res.status(200).json({
      data: {
        ...eventbyid, // Tetap sertakan data event yang ada
        imagePreview,
        imageContent,
      },
    });
    res.status(200).json({ data: event });
    return;
  } catch (error) {
    console.error("Error fetching event by ID:", error);
    res.status(500).json({ message: "Failed to get event by ID" });
  }
}

export async function deleteEventById(req: Request, res: Response) {
  const { eventId } = req.params;

  try {
    await prisma.ticket.deleteMany({
      where: { eventId },
    });
    await prisma.eventImage.deleteMany({ where: { eventId } });
    const deletedEvent = await prisma.event.delete({
      where: {
        id: eventId, // Pastikan `id` adalah nama field primary key-nya di model Prisma
      },
    });

    res.status(200).json({
      message: "Event deleted successfully",
      data: deletedEvent,
    });
    return;
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to delete event",
      error,
    });
  }
}

export async function createOneReview(req: Request, res: Response) {
  try {
    const { description, rating, eventId } = req.body;
    const parsedRating = parseInt(rating);
    const userId = req.user.id;

    // Validasi minimal input
    if (!userId || !eventId || !parsedRating) {
      res.status(400).json({
        message: "userId, eventId, and rating are required",
      });
      return;
    }

    // Validasi rating harus 1–5
    if (parsedRating < 1 || parsedRating > 5) {
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
        rating: parsedRating,
        description,
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
  } catch (error) {
    console.error("get review error:", error);
    res.status(500).json({
      message: "Failed to get review",
    });
  }
}
