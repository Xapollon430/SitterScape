import AWS from "aws-sdk";
import fs from "fs";
import path from "path";

const ID = process.env.AWS_S3_ID;
const SECRET = process.env.AWS_S3_SECRET;
const BUCKET_NAME = "sitterscape";

const s3 = new AWS.S3({
  accessKeyId: ID,
  secretAccessKey: SECRET,
});

const uploadFile = (fileName) => {
  const fileContent = fs.readFileSync(path.join(__dirname, fileName));

  const params = {
    Bucket: BUCKET_NAME,
    Key: "salak12.jpg", // File name you want to save as in S3
    Body: fileContent,
  };

  //   s3.upload(params, function (err, data) {
  //     if (err) {
  //       throw err;
  //     }
  //     console.log(`File uploaded successfully. ${data.Location}`);
  //   });
};

// uploadFile("cat.jpg");
