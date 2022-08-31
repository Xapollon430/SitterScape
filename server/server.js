const { config } = require("dotenv");
config();
require("./database/db");

const express = require("express");
const cors = require("cors");
const path = require("path");
const Routes = require("./routes/route");
const schema = require("./graphql/schema");
const root = require("./graphql/resolver");
const cookieParser = require("cookie-parser");
const http = require("http");
const { socketEndPoints } = require("./sockets/sockets");
const { graphqlHTTP } = require("express-graphql");
const { Server } = require("socket.io");

const PORT = 8000;
const app = express();

const httpServer = http.createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: ["http://localhost:3000", "https://sitterscape.com"], // since v3, socketio needs its own cors rules
    credentials: true,
  },
});

app.use(
  cors({
    origin: ["http://localhost:3000", "https://sitterscape.com"], // send and receive tokens
    credentials: true,
  })
);

io.on("connection", (socket) => socketEndPoints(io, socket));

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

app.use("/api", Routes);

app.use(express.static(path.resolve(__dirname, "../client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve("../client/build/index.html"));
});

httpServer.listen(PORT, () => {
  console.log("Listening");
});
