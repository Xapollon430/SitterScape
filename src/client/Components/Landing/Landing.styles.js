import styled from "styled-components";

export const StyledBackground = styled.div`
  height: 100vh;
  width: 100vw;
  min-width: 340px;
  min-height: 620px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("${process.env
    .SITTERSCAPE_API_URL}/static/images/background.jpg");
  background-position: center;
`;
