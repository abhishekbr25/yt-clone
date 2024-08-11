import User from "../models/user.js";
import bcrypt from "bcrypt";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password)
    res.json({ msg: "all credential required" });

  const existingUser = await User.findOne({ email });
  if (existingUser) res.json({ msg: "existing user" });

  const user = await User.create({ email, username, password });
  if (!user) res.json({ msg: "signup failed" });
  res.json({ msg: "signed in success" });

  next();
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) res.json({ msg: "all feilds required" });

  const user = await User.findOne({ email });
  if (!user) return res.json({ msg: "invalid email" });

  const auth = await bcrypt.compare(password, user.password);

  if (!auth) return res.json({ msg: "incorrect password" });

  return res.json({ msg: "user logged in successfully", success: true });
  next();
};
