import express from "express";
import {
  getCurrentUser,
  updateUserImage,
} from "../controllers/user-controller";
import { verifyToken } from "../middleware/auth-middleware";
import { fileUpload } from "../middleware/file-upload-middleware.js";

const router = express.Router();

router
  .route("/current-user")
  .get(verifyToken, getCurrentUser)
  .put(fileUpload.single("singleImage"), updateUserImage);

export default router;
