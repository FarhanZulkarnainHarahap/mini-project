import express from "express";

import {
  createVoucher,
  getAllVouchers,
} from "../controllers/voucher-controller.js";
import { verifyToken, roleGuard } from "../middleware/auth-middleware.js";
const router = express.Router();

router
  .route("/")
  .get(getAllVouchers)
  .post(verifyToken, roleGuard("ORGANIZER"), createVoucher);

export default router;
