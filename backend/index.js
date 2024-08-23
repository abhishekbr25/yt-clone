import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();
const port = 3001;

import { connectdb } from "./db/index.js";
connectdb();
// to get __dirname
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(
  cors({
    credentials: true, //allow cookies to be sent with req
    origin: "http://127.0.0.1:5500 ",
  })
);
app.use(cookieParser());
// app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

import authRouter from "./routes/authRoute.js";
import userRouter from "./routes/userRoute.js";
import videoRouter from "./routes/videoRoutes.js";
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/video", videoRouter);

app.get("/", (req, res) => {
  res.render("video");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
