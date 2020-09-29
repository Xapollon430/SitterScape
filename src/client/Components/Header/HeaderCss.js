import styled, { keyframes } from "styled-components";

export const Navbar = styled.div`
  padding: 20px 30px 20px 20px;
  display: grid;
  grid-template-areas: "brand nav";
  grid-template-columns: 100px auto;
  align-items: center;
  justify-items: center;
  @media (max-width: 700px) {
    grid-template-areas:
      "brand menu"
      "nav nav";
  }
`;

const NavAnimationOne = keyframes`
  from{
    height: 0px
  } 
  to{
    height: 160px
  }
`;

const NavAnimationTwo = keyframes`
  from{
    height: 160px
  } 
  to{
    height: 0px
  }
`;

export const Nav = styled.div`
  grid-area: nav;
  display: grid;
  width: 100%;
  grid-gap: 10px;
  grid-template-columns: 120px 120px 1fr 120px 120px;

  @media (max-width: 700px) {
    height: ${(props) => (props.open ? "160px" : "0px")};
    overflow: hidden;
    grid-template-columns: none;
    grid-template-rows: repeat(4, 30px);
    animation: ${(props) => (props.open ? NavAnimationOne : "0px")} 0.5s;
  }
`;

export const ButtonWrap = styled.div`
  grid-area: menu;
  display: none;
  color: white;
  @media (max-width: 700px) {
    display: block;
    justify-self: end;
    padding-right: 20px;
  }
`;

export const Brand = styled.h1`
  grid-area: brand;
  font-size: 3rem;
  color: white;
  margin: 0px;
  font-family: "Quicksand", sans-serif;
  @media (max-width: 700px) {
    display: block;
    grid-area: brand;
    font-size: 2rem;
  }
`;

export const EmptyDiv = styled.div`
  @media (max-width: 700px) {
    display: none;
  }
`;

export const Button = styled.button`
  font-family: inherit;
  color: white;
  position: relative;
  width: 100%;
  background-color: Transparent;
  background-repeat: no-repeat;
  border: white 2px solid;
  cursor: pointer;
  outline: none;
  font-size: 1.1rem;
  height: 45px;
  border-radius: 5px;
  @media (max-width: 700px) {
    height: 35px;
    font-size: 1rem;
  }
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

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

export const ExpandIcon = styled.i`
  padding-left: 8px;
`;
