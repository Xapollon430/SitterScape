import express from "express";
import cors from "cors";
import path from "path";
import Routes from "./routes/route";
import connectDB from "./database/db";
// import ServerSideMarkup from "./html";
require("dotenv").config();
connectDB();

const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(cors());

app.use("/static", express.static(path.resolve(__dirname, "static")));
app.use("/api", Routes);

if (process.env.NODE_ENV === "production") {
  app.use((req, res) => res.send(ServerSideMarkup())); // SSR for prod
}

app.listen(PORT, () => {
  console.log("Listening");
});
