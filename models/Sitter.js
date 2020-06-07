const mongoose = require("mongoose");
const Validator = require("validator");
const jwt = require("jsonwebtoken");

const sitterSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },

  email: {
    type: String,
    required: true,
    trim: true,
    // validate(email) {
    //   if (!Validator.isEmail(email)) {
    //     throw new Error("Please enter a valid email");
    //   }
    // },
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 6,
  },
  adress: {
    street: String,
    city: String,
    zip: Number,
    location: {
      latitude: String,
      longitude: String,
    },
  },
  phoneNumber: String,
  rate: Number,
  rating: Number,
  // profileComments,
});

sitterSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id.toString() }, process.env.JWT_SECRET, {
    expiresIn: "10000",
  });
  return token;
};

let Sitter = mongoose.model("Sitter", sitterSchema);

module.exports = {
  Sitter,
};
