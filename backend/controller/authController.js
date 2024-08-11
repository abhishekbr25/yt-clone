import User from "../models/user.js";

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
