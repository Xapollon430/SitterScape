const { getLatAndLangGoogleApi } = require("../utils/helpers");

// Middleware to handle calculating the new lat and lang of user if their address in changed.
const geocodeConverterMiddleware = async (req, res, next) => {
  try {
    const { address, zip, city, state } = req.body;
    const user = req.user;

    if (
      user.address !== address ||
      user.zip !== zip ||
      user.city !== city ||
      user.state !== state
    ) {
      const addressString = `${address} ${zip} ${city} ${state}`;

      user.geocode = await getLatAndLangGoogleApi(addressString);

      await user.save();
    }

    next();
  } catch (e) {
    return res.status(400).send("Server error");
  }
};

module.exports = geocodeConverterMiddleware;
