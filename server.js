const express = require("express");
const app = express();
const Routes = require("./routes/route");

const PORT = process.env.PORT || 5000;
app.use(express.json());

app.use(Routes);

app.listen(PORT, () => {
	console.log("Listening on PORT");
});
