import styled from "styled-components";

export const ProfileWrap = styled.div`
  width: 100vw;
  height: 1000px;
  margin: 100px auto 0px auto;
  min-width: 340px;
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
  grid-template-rows: 20px 30px 30px 30px;
  grid-template-columns: 1fr 1fr;
  grid-gap: 50px;
`;

export const PersonalInfoText = styled.h3`
  grid-column: span 2;
`;
