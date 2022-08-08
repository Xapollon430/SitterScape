import { Fragment, useEffect, useContext, useState, useRef } from "react";
import { StoreContext } from "../../store/store";
import { useFormik } from "formik";
import { MyFavoriteMcDonalds } from "../../utils/constants";

import * as S from "./SearchSitter.styles";
import GoogleMap from "google-map-react";
import SearchSitterHeader from "./Header/SearchSitterHeader";
import Modal from "../Modal/Modal";
import FilterModalContent from "./FilterModalContents";
import TuneIcon from "@material-ui/icons/Tune";
import MapIcon from "@material-ui/icons/Map";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Spinner from "../common/Spinner";

// Center the map at my favorite McDonalds :D

const DEFAULT_ZOOM = 11;

let prevCenter = 0;
let prevZoom = 0;

// To search sitters we need to relocate the map, that will trigger a search for users
// in that area.
const mapRelocateHandler = async (
  address = "8512 Leesburg Pike, Vienna, VA 22182" // This is my local McDonalds :D
) => {
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
      onSubmit: async (values) => {
        try {
          setModalLoading(true);

          const centerToRelocate = await mapRelocateHandler(values.address);

          // Hacky workaround. Everytime "submit" is clicked. We move the map a minuscule bit
          // to force a rerender of the map which gets the new sitters with new filtes.
          if (!showMap) {
            // For no map devices we filter by given address since we dont have bounds
            // We look for top 10 within 25 miles. If no address then use a default address.
            findSitter(
              {
                ...values,
                address: `${centerToRelocate.lat},${centerToRelocate.lng}`,
              },
              null
            );
          }
          setMapCenter({
            lat: centerToRelocate.lat + Math.random() / 10000,
            lng: centerToRelocate.lng + Math.random() / 10000,
          });

          setModalLoading(false);
          setShowFilterModal(false);

          // prevAddress = values.address;
        } catch (e) {}
      },
    });
  };

  // After finding our bounds, we can make the actual search
  const findSitter = async (filterData, bounds) => {
    try {
      setSittersLoading(true);

      let filterQuery = "";

      for (let key in filterData) {
        if (filterData[key] !== "" && key !== "bounds") {
          filterQuery += `${key}=${filterData[key]}&`;
        }
      }

      if (bounds) {
        for (let bound in bounds) {
          filterQuery += `${bound}Latitude=${bounds[bound].lat}&`;
          filterQuery += `${bound}Longitude=${bounds[bound].lng}&`;
        }
      }

      const filteredSitters = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/api/sitters?${filterQuery}`
      );

      setSitters(await filteredSitters.json());
      setSittersLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  // need to use this because IOS Safari is retarded
  // https://www.npmjs.com/package/body-scroll-lock
  const targetRef = useRef();
  // Map related states
  const [showFilterModal, setShowFilterModal] = useState(true);
  const [showMap, setShowMap] = useState(true);
  const [mapCenter, setMapCenter] = useState(MyFavoriteMcDonalds);
  const [sittersLoading, setSittersLoading] = useState(true);
  const [modalLoading, setModalLoading] = useState(false);
  const [popUpSitterId, setPopUpSitterId] = useState();
  // To determine platform width
  const screenWidth = window.innerWidth;
  // Sitter/User related states
  const [state, _] = useContext(StoreContext);
  const [sitters, setSitters] = useState([]);
  const filterSitterData = FilterSitterSchema(setMapCenter, setSitters);
  const { values } = filterSitterData;

  const toggleFilterModal = () => setShowFilterModal(!showFilterModal);
  const toggleMap = () => setShowMap(!showMap);
  const closeMapPopUp = () => setPopUpSitterId(0);

  // Have to turn off map and find sitters upon landing for small devices
  // Also upon resize of page make sure the map shows for large devices.
  useEffect(() => {
    if (screenWidth < 800) {
      setShowMap(false);
      findSitter(
        {
          ...values,
          address: `${MyFavoriteMcDonalds.lat},${MyFavoriteMcDonalds.lng}`,
        },
        null
      );
    }

    const cleanUp = window.addEventListener(
      "resize",
      () => window.innerWidth > 800 && setShowMap(true)
    );
    return () => {
      // Need to reset these so that if user leaves and comes back we will make a network call.
      prevCenter = 0;
      prevZoom = 0;
      window.removeEventListener("resize", cleanUp);
    };
  }, []);

  return (
    <Fragment>
      <S.ContentWrap>
        <SearchSitterHeader
          toggleFilterModal={toggleFilterModal}
          showMap={showMap}
        />
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
                <S.Profile
                  key={key}
                  onClick={() => window.open(`/sitter/${sitter._id}`, "_blank")}
                >
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
                    <S.Rate> ${sitter.price}</S.Rate>
                    <S.PriceText>{sitter.perX}</S.PriceText>
                  </S.ProfilePrice>
                </S.Profile>
              );
            })
          )}
        </S.ProfilesWrap>
        {showMap && (
          <S.MapWrap>
            <GoogleMap
              bootstrapURLKeys={{
                key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
              }}
              center={mapCenter}
              options={{
                gestureHandling: "greedy",
                maxZoom: 15,
                minZoom: 10,
                styles: [
                  { featureType: "poi", stylers: [{ visibility: "off" }] },
                  { featureType: "transit", stylers: [{ visibility: "off" }] },
                ],
              }}
              defaultZoom={prevZoom || DEFAULT_ZOOM}
              onClick={
                closeMapPopUp
                //Close sitter modal upon clicking on a random place in the maps
              }
              onChange={({ center, zoom, bounds }) => {
                // We dont want to make an excessive amount of calls when the page is resized
                // (which resizes the map changing its bounds) so we only find new sitters if
                // the center is moved or zoom has changed.
                if (
                  zoom !== prevZoom ||
                  prevCenter.lng !== center.lng ||
                  prevCenter.lat !== center.lat
                ) {
                  findSitter(
                    { ...values, address: `${center.lat},${center.lng}` },
                    bounds
                  );
                }

                prevZoom = zoom;
                prevCenter = center;
                setMapCenter(center);
              }}
            >
              {sitters.map((sitter, key) => (
                <S.MapLocationSitter
                  key={key}
                  lat={sitter.geocode.latitude}
                  lng={sitter.geocode.longitude}
                  onTouchEnd={() => {
                    //For mobile devices.
                    setPopUpSitterId(sitter._id);
                  }}
                  onClick={() => {
                    setPopUpSitterId(sitter._id);
                  }}
                >
                  {popUpSitterId === sitter._id && (
                    <S.MapPopUp
                      onClick={() =>
                        window.open(`/sitter/${sitter._id}`, "_blank")
                      }
                    >
                      <S.MapPopUpCancel
                        onClick={(e) => {
                          e.stopPropagation();
                          closeMapPopUp();
                        }}
                      />
                      <S.MapProfileImage
                        map={true}
                        src={sitter.profilePicture}
                      />
                      <S.MapPopUpSitterWrap>
                        <S.ProfileName map={true}>
                          <S.ProfileNumber map={true}>
                            {key + 1}.
                          </S.ProfileNumber>
                          {sitter.name}
                        </S.ProfileName>
                        <S.MapPriceBoldText>${sitter.price}</S.MapPriceBoldText>
                      </S.MapPopUpSitterWrap>
                    </S.MapPopUp>
                  )}
                  {key + 1}
                  <S.MapLocationSitterArrow />
                </S.MapLocationSitter>
              ))}
            </GoogleMap>
          </S.MapWrap>
        )}
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
