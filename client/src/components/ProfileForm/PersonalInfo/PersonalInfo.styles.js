import { TextField } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const ProfileWrap = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  background-color: #eaebed;
`;

export const FormWrap = styled.div`
  max-width: 600px;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  display: grid;
  grid-gap: 30px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: white;
`;

export const PersonalInfoWrap = styled.div`
  display: grid;
  grid-template-rows: 40px 50px 50px;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;

  @media (max-width: 600px) {
    grid-template-rows: repeat(3, 50px);
    grid-template-columns: 1fr;
  }
`;

export const InfoText = styled.h2`
  grid-column: 1/-1;
  align-self: center;
`;

export const AddressWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 40px 50px 30px 50px;
  grid-gap: 20px;
`;

export const AddressField = styled(TextField)`
  grid-column: 1/-1;
`;

export const AddressInfo = styled.b`
  grid-column: 1/-1;
`;

export const PhotoWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  @media (max-width: 600px) {
    grid-template-rows: auto auto;
    grid-template-columns: 1fr;
  }
`;

export const PhotoTextExplanation = styled.div`
  color: #66727c;
`;

export const UserImage = styled.img`
  object-fit: cover;
  height: 200px;
  @media (max-width: 600px) {
    margin-top: 15px;
  }
`;

export const PhotoTextWrap = styled.div``;

export const UploadButton = styled.input`
  margin-top: 20px;
`;

export const StyledLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: #000000;
`;


export const PasswordModalWrap = styled.div`
  padding: 35px 10px 10px 10px;
  display: grid;
  align-items: center;
  grid-template-rows: 2fr 2fr 2fr 1fr;
  grid-gap: 10px;
`;
