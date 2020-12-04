"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _email;

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
  email: (_email = {
    type: String,
    required: true,
    trim: true
  }, (0, _defineProperty2["default"])(_email, "trim", true), (0, _defineProperty2["default"])(_email, "lowercase", true), _email),
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
  // phoneNumber: String,
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
    weight: String
  }]
});

userSchema.methods.generateAuthToken = function () {
  var token = _jsonwebtoken["default"].sign({
    id: this._id.toString()
  }, process.env.JWT_SECRET, {
    expiresIn: "10000"
  });

  return token;
};

var User = _mongoose["default"].model("User", userSchema);

var _default = User;
exports["default"] = _default;