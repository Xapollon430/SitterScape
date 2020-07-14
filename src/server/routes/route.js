const express = require("express");
const { login, signUp } = require("../controllers/controller");
const HttpError = require("../error/HttpError");

const router = express.Router();
router.post("/sign-up", signUp);

router.post("/login", login);

router.use((req, res, next) => {
  req.error = new HttpError("Route doesnt exist", "400");
  return next();
});

router.use(async (req, res, next) => {
  return res.status(req.error.errorCode).json({ error: req.error.message });
});

module.exports = router;
