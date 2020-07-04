import express from "express";
import cors from "cors";
import Routes from "./routes/route";
import connectDB from "./database/db";
import renderHTML from "./html";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router";
import React from "react";
import App from "../client/App";
import { Provider } from "react-redux";

require("dotenv").config();
connectDB();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cors());
app.use("/static", express.static(path.resolve(__dirname, "static")));
app.use("/dist", express.static(path.resolve(__dirname, "dist")));

app.get("/", (req, res, next) => {
  const markup = ReactDOMServer.renderToString(
    <StaticRouter>
      <App />
    </StaticRouter>
  );
  return res.send(renderHTML(markup));
});

app.use(Routes);

app.use(async (req, res, next) => {
  return res.status(req.error.errorCode).json({ error: req.error.message });
});

app.listen(PORT, () => {
  console.log("Listening");
});
