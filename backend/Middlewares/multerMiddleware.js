import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, `${file.originalname}`);
  },
});

export const upload = multer({ storage });

const memStorage = multer.memoryStorage();
export const singleUpload = multer({ memStorage }).single("file");
