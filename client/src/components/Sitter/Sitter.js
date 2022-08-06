import { Fragment } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Services, Per_X, ServicesTranslator } from "../../utils/constants";
import * as S from "./Sitter.styles";
import SitterHeader from "./Header/SitterHeader";

const Sitter = () => {
  const { id: sitterID } = useParams();
  const [sitterInfo, setSitterInfo] = useState({});

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/api/sitter/${sitterID}`)
      .then((response) => response.json())
      .then((data) => {
        setSitterInfo(data);
      });
  }, []);

  console.log(sitterInfo);

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
        </S.RightGrid>
      </S.SitterWrapper>
    </Fragment>
  );
};

export default Sitter;
