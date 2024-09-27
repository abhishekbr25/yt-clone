import express from "express";
import { signup, login } from "../controller/authController.js";
import {
  loginValidation,
  signUpValidation,
} from "../Middlewares/AuthValidation.js";

const router = express.Router();

router.post("/signup", signUpValidation, signup);
router.post("/login", loginValidation, login);

export default router;
