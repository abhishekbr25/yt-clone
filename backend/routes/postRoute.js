import { Router } from "express";
import { verifyUser } from "../Middlewares/verifyUser.js";
import { uploadPost } from "../controller/postController.js";
import { upload } from "../Middlewares/multerMiddleware.js"; 

const router = Router();

router.post("/upload",verifyUser, upload.single('file') , uploadPost);

export default router;
