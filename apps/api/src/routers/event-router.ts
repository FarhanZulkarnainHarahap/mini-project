import express from "express";
import {
  getAllEvents,
  createOneEvents,
  getEventById,
  deleteEventById,
  createOneReview,
  getComment,
} from "../controllers/event-controller";
import { imageFields } from "../controllers/image-controller";
import { fileUpload } from "../middleware/file-upload-middleware";
import { roleGuard, verifyToken } from "../middleware/auth-middleware";

const router = express.Router();

router
  .route("/")
  .get(getAllEvents)
  .post(
    verifyToken,
    roleGuard("ORGANIZER"),
    fileUpload.fields([
      { name: "imagePreview", maxCount: 3 },
      { name: "imageContent", maxCount: 10 },
    ]),
    createOneEvents
  );

router.route("/:eventId").get(getEventById).delete(
  verifyToken, // pastikan hanya yang berizin yang bisa hapus
  roleGuard("ORGANIZER"),
  deleteEventById
);
router
  .route("/review")
  .get(getComment)
  .post(verifyToken, roleGuard("CUSTOMER"), createOneReview);
export default router;
