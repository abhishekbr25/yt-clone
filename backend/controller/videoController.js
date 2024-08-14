import Video from "../models/videoModel.js";

export async function getVideo(req, res, next) {
  try {
    if (!req.params.vid)
      return res.json({ success: false, msg: "video Id required" });

    const video = await Video.findById(req.params.vid);
    if (!video) return res.json({ success: false, msg: "Video not found" });

    return res.json({ success: true, video });
  } catch (error) {
    console.log(error);
    res.status(500).json({msg: "server error", error})
  }
}

export async function addVideo(req, res, next) {
    
}

export async function updateVideo(req, res, next) {}

export async function deleteVideo(req, res, next) {}
