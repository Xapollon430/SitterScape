const User = require("../database/models/User");
const jwt = require("jsonwebtoken");
const uploadProfilePicture = require("../aws-s3-upload/uploadProfilePicture");
const {
  normalizeSitterFilterData,
  getLatAndLangGoogleApi,
  filterSitterByLocation,
  cleanUpUserData,
} = require("../utils/helpers");
const { config } = require("dotenv");
const { omit } = require("lodash");

config();

const monthToMiliseconds = 30 * 24 * 60 * 60 * 1000;

const sitterDataToOmit = ["email", "password", "address"];

const signUp = async (req, res) => {
  try {
    const signUpData = req.body;
    const userExists = await User.findOne({ email: signUpData.email });
    if (userExists) return res.status(409).send("Email is already in use!");

    const newUser = new User(signUpData);
    await newUser.save();

    const { refreshToken, accessToken } = newUser.generateTokens();

    res.cookie("refreshToken", refreshToken, {
      maxAge: monthToMiliseconds,
      httpOnly: true,
      // secure: process.env.NODE_ENV === "production" ? true : false,
    });

    const cleanedUpUser = omit(newUser.toObject(), ["password"]);

    res.json({ user: cleanedUpUser, accessToken });
  } catch (e) {
    console.log(e);
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

    const cleanedUpUser = omit(foundUser.toObject(), ["password"]);

    res.status(200).json({
      user: cleanedUpUser,
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

    const cleanedUpUser = omit(user.toObject(), ["password"]);

    res.status(200).json({ accessToken, user: cleanedUpUser });
  } catch (e) {
    return res.status(401).send("Couldn't log in!");
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

    const cleanedUpUser = omit(user.toObject(), ["password"]);

    return res.status(200).send(cleanedUpUser);
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
    console.log(user);

    await user.save();

    return res.status(200).send(omit(user.toObject(), ["password"]));
  } catch (e) {
    console.log(e);
    return res.status(400).send("Couldn't update user!");
  }
};

// Given filter data through URL Query, we will first find sitters
// by querying the database without the location, we will use location to filter
// afterwards with 200 iq math.
const searchSitters = async (req, res) => {
  try {
    const {
      address,
      nwLatitude,
      nwLongitude,
      neLatitude,
      neLongitude,
      swLatitude,
      swLongitude,
      seLatitude,
      seLongitude,
    } = req.query;
    const sitterFilterDataToQuery = normalizeSitterFilterData(req.query);

    sittersFoundWithoutLocation = await User.find(sitterFilterDataToQuery);

    sittersFoundWithLocation = filterSitterByLocation(
      sittersFoundWithoutLocation,
      {
        address,
        nwLatitude,
        nwLongitude,
        neLatitude,
        neLongitude,
        swLatitude,
        swLongitude,
        seLatitude,
        seLongitude,
      }
    );

    const cleanedUpSitters = sittersFoundWithLocation.map((sitter) => {
      return omit(sitter.toObject(), sitterDataToOmit);
    });

    res.json(cleanedUpSitters);
  } catch (e) {
    console.log(e);
    return res.status(400).send("Couldn't search sitters");
  }
};

//Function to handle filterModalContent address lookups
const forwardGeocoding = async (req, res) => {
  try {
    const address = req.query.address;
    const geocode = await getLatAndLangGoogleApi(address);
    res.json(geocode);
  } catch (e) {
    console.log(e);
    return res.status(400).send("Couldn't search sitters");
  }
};

module.exports = {
  signUp,
  logOut,
  login,
  autoLogin,
  updatePersonalInfo,
  updateSitterInfo,
  searchSitters,
  forwardGeocoding,
};
