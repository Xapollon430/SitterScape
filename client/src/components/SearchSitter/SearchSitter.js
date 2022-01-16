import { Fragment, useEffect, useContext, useState } from "react";
import { StoreContext } from "../../store/store";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as S from "./SearchSitter.styles";
import * as actions from "../../store/actions";
import GoogleMap from "google-map-react";
import SearchSitterHeader from "./Header/SearchSitterHeader";
import Modal from "../Modal/Modal";
import FilterModalContent from "./FilterModalContents";
import TuneIcon from "@material-ui/icons/Tune";
import MapIcon from "@material-ui/icons/Map";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Spinner from "../common/Spinner";

const DEFAULT_CENTER = {
  lat: 38.8082415,
  lng: -77.332807,
};
const DEFAULT_ZOOM = 11;

let prevAddress;
let prevBounds;
let prevZoom;

// To search sitters we need to relocate the map, that will trigger a search for users
// in that area.
const mapRelocateHandler = async (address) => {
  const requestedMapCenter = await fetch(
    `${process.env.REACT_APP_SERVER_URL}/api/forward-geocode?address=${address}`
  );

  const requestedMapCenterResponse = await requestedMapCenter.json();

  return {
    lat: requestedMapCenterResponse.latitude,
    lng: requestedMapCenterResponse.longitude,
  };
};

