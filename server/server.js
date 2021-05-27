const express = require("express");
const cors = require("cors");
const path = require("path");
const Routes = require("./routes/route");
const connectDB = require("./database/db");
const schema = require("./graphql/schema");
const root = require("./graphql/resolver");
const cookieParser = require("cookie-parser");
const { graphqlHTTP } = require("express-graphql");
const { config } = require("dotenv");

config();
connectDB();

const PORT = 5000;
const app = express();
app.use(
  cors({
    origin: ["http://localhost:3000", "https://sitterscape.com"], // send and receive tokens
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  })
);
app.use("/static", express.static(path.resolve(__dirname, "static")));
app.use("/api", Routes);

// app.get("/*", (_, res) => res.send(ServerSideMarkup()));

app.listen(PORT, () => {
  console.log("Listening");
});
