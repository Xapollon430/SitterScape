import express from "express";
import * as controllers from "../controllers/controller";

const router = express.Router();

router.post("/sign-up", controllers.signUp);
router.post("/login", controllers.login);
router.get("/auto-login", controllers.autoLogin);
router.get("/log-out", controllers.logOut);

router.use((req, res, next) => {
  return res.status(400).send("Route doesn't exist!");
});

export default router;
