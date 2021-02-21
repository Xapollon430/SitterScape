import styled from "styled-components";

export const ProfileWrap = styled.div`
  width: 100%;
  height: 1000px;
  margin: 100px auto 0px auto;
`;

export const FormWrap = styled.div`
  max-width: 600px;
  width: 100%;
  margin: 0px auto;
  padding: 20px;
  box-sizing: border-box;
`;

export const PersonalInfoWrap = styled.div`
  display: grid;
  grid-template-rows: 40px 50px 50px 50px;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;

export const PersonalInfoText = styled.h3`
  grid-column: span 2;
  align-self: center;
`;
