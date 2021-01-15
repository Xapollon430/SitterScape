import User from "../database/models/User";
import HttpError from "../error/HttpError";
import jwt from "jsonwebtoken";
import { AES } from "crypto-js";
import { config } from "dotenv";
config();

export const signUp = async (req, res, next) => {
  const signUpData = req.body;
  try {
    let userExists = await User.findOne({ email: signUpData.email });
    if (userExists) return next(new HttpError("Email already used!", 409));

    let newUser = new User(signUpData);
    let { refreshToken, jwtToken } = user.generateAuthToken();
    await user.save();

    const monthToSeconds = 30 * 24 * 60 * 60 * 1000;

    res.cookie("refreshToken", refreshToken, {
      maxAge: monthToSeconds,
      httpOnly: true,
      // Forces to use https in production
      secure: process.env.NODE_ENV === "production" ? true : false,
    });

    res.json({ user: newUser, token: jwtToken });
  } catch (e) {
    return next(new HttpError(e.message, 400));
  }
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;
  let foundUser = await User.findOne({ email });

  if (!foundUser || password !== foundUser.password) {
    return next(new HttpError("Wrong password or email", 401));
  }
  let { refreshToken, jwtToken } = user.generateAuthToken();

  const monthToSeconds = 30 * 24 * 60 * 60 * 1000;

  res.cookie("refreshToken", refreshToken, {
    maxAge: monthToSeconds,
    httpOnly: true,
    // Forces to use https in production
    secure: process.env.NODE_ENV === "production" ? true : false,
  });

  res.status(200).json({
    user: foundUser,
    token: jwtToken,
  });
};

export const autoLogin = async (req, res, next) => {
  const { token } = req.body;
  // const x = jwt.verify(token, process.env.JWT_SECRET);
  res.send(123);
};
