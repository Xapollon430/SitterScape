import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
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
import { useResponsive } from "../../../CustomHooks/Hooks";
import { useSelector, useDispatch } from "react-redux";
import {
    changeIsModalOpen,
    changeIsSignUpOpen,
    changeIsLogInOpen,
} from "../../../store/actions/AuthModalActions";
import ProfileDropdown from "./ProfileDropdown/ProfileDropdown";
import { changeLoggedIn } from "../../../store/actions/GeneralActions";

const Header = () => {
    const [showHamburger, isHamburgerOpen] = useResponsive();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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
            <Menu onClick={showHamburger} className="fas fa-bars fa-3x"></Menu>
            <Nav close={isHamburgerOpen}>
                <RouterLink to="/search">
                    <Button size="small" style={{ width: "100%" }}>
                        Find A Sitter
                    </Button>
                </RouterLink>

                <Button variant="outlined">Blog</Button>
                <EmptyDiv />
                {state.appState.loggedIn ? (
                    <React.Fragment>
                        <Button>{state.appState.username}</Button>
                        <Button variant="outlined" onClick={logOut}>
                            Log Out
                        </Button>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <Button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            name="login"
                        >
                            Log In
                            {isDropdownOpen ? (
                                <ExpandUp className="fas fa-chevron-up" />
                            ) : (
                                <ExpandDown className="fas fa-chevron-down" />
                            )}
                            <ProfileDropdown open={isDropdownOpen} />
                        </Button>
                        <Button onClick={openModal}>Sign Up</Button>
                    </React.Fragment>
                )}
            </Nav>
        </Navbar>
    );
};

export default Header;
