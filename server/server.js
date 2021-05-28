const express = require("express");
const cors = require("cors");
const path = require("path");
const Routes = require("./routes/route");
const connectDB = require("./database/db");
const schema = require("./graphql/schema");
const root = require("./graphql/resolver");
const cookieParser = require("cookie-parser");
const serverless = require("serverless-http");
const { graphqlHTTP } = require("express-graphql");
const { config } = require("dotenv");

// config();
// connectDB();

const PORT = 5000;
const app = express();
// app.use(
//   cors({
//     origin: ["http://localhost:3000", "https://sitterscape.com"], // send and receive tokens
//     credentials: true,
//   })
// );

// app.use(express.json());
// app.use(cookieParser());

// app.use(
//   "/graphql",
//   graphqlHTTP({
//     schema,
//     rootValue: root,
//     graphiql: true,
//   })
// );

// app.use("/api", Routes);

app.use(express.static(path.resolve(__dirname, "../fake/build")));

// app.get("*", function (req, res) {
//   res.sendFile(path.join(__dirname, "../client/build", "index.html"));
// });

app.listen(PORT, () => {
  console.log("Listening");
});

module.exports.handler = serverless(app);
