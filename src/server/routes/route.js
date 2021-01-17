import express from "express";
import { login, signUp, autoLogin } from "../controllers/controller";

const router = express.Router();

router.post("/sign-up", signUp);
router.post("/login", login);
router.get("/auto-login", autoLogin);

router.use((req, res, next) => {
  return res.status(400).send("Route doesn't exist!");
});

export default router;
