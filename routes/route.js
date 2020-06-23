import express from "express";

import { login, signUp } from "../controllers/controller";
import HttpError from "../error/HttpError";

const router = express.Router();

router.post("/sign-up", signUp);

router.post("/login", login);

router.use((req, res) => {
  return res.json({ error: "Route doesnt exist" });
});

export default router;
