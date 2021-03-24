import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faCog,
  faQuestion,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons"; // can i * as icon? performance?
import * as S from "./ProfileDropdown.styles";
import { Link } from "react-router-dom";

const ProfileDropdown = ({ profileOpen }) => {
  return (
    <S.DropdownWrapper profileOpen={profileOpen}>
      <Link to="/profile">
        <S.ProfileButton>
          <FontAwesomeIcon icon={faUserCircle} /> Profile
        </S.ProfileButton>
      </Link>
      <Link to="/settings">
        <S.ProfileButton>
          <FontAwesomeIcon icon={faCog} /> Settings
        </S.ProfileButton>
      </Link>
      <Link to="/help">
        <S.ProfileButton>
          <FontAwesomeIcon icon={faQuestion} /> Help
        </S.ProfileButton>
      </Link>
      <Link to="/inbox">
        <S.ProfileButton>
          <FontAwesomeIcon icon={faEnvelope} /> Inbox
        </S.ProfileButton>
      </Link>
    </S.DropdownWrapper>
  );
};

export default ProfileDropdown;
