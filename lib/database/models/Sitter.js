"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _email;

var mongoose = require("mongoose");

var jwt = require("jsonwebtoken"); // import Validator from "validator";


var sitterSchema = mongoose.Schema({
  username: {
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
  phoneNumber: String,
  rate: Number,
  rating: Number,
  // profileComments,
  picture: String
});

sitterSchema.methods.generateAuthToken = function () {
  var token = jwt.sign({
    _id: this._id.toString()
  }, process.env.JWT_SECRET, {
    expiresIn: "10000"
  });
  return token;
};

var Sitter = mongoose.model("Sitter", sitterSchema);
module.exports = Sitter;