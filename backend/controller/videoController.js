import User from "../models/userModel.js";
import Video from "../models/videoModel.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { uploadOnCloudinary } from "../utils/uploadOnCloudinary.js";

export const getVideo = async (req, res, next) => {
  if (!req.params.id) return res.json({ msg: "video id required" });

  const video = await Video.findById(req.params.id);

  if (!video) return res.json({ msg: "video not found" });

  return res.json({ video });
};

export const addVideo = async (req, res, next) => {
  try {
    const videoFile = req.files?.video?.[0];
    const thumbnailFile = req.files?.thumbnail?.[0];

    if (!videoFile || !thumbnailFile) {
      throw new ApiError("Video or thumbnail file is missing", 400);
    }
    //upload on cloudinary
    const videoRes = await uploadOnCloudinary(videoFile.path);
    const thumbnailRes = await uploadOnCloudinary(thumbnailFile.path);

    // console.log(videoRes?.secure_url + "\n" + thumbnailRes?.secure_url);

    if (!videoRes?.secure_url || !thumbnailRes?.secure_url)
      throw new ApiError("cant get uploaded file Url");

    if (!req.body.title || !req.body.description)
      throw new ApiError("title and description required"); 

    const video = new Video({
      owner: req.user._id,
      ...req.body,
      thumbnailUrl: thumbnailRes.secure_url,
      videoUrl: videoRes.secure_url,
    });

    const savedVideo = await video.save();

    if (!savedVideo) throw new ApiError("unable to create video");
    res.json(new ApiResponse(savedVideo));
  } catch (error) {
    next(error);
  }
};

export const updateVideo = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};
export const deleteVideo = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};
