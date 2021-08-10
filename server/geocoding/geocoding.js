const fetch = require("node-fetch");

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
        `https://maps.googleapis.com/maps/api/geocode/json&key=${process.env.GOOGLE_GEOCODING_API_KEY}&address=${queryString}`
      );
      const { data } = await response.json();

      user.geocode = {
        latitude: data[0].latitude,
        longitude: data[0].longitude,
      };

      await user.save();
    }

    next();
  } catch (e) {
    return res.status(400).send("Server error");
  }
};

module.exports = geocodeConverterMiddleware;
