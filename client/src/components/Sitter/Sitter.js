import { Fragment } from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Services,
  Per_X,
  ServicesTranslator,
  PetPreferences,
  PetWeights,
  HomeInfo,
} from "../../utils/constants";
import { limitChar } from "../../utils/helpers";
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

const limitCharLength = 1300;

const decideSmoker = (smokes) => {
  return smokes ? null : (
    <div>
      <S.HomeInfoCheck src={check}></S.HomeInfoCheck>
      {HomeInfo.smokes}
    </div>
  );
};

const Sitter = () => {
  const { id: sitterID } = useParams();
  const [sitterInfo, setSitterInfo] = useState({});
  const [extraAboutMe, setExtraAboutMe] = useState(false);
  const [showMore, setShowMore] = useState();
  const navigate = useNavigate();
  const matches = useMediaQuery("(max-width:800px)");

  const center = sitterInfo?.geocode;

  const createParagraph = (paragraph = "") => {
    const paragraphs = paragraph.split(/(?:\r?\n)+/);

    return paragraphs.map((paragraph, index) => {
      return (
        <S.AboutMeParagraph key={index}>
          {paragraph}
          {/*  calculating whether to show the "Show More" option in the last paragraph */}
          {index + 1 === paragraphs.length && showMore && !extraAboutMe && (
            <S.ShowMore onClick={() => setExtraAboutMe(true)}>
              Show More
            </S.ShowMore>
          )}
        </S.AboutMeParagraph>
      );
    });
  };

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/api/sitter/${sitterID}`)
      .then((response) => response.json())
      .then((data) => {
        setSitterInfo(data);
        if (data.aboutMe.length > 1300) setShowMore(true);
      });
  }, []);

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

          <S.StyledLink to="/inbox" state={{ to: sitterID }}>
            <S.ContactButton color="primary" variant="contained">
              Contact Sitter
            </S.ContactButton>
          </S.StyledLink>

          {matches && (
            <S.ServicesWrap mobile>
              <S.ServicesTitle>Services</S.ServicesTitle>

              {Services.map((service, index) => {
                const serviceRate = sitterInfo?.[`${service}Rate`];

                if (serviceRate > 0) {
                  return (
                    <S.ServiceWrap key={index}>
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

          <S.TitleAndYoeWrap>
            <S.AboutMeTitle>About the sitter</S.AboutMeTitle>
            <S.YoeWrap>
              {sitterInfo.yearsOfExperience}
              <S.YoeText>years of experience</S.YoeText>
            </S.YoeWrap>
          </S.TitleAndYoeWrap>

          <S.AboutMe>
            {extraAboutMe
              ? createParagraph(sitterInfo?.aboutMe)
              : createParagraph(
                  limitChar(sitterInfo?.aboutMe, limitCharLength)
                )}
          </S.AboutMe>
        </S.LeftGrid>
        <S.RightGrid>
          {matches || (
            <S.ServicesWrap>
              <S.ServicesTitle>Services</S.ServicesTitle>

              {Services.map((service, index) => {
                const serviceRate = sitterInfo?.[`${service}Rate`];

                if (serviceRate > 0) {
                  return (
                    <S.ServiceWrap key={index}>
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
            <S.Title>Sitter's Pet Preferences</S.Title>
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
              <S.Title>About Sitter's Home</S.Title>
              <S.Line />

              <S.HomeInfo>
                {Object.keys(HomeInfo).map((homeInfo, index) => {
                  return (
                    <div key={index}>
                      {homeInfo === "homeType" ? (
                        <div>
                          <S.HomeInfoCheck src={check}></S.HomeInfoCheck>
                          {sitterInfo.homeType}
                        </div>
                      ) : homeInfo === "smokes" ? (
                        decideSmoker(sitterInfo.smokes)
                      ) : (
                        <div>
                          <S.HomeInfoCheck src={check}></S.HomeInfoCheck>
                          {HomeInfo[homeInfo]}
                        </div>
                      )}
                    </div>
                  );
                })}
              </S.HomeInfo>
            </S.AboutHomeWrap>
          )}

          <S.NeighborhoodTitle>Sitter's Neighorhood</S.NeighborhoodTitle>

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
