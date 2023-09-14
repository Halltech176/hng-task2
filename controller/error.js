import AppError from "../utils/apiError.js";

export const globalError = (err, req, res, next) => {
  return res.status(err.statusCode || 401).json({
    status: "fail",
    message: err.message || "an error occured",
  });
};
