import "dotenv/config.js";
import express, { Request, Response, Application } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import userRouter from "./routers/auth-routers.js";
import eventRouter from "./routers/event-routers.js";
import categoryRouter from "./routers/category-routes.js";
import authRouter from "./routers/auth-routers.js";

const app: Application = express();
const PORT: number = 8000;

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/category", categoryRouter);
app.use("/api/v1/event", eventRouter);
app.use("/api/v1/auth", authRouter);
app.get("/api/v1/health", async (req: Request, res: Response) => {
  res.status(200).json({ message: "API running" });
});

app.listen(PORT, () => {
  console.info(`Server is running on http://localhost:${PORT}`);
});
