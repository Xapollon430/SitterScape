const express = require("express");
const cors = require("cors");
const Routes = require("./routes/route");
const mongoose = require("mongoose");
const ConnectDB = require("./database/db.js");
const connectDB = require("./database/models/db");

require("dotenv").config();
connectDB();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cors());
app.use(Routes);

app.use(async (req, res, next) => {
  return res.status(req.error.code).json({ error: req.error.message });
});

app.listen(PORT, () => {
  console.log("Listening");
});
