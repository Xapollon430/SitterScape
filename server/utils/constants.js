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
  petPreferencesSmall: 1,
  petPreferencesMedium: 1,
  petPreferencesLarge: 1,
  petPreferencesGiant: 1,
  smokes: 1,
  hasYard: 1,
  hasChildren: 1,
  homeType: 1,
  yearsOfExperience: 1,
};

const SitterDataToIncludeMap = {
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
  SitterDataToIncludeMap,
  Per_X,
};
