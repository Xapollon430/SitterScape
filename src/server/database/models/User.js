import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { config } from "dotenv";
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
    state: String,
    zip: Number,
    location: {
      latitude: String,
      longitude: String,
    },
  },
  rate: Number,
  rating: Number,
  // profileComments,
  profilePicture: String,
  isActiveSitter: { type: Boolean, default: false },
  animals: [{ kind: String, weight: Number }],
});

const twentyMinutesInMiliseconds = 1200000;

userSchema.methods.generateTokens = function () {
  const accessToken = jwt.sign({ id: this.id }, process.env.JWT_SECRET, {
    expiresIn: twentyMinutesInMiliseconds,
  });

  const refreshToken = jwt.sign({ id: this.id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  return { accessToken, refreshToken };
};

userSchema.methods.generateAccessToken = function () {
  const accessToken = jwt.sign({ id: this.id }, process.env.JWT_SECRET, {
    expiresIn: twentyMinutesInMiliseconds,
  });

  return accessToken;
};

const User = mongoose.model("User", userSchema);

export default User;
