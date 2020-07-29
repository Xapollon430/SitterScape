import styled from "styled-components";

let BackgroundImage = styled.div`
  min-width: 334px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("${process.env.SIT_API_URL}/static/images/background.jpg");
  height: 100vh;
  width: 100vw;
  background-position: center;
`;

export default BackgroundImage;
