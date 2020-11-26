import React, { useState, useContext, useCallback } from "react";
import { Link } from "react-router-dom";
import { Navbar, Brand, Nav, EmptyDiv, Button, ButtonWrap } from "./HeaderCss";
import ProfileDropdown from "./ProfileDropdown/ProfileDropdown";
import { StoreContext } from "../../store/store";
import {
  changeIsModalOpen,
  changeIsSignUpOpen,
  changeIsLogInOpen,
  generalDispatchBundler,
} from "../../store/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { HamburgerSpin } from "react-animated-burgers";

const Header = () => {
  const [isHamburgerOpen, setIsOpenHamburger] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [{ user, loggedIn }, dispatch] = useContext(StoreContext);

  const openModal = (event) => {
    event.target.innerHTML == "Log In"
      ? dispatch(changeIsLogInOpen(true))
      : dispatch(changeIsSignUpOpen(true));
    dispatch(changeIsModalOpen(true));
  };

  const logOut = useCallback(() => {
    localStorage.removeItem("jwt-token");
    dispatch(
      generalDispatchBundler({
        loggedIn: false,
        user: null,
      })
    );
  });

  const openHamburger = () => setIsOpenHamburger(!isHamburgerOpen);
  const openProfileDropdownOpen = () =>
    setIsProfileDropdownOpen(!isProfileDropdownOpen);

  return (
    <Navbar>
      <Brand>Sit!</Brand>
      <ButtonWrap>
        <HamburgerSpin
          style={{ outline: "none" }}
          isActive={isHamburgerOpen ? true : false}
          toggleButton={openHamburger}
          barColor="white"
        />
      </ButtonWrap>

      <Nav open={isHamburgerOpen}>
        <Link to="/search">
          <Button>Find A Sitter</Button>
        </Link>

        <Button>Blog</Button>
        <EmptyDiv />
        {loggedIn ? (
          <React.Fragment>
            <Button onClick={openProfileDropdownOpen}>
              {user.name}
              <FontAwesomeIcon
                style={{ paddingLeft: "8px" }}
                icon={isProfileDropdownOpen ? faChevronUp : faChevronDown}
              ></FontAwesomeIcon>
              <ProfileDropdown open={isProfileDropdownOpen} />
            </Button>
            <Button onClick={logOut}>Log Out</Button>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Button onClick={openModal}>Log In</Button>

            <Button onClick={openModal}>Sign Up</Button>
          </React.Fragment>
        )}
      </Nav>
    </Navbar>
  );
};

export default Header;
