import { Router } from "express";
import { verifyUser } from "../Middlewares/verifyUser.js";
import {
  getVideo,
  uploadVideo,
  updateVideo,
  deleteVideo,
} from "../controller/videoController.js";
const router = Router();

router.get("/:vid", getVideo);
router.post("/upload", verifyUser, uploadVideo);
router.put("/:vid", verifyUser, updateVideo);
router.delete("/:vid", verifyUser, deleteVideo);

export default router;
