import express from "express";

import {
  createDiscount,
  getDiscounts,
} from "../controllers/discount-controller.js";
import { verifyToken, roleGuard } from "../middleware/auth-middleware.js";
const router = express.Router();

router
  .route("/")
  .get(getDiscounts)
  .post(verifyToken, roleGuard("ORGANIZER"), createDiscount);

export default router;
