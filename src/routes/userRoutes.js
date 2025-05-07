import express from "express";
const router = express.Router();
import {
  getUserById,
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/userControllers.js";

router.get("/user", getAllUsers);
router.get("/user/:id", getUserById);
router.post("/user", createUser);
router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);

export default router;