const SearchSitter = () => {
  const FilterSitterSchema = () => {
    return useFormik({
      validateOnChange: false,
      initialValues: {
        serviceType: "boarding",
        address: "",
        price: [0, 150],
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

        // If the service type being searched for is not boarding, clean unnecessary search filters.
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
      // If the address filter is changed, find the new location to center the map
      // that will consequentely trigger the map to find new sitters.
      // if the address isnt changed, then find sitters with the rest of the filters.
      // finally update the address for the next run
      onSubmit: async (values) => {
        try {
          setModalLoading(true);

          if (prevAddress !== values.address) {
            setMapCenter(await mapRelocateHandler(values.address));
          } else {
            findSitter(values, prevBounds);
          }
          setModalLoading(false);
          setShowFilterModal(false);

          prevAddress = values.address;
        } catch (e) {}
      },
    });
  };

  // After finding our bounds, we can make the actual search
  const findSitter = async (filterData, bounds) => {
    setSittersLoading(true);

    let filterQuery = "";

    for (let key in filterData) {
      if (filterData[key] !== "" && key !== "bounds") {
        filterQuery += `${key}=${filterData[key]}&`;
      }
    }

    for (let bound in bounds) {
      filterQuery += `${bound}Latitude=${bounds[bound].lat}&`;
      filterQuery += `${bound}Longitude=${bounds[bound].lng}&`;
    }

    const filteredSitters = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/api/sitters?${filterQuery}`
    );

    setSitters(await filteredSitters.json());
    setSittersLoading(false);
  };

  // Map related states
  const [showFilterModal, setShowFilterModal] = useState(true);
  const [showMap, setShowMap] = useState(true);
  const [mapCenter, setMapCenter] = useState(DEFAULT_CENTER);
  const [sittersLoading, setSittersLoading] = useState(true);
  const [modalLoading, setModalLoading] = useState(false);
  const [popUpSitterId, setPopUpSitterId] = useState();
  // Sitter/User related states
  const [state, _] = useContext(StoreContext);
  const [sitters, setSitters] = useState([]);
  const filterSitterData = FilterSitterSchema(setMapCenter, setSitters);
  const { values, errors, setFieldValue, handleSubmit } = filterSitterData;

  const toggleFilterModal = () => setShowFilterModal(!showFilterModal);
  const toggleMap = () => setShowMap(!showMap);

  useEffect(() => {
    if (window.innerWidth < 800) {
      setShowMap(false);
    }
  }, []);

  return (
    <Fragment>
      <SearchSitterHeader toggleFilterModal={toggleFilterModal} />
      <S.ContentWrap>
        <S.ProfilesWrap showMap={showMap}>
          {sittersLoading ? (
            <Spinner custom={"margin-top: 50px"} />
          ) : sitters.length === 0 ? (
            <S.NoSitterWrap>
              <S.NoSitterTitle>
                We couldn't find any sitters that matched your criteria.
              </S.NoSitterTitle>
              <S.NoSitterText>
                Try changing your search criteria or updating your location.
              </S.NoSitterText>
            </S.NoSitterWrap>
          ) : (
            sitters.map((sitter, key) => {
              return (
                <S.LinkToSitter key={key} to={`/sitter/${sitter._id}`}>
                  <S.Profile>
                    <S.ProfileImage src={sitter.profilePicture} />
                    <S.ProfileDetails>
                      <S.ProfileName>
                        <S.ProfileNumber>{key + 1}.</S.ProfileNumber>{" "}
                        {sitter.name}
                      </S.ProfileName>
                      <S.ProfileHeadline>{sitter.headline}</S.ProfileHeadline>
                      <S.ProfileAddress>
                        {sitter.city + ", " + sitter.state + ", " + sitter.zip}
                      </S.ProfileAddress>
                      <S.ProfileComment>{sitter.aboutMe}</S.ProfileComment>
                    </S.ProfileDetails>
                    <S.ProfilePrice>
                      <S.PriceText>from</S.PriceText>
                      <S.Rate> ${sitter.boardingRate}</S.Rate>
                      <S.PriceText>per night</S.PriceText>
                    </S.ProfilePrice>
                  </S.Profile>
                </S.LinkToSitter>
              );
            })
          )}
        </S.ProfilesWrap>
        {showMap ? (
          <GoogleMap
            bootstrapURLKeys={{
              key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
            }}
            center={mapCenter}
            options={{
              maxZoom: 15,
              minZoom: 10,
              styles: [
                { featureType: "poi", stylers: [{ visibility: "off" }] },
                { featureType: "transit", stylers: [{ visibility: "off" }] },
              ],
            }}
            defaultZoom={DEFAULT_ZOOM}
            onClick={() => {
              //Close modal sitter upon click
              setPopUpSitterId(0);
            }}
            onChange={({ center, zoom, bounds }) => {
              console.log(center, bounds);
              // Need to reset prevAddress upon map drag, because
              // if they click search after having dragged the map
              // it will not relocate the map.
              prevAddress = 0;
              // Workaround to map resizing causing infinite network calls
              // check if center or zoom is changed, then find new sitters
              // finally update the new bounds, center, and zoom.
              if (
                center.lng !== mapCenter.lng ||
                center.lat !== mapCenter.lat ||
                zoom != prevZoom
              ) {
                findSitter(values, bounds);
              }
              setMapCenter(center);
              prevBounds = bounds;
              prevZoom = zoom;
            }}
          >
            {sitters.map((sitter, key) => (
              <S.MapLocationSitter
                key={key}
                lat={sitter.geocode.latitude}
                lng={sitter.geocode.longitude}
                onClick={() => {
                  setPopUpSitterId(sitter._id);
                }}
              >
                {popUpSitterId === sitter._id ? (
                  <S.MapPopUp>
                    <S.ProfileImage map={true} src={sitter.profilePicture} />
                    <S.MapPopUpSitterWrap>
                      <S.ProfileName map={true}>
                        <S.ProfileNumber map={true}>{key + 1}.</S.ProfileNumber>{" "}
                        {sitter.name}
                      </S.ProfileName>
                      <S.MapPopUpArrow />
                    </S.MapPopUpSitterWrap>
                  </S.MapPopUp>
                ) : null}
                {key + 1}
              </S.MapLocationSitter>
            ))}
          </GoogleMap>
        ) : null}
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
        <FilterModalContent modalLoading={modalLoading} {...filterSitterData} />
      </Modal>
    </Fragment>
  );
};

export default SearchSitter;
