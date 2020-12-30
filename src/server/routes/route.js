import express from "express";
import { login, signUp, autoLogin } from "../controllers/controller";
import HttpError from "../error/HttpError";

const router = express.Router();

router.post("/sign-up", signUp);
router.post("/login", login);
router.post("/auto-login", autoLogin);

router.use((req, res, next) => {
  return next(new HttpError("Route doesnt exist", 400));
});

router.use((error, req, res, next) => {
  // Error handler route
  return res.status(error.code).send(error.message);
});

export default router;
