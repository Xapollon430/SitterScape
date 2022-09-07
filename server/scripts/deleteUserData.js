// Normally MongoDB Atlas is a good place to manage user data
// but not all my user data is there (S3 profile pictures)]
// this script is to remove a user from the DB and that users picture
// depending on the option you can also remove all users.
// Run it from the .env directory as the dotenv needs to see that.
// Invoke it like so:
// node ./scripts/deleteUserData.js [all|{userId}]

const { config } = require("dotenv");
config();
const User = require("../database/models/User.js");
const {
  deleteProfilePicture,
} = require("../aws-s3-upload/uploadProfilePicture");

const mongoose = require("mongoose");

const arg = process.argv[2];

(() => {
  try {
    mongoose.connect(
      process.env.MONGO_URL,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      async () => {
        if (arg === "all") {
          const allUsers = await User.find({});
          allUsers.map((user) => {
            if (user.profilePictureName)
              deleteProfilePicture(user.profilePictureName);
          });

          await User.deleteMany({});
        } else {
          const user = await User.find({ _id: arg });
          if (user?.profilePictureName) {
            deleteProfilePicture(user.profilePictureName);
          }

          await User.deleteOne({ _id: arg });
          process.exit();
        }
      }
    );
  } catch (err) {
    console.error(err);
  }
})();
