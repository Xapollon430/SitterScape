"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var Crypto = _interopRequireWildcard(require("crypto-js"));

var _dotenv = require("dotenv");

(0, _dotenv.config)();

var userSchema = _mongoose["default"].Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  surname: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 6
  },
  adress: {
    street: String,
    city: String,
    zip: Number,
    location: {
      latitude: String,
      longitude: String
    }
  },
  rate: Number,
  rating: Number,
  // profileComments,
  picture: String,
  isActiveSitter: {
    type: Boolean,
    "default": false
  },
  animals: [{
    kind: String,
    weight: Number
  }]
});

var twentyMinutesInMiliseconds = 1200000;

userSchema.methods.generateTokens = function () {
  var accessToken = _jsonwebtoken["default"].sign({
    id: this.id
  }, process.env.JWT_SECRET, {
    expiresIn: twentyMinutesInMiliseconds
  });

  var refreshToken = _jsonwebtoken["default"].sign({
    id: this.id
  }, process.env.JWT_SECRET, {
    expiresIn: "30d"
  });

  return {
    accessToken: accessToken,
    refreshToken: refreshToken
  };
};

userSchema.methods.generateAccessToken = function () {
  var accessToken = _jsonwebtoken["default"].sign({
    id: this.id
  }, process.env.JWT_SECRET, {
    expiresIn: twentyMinutesInMiliseconds
  });

  return accessToken;
};

var User = _mongoose["default"].model("User", userSchema);

var _default = User;
exports["default"] = _default;