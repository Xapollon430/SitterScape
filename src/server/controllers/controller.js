import Sitter from "../database/models/Sitter";
import Owner from "../database/models/Owner";
import dotenv from "dotenv";

export const signUp = async (req, res) => {
  const signUpData = req.body;
  let user;
  let token;

  console.log(req.body);
  try {
    const user =
      signUpData.userType === "owner"
        ? new Owner(signUpData)
        : new Sitter(signUpData);

    token = user.generateAuthToken();
    await user.save();
  } catch (e) {
    console.log(e.message);
    return res.status(400).send({ error: "Failed signing up." });
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
