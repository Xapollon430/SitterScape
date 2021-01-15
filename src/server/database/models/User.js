import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import * as Crypto from "crypto-js";
import { config } from "dotenv";
import { ref } from "yup";
config();

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  surname: {
    type: String,
    required: true,
    trim: true,
  },

  email: {
    type: String,
    required: true,
    trim: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 6,
  },
  adress: {
    street: String,
    city: String,
    zip: Number,
    location: {
      latitude: String,
      longitude: String,
    },
  },
  // phoneNumber: String,
  rate: Number,
  rating: Number,
  // profileComments,
  picture: String,
  isActiveSitter: { type: Boolean, default: false },
  animals: [{ kind: String, weight: String }],
});

userSchema.methods.generateTokens = function () {
  const jwtToken = jwt.sign(
    { id: this._id.toString() },
    process.env.JWT_SECRET,
    {
      expiresIn: 1200000,
    }
  );

  const refreshToken = jwt.sign(
    { id: this._id.toString() },
    process.env.JWT_SECRET,
    {
      expiresIn: "30d",
    }
  );
  return { jwtToken, refreshToken };
};

const User = mongoose.model("User", userSchema);

export default User;
