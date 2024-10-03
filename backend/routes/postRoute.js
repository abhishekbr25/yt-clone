import { Router } from "express";
import { verifyUser } from "../Middlewares/verifyUser.js";
import { uploadPost } from "../controller/postController.js";
import { singleUpload, upload } from "../Middlewares/multerMiddleware.js";
import multer from "multer";

const router = Router();
// const upload = multer({ dest: "../temp/" });
// const savePost = async (req, res) => {
// console.log(req.file);
// };
router.post("/upload", upload.single("file"), savePost);

export default router;
