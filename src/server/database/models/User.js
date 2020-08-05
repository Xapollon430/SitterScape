import mongoose from "mongoose";
import jwt from "jsonwebtoken";

const userSchema = mongoose.Schema({
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
  // phoneNumber: String,
  rate: Number,
  rating: Number,
  // profileComments,
  picture: String,
  isActiveSitter: { type: Boolean, default: false },
  animals: [{ kind: String, weight: String }],
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ id: this._id.toString() }, process.env.JWT_SECRET, {
    expiresIn: "10000",
  });

  return token;
};

const User = mongoose.model("User", userSchema);

export default User;
