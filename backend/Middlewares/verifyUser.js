import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import { ApiError } from "../utils/apiError.js";

export async function verifyUser(req, res, next) {
  try {
    const { token } = req.cookies;
    if (!token) throw new ApiError("unAuthorised user access", 401);

    const verify = jwt.verify(token, process.env.tokenSecret);
    if (!verify)
      throw new ApiError("unAuthorised user userToken not found", 401);

    const user = await User.findById(verify.id);
    if (!user) throw new ApiError("User not found");

    console.log("verified User\n");

    req.user = user;
    return next();
  } catch (error) {
    next(error);
  }
}
