import styled from "styled-components";
import { TextField } from "@material-ui/core";

export const ServiceWrap = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 10px;
  align-items: center;
`;
export const ServiceType = styled.div``;
export const ServiceName = styled.h2``;
export const ServiceOption = styled.div`
  justify-self: center;
`;
export const Text = styled.h4`
  color: #66727c;
`;
export const RadioWrap = styled.div`
  display: grid;
  justify-content: center;
`;
export const AdressWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 40px 50px 50px;
  grid-gap: 30px;
`;
export const InfoText = styled.h2`
  grid-column: 1/-1;
  align-self: center;
`;
export const AdressField = styled(TextField)`
  grid-column: 1/-1;
  m
`;
export const PetPreferences = styled.h2``;
export const PetPreferencesText = styled.h4`
  color: #66727c;
`;
export const PetPreferencesWrap = styled.div``;

export const PetPreferencesRadioWrap = styled.div``;
export const YearsOfExperienceWrap = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;
`;
export const YearsOfExperienceText = styled.h4`
  color: #66727c;
`;
export const ExperienceWrap = styled.div``;
export const PhotoWrap = styled.div`
  display: grid;
  grid-template-columns: 5fr 2fr;
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
  width: 200px;
  @media (max-width: 600px) {
    margin-top: 15px;
    max-width: 150px;
  }
`;

export const PhotoTextWrap = styled.div``;
export const UploadButton = styled.input`
  margin-top: 20px;
`;

export const ErrorText = styled.p`
  color: red;
`;
