import express from "express";
import { test } from "../controller/userController.js";
const router = express.Router();

//sign in new user

//login user

//get All user

// //get user by id
router.get("/test", test);

// // updateuser
// router.put("/test", test);

// //delete user
// router.delete("/test", test);

export default router;
