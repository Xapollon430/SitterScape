const fetch = require("node-fetch");

const filterableData = ["smokes", "hasChildren", "hasYard", "price"];

// Given address (zip or specific address) transform into latitude and longitude.
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

const getLatAndLangPositionStackApi = async (address) => {
  const response = await fetch(
    `http://api.positionstack.com/v1/forward?access_key=${process.env.OPENSTACK_API_KEY}&query=${address}`
  );
  const { data } = await response.json();

  return {
    latitude: data[0].latitude,
    longitude: data[0].longitude,
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
    newFilterData[key] = filterData[key];
  });

  newFilterData[`${newFilterData["serviceType"]}Rate`] = {
    $gte: newFilterData.price[0],
    $lte: newFilterData.price[1],
  };

  newFilterData[newFilterData["serviceType"]] = true;

  delete newFilterData.price;
  delete newFilterData.location;
  delete newFilterData.serviceType;
  delete newFilterData.zoomLevel;

  return newFilterData;
};

const filterSitterByLocation = () => {};

module.exports = {
  getLatAndLangGoogleApi,
  normalizeSitterFilterData,
  getLatAndLangPositionStackApi,
};
