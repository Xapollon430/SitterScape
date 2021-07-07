const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  surname: {
    type: String,
    required: true,
    trim: true,
  },

  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 6,
  },

  address: String,
  city: String,
  state: String,
  zip: String,
  geocode: {
    latitude: Number,
    longitude: Number,
  },
  boarding: Boolean,
  boardingRate: Number,
  walking: Boolean,
  walkingRate: Number,
  houseSitting: Boolean,
  houseSittingRate: Number,
  dropInVisit: Boolean,
  dropInVisitRate: Number,
  rating: Number,
  hasChildren: mongoose.Schema.Types.Mixed,
  // profileComments,
  profilePicture: String,
  profilePictureName: String,
  isActiveSitter: { type: Boolean, default: false },
  homeType: String,
  smokes: mongoose.Schema.Types.Mixed,
  petPreferencesSmall: Boolean,
  petPreferencesMedium: Boolean,
  petPreferencesLarge: Boolean,
  petPreferencesGiant: Boolean,
  aboutMe: String,
  headline: String,
  yearsOfExperience: Number,
  hasYard: mongoose.Schema.Types.Mixed,
});

const twentyMinutesInMiliseconds = 1200000;

userSchema.methods.generateTokens = function () {
  const accessToken = jwt.sign({ id: this.id }, process.env.JWT_SECRET, {
    expiresIn: twentyMinutesInMiliseconds,
  });

  const refreshToken = jwt.sign({ id: this.id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  return { accessToken, refreshToken };
};

userSchema.methods.generateAccessToken = function () {
  const accessToken = jwt.sign({ id: this.id }, process.env.JWT_SECRET, {
    expiresIn: twentyMinutesInMiliseconds,
  });

  return accessToken;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
