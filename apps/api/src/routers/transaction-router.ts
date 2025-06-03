import express from "express";

import {
  createTransaction,
  updateTransactionStatus,
} from "../controllers/transaction-controller.js";
import { roleGuard, verifyToken } from "../middleware/auth-middleware.js";
const router = express.Router();

router.route("/").post(verifyToken, roleGuard("CUSTOMER"), createTransaction);
router.route("/status").post(updateTransactionStatus);
export default router;
