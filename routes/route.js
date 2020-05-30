const express = require("express");
const router = express.Router();
const Controller = require("../controllers/controller");

router.post("/sign-up", Controller.signUp);

router.post("/login", Controller.login);

router.use((error, req, res) => {
  res.status(error.id).json(error.message);
});

module.exports = router;
