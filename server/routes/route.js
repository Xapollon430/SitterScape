const express = require("express");
const multer = require("multer");
const auth = require("../auth/auth");
const geocodeConverterMiddleware = require("../geocoding/geocoding");
const controllers = require("../controllers/controller");

const upload = multer();

const router = express.Router();

router.post("/sign-up", controllers.signUp);
router.post("/login", controllers.login);

router.get("/auto-login", controllers.autoLogin);
router.get("/log-out", controllers.logOut);
router.get("/sitters", controllers.searchSitters);
router.get("/forward-geocode", controllers.forwardGeocoding);
router.get("/sitter/:id", controllers.getSitter);

router.patch(
  "/update-personal-info",
  auth,
  upload.single("profilePicture"),
  geocodeConverterMiddleware,
  controllers.updatePersonalInfo
);

router.patch(
  "/update-sitter-info",
  auth,
  upload.single("profilePicture"),
  geocodeConverterMiddleware,
  controllers.updateSitterInfo
);

router.use((_, res) => {
  return res.status(400).send("Route doesn't exist!");
});

module.exports = router;
