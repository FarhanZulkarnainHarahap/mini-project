import { Request, Response } from "express";
import { cloudinary } from "../configs/cloudinary-config";
import { PrismaClient } from "../generated/prisma";
import fs from "fs/promises"
import { Express } from "express";

const prisma = new PrismaClient();

export async function imageFields(req: Request, res: Response){
    try {
        const body = req.body;
        const files = req.files as {
            [key: string]: Express.Multer.File[];
        };

        if(!req.files){
            res.status(400).json({ message: "Image Not Found"});
            return;
        }

        for (const key in files){
            for (const el of files[key]){
                const result = await cloudinary.uploader.upload(el.path, {
                    folder: "Events-mini-project",
                });
                await prisma.image.create({ data: { url: result.secure_url } });
                await fs.unlink(el.path)
            }
        }
        res.status(200).json({ data: { body: body, files: files } });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to Upload Fields Image"})
    }
}