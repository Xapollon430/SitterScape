import { config } from "dotenv";
import express from "express";
import cors from "cors";
import path from "path";
import Routes from "./routes/route";
import ServerSideMarkup from "./html";
import "./database/db";

config(); // fix

const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(cors());

app.use("/static", express.static(path.resolve(__dirname, "static")));
app.use("/api", Routes);

// PROD ROUTE FOR SSR
if (process.env.NODE_ENV === "production") {
  app.get("/", (_, res) => res.send(ServerSideMarkup()));
}

app.listen(PORT, () => {
  console.log("Listening");
});
