import styled from "styled-components";

let BackgroundImage = styled.div`
  min-width: 322px;
  background-image: url("${process.env.SIT_API_URL}/static/images/background.jpg");
  height: 100vh;
  width: 100vw;
  background-position: center;
`;

export default BackgroundImage;
