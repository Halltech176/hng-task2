import User from "../model/user.js";
import expressAsyncHandler from "express-async-handler";
import AppError from "../utils/apiError.js";

export const createUser = expressAsyncHandler(async (req, res, next) => {
  const { name } = req.body;
  if (!name) return next(new AppError("the user name is required", 422));

  if (typeof name !== "string")
    return next(new AppError("user name should only be string", 422));

  const user = await User.find();

  const findUser = user.filter((data, index) => {
    return data.name.toLowerCase() === name.toLowerCase();
  });

  if (findUser.length !== 0)
    return next(new AppError("user already exist", 409));

  const data = await User.create({ name });

  return res.status(200).json({
    data,
  });
});

export const getUser = expressAsyncHandler(async (req, res, next) => {
  const { user_id } = req.params;

  if (!user_id) return next(new AppError("The user ID is required", 422));

  const user = await User.findById(user_id);
  if (!user)
    return next(new AppError("The user with this ID does not exist", 404));

  return res.status(200).json({
    user,
  });
});

export const UpdateUser = expressAsyncHandler(async (req, res, next) => {
  const { user_id } = req.params;

  if (!user_id) return next(new AppError("The user ID is required", 422));

  const user = await User.findById(user_id);
  if (!user)
    return next(new AppError("The user with this ID does not exist", 404));

  user.name = req.body.name;

  await user.save({ new: true });

  return res.status(200).json({
    user,
  });
});

export const DeleteUser = expressAsyncHandler(async (req, res, next) => {
  const { user_id } = req.params;

  if (!user_id) return next(new AppError("The user ID is required", 422));

  const user = await User.findByIdAndDelete(user_id);

  return res.status(200).json({
    message: "user successfully deleted",
  });
});
