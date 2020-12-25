import { useState, useContext, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { StoreContext } from "../../../store/store";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import * as S from "./InboxHeader.styles";
import * as actions from "../../../store/actions";
import ProfileDropdown from "./ProfileDropdown/ProfileDropdown";

const SearchSitterHeader = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [{ user }, dispatch] = useContext(StoreContext);
  const history = useHistory();

  const logOut = useCallback(() => {
    localStorage.removeItem("jwt-token");
    dispatch(
      actions.generalDispatchBundler({
        loggedIn: false,
        user: null,
      })
    );
    history.replace("/");
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
            {/* {user.name } */}
            simdilik vehbi
            <S.StyledIcon
              icon={isProfileDropdownOpen ? faChevronUp : faChevronDown}
            ></S.StyledIcon>
          </S.Button>
          <ProfileDropdown profileOpen={isProfileDropdownOpen} />
        </S.ProfileWrapper>

        <S.Button onClick={logOut}>Log Out</S.Button>
      </S.Nav>
    </S.Navbar>
  );
};

export default SearchSitterHeader;
