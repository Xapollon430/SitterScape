import styled from "styled-components";

export const Navbar = styled.div`
  padding: 20px 40px 20px 20px;
  display: grid;
  grid-template-areas: "brand nav";
  grid-template-columns: 200px auto;
  justify-items: center;
  @media (max-width: 800px) {
    grid-template-areas:
      "brand menu"
      "nav nav";
  }
`;

export const Nav = styled.div`
  grid-area: nav;
  display: grid;
  width: 100%;
  grid-gap: 10px;
  grid-template-columns: 120px 120px 1fr 120px 120px;

  @media (max-width: 800px) {
    height: ${(props) => (props.open ? "160px" : "0px")};
    overflow: hidden;
    grid-template-columns: none;
    grid-template-rows: repeat(4, 30px);
    transition: height 0.5s ease-in-out;
  }
`;

export const ButtonWrap = styled.div`
  grid-area: menu;
  display: none;
  color: white;
  @media (max-width: 800px) {
    display: block;
    justify-self: end;
    padding-right: 20px;
  }
`;

export const Brand = styled.h1`
  grid-area: brand;
  font-size: 2rem;
  color: white;
  margin: 0px;
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
  @media (max-width: 800px) {
    height: 35px;
    font-size: 1rem;
  }
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

export const ExpandIcon = styled.i`
  padding-left: 8px;
`;
