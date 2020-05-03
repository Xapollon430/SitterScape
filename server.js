const express = require("express");
const cors = require("cors");
const app = express();
const Route = require("./routes/route");

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(Route);
// app.use(express.static("static"));

app.listen(PORT, () => {
	console.log("Listening");
});
