import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { createToken } from "../utils/createToken.js";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password)
    return res.json({ msg: "all credential required" });

  const existingUser = await User.findOne({ email });
  if (existingUser) return res.json({ msg: "existing user" });

  const user = await User.create({ email, username, password });
  if (!user) res.json({ msg: "signup failed" });

  const token = await createToken(user._id);
// console.log(token);

  res.cookie("token", token, {
    withCredentials: true,
    httpOnly: false,
  });

  return res.json({ msg: "signed in success" });

  next();
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) res.json({ msg: "all feilds required" });

  const user = await User.findOne({ email });
  if (!user) return res.json({ msg: "invalid email" });

  const auth = await bcrypt.compare(password, user.password);
  if (!auth) return res.json({ msg: "incorrect password" });

  const token = await createToken(user._id)
  res.cookie('token', token, {
    httpOnly: false,
    withCredentials: true
  })

  return res.json({ msg: "user logged in successfully", success: true });
  next();
};
