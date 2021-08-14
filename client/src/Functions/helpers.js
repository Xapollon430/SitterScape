export const getUserLocation = (state) => {
  let userLocation = localStorage.getItem("userLocation");

  //return if it already exists in localStorage
  if (userLocation) return;

  const setLocalStorageWithLocation = (latitude, longitude) =>
    localStorage.setItem(
      "userLocation",
      JSON.stringify({
        latitude,
        longitude,
      })
    );

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
  } else if (state?.geocode?.latitude && state?.geocode?.longitude) {
    setLocalStorageWithLocation(
      state.geocode.latitude,
      state.geocode.longitude
    );
  }
};
