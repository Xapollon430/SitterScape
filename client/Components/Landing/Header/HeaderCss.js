import styled from "styled-components";

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

export const Nav = styled.div`
    grid-area: nav;
    width: 100%;
    display: ${(props) => (props.close === false ? "none" : "grid")};
    grid-gap: 10px;
    grid-template-columns: 120px 120px 1fr 120px 120px;
    @media (max-width: 700px) {
        grid-template-columns: none;
        grid-template-rows: repeat(4, auto);
    }
`;

export const Menu = styled.i`
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
    background-color: Transparent;
    background-repeat: no-repeat;
    border: white 2px solid;
    cursor: pointer;
    outline: none;
    font-size: 1.1rem;
    height: 45px;
    border-radius: 5px;
    &:hover {
        background-color: rgba(255, 255, 255, 0.2);
    }
`;

export const DropdownWrapper = styled.div`
    position: absolute;
    display: ${(props) => (props.open ? "grid" : "none")};
    grid-auto-rows: 50px;
    right: 144px;
    top: 72px;
    width: 115px;
    border-radius: 5px;
    border: white 2px solid;
    cursor: pointer;
    outline: none;
    font-size: 1.1rem;
`;

export const DropdownItem = styled.span`
    color: white;
    font-weight: 550;
    padding-top: 14px;

    &:hover {
        background-color: rgba(255, 255, 255, 0.2);
    }
`;

export const ExpandDown = styled.i`
    padding-left: 8px;
`;

export const ExpandUp = styled.i`
    padding-left: 8px;
`;
