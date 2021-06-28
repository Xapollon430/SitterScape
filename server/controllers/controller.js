const User = require("../database/models/User");
const jwt = require("jsonwebtoken");
const uploadProfilePicture = require("../aws-s3-upload/uploadProfilePicture");
const { config } = require("dotenv");

config();

const monthToMiliseconds = 30 * 24 * 60 * 60 * 1000;

const signUp = async (req, res) => {
  try {
    const signUpData = req.body;
    let userExists = await User.findOne({ email: signUpData.email });
    if (userExists) return res.status(409).send("Email is already in use!");

    let newUser = new User(signUpData);
    await newUser.save();

    let { refreshToken, accessToken } = newUser.generateTokens();

    res.cookie("refreshToken", refreshToken, {
      maxAge: monthToMiliseconds,
      httpOnly: true,
      // secure: process.env.NODE_ENV === "production" ? true : false,
    });

    res.json({ user: newUser, accessToken });
  } catch (e) {
    return res.status(500).send("Something went wrong");
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    let foundUser = await User.findOne({ email });
    if (!foundUser || password !== foundUser.password) {
      return res.status(401).send("Wrong password or email!");
    }
    let { refreshToken, accessToken } = foundUser.generateTokens();
    res.cookie("refreshToken", refreshToken, {
      maxAge: monthToMiliseconds,
      httpOnly: true,
      // secure: process.env.NODE_ENV === "production" ? true : false,
    });

    res.status(200).json({
      user: foundUser,
      accessToken,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).send("Something went wrong!");
  }
};

const autoLogin = async (req, res) => {
  try {
    const { refreshToken } = req.cookies;
    const token = jwt.verify(refreshToken, process.env.JWT_SECRET);
    const user = await User.findById(token.id);
    const accessToken = user.generateAccessToken();
    res.status(200).json({ accessToken, user });
  } catch (e) {
    return res.status(400).send("Couldn't log in!");
  }
};

const logOut = async (req, res) => {
  try {
    res.clearCookie("refreshToken");
    res.status(200).json("Succesfully logged out!");
  } catch (e) {
    return res.status(400).send("Couldn't log out!");
  }
};

const updatePersonalInfo = async (req, res) => {
  try {
    const values = req.body;
    const user = req.user;
    const file = req.file;

    if (file) {
      uploadProfilePicture(file, user);
    }

    for (const data in values) {
      user[data] = values[data];
    }

    await user.save();

    return res.status(200).send(user);
  } catch (e) {
    return res.status(400).send("Couldn't update user!");
  }
};

const updateSitterInfo = async (req, res) => {
  try {
    const values = req.body;
    const user = req.user;
    const file = req.file;

    if (file) {
      uploadProfilePicture(file, user);
    }

    for (const data in values) {
      user[data] = values[data];
    }

    await user.save();

    return res.status(200).send(user);
  } catch (e) {
    console.log(e);
    return res.status(400).send("Couldn't update user!");
  }
};

module.exports = {
  signUp,
  logOut,
  login,
  autoLogin,
  updatePersonalInfo,
  updateSitterInfo,
};
