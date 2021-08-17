export const setLocalStorageWithLocation = (latitude, longitude) => {
  if (!localStorage.getItem("userLocation") && latitude && longitude) {
    return localStorage.setItem(
      "userLocation",
      JSON.stringify({
        latitude,
        longitude,
      })
    );
  }
};

export const getUserLocation = (state = {}) => {
  let userLocation = localStorage.getItem("userLocation");

  //return if it already exists in localStorage
  if (userLocation) return;

  //check if the browser supports geolocation
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocalStorageWithLocation(
          position.coords.latitude,
          position.coords.longitude
        );
      },
      //when the user declines sharing location
      () => {
        //check if the users profile has an address
        console.log(state.geocode);
        if (state?.geocode?.latitude && state?.geocode?.longitude) {
          setLocalStorageWithLocation(
            state.geocode.latitude,
            state.geocode.longitude
          );
        } else {
          console.log("please allow location services in your browser");
        }
      }
    );
    //if navigator is not supported
  } else if (state?.geocode?.latitude && state?.geocode?.longitude) {
    setLocalStorageWithLocation(
      state.geocode.latitude,
      state.geocode.longitude
    );
  }
};
