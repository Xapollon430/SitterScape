const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const ownerSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },

  email: {
    type: String,
    required: true,
    trim: true,

    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 6,
  },
  animals: [{ kind: String, weight: String }],
  picture: String,
});

ownerSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id.toString() }, process.env.JWT_SECRET, {
    expiresIn: "10000",
  });
  return token;
};

let Owner = mongoose.model("Owner", ownerSchema);

module.exports = {
  Owner,
};
