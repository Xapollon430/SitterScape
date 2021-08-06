import { Fragment, useEffect, useRef, useContext, useState } from "react";
import { StoreContext } from "../../store/store";
import * as S from "./SearchSitter.styles";
import * as actions from "../../store/actions";
// import L from "leaflet";
import GoogleMap from "google-map-react";
import SearchSitterHeader from "./Header/SearchSitterHeader";
import Modal from "../Modal/Modal";
import FilterModalContent from "./FilterModalContents";

import TuneIcon from "@material-ui/icons/Tune";
import MapIcon from "@material-ui/icons/Map";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import fakeData from "./fakedata";

const SearchSitter = () => {
  const mapRef = useRef();
  const [showFilter, setShowFilter] = useState(false);
  const [showMoreFilter, setShowMoreFilter] = useState(false);
  const [showMap, setShowMap] = useState(false);

  const toggleFilterModal = () => setShowFilter(!showFilter);

  const toggleShowMoreFilter = () => setShowMoreFilter(!showMoreFilter);

  const toggleMap = () => setShowMap(!showMap);

  useEffect(() => {
    // const leafletMap = L.map(mapRef.current).setView([51.505, -0.09], 13);
    // L.tileLayer(
    //   "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
    // ).addTo(leafletMap);
    // leafletMap.invalidateSize();
    // return () => leafletMap.remove();
  }, [showMap]);

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
          bootstrapURLKeys={{ key: "AIzaSyCv-hUZEazimO2vdGgBoyHq_jF8wJa5wyg" }}
          defaultCenter={{
            lat: 59.95,
            lng: 30.33,
          }}
          defaultZoom={11}
        >
          <span lat={59.95} lng={30.33}>
            123
          </span>
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

      <Modal onClose={toggleFilterModal} showModal={showFilter}>
        <FilterModalContent
          toggleShowMoreFilter={toggleShowMoreFilter}
          showMoreFilter={showMoreFilter}
        />
      </Modal>
    </Fragment>
  );
};

export default SearchSitter;
