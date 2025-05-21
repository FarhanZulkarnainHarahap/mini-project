import express from "express";
import { getAllEvents, createOneEvents, getEventById } from "../controllers/event-controllers";
import { imageFields } from "../controllers/image-controller";
import { fileUpload } from "../middleware/file-upload-middleware";

const router = express.Router();

router.route("/").get(getAllEvents).post(createOneEvents).post(
    fileUpload.fields([
        { name: "imagePrevew", maxCount: 3},
        { name: "imageContent", maxCount: 10}
    ]),
    imageFields
);
router.route("/:eventId").get(getEventById);
export default router;