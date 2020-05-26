const express = require("express");
const router = express.Router();
const Controller = require("../controllers/controller");

router.post("/sign-up", Controller.signUp);
router.post("/login", Controller.login);
router.use((za, req, res) => {
  console.log(za);
});

module.exports = router;
