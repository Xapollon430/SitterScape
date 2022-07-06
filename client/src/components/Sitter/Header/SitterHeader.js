import { useState, useContext, useCallback, Fragment } from "react";
import { StoreContext } from "../../../store/store";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import * as S from "./SitterHeader.styles";
import * as Common from "../../common/commonUIKit";
import * as actions from "../../../store/actions";
import ProfileDropdown from "./ProfileDropdown/ProfileDropdown";

const SitterHeader = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [{ user, loggedIn }, dispatch] = useContext(StoreContext);

  const logOut = useCallback(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/api/log-out`, {
      credentials: "include",
    });
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
        <S.StyledBurgerSpin
          isActive={isHamburgerOpen ? true : false}
          toggleButton={openHamburger}
          barColor="#484847"
        />
      </S.BurgerWrap>

      <S.Nav
        hamburgerOpen={isHamburgerOpen}
        profileOpen={isProfileDropdownOpen}
      >
        <Link to="/search">
          <S.Button>Find A Sitter</S.Button>
        </Link>

        <Link to="/profile/sitter">
          <S.Button>Become A Sitter</S.Button>
        </Link>

        <S.EmptyDiv />

        {loggedIn ? (
          <Fragment>
            <S.ProfileWrapper>
              <S.Button onClick={openProfileDropdown}>
                <Common.NameWrapper> {user.name}</Common.NameWrapper>
                <Common.NameDropdownIcon
                  icon={isProfileDropdownOpen ? faChevronUp : faChevronDown}
                />
              </S.Button>
              <ProfileDropdown profileOpen={isProfileDropdownOpen} />
            </S.ProfileWrapper>

            <S.Button onClick={logOut}>Log Out</S.Button>
          </Fragment>
        ) : (
          <Fragment>
            <Link to="/auth?next=/search&type=login">
              <S.Button>Log In</S.Button>
            </Link>

            <Link to="/auth?next=/search&type=signUp">
              <S.Button>Sign Up</S.Button>
            </Link>
          </Fragment>
        )}
      </S.Nav>
    </S.Navbar>
  );
};

export default SitterHeader;
