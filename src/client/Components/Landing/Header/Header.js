import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Brand,
  Menu,
  Nav,
  EmptyDiv,
  Button,
  ExpandDown,
  ExpandUp,
} from "./HeaderCss";
import ProfileDropdown from "./ProfileDropdown/ProfileDropdown";
import Modal from "../../../UI/Modal/Modal";
import { useSelector, useDispatch } from "react-redux";
import {
  changeIsModalOpen,
  changeIsSignUpOpen,
  changeIsLogInOpen,
} from "../../../store/actions/AuthModalActions";
import { changeLoggedIn } from "../../../store/actions/GeneralActions";

const Header = () => {
  const [isHamburgerOpen, openHamburger] = useState(false);
  const [IsProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const state = useSelector((state) => state);
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

  return (
    <Navbar>
      <Brand>Sit!</Brand>
      <Menu
        onClick={() => openHamburger(!isHamburgerOpen)}
        className={`fas fa-${isHamburgerOpen ? `times` : `bars`} fa-2x`}
      />
      <Nav open={isHamburgerOpen}>
        <Link to="/search">
          <Button>Find A Sitter</Button>
        </Link>

        <Button>Blog</Button>
        <EmptyDiv />
        {state.appState.loggedIn ? (
          <React.Fragment>
            <Button
              onClick={() => setIsProfileDropdownOpen(!IsProfileDropdownOpen)}
            >
              {state.appState.username}
              {isDropdownOpen ? (
                <ExpandUp className="fas fa-chevron-up" />
              ) : (
                <ExpandDown className="fas fa-chevron-down" />
              )}
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
