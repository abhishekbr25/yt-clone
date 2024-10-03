import { uploadOnCloudinary } from "../utils/uploadOnCloudinary.js";
import Post from "../models/postModel.js";

export const uploadPost = async (req, res) => {
  try {
    console.log(req.file);
    const file = req.file;
    if (!file) return res.status(400).json({ msg: "post not found " });

    if (!req.body.title)
      return res.status(400).json({ msg: "title not found" });

    const fileRes = await uploadOnCloudinary(file.path);
    console.log("fileRes from cloudinary", fileRes);
    if (!fileRes) return res.status(400).json({ msg: "cloudinary error" });

    const post = await Post.create({
      ...req.body,
      owner: req.user._id,
      postUrl: fileRes.secure_url,
    });

    if (!post) return res.status(400).json({ msg: "unable to create post" });

    return res.status(200).json({ msg: "post created successfully", post });
  } catch (error) {
    return res.status(500).json({ msg: "server error", error });
  }
};
