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

    const totalItems = await prisma.event.count();
    const totalPages = Math.ceil(totalItems / limit);

    const tickets = await prisma.ticket.findMany();
    const allEvents = await prisma.event.findMany({});
    const paginationEvents = await prisma.event.findMany({
      skip: skip,
      take: +limit,
      include: {
        User: true,
        EventImage: { include: { ImagePreview: true, ImageContent: true } },
        Ticket: true,
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

    res.status(201).json({ message: "Event was Created", data: events });
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

// create: ticketType.map((ticket) => ({
//             ticketType: ticket.role,
//             price: ticket.price,
//             seat: ticket.seat,
//           })),

// create: [
//             {
//               ticketType: TicketRole.REGULAR,
//               price: tickets.reguler.price,
//               seat: tickets.reguler.seat,
//             },
//             {
//               ticketType: TicketRole.VIP,
//               price: tickets.VIP.price,
//               seat: tickets.VIP.seat,
//             },
//             {
//               ticketType: TicketRole.VVIP,
//               price: tickets.VVIP.price,
//               seat: tickets.VVIP.seat,
//             },
//           ],
