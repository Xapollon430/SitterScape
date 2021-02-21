import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HamburgerSpin } from "react-animated-burgers";

export const Navbar = styled.div`
  top: 0;
  left: 0;
  padding: 10px;
  display: grid;
  position: fixed;
  width: 100%;
  grid-template-areas: "brand nav";
  grid-template-columns: 200px auto;
  justify-items: center;
  background-color: white;
  z-index: 5;
  border-bottom: 3px #f4f4f4 solid;

  box-sizing: border-box;
  @media (max-width: 800px) {
    padding: 10px 0px 0px 0px;
    grid-template-areas:
      "brand menu"
      "nav nav";
  }
`;

export const Nav = styled.div`
  grid-area: nav;
  background-color: white;
  display: grid;
  width: 100%;
  grid-gap: 10px;
  grid-template-columns: 130px 120px 1fr 120px 120px;
  padding-right: 10px;
  @media (max-width: 800px) {
    height: ${(props) =>
      props.profileOpen && props.hamburgerOpen
        ? "240px"
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
  @media (max-width: 800px) {
    display: block;
    justify-self: end;
    margin-top: -8px;
  }
`;

export const StyledIcon = styled(FontAwesomeIcon)`
  padding-left: 8px;
`;

export const StyledBurgerSpin = styled(HamburgerSpin)`
  outline: none;
`;

export const BrandLink = styled(Link)`
  grid-area: brand;
  font-size: 2rem;
  color: #484847;
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
  color: #484847;
  width: 100%;
  background: white;
  cursor: pointer;
  outline: none;
  font-size: 1.2rem;
  height: 45px;
  border: #484847 2px solid;
  border-radius: 20px;

  @media (max-width: 800px) {
    height: 35px;
    font-size: 1rem;
    font-weight: 800;
  }
`;

export const ProfileWrapper = styled.div`
  position: relative;
`;

export const ExpandIcon = styled.i`
  padding-left: 8px;
`;
