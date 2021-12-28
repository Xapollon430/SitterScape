import { Fragment, useEffect, useContext, useState } from "react";
import { StoreContext } from "../../store/store";
import * as S from "./SearchSitter.styles";
import * as actions from "../../store/actions";
import GoogleMap from "google-map-react";
import SearchSitterHeader from "./Header/SearchSitterHeader";
import Modal from "../Modal/Modal";
import FilterModalContent, { FilterSitterSchema } from "./FilterModalContents";
import TuneIcon from "@material-ui/icons/Tune";
import MapIcon from "@material-ui/icons/Map";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import fakeData from "./fakedata";

const DEFAULT_CENTER = {
  lat: 38.8082415,
  lng: -77.662807,
};

const DEFAULT_ZOOM = 13;

const SearchSitter = () => {
  const findSitter = async (filterData) => {
    let filterQuery = "";
    for (let key in filterData) {
      if (filterData[key] !== "") {
        filterQuery += `${key}=${filterData[key]}&`;
      }
    }

    const requestedMapCenter = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/api/forward-geocode?address=${filterData.address}`
    );

    const requestedMapCenterResponse = await requestedMapCenter.json();

    setMapCenter({
      lat: requestedMapCenterResponse.latitude,
      lng: requestedMapCenterResponse.longitude,
    });

    const filteredSitters = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/api/sitters?${filterQuery}`
    );

    const filteredSittersResponse = await filteredSitters.json();
  };

  //Map related states
  const [showFilterModal, setShowFilterModal] = useState(true);
  const [showMap, setShowMap] = useState(false);
  const [mapCenter, setMapCenter] = useState(DEFAULT_CENTER);

  // Sitter/User related states
  const [state, _] = useContext(StoreContext);
  const [sitters, setSitters] = useState([]);
  const filterData = FilterSitterSchema(findSitter);
  const { values, errors, setFieldValue, handleSubmit } = filterData;

  const toggleFilterModal = () => setShowFilterModal(!showFilterModal);
  const toggleMap = () => setShowMap(!showMap);

  //First find the new map center by doing a "pre-flight" request with user
  // entered address filter. Then we can get our new bounds for the server
  // to filter.

  return (
    <Fragment>
      <SearchSitterHeader toggleFilterModal={toggleFilterModal} />
      <S.ContentWrap>
        <S.ProfilesWrap showMap={showMap}>
          {fakeData.map((profile, key) => {
            return (
              <S.Profile key={key}>
                <S.ProfileImage src={profile.profilePicture} />
                <S.ProfileDetails>
                  <S.ProfileName>
                    <S.ProfileNumber>{key}.</S.ProfileNumber> {profile.name}
                  </S.ProfileName>
                  <S.ProfileHeadline>{profile.headline}</S.ProfileHeadline>
                  <S.ProfileAddress>
                    {profile.city + ", " + profile.state + ", " + profile.zip}
                  </S.ProfileAddress>
                  <S.ProfileComment>"{profile.fakeComment}"</S.ProfileComment>
                </S.ProfileDetails>
                <S.ProfilePrice>
                  <S.PriceText>from</S.PriceText>
                  <S.Rate> ${profile.boardingRate}</S.Rate>
                  <S.PriceText>per night</S.PriceText>
                </S.ProfilePrice>
              </S.Profile>
            );
          })}
        </S.ProfilesWrap>
        <GoogleMap
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
          center={mapCenter}
          options={{
            maxZoom: 15,
            minZoom: 10,
            styles: [
              {
                featureType: "poi",
                elementType: "labels",
                stylers: [{ visibility: "off" }],
              },
            ],
          }}
          defaultZoom={DEFAULT_ZOOM}
          onChange={({ center, zoom, bounds }) => {
            console.log(center, zoom, bounds);
          }}
        >
          <S.MapLocationSitter lat={38.91256502929134} lng={-77.55473855962623}>
            19
          </S.MapLocationSitter>
        </GoogleMap>
      </S.ContentWrap>

      <S.FilterMapToggleButton>
        <S.MapButton
          variant="contained"
          color="primary"
          startIcon={showMap ? <ArrowBackIcon /> : <MapIcon />}
          onClick={toggleMap}
        >
          {showMap ? "Back" : "Map"}
        </S.MapButton>
        <S.FilterButton
          variant="contained"
          color="primary"
          endIcon={<TuneIcon />}
          onClick={toggleFilterModal}
        >
          Filter
        </S.FilterButton>
      </S.FilterMapToggleButton>

      <Modal onClose={toggleFilterModal} showModal={showFilterModal}>
        <FilterModalContent {...filterData} />
      </Modal>
    </Fragment>
  );
};

export default SearchSitter;
