import User from "../database/models/User";
import dotenv from "dotenv";
import HttpError from "../error/HttpError";

export const signUp = async (req, res, next) => {
  const signUpData = req.body;
  let user;
  let token;

  try {
    User.findOne({ email: req.body.email }, async (err, user) => {
      if (err) return next(new HttpError("Email already used!", 500));

      user = new User(signUpData);
      token = user.generateAuthToken();
      await user.save();
    });
  } catch (e) {
    return next(new HttpError(e.message, 400));
  }
  res.send({ user, token });
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;
  let foundUser = await User.findOne({ email });
  if (!foundUser) {
    return res.json({ message: "Wrong password or email" }, 400);
  }

  let isValidPassword = password === foundUser.password;

  if (!isValidPassword) {
    return res.json({ message: "Wrong password or email" }, 400);
  }
  let token = await foundUser.generateAuthToken();
  res.status(200).send({
    user: { username: foundUser.username, email: foundUser.email },
    token,
  });
};
