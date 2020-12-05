import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Navbar = styled.div`
  padding: 20px;
  display: grid;
  grid-template-areas: "brand nav";
  grid-template-columns: 200px auto;
  justify-items: center;
  @media (max-width: 800px) {
    grid-template-areas:
      "brand menu"
      "nav nav";
  }
  background-color: #28a55f;
`;

export const Nav = styled.div`
  grid-area: nav;
  display: grid;
  width: 100%;
  grid-gap: 10px;
  grid-template-columns: 120px 120px 1fr 120px 120px;
  padding-right: 20px;
  @media (max-width: 800px) {
    height: ${(props) =>
      props.profileOpen && props.hamburgerOpen
        ? "250px"
        : props.hamburgerOpen && !props.profileOpen
        ? "160px"
        : "0px"};
    overflow: hidden;
    transition: height ease-in-out 0.6s;
    grid-template-columns: none;
    grid-template-rows: repeat(4, 30px);
    padding-right: 0px;
  }
`;

export const BurgerWrap = styled.div`
  grid-area: menu;
  display: none;
  color: white;
  @media (max-width: 800px) {
    display: block;
    justify-self: end;
    margin-top: -10px;
  }
`;

export const StyledIcon = styled(FontAwesomeIcon)`
  padding-left: 8px;
`;

export const BrandLink = styled(Link)`
  grid-area: brand;
  font-size: 2rem;
  color: white;
  margin: 0px;
  text-decoration: none;
  font-weight: 600;
  @media (max-width: 800px) {
    grid-area: brand;
    font-size: 1.8rem;
  }
`;

export const EmptyDiv = styled.div`
  @media (max-width: 800px) {
    display: none;
  }
`;

export const Button = styled.button`
  font-family: inherit;
  color: white;
  width: 100%;
  background-color: Transparent;
  cursor: pointer;
  outline: none;
  font-size: 1.1rem;
  height: 45px;
  border: white 2px solid;

  border-radius: 5px;
  margin: 0px;
  padding: 0px;

  @media (max-width: 800px) {
    height: 35px;
    font-size: 1rem;
  }
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

export const ProfileWrapper = styled.div`
  position: relative;
`;

export const ExpandIcon = styled.i`
  padding-left: 8px;
`;
