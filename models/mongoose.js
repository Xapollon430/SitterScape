const mongoose = require("mongoose");
const Validator = require("validator");

mongoose.connect("mongodb+srv://Xapollon430:Anakonda11+@cluster0-8aiat.mongodb.net/Users?retryWrites=true&w=majority", {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

const userSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
		trim: true
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
		lowercase: true
	},
	password: {
		type: String,
		required: true,
		trim: true,
		minlength: 6
	},
	type: {
		type: String,
		required: true
	},
	tokens: [
		{
			token: {
				type: String,
				required: true
			}
		}
	]
});

let User = mongoose.model("User", userSchema);

module.exports = {
	User
};
