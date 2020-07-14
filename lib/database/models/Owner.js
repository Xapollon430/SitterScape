"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _email;

var mongoose = require("mongoose");

var jwt = require("jsonwebtoken");

var ownerSchema = mongoose.Schema({
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
  animals: [{
    kind: String,
    weight: String
  }],
  picture: String
});

ownerSchema.methods.generateAuthToken = function () {
  var token = jwt.sign({
    _id: this._id.toString()
  }, process.env.JWT_SECRET, {
    expiresIn: "10000"
  });
  return token;
};

var Owner = mongoose.model("Owner", ownerSchema);
module.exports = Owner;