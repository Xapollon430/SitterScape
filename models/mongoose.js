const mongoose = require("mongoose");
const Validator = require("validator");
const jwt = require("jsonwebtoken");

require("dotenv").config();

mongoose.connect(process.env.MONGO_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const userSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
		trim: true,
	},

	email: {
		type: String,
		required: true,
		trim: true,
		validate(email) {
			if (!Validator.isEmail(email)) {
				throw new Error("Please enter a valid email");
			}
		},
		trim: true,
		lowercase: true,
	},
	password: {
		type: String,
		required: true,
		trim: true,
		minlength: 6,
	},
	// type: {
	// 	type: String,
	// 	required: true,
	// },
	tokens: [
		{
			token: {
				type: String,
				// required: true,
			},
		},
	],
});

userSchema.methods.generateAuthToken = async function () {
	const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET);

	user.tokens = this.tokens.concat({ token });
	await this.save();

	return token;
};

let User = mongoose.model("User", userSchema);

module.exports = {
	User,
};
