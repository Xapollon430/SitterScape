const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const Routes = require("./routes/route");
const mongoose = require("mongoose");
const ConnectDB = require("./database/db.js");
const connectDB = require("./database/db");
const ReactDOMServer = require("react-dom/server");
const App = require("./static/App");
let React = require("react");

require("dotenv").config();
connectDB();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static("/static"));

app.get("/", (req, res, next) => {
  fs.readFile(path.resolve("./static/index.html"), "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send("An error occurred");
    }
    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${ReactDOMServer.renderToString(
          React.createElement(App)
        )}</div>`
      )
    );
  });
});

// app.use(Routes);

// app.use(async (req, res, next) => {
//   return res.status(req.error.code).json({ error: req.error.message });
// });

app.listen(PORT, () => {
  console.log("Listening");
});
