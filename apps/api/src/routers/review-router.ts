import express from "express";
import { roleGuard, verifyToken } from "../middleware/auth-middleware";
import { createOneReview, getComment } from "../controllers/review-controller";

const router = express.Router();

router
  .route("/")
  .get(getComment)
  .post(verifyToken, roleGuard("CUSTOMER"), createOneReview);

export default router;
