import mongoose from "mongoose";
import jwt from "jsonwebtoken";

const ownerSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    // validate(email) {
    //   if (!Validator.isEmail(email)) {
    //     throw new Error("Please enter a valid email");
    //   }
    // },
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 6,
  },
  animals: [{ kind: String, weight: String }],
  picture: String,
});

ownerSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ id: this._id.toString() }, process.env.JWT_SECRET, {
    expiresIn: "10000",
  });

  return token;
};

const Owner = mongoose.model("Owner", ownerSchema);

export default Owner;
