import styled from "styled-components";
import { Button } from "../InboxHeader.styles";

export const DropdownWrapper = styled.div`
  height: ${(props) => (props.profileOpen ? "150px" : "0px")};
  display: grid;
  position: absolute;
  width: 100%;
  top: 48px;
  outline: none;
  z-index: 2;
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
    background: white;
    color: #484847;

    &:hover {
      background-color: #28a55f;
    }
  }
`;
