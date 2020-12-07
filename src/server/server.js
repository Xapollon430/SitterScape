import express from "express";
import cors from "cors";
import path from "path";
import Routes from "./routes/route";
import connectDB from "./database/db";
import ServerSideMarkup from "./html";
import { graphqlHTTP } from "express-graphql";
import schema from "./graphql/schema";
import root from "./graphql/resolver";
import { config } from "dotenv";

config();
connectDB();

const PORT = 5000;
const app = express();
app.use(express.json());
app.use(cors());

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

app.get("/", (_, res) => res.send(ServerSideMarkup()));

app.listen(PORT, () => {
  console.log("Listening");
});
