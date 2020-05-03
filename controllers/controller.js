const { User } = require("../models/mongoose");
require("dotenv").config();

const signUp = async (req, res) => {
	const userData = req.body;
	console.log(req.body);
	let user;
	let token;
	try {
		user = new User(userData);
		token = await user.generateAuthToken();
	} catch (e) {
		return res.status(400).send({ error: e.message });
	}
	res.send({ user, token });
};

const login = async (req, res) => {
	const { name, password } = req.body;
	let foundUser = await User.findOne({ name });
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
