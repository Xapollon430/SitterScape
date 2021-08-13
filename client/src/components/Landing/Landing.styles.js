import styled from "styled-components";
import background from "../../images/worstdogever.jpg";

export const StyledBackground = styled.div`
  height: 100vh;
  width: 100vw;
  min-height: 620px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${background});
`;
