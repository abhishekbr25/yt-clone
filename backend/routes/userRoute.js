import express from "express";
import { verifyUser } from "../Middlewares/verifyUser.js";
import {
  getAllUsers,
  test,
  searchUser,
  updateUserDetails,
  updateUserPassword,
  deleteUser,
  subscribe,
  unsubscribe,
  like,
  dislike,
} from "../controller/userController.js";

const router = express.Router();

//test - get All user detail
router.get("/", getAllUsers);

//test - get current logged user detail
router.get("/test", verifyUser, test);

//search user by id
router.get("/find/:id", searchUser);

//update user details
router.put("/update/user-details", verifyUser, updateUserDetails);

//update user password
router.put("/update/user-password", verifyUser, updateUserPassword);

//delete user Account
router.delete("/delete", verifyUser, deleteUser);

/**
 * sub/unsub a user/channel
 * like/dislike a video
 */

//sub channel
router.put("/sub/:uid", verifyUser, subscribe);

//unsub channel
router.put("/unsub/:uid", verifyUser, unsubscribe);

//like a vid
router.put("/like/:vid", verifyUser, like);

//dislike a vid
router.put("/dislike/:vid", verifyUser, dislike);

export default router;
