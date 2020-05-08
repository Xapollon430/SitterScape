const { User } = require("../models/mongoose");
require("dotenv").config();

const signUp = async (req, res) => {
	const userData = req.body;
	let user;
	let token;
	try {
		user = new User(userData);
		token = user.generateAuthToken();
		await user.save();
	} catch (e) {
		console.log(e.message);
		return res.status(400).send({ error: "Failed signing up." });
	}
	res.send({ user, token });
};

const login = async (req, res) => {
	const { username, password } = req.body;
	let foundUser = await User.findOne({ username }, { username: "1" });
	if (!foundUser) {
		return res.status(400).send({ error: "Wrong password or username" });
	}

	let isValidPassword = password === foundUser.password;

	if (!isValidPassword) {
		return res.status(400).send({ error: "Wrong password or username" });
	}

	let token = await foundUser.generateAuthToken();
	res.status(200).send({ foundUser, token });
};

module.exports = {
	signUp,
	login,
};
