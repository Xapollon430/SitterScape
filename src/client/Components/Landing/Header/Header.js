import { useState, useContext, useCallback, Fragment } from "react";
import { StoreContext } from "../../../store/store";
import { Link } from "react-router-dom";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import * as S from "./Header.styles";
import * as actions from "../../../store/actions";
import ProfileDropdown from "./ProfileDropdown/ProfileDropdown";

const Header = ({ from }) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [{ user, loggedIn }, dispatch] = useContext(StoreContext);
  const history = useHistory();

  const redirectAuth = (event) => {
    event.target.innerHTML == "Log In"
      ? history.push("/auth", { type: "login", next: from })
      : history.push("/auth", { type: "signUp", next: from });
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
      <S.Brand>SitterScape</S.Brand>
      <S.BurgerWrap>
        <S.StyledBurgerSpin
          isActive={isHamburgerOpen ? true : false}
          toggleButton={openHamburger}
          barColor="white"
        />
      </S.BurgerWrap>

      <S.Nav
        hamburgerOpen={isHamburgerOpen}
        profileOpen={isProfileDropdownOpen}
      >
        <Link to="/search">
          <S.Button>Find A Sitter</S.Button>
        </Link>

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
            <S.Button onClick={redirectAuth}>Log In</S.Button>

            <S.Button onClick={redirectAuth}>Sign Up</S.Button>
          </Fragment>
        )}
      </S.Nav>
    </S.Navbar>
  );
};

export default Header;
