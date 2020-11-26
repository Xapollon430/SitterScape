import styled from "styled-components";

export const DropdownWrapper = styled.div`
  display: ${(props) => (props.open ? "grid" : "none")};
  grid-auto-rows: 50px;
  width: 100%;
  position: absolute;
  top: 46px;
  right: -2px;
  border-radius: 5px;
  border: white 2px solid;
  cursor: pointer;
  outline: none;
  z-index: 100;

  @media (max-width: 700px) {
    top: 38px;
    grid-auto-rows: 40px;
  }
`;

export const DropdownItem = styled.span`
  color: white;
  padding-top: 14px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
  @media (max-width: 700px) {
    padding-top: 10px;
    background: #28a55f;
    border: 1px solid white;
  }
`;
