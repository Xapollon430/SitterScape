import { Fragment, useEffect, useContext, useState } from "react";
import { StoreContext } from "../../store/store";
import { useFormik } from "formik";
import * as S from "./SearchSitter.styles";
import * as actions from "../../store/actions";
import GoogleMap from "google-map-react";
import SearchSitterHeader from "./Header/SearchSitterHeader";
import Modal from "../Modal/Modal";
import FilterModalContent from "./FilterModalContents";
import TuneIcon from "@material-ui/icons/Tune";
import MapIcon from "@material-ui/icons/Map";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import fakeData from "./fakedata";

const DEFAULT_CENTER = {
  lat: 38.8082415,
  lng: -77.662807,
};

const DEFAULT_ZOOM = 13;

let prevAddress;

const FilterSitterSchema = (setMapCenter, mapBounds) => {
  return useFormik({
    validateOnChange: false,
    initialValues: {
      serviceType: "boarding",
      address: "",
      price: [33, 66],
      hasChildren: "",
      homeType: "",
      smokes: "",
      hasYard: "",
    },
    validate: async (values) => {
      let errors = {};
      let errorExists = false;

      if (values.serviceType === "") {
        errors.serviceType = "Please select a service.";
        errorExists = true;
      }

      if (values.address === "") {
        errors.address = "Please enter your location.";
        errorExists = true;
      }

      //if the service type being searched for is not boarding, clean unnecessary search filters.
      if (values.serviceType !== "boarding") {
        values.homeType = "";
        values.smokes = "";
        values.hasYard = "";
        values.hasChildren = "";
      }

      if (errorExists) {
        return errors;
      }

      return true;
    },
    onSubmit: async (values) => {
      try {
        if (prevAddress !== values.address) {
          setMapCenter(await mapRelocateHandler(values.address));
        } else {
          console.log(123);
          findSitter(values, mapBounds);
        }
        prevAddress = values.address;
      } catch (e) {}
    },
  });
};

//After finding our bounds, we can make the actual search
const findSitter = async (filterData, bounds) => {
  let filterQuery = "";

  console.log(bounds);

  for (let key in filterData) {
    if (filterData[key] !== "" && key !== "bounds") {
      filterQuery += `${key}=${filterData[key]}&`;
    }
  }

  for (let bound in filterData.bounds) {
    filterQuery += `${bound}=${filterData.bounds.bound}&`;
  }

  const filteredSitters = await fetch(
    `${process.env.REACT_APP_SERVER_URL}/api/sitters?${filterQuery}`
  );

  // const filteredSittersResponse = await filteredSitters.json();
};

//To search sitters we need to relocate the map, that will trigger a search for users
// in that area.
const mapRelocateHandler = async (address) => {
  const requestedMapCenter = await fetch(
    `${process.env.REACT_APP_SERVER_URL}/api/forward-geocode?address=${address}`
  );

  const requestedMapCenterResponse = await requestedMapCenter.json();

  //Very crucial part of the algorithm, we use this to
  //trick google maps api to re-render to make address lookups easier.

  return {
    lat: requestedMapCenterResponse.latitude,
    lng: requestedMapCenterResponse.longitude,
  };
};

const SearchSitter = () => {
  //Map related states
  const [showFilterModal, setShowFilterModal] = useState(true);
  const [showMap, setShowMap] = useState(false);
  const [mapCenter, setMapCenter] = useState(DEFAULT_CENTER);
  const [mapBounds, setMapBounds] = useState();
  // Sitter/User related states
  const [state, _] = useContext(StoreContext);
  const [sitters, setSitters] = useState([]);
  const filterData = FilterSitterSchema(setMapCenter, mapBounds);
  const { values, errors, setFieldValue, handleSubmit } = filterData;

  const toggleFilterModal = () => setShowFilterModal(!showFilterModal);
  const toggleMap = () => setShowMap(!showMap);

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
            console.log("map relocation");
            if (center.lng !== mapCenter.lng || center.lat !== mapCenter.lat) {
              findSitter(values, bounds);
            }
            setMapCenter(center);
            setMapBounds(bounds);
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
