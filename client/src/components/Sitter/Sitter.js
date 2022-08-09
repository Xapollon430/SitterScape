import { Fragment } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Services,
  Per_X,
  ServicesTranslator,
  PetPreferences,
  PetWeights,
  HomeInfo,
} from "../../utils/constants";
import * as S from "./Sitter.styles";
import SitterHeader from "./Header/SitterHeader";
import GoogleMap from "google-map-react";
import pom from "../../images/pom.png";
import mutt from "../../images/mutt.png";
import mastif from "../../images/mastif.png";
import husky from "../../images/husky.png";
import check from "../../images/check.png";
import useMediaQuery from "@mui/material/useMediaQuery";

const PetLogos = [pom, mutt, husky, mastif];

const Sitter = () => {
  const { id: sitterID } = useParams();
  const [sitterInfo, setSitterInfo] = useState({});

  const matches = useMediaQuery("(max-width:800px)");

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/api/sitter/${sitterID}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSitterInfo(data);
      });
  }, []);

  const center = sitterInfo?.geocode;

  return (
    <Fragment>
      <SitterHeader sitterID={sitterID} />
      <S.SitterWrapper>
        <S.LeftGrid>
          <S.SitterImage src={sitterInfo.profilePicture} />
          <S.SitterName>{sitterInfo.name}</S.SitterName>
          <S.SitterAddress>
            {sitterInfo.city + ", " + sitterInfo.state + ", " + sitterInfo.zip}
          </S.SitterAddress>
          <S.ContactButton color="primary" variant="contained">
            Contact Sitter
          </S.ContactButton>

          {matches && (
            <S.ServicesWrap mobile>
              <S.ServicesTitle>Services</S.ServicesTitle>

              {Services.map((service) => {
                const serviceRate = sitterInfo?.[`${service}Rate`];

                if (serviceRate > 0) {
                  return (
                    <S.ServiceWrap>
                      <S.ServiceName mobile>
                        {ServicesTranslator[service]}
                      </S.ServiceName>
                      <S.ServicePrice>
                        <b>${serviceRate}</b>
                        <S.ServicePriceUnderText>
                          per {Per_X[service]}
                        </S.ServicePriceUnderText>
                      </S.ServicePrice>
                    </S.ServiceWrap>
                  );
                }
              })}
            </S.ServicesWrap>
          )}

          <S.AboutMeTitle>About {sitterInfo.name}</S.AboutMeTitle>
          <S.AboutMe>
            {sitterInfo.aboutMe?.split(/(?:\r?\n)+/).map((paragraph, index) => (
              <S.AboutMeParagraph key={index}>{paragraph}</S.AboutMeParagraph>
            ))}
          </S.AboutMe>
        </S.LeftGrid>
        <S.RightGrid>
          {matches || (
            <S.ServicesWrap>
              <S.ServicesTitle>Services</S.ServicesTitle>

              {Services.map((service) => {
                const serviceRate = sitterInfo?.[`${service}Rate`];

                if (serviceRate > 0) {
                  return (
                    <S.ServiceWrap>
                      <S.ServiceName>
                        {ServicesTranslator[service]}
                      </S.ServiceName>
                      <S.ServicePrice>
                        <b>${serviceRate}</b>
                        <S.ServicePriceUnderText>
                          per {Per_X[service]}
                        </S.ServicePriceUnderText>
                      </S.ServicePrice>
                    </S.ServiceWrap>
                  );
                }
              })}
            </S.ServicesWrap>
          )}

          <S.PetPreferences>
            <S.Title>{sitterInfo.name}'s Pet Preferences</S.Title>
            <S.PetLogosWrap>
              {PetPreferences.map((preference, i) => {
                if (sitterInfo[preference]) {
                  return (
                    <div key={i}>
                      <S.PetLogo src={PetLogos[i]} />
                      <S.Weight>
                        {PetWeights[i]} <S.Lbs>lbs</S.Lbs>
                      </S.Weight>
                    </div>
                  );
                }
              })}
            </S.PetLogosWrap>
          </S.PetPreferences>

          {sitterInfo.boardingRate > 0 && (
            <S.AboutHomeWrap>
              <S.Title>About {sitterInfo.name}'s Home</S.Title>
              <S.Line />

              <S.HomeInfo>
                {Object.keys(HomeInfo).map((homeInfo) => {
                  console.log(sitterInfo[homeInfo]);
                  if (sitterInfo[homeInfo]) {
                    return (
                      <div>
                        <S.HomeInfoCheck src={check} />
                        {homeInfo === "homeType"
                          ? sitterInfo.homeType
                          : HomeInfo[homeInfo]}
                      </div>
                    );
                  }
                })}
              </S.HomeInfo>
            </S.AboutHomeWrap>
          )}

          <S.NeighborhoodTitle>
            {sitterInfo.name}'s Neighorhood
          </S.NeighborhoodTitle>

          {center && (
            <S.MapWrap>
              <GoogleMap
                bootstrapURLKeys={{
                  key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
                }}
                center={{
                  lat: center.latitude,
                  lng: center.longitude,
                }}
                options={{
                  zoomControl: false,
                  fullscreenControl: false,
                  keyboardShortcuts: false,
                  gestureHandling: "none",
                }}
                defaultZoom={13}
              >
                <S.BlueCircle lat={center.lat} lng={center.lng} />
              </GoogleMap>
            </S.MapWrap>
          )}
        </S.RightGrid>
      </S.SitterWrapper>
    </Fragment>
  );
};

export default Sitter;
