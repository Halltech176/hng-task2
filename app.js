import express from "express";
import bodyParser from "body-parser";
import { globalError } from "./controller/error.js";
import userRoutes from "./route/user.js";

const app = express();

app.use(bodyParser.json());

app.use("/api", userRoutes);

app.use(globalError);

app.use("*", (req, res) => {
  return res.status(404).json({
    status: "fail",
    message: "route not found",
  });
});

export default app;
