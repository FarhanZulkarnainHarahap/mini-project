import { Request, Response } from "express";
import { PrismaClient } from '../generated/prisma/index.js';

const prisma = new PrismaClient();

export async function createVoucher(req: Request, res: Response) {
    try {
        const { eventId, code, discountPercent, maxUses, status, validUntil, referralRequired, description} = req.body;
        const events = await prisma.voucher.create({ data: { eventId, code, discountPercent, maxUses, status, validUntil: new Date(validUntil), referralRequired, description} });
        res.status(201).json({message: "Event was Created", data: events });
        console.log("Created Event", events);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to create event" });
    }
}   

