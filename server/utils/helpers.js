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

const McDonaldsLocation = {
  latitude: 38.9144124,
  longitude: -77.225595,
};

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

// Helper function to find filtered sitters out of all sitters
const filterSitterByLocation = (allSitters, locations) => {
  // On mobile devices with no maps we filter for the top 10 closest to given
  // address (or McDonalds's in Tysons Corner) within 25 miles
  if (locations.nwLongitude === undefined) {
    center =
      locations.address !== undefined
        ? {
            latitude: locations.address.split(",")[0],
            longitude: locations.address.split(",")[1],
          }
        : McDonaldsLocation;
    // Calculate the addition of absolute values of the lat and langs to find
    // the smallest number, which means closest to the given user address

    console.log(center);
    return allSitters
      .map((sitter) => ({
        sitter,
        absValueLatAndLang:
          Math.abs(center.latitude - sitter.geocode.latitude) +
          Math.abs(center.longitude - sitter.geocode.longitude),
      }))
      .sort(({ absValueLatAndLang: a }, { absValueLatAndLang: b }) => a - b)
      .map((obj) => {
        return obj.sitter;
      });
  }

  // If bounds are present we filter for sitters in bounds
  return allSitters.filter((sitter) => {
    if (
      Number(locations.nwLongitude) < sitter.geocode.longitude &&
      Number(locations.seLongitude) > sitter.geocode.longitude &&
      Number(locations.neLatitude) > sitter.geocode.latitude &&
      Number(locations.swLatitude) < sitter.geocode.latitude
    ) {
      return sitter;
    }
  });
};

module.exports = {
  getLatAndLangGoogleApi,
  normalizeSitterFilterData,
  getLatAndLangPositionStackApi,
  filterSitterByLocation,
};
