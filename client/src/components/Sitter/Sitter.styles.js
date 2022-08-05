import styled from "styled-components";
import Button from "@mui/material/Button";

export const SitterWrapper = styled.div`
  margin: 30px auto 0px auto;
  max-width: 1000px;
  display: grid;
  grid-template-columns: 3fr 2fr;
  justify-items: center;
  text-align: center;
  padding: 0px 15px 10px 15px;
`;

export const LeftGrid = styled.div`
  margin-top: 30px;
`;

export const RightGrid = styled.div``;

export const ServicesWrap = styled.div`
  width: 100%;
  max-width: 350px;
  min-width: 300px;
  background-color: #f4f5f6;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  border-radius: 5px;
  padding: 0px 20px 20px 20px;
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
    margin-top: 10px;
    border-radius: 20px;
    background-color: rgb(2, 129, 162);
  }
`;

export const AboutMeTitle = styled.h3`
  font-weight: 900;
  text-align: left;
  font-size: 1.3rem;
`;

export const AboutMe = styled.div``;

export const AboutMeParagraph = styled.p`
  line-height: 1.5rem;
  text-align: left;
  font-size: 0.9rem;
`;

export const ServiceName = styled.div`
  font-weight: 900;
  align-self: center;
  font-size: 1rem;
  text-align: left;
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
