import express from "express";
import { login, signUp } from "../controllers/controller";
import HttpError from "../error/HttpError";

const router = express.Router();

router.post("/sign-up", signUp);
router.post("/login", login);

// router.use((req, res, next) => {
//   req.error = req.error || new HttpError("Route doesnt exist", "400");
//   return next();
// });

router.use((error, req, res, next) => {
  console.log(123);
  // Error handler route
  return res.status(error.code).json({ message: error.message });
});

export default router;
