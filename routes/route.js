const express = require("express");
const router = express.Router();
const Controller = require("../controllers/controller");
const HttpError = require("../error/HttpError");

router.post("/sign-up", Controller.signUp);

router.post("/login", Controller.login);

router.use((req, res) => {
  return res.json({ error: "Route doesnt exist" });
});

module.exports = router;
