import { Fragment } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Services,
  Per_X,
  ServicesTranslator,
  PetPreferences,
  PetWeights,
} from "../../utils/constants";
import * as S from "./Sitter.styles";
import SitterHeader from "./Header/SitterHeader";
import GoogleMap from "google-map-react";
import pom from "../../images/pom.png";
import mutt from "../../images/mutt.png";
import mastif from "../../images/mastif.png";
import husky from "../../images/husky.png";

const PetLogos = [pom, mutt, husky, mastif];

const Sitter = () => {
  const { id: sitterID } = useParams();
  const [sitterInfo, setSitterInfo] = useState({});

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

          <S.AboutMeTitle>About {sitterInfo.name}</S.AboutMeTitle>
          <S.AboutMe>
            {sitterInfo.aboutMe?.split(/(?:\r?\n)+/).map((paragraph, index) => (
              <S.AboutMeParagraph key={index}>{paragraph}</S.AboutMeParagraph>
            ))}
          </S.AboutMe>
        </S.LeftGrid>
        <S.RightGrid>
          <S.ServicesWrap>
            <S.ServicesTitle>Services</S.ServicesTitle>

            {Services.map((service) => {
              const serviceRate = sitterInfo?.[`${service}Rate`];

              if (serviceRate > 0) {
                return (
                  <S.ServiceWrap>
                    <S.ServiceName>{ServicesTranslator[service]}</S.ServiceName>
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

          {center && (
            <S.MapWrap>
              <S.Title>{sitterInfo.name}'s Neighorhood</S.Title>
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
                defaultZoom={14}
              >
                <S.BlueCircle lat={center.lat} lng={center.lng} />
              </GoogleMap>
            </S.MapWrap>
          )}

          {sitterInfo.boarding && (
            <S.AboutHomeWrap>
              <S.Title>About {sitterInfo.name}'s Home</S.Title>
            </S.AboutHomeWrap>
          )}
        </S.RightGrid>
      </S.SitterWrapper>
    </Fragment>
  );
};

export default Sitter;
