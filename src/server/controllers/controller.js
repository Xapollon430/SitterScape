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

    let user = new User(signUpData);
    let { refreshToken, jwtToken } = user.generateAuthToken();
    await user.save();

    res.json({ user, token: jwtToken });
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
