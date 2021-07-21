import { Fragment, useEffect, useRef, useContext, useState } from "react";
import { StoreContext } from "../../store/store";
import * as S from "./SearchSitter.styles";
import * as actions from "../../store/actions";
import L from "leaflet";
import SearchSitterHeader from "./Header/SearchSitterHeader";
import Modal from "../Modal/Modal";
import fakeData from "./fakedata";

const SearchSitter = () => {
  const mapRef = useRef(null);
  const [showFilter, setShowFilter] = useState(false);

  const toggleFilterModal = () => {
    setShowFilter(!showFilter);
  };

  useEffect(() => {
    const mymap = L.map(mapRef.current).setView([51.505, -0.09], 13);
    L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
    ).addTo(mymap);

    return () => mymap.remove();
  }, []);

  return (
    <Fragment>
      <SearchSitterHeader toggleFilterModal={toggleFilterModal} />
      <S.ContentWrap>
        <Modal onClose={toggleFilterModal} showModal={showFilter}>
          <h1>test</h1>
        </Modal>
        <S.ProfilesWrap>
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
        <S.LeafletMap ref={mapRef}></S.LeafletMap>
      </S.ContentWrap>
    </Fragment>
  );
};

export default SearchSitter;
