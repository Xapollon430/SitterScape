const express = require("express");
const router = express.Router();
const Controller = require("../controllers/controller");
const HttpError = require("../error/HttpError");

router.post("/sign-up", Controller.signUp);

router.post("/login", Controller.login);

router.get("/test", async (req, res, next) => {
  try {
    user = await User.findById(req.userData.userId);
  } catch (e) {
    let error = new HttpError("test", 400);
    res.error = error;
    return next();
  }
});

module.exports = router;
