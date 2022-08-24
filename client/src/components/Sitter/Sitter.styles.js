import styled from "styled-components";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export const SitterWrapper = styled.div`
  margin: 30px auto 0px auto;
  max-width: 1000px;
  display: grid;
  grid-template-columns: 3fr 2fr;
  justify-items: center;
  text-align: center;
  padding: 0px 15px 50px 15px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export const LeftGrid = styled.div`
  margin-top: 30px;
  width: 100%;
`;

export const RightGrid = styled.div``;

export const ServicesWrap = styled.div`
  width: 100%;
  max-width: ${({ mobile }) => (mobile ? "" : "350px")};
  margin-top: ${({ mobile }) => (mobile ? "20px" : "0px")};

  min-width: 300px;
  background-color: #f4f5f6;

  border-radius: 5px;
  padding: 10px 20px 20px 20px;
  box-sizing: border-box;
`;

export const ServicesTitle = styled.h2`
  color: black;
  font-weight: 900;
  grid-column: 1/3;
  text-align: left;
`;

export const SitterImage = styled.img`
  object-fit: cover;
  border-radius: 50%;
  height: 200px;
  width: 200px;
`;

export const SitterName = styled.h2`
  margin-top: 10px;
  margin-bottom: 10px;
  color: rgb(2, 129, 162);
  font-weight: 900;
  font-size: 2rem;
`;

export const SitterHeadline = styled.div``;

export const SitterAddress = styled.div`
  margin-top: 10px;
`;

export const ContactButton = styled(Button)`
  &&& {
    font-family: "Quicksand";
    font-weight: 900;
    margin-top: 10px;
    border-radius: 20px;
    background-color: rgb(2, 129, 162);
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const AboutMeTitle = styled.h3`
  font-weight: 900;
  text-align: left;
  font-size: 1.3rem;
`;

export const AboutMe = styled.div`
  margin-bottom: 30px;
`;

export const AboutMeParagraph = styled.p`
  line-height: 1.5rem;
  text-align: left;
  font-size: 0.9rem;
`;

export const ServiceWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 10px;
`;

export const ServiceName = styled.div`
  font-weight: 900;
  align-self: center;
  font-size: 1rem;
  text-align: left;

  font-size: ${({ mobile }) => (mobile ? "1.2rem" : "1rem")};
`;

export const ServicePrice = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
  justify-self: right;
`;

export const ServicePriceUnderText = styled.div`
  color: #62686e;
  font-size: 0.9rem;
`;

export const PetPreferences = styled.div`
  margin-top: 10px;
  padding: 20px;
  border-radius: 10px;
  font-size: 1.1rem;
`;

export const PetLogosWrap = styled.div`
  margin-top: 15px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-items: center;
`;

export const PetLogo = styled.img`
  height: 36px;
`;

export const Weight = styled.div`
  margin-top: 5px;
  font-size: 0.9rem;
`;

export const Lbs = styled.div`
  font-size: 0.8rem;
  color: #62686e;
`;

export const MapWrap = styled.div`
  margin-top: 30px;
  height: 300px;
`;

export const BlueCircle = styled.div`
  height: 130px;
  width: 130px;
  border: 1px solid rgb(2, 129, 162);
  background-color: rgb(2, 129, 162, 0.3);
  border-radius: 50%;

  position: relative;
  left: -65px;
  bottom: 65px;
`;

export const Title = styled.h3`
  margin-bottom: 5px;
`;

export const AboutHomeWrap = styled.div``;

export const Line = styled.hr``;

export const NeighborhoodTitle = styled.h3`
  margin-top: 40px;
`;

export const HomeInfo = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  text-align: left;
`;

export const HomeInfoCheck = styled.img`
  height: 15px;
  position: relative;
  top: 2px;
  margin-right: 5px;
`;

export const ShowMore = styled.span`
  text-decoration: underline;
  color: blue;
  font-size: 0.9rem;
  margin-left: 5px;
  cursor: pointer;
`;

export const TitleAndYoeWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
`;

export const YoeWrap = styled.span`
  justify-self: right;
`;

export const YoeText = styled.span`
  font-size: 0.8rem;
  color: #62686e;
  margin-left: 5px;
`;
