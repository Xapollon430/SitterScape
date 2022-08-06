const AWS = require("aws-sdk");

const ID = process.env.AWS_S3_ID;
const SECRET = process.env.AWS_S3_SECRET;
const BUCKET_NAME = "sitterscape";

const s3 = new AWS.S3({
  accessKeyId: ID,
  secretAccessKey: SECRET,
});

const uploadProfilePicture = (file, user) => {
  const keyName = `${user.id}.${file.originalname}`;

  const params = {
    Bucket: BUCKET_NAME,
    Key: keyName,
    Body: Buffer.from(file.buffer),
  };

  if (user.profilePicture) {
    // If profile picture already exists.
    deleteProfilePicture(user.profilePictureName);
  }

  s3.upload(params, function (err, data) {
    if (err) {
      console.log(err);
    }

    user.profilePicture = data.Location;
    user.profilePictureName = keyName;
    user.save();
  });
};

const deleteProfilePicture = (profilePicture) => {
  const params = {
    Bucket: BUCKET_NAME,
    Key: profilePicture, // File name you want to delete from S3
  };

  s3.deleteObject(params, (err, data) => {
    if (err) console.log(err, err.stack);
  });
};

module.exports = { uploadProfilePicture, deleteProfilePicture };
