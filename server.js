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

app.use((req, res) => {
  return res.json({ error: res.error.message });
});

app.listen(PORT, () => {
  console.log("Listening");
});
