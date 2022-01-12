const fetch = require("node-fetch");

const filterableData = ["smokes", "hasChildren", "hasYard", "price"];
const boundNames = [
  "nwLatitude",
  "nwLongitude",
  "neLatitude",
  "neLongitude",
  "swLatitude",
  "swLongitude",
  "seLatitude",
  "seLongitude",
];

// Given address (zip or specific address) transform into latitude and longitude only in US
// through the Google Maps Api.
const getLatAndLangGoogleApi = async (address) => {
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?key=${process.env.GOOGLE_GEOCODING_API_KEY}&address=${address}`
  );
  const { results } = await response.json();

  return {
    latitude: results[0].geometry.location.lat,
    longitude: results[0].geometry.location.lng,
  };
};

// Given address (zip or specific address) transform into latitude and longitude only in US
// through the PositionStack Api.
const getLatAndLangPositionStackApi = async (address) => {
  let latitude;
  let longitude;

  const response = await fetch(
    `http://api.positionstack.com/v1/forward?access_key=${process.env.POSITIONSTACK_API_KEY}&query=${address}`
  );
  const { data } = await response.json();

  for (let i in data) {
    if (data[i].country === "United States") {
      latitude = data[i].latitude;
      longitude = data[i].longitude;
    }
  }

  return {
    latitude,
    longitude,
  };
};

// Helper function to transform url query data into searchable forms.
// ie splitting price string into array and transforming string boolean into real boolean.
// Also swap serviceType key with the actual service name
const normalizeSitterFilterData = (filterData) => {
  const newFilterData = {};

  Object.keys(filterData).map((key) => {
    if (filterableData.includes(key)) {
      return (newFilterData[key] =
        key == "price"
          ? filterData[key].split(",")
          : filterData[key] === "true"
          ? true
          : false);
    }
    //dont include the bounds
    if (boundNames.includes(key)) return;

    newFilterData[key] = filterData[key];
  });

  newFilterData[`${newFilterData["serviceType"]}Rate`] = {
    $gte: newFilterData.price[0],
    $lte: newFilterData.price[1],
  };

  newFilterData[newFilterData["serviceType"]] = true;

  delete newFilterData.price;
  delete newFilterData.address;
  delete newFilterData.serviceType;

  return newFilterData;
};

//Helper function to find sitters within bounds out of all sitters.
const filterSitterByLocation = (allSitters, locations) =>
  allSitters.filter((sitter) => {
    if (
      locations.nwLongitude < sitter.geocode.longitude &&
      locations.seLongitude > sitter.geocode.longitude &&
      locations.neLatitude > sitter.geocode.latitude &&
      locations.swLatitude < sitter.geocode.latitude
    ) {
      return sitter;
    }
  });

module.exports = {
  getLatAndLangGoogleApi,
  normalizeSitterFilterData,
  getLatAndLangPositionStackApi,
  filterSitterByLocation,
};
