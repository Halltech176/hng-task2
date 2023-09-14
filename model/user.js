import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "The user name is required"],
  },
});

const User = mongoose.model("user", userSchema);

export default User;
