import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Brand,
  Menu,
  Nav,
  EmptyDiv,
  Button,
  ExpandIcon,
} from "./HeaderCss";
import ProfileDropdown from "./ProfileDropdown/ProfileDropdown";
import { useSelector, useDispatch } from "react-redux";
import {
  changeIsModalOpen,
  changeIsSignUpOpen,
  changeIsLogInOpen,
} from "../../store/actions/AuthModalActions";
import { changeLoggedIn } from "../../store/actions/GeneralActions";

const Header = () => {
  const [isHamburgerOpen, setIsOpenHamburger] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const { appState } = useSelector((state) => state);
  const dispatch = useDispatch();

  const openModal = (event) => {
    dispatch(changeIsModalOpen(true));
    event.target.getAttribute("name") === "login"
      ? dispatch(changeIsLogInOpen(true))
      : dispatch(changeIsSignUpOpen(true));
  };

  const logOut = () => {
    localStorage.removeItem("jwt-token");
    dispatch(changeLoggedIn(false));
  };

  const openHamburger = () => setIsOpenHamburger(!isHamburgerOpen);
  const openProfileDropdownOpen = () =>
    setIsProfileDropdownOpen(!isProfileDropdownOpen);

  return (
    <Navbar>
      <Brand>Sit!</Brand>
      <Menu
        onClick={openHamburger}
        className={`fas fa-${isHamburgerOpen ? `times` : `bars`} fa-2x`}
      />
      <Nav open={isHamburgerOpen}>
        <Link to="/search">
          <Button>Find A Sitter</Button>
        </Link>

        <Button>Blog</Button>
        <EmptyDiv />
        {appState.loggedIn ? (
          <React.Fragment>
            <Button onClick={openProfileDropdownOpen}>
              {appState.user.username}
              <ExpandIcon
                className={`fas fa-chevron-${
                  isProfileDropdownOpen ? "up" : "down"
                }`}
              />
              <ProfileDropdown open={isProfileDropdownOpen} />
            </Button>
            <Button onClick={logOut}>Log Out</Button>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Button onClick={openModal} name="login">
              Log In
            </Button>

            <Button onClick={openModal}>Sign Up</Button>
          </React.Fragment>
        )}
      </Nav>
    </Navbar>
  );
};

export default Header;
