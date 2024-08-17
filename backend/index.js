import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import authRouter from "./routes/authRoute.js";
import userRouter from "./routes/userRoute.js";
import videoRouter from "./routes/videoRoutes.js";
const app = express();
const port = 3001;

import { connectdb } from "./db/index.js";
import { verifyUser } from "./Middlewares/verifyUser.js";
connectdb();
// to get __dirname
import { fileURLToPath } from "url";
import { upload } from "./Middlewares/multerMiddleware.js";
import { uploadOnCloudinary } from "./utils/uploadOnCloudinary.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/video", videoRouter);

app.get("/", (req, res)=>{
res.render("video")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


