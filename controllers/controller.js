const { User } = require("../models/mongoose");

const signUp = async (req, res) => {
	const userData = req.body;
	let user;
	try {
		user = new User(userData);
		await user.save();
	} catch (e) {
		res.status(400).send({ error: e.message });
	}

	res.send(user);
};

const login = async (req, res) => {
	const { name, password } = req.body;
	let foundUser = await User.findOne({ name });
	if (!foundUser) {
		res.status(400).send({ error: "Wrong password or username" });
		return;
	}

	let isValidPassword = password === foundUser.password;

	if (!isValidPassword) {
		res.status(400).send({ error: "Wrong password or username" });
		return;
	}

	res.status(200).send({ foundUser });
};

module.exports = {
	signUp,
	login,
};
