import jwt from "jsonwebtoken";
import User from "../database/models/User";

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", ""); // splits the Bearer and hash token
    const checkToken = jwt.verify(token, process.env.JWT_SECRET);
    if (!checkToken) {
      throw new Error();
    }
    req.user = User.findById(checkToken.id);
    console.log(req.user);
    next();
  } catch (e) {
    res.status(401).send({ error: "Authorize" });
  }
};
export default auth;
