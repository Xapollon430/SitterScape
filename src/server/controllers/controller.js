import User from "../database/models/User";
import dotenv from "dotenv";
import HttpError from "../error/HttpError";

export const signUp = async (req, res, next) => {
  const signUpData = req.body;
  try {
    User.findOne({ email: req.body.email }, async (err, emailExists) => {
      if (emailExists) return next(new HttpError("Email already used!", 500));

      let user = new User(signUpData);
      let token = user.generateAuthToken();
      await user.save();
      res.send({ user, token });
    });
  } catch (e) {
    return next(new HttpError(e.message, 400));
  }
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;
  let foundUser = await User.findOne({ email });

  if (!foundUser) {
    return next(new HttpError("Wrong password or email", 400));
  } else if (!password === foundUser.password) {
    return next(new HttpError("Wrong password or email", 400));
  }

  let token = await foundUser.generateAuthToken();
  res.status(200).send({
    user: foundUser,
    token,
  });
};
