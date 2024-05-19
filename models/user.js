import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: { type: String, required: true },
  // password: { type: String, required: true },
  image: { type: String },
});
const User = models.User || model("User", userSchema);
export default User;