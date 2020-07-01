import express from "express";
import fs from "fs";
import path from "path";
import cors from "cors";
import Routes from "./routes/route";
import connectDB from "./database/db";
import ReactDOMServer from "react-dom/server";
import React from "react";
import styled from "styled-components";
// import App from "../Frontend/src/App";

require("dotenv").config();
connectDB();

const PORT = process.env.PORT || 5000;
const app = express();

const X = styled.div`
  color: red;
`;

const App = () => <X>123</X>;

app.use(express.json());
app.use(cors());
app.use("static", express.static(path.resolve(__dirname, "static")));

app.get("/", (req, res, next) => {
  fs.readFile(
    path.join(__dirname, "/static/index.html"),
    "utf8",
    (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).send("An error occurred");
      }
      const markup = ReactDOMServer.renderToString(<App />);
      return res.send(
        data.replace('<div id="root"></div>', `<div id="root" >${markup}</div>`)
      );
    }
  );
});

app.use(Routes);

app.use(async (req, res, next) => {
  return res.status(req.error.errorCode).json({ error: req.error.message });
});

app.listen(PORT, () => {
  console.log("Listening");
});
