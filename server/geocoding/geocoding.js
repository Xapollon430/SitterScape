const fetch = require("node-fetch");


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
      const queryString = `${address} ${zip} ${city} ${state}`;

      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?key=${process.env.GOOGLE_GEOCODING_API_KEY}&address=${queryString}`
      );
      const { results } = await response.json();

      user.geocode = {
        latitude: results[0].geometry.location.lat,
        longitude: results[0].geometry.location.lng,
      };

      await user.save();
    }

    next();
  } catch (e) {
    return res.status(400).send("Server error");
  }
};

module.exports = geocodeConverterMiddleware;
