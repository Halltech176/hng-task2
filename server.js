import app from "./app.js";
import dotenv from "dotenv";
dotenv.config({ path: ".env" });

import mongoose from "mongoose";

mongoose
  .connect("mongodb+srv://halltech:Machine101@cluster0.l1kh818.mongodb.net/")
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        `Databse connected and server is running at port ${process.env.PORT}`
      );
    });
  })
  .catch((err) => {
    console.log(err);
  });
