import express from "express";
const router = express.Router();
import {
  getUserById,
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/userControllers.js";
import validateUser from "../middlewares/inputValidator.js";

router.get("/user", getAllUsers);
router.get("/user/:id", getUserById);
router.post("/user", validateUser, createUser);
router.put("/user/:id", validateUser, updateUser);
router.delete("/user/:id", deleteUser);

export default router;
