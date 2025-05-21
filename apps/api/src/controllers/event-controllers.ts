import { Request, Response } from "express";
import { PrismaClient } from "../generated/prisma/index.js";
import { cloudinary } from "../configs/cloudinary-config.js";
import fs from "fs/promises";

const prisma = new PrismaClient();

export async function getAllEvents(req: Request, res: Response) {
  try {
    const events = await prisma.event.findMany({
      include: {
        EventCategory: { include: { Category: true } },
        User: true,
        EventImage: { include: { ImagePreview: true, ImageContent: true } },
      },
    });

    res.status(200).json({ data: events });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to get all events data" });
  }
}

export async function createOneEvents(req: Request, res: Response) {
  try {
    const { userId, title, description, location, startDate, endDate } =
      req.body;
    const files = req.files as {
      [key: string]: Express.Multer.File[];
    };
    const eventId = req.user.id;

    if (
      !title ||
      !description ||
      !location ||
      !startDate ||
      !endDate ||
      !files
    ) {
      res.status(400).json({ message: "Missing required fields" });
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

    //         const events = await prisma.event.create({ data: { userId, title, description, location, startDate: new Date(startDate), endDate: new Date(endDate),EventImage: { create: {ImagePreview: {create : imagePreviewData}, imageContent: {create: imageContentData}
    //       }
    //     }
    //   }
    // }

    // );
    const events = await prisma.event.create({
      data: {
        userId,
        title,
        description,
        location,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        EventImage: {
          create: {
            ImagePreview: { create: imagePreviewData[0] },
            ImageContent: { create: imageContentData[0] },
          },
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
    const id = req.params.eventId;
    const event = await prisma.event.findUnique({ where: { id: id } });
    res.status(200).json({ data: event });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to get Event by id" });
  }
}
