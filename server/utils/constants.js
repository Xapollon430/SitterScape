const MonthToMiliseconds = 30 * 24 * 60 * 60 * 1000;

const SitterDataToInclude = {
  name: 1,
  surname: 1,
  geocode: 1,
  aboutMe: 1,
  zip: 1,
  state: 1,
  city: 1,
  headline: 1,
  profilePicture: 1,
  boardingRate: 1,
  dropInVisitRate: 1,
  houseSittingRate: 1,
  walkingRate: 1,
};

const Per_X = {
  boarding: "night",
  houseSitting: "night",
  walking: "walk",
  dropInVisit: "visit",
};

module.exports = {
  MonthToMiliseconds,
  SitterDataToInclude,
  Per_X,
};
