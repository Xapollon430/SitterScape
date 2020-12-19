import styled from "styled-components";
import { Button } from "../LandingHeader.styles";

export const DropdownWrapper = styled.div`
  height: ${(props) => (props.profileOpen ? "120px" : "0px")};
  display: grid;
  position: absolute;
  width: 100%;
  top: 48px;
  outline: none;
  z-index: 10;
  grid-auto-rows: 42px;
  transition: height ease-in-out 0.6s;
  overflow: hidden;

  grid-gap: 5px;
  @media (max-width: 800px) {
    width: 100%;
    top: 40px;
    grid-auto-rows: 35px;
  }
`;

export const ProfileButton = styled(Button)`
  @media (max-width: 800px) {
    background: #28a55f;
    &:hover {
      background-color: #28a55f;
    }
  }
`;
