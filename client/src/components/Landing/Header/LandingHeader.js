import { useState, useContext, useCallback, Fragment } from "react";
import { StoreContext } from "../../../store/store";
import { Link } from "react-router-dom";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import * as S from "./LandingHeader.styles";
import * as Common from "../../common/commonUIKit";
import * as actions from "../../../store/actions";
import ProfileDropdown from "./ProfileDropdown/ProfileDropdown";
import Modal from "../../Modal/Modal";
import AboutMeImage from "../../../images/aboutMe.jpg";

const LandingHeader = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isAboutMeOpen, setIsAboutMeOpen] = useState(false);

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

  const toggleAboutMe = () => setIsAboutMeOpen(!isAboutMeOpen);
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
        <S.Button onClick={toggleAboutMe}>About Me</S.Button>

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
            <Link to="/auth?next=/&type=login">
              <S.Button>Log In</S.Button>
            </Link>

            <Link to="/auth?next=/&type=signUp">
              <S.Button>Sign Up</S.Button>
            </Link>
          </Fragment>
        )}
      </S.Nav>
      <Modal showModal={isAboutMeOpen} onClose={toggleAboutMe}>
        <S.AboutMeWrapper>
          <S.AboutMeImage src={AboutMeImage} />
          <S.Text lineHeight="2" variant="body1" gutterBottom>
            Welcome, thanks for visiting my startup SitterScape. My name is
            Vehbi, I go by "V", and I am currently in the process of building
            the best platform for pet sitting. My mission is to make a platform
            that doesn't rip off their sitters by %20 unlike other capitalistic
            companies :) <br />
            Reach out to <a href="https://www.linkedin.com/in/vehbika/">me</a>.
          </S.Text>
        </S.AboutMeWrapper>
      </Modal>
    </S.Navbar>
  );
};

export default LandingHeader;
