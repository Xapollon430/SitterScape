import { useState, useContext, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../../store/store";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import * as S from "./ProfileFormHeader.styles";
import * as Common from "../../common/commonUIKit";
import * as actions from "../../../store/actions";
import ProfileDropdown from "./ProfileDropdown/ProfileDropdown";

const ProfileFormHeader = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [{ user }, dispatch] = useContext(StoreContext);
  const navigate = useNavigate();

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

    navigate("/");
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

        <S.Button>Blog</S.Button>

        <S.EmptyDiv />

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
      </S.Nav>
    </S.Navbar>
  );
};

export default ProfileFormHeader;
