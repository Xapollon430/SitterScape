import styled from "styled-components";

let BackgroundImage = styled.div`
  height: 100vh;
  width: 100vw;
  min-width: 334px;
  min-height: 580px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("${process.env
    .SIT_API_URL}/static/images/background.jpg");
  background-position: center;
`;

export default BackgroundImage;
