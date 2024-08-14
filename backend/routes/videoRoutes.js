import { Router } from "express";
import { verifyUser } from "../Middlewares/verifyUser.js";
import {
  getVideo,
  addVideo,
  updateVideo,
  deleteVideo,
} from "../controller/videoController.js";
const router = Router();

router.post("/get/:vid", getVideo);
router.post("/upload", verifyUser, addVideo);
router.post("/update/:vid", verifyUser, updateVideo);
router.post("/delete/:vid", verifyUser, deleteVideo);

export default router;
