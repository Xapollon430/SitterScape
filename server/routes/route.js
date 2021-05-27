const express = require("express");
const multer = require("multer");
const auth = require("../auth/auth");
const controllers = require("../controllers/controller");

const upload = multer();

const router = express.Router();

router.post("/sign-up", controllers.signUp);
router.post("/login", controllers.login);

router.get("/auto-login", controllers.autoLogin);
router.get("/log-out", controllers.logOut);

router.patch(
  "/update-personal-info",
  auth,
  upload.single("profilePicture"),
  controllers.updateUpdatePersonalInfo
);

router.use((req, res, next) => {
  return res.status(400).send("Route doesn't exist!");
});

module.exports = router;
