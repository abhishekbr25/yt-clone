import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

export async function verifyUser(req, res, next) {
  const { token } = req.cookies;
  const verify = jwt.verify(token, process.env.tokenSecret);
  //console.log({ verify });

  if (!verify) return res.json({ msg: "unAuthenticated" });
  const user = await User.findById(verify.id);
  console.log(user);
  if (!user) return res.json({ msg: "user Not found" });
console.log('verified User\n');

  req.user = user;
  return next();
}
