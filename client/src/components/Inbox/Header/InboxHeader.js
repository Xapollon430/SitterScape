import { useState, useContext, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../../store/store";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import * as S from "./InboxHeader.styles";
import * as Common from "../../common/commonUIKit";
import * as actions from "../../../store/actions";
import ProfileDropdown from "./ProfileDropdown/ProfileDropdown";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const InboxHeader = ({ selectedRoom, matches, goBack }) => {
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
    <S.Navbar matches={matches}>
      {selectedRoom && matches && (
        <S.BackIconWrapper>
          <ArrowBackIcon onClick={goBack} />
        </S.BackIconWrapper>
      )}

      {!matches && <S.BrandLink to="/">SitterScape</S.BrandLink>}

      {!selectedRoom && matches && (
        <S.BrandLink to="/">SitterScape</S.BrandLink>
      )}

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

export default InboxHeader;
