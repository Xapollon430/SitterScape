export const getUserLocation = (
  possibleUserCoords = {},
  setMapCenterCallBack
) => {
  //check if the browser supports geolocation
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setMapCenterCallBack(
          position.coords.latitude,
          position.coords.longitude
        );
      },
      //when the user declines sharing location
      () => {
        //check if the users profile has an address
        if (possibleUserCoords?.latitude && possibleUserCoords?.longitude) {
          setMapCenterCallBack(
            possibleUserCoords.latitude,
            possibleUserCoords.longitude
          );
        } else {
          console.log("please allow location services in your browser");
        }
      }
    );
    //if navigator is not supported
  } else if (possibleUserCoords?.latitude && possibleUserCoords?.longitude) {
    setMapCenterCallBack(
      possibleUserCoords.latitude,
      possibleUserCoords.longitude
    );
  }
};
