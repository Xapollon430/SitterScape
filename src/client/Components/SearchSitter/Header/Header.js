import { useState, useContext, useCallback, Fragment, useEffect } from "react";
import { StoreContext } from "../../../store/store";
import { Link } from "react-router-dom";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HamburgerSpin } from "react-animated-burgers";
import * as S from "./Header.styles";
import * as actions from "../../../store/actions";
import ProfileDropdown from "./ProfileDropdown/ProfileDropdown";
import styled from "styled-components";

const Header = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [{ user, loggedIn }, dispatch] = useContext(StoreContext);

  const openModal = (event) => {
    event.target.innerHTML == "Log In"
      ? dispatch(actions.changeIsLogInOpen(true))
      : dispatch(actions.changeIsSignUpOpen(true));
    dispatch(actions.changeIsModalOpen(true));
  };

  const logOut = useCallback(() => {
    localStorage.removeItem("jwt-token");
    dispatch(
      actions.generalDispatchBundler({
        loggedIn: false,
        user: null,
      })
    );
  });

  const openHamburger = () => setIsHamburgerOpen(!isHamburgerOpen);
  const openProfileDropdown = () =>
    setIsProfileDropdownOpen(!isProfileDropdownOpen);

  return (
    <S.Navbar>
      <S.BrandLink to="/">SitterScape</S.BrandLink>

      <S.BurgerWrap>
        <HamburgerSpin
          style={{ outline: "none" }}
          isActive={isHamburgerOpen ? true : false}
          toggleButton={openHamburger}
          barColor="white"
        />
      </S.BurgerWrap>

      <S.Nav
        hamburgerOpen={isHamburgerOpen}
        profileOpen={isProfileDropdownOpen}
      >
        <S.Button>Blog</S.Button>
        <S.EmptyDiv />
        {loggedIn ? (
          <Fragment>
            <S.ProfileWrapper>
              <S.Button onClick={openProfileDropdown}>
                {user.name}
                <S.StyledIcon
                  icon={isProfileDropdownOpen ? faChevronUp : faChevronDown}
                ></S.StyledIcon>
              </S.Button>
              <ProfileDropdown profileOpen={isProfileDropdownOpen} />
            </S.ProfileWrapper>

            <S.Button onClick={logOut}>Log Out</S.Button>
          </Fragment>
        ) : (
          <Fragment>
            <S.Button onClick={openModal}>Log In</S.Button>

            <S.Button onClick={openModal}>Sign Up</S.Button>
          </Fragment>
        )}
      </S.Nav>
    </S.Navbar>
  );
};

export default Header;
