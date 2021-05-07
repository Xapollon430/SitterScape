import AWS from "aws-sdk";

const ID = process.env.AWS_S3_ID;
const SECRET = process.env.AWS_S3_SECRET;
const BUCKET_NAME = "sitterscape";

const s3 = new AWS.S3({
  accessKeyId: ID,
  secretAccessKey: SECRET,
});

export default (file) => {
  const base64data = Buffer.from(file.buffer);

  const params = {
    Bucket: BUCKET_NAME,
    Key: "boi.jpg", // File name you want to save as in S3
    Body: base64data,
  };
  s3.upload(params, function (err, data) {
    if (err) {
      throw err;
    }
    console.log(`File uploaded successfully. ${data.Location}`);
  });
};
