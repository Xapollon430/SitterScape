const express = require("express");
const cors = require("cors");
const Routes = require("./routes/route");
const mongoose = require("mongoose");
require("dotenv").config();

const PORT = process.env.PORT || 5000;
const app = express();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(cors());
app.use(Routes);

app.use((error, req, res) => {
  res.status(error.id).json(error.message);
});

app.listen(PORT, () => {
  console.log("Listening");
});
