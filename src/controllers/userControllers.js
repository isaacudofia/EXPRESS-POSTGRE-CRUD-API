import {
  createUserService,
  getAllUsersService,
  updateUserService,
  getUserByIdService,
  deleteUserService,
} from "../models/userModel.js";

//Standardized response function
const handleResponse = (res, status, message, data = null) => {
  res.status(status).json({
    status,
    message,
    data,
  });
};

export const createUser = async (req, res, next) => {
  const { name, email } = req.body;
  try {
    const newUser = await createUserService(name, email);
    handleResponse(res, 201, "User created successfully", newUser);
  } catch (err) {
    next(err);
  }
};

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await getAllUsersService();
    handleResponse(res, 200, "All user fetched successfully", users);
  } catch (err) {
    next(err);
  }
};

export const getUserById = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const user = await getUserByIdService(userId);
    if (!user) return handleResponse(res, 404, "User not found");
    handleResponse(
      res,
      200,
      `User with the id ${userId} fetched successfully`,
      user
    );
  } catch (err) {
    next(err);
  }
};

export const updateUser = async (req, res, next) => {
  const { name, email } = req.body;
  try {
    const userId = req.params.id;
    const updatedUser = await updateUserService(userId, name, email);
    if (!updatedUser) return handleResponse(res, 404, "User not found");
    handleResponse(
      res,
      200,
      `User with the id ${userId} updated successfully`,
      updatedUser
    );
  } catch (err) {
    next(err);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const deletedUser = await deleteUserService(userId);
    if (!deletedUser) return handleResponse(res, 404, "User not found");
    handleResponse(
      res,
      200,
      `User with the id ${userId} deleted successfully`,
      deletedUser
    );
  } catch (err) {
    next(err);
  }
};
