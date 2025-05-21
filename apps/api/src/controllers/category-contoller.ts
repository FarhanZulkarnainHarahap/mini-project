import { Request, Response } from "express";
import { PrismaClient } from '../generated/prisma/index.js';

const prisma = new PrismaClient();

export async function getAllCategories(req: Request, res: Response) {
    try {
        const categories = await prisma.category.findMany({
            include: {
                EventCategory: {
                    include: {
                        Event: true
                    }
                }
            }
        });
        res.status(200).json({ data: categories });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to get all categories data" });
    }
}
export async function createOneCategories(req: Request, res: Response) {
    try {
        const { name } = req.body;
        const categories = await prisma.category.create({ data: { name } });
        res.status(201).json({ data: categories });
        console.log("Created Category", categories);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to create category" });
    }
}