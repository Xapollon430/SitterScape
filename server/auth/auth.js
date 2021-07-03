const jwt = require("jsonwebtoken");
const User = require("../database/models/User");

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", ""); // splits the Bearer and hash token
    const checkToken = jwt.verify(token, process.env.JWT_SECRET);
    if (!checkToken) {
      throw new Error();
    }
    User.findById(checkToken.id, (err, foundUser) => {
      if (!err) {
        req.user = foundUser;
        next();
      } else {
        throw new Error();
      }
    });
  } catch (e) {
    res.status(401).send({ error: "Authorize" });
  }
};
module.exports = auth;
