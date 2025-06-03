import "dotenv/config.js";
import express, { Request, Response, Application } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import eventRouter from "./routers/event-router.js";
import authRouter from "./routers/auth-router.js";
import userRouter from "./routers/user-router.js";
import transactionRouter from "./routers/transaction-router.js";
import reviewtRouter from "./routers/review-router.js";
import voucherRouter from "./routers/voucher-router.js";
import discountRouter from "./routers/discount-router.js";

const app: Application = express();
const PORT: number = 8000;

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json({ limit: "25mb" }));
app.use(cookieParser());

app.use("/api/v1/user", userRouter);

app.use("/api/v1/event", eventRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/voucher", voucherRouter);
app.use("/api/v1/discount", discountRouter);
app.use("/api/v1/transaction", transactionRouter);
app.use("/api/v1/review", reviewtRouter);
app.get("/api/v1/health", async (req: Request, res: Response) => {
  res.status(200).json({ message: "API running" });
});

app.listen(PORT, () => {
  console.info(`Server is running on http://localhost:${PORT}`);
});
