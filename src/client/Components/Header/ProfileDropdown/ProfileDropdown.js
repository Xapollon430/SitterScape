import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faCog,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons"; // can i * as icon? performance?
import * as S from "./ProfileDropdown.styles";

const ProfileDropdown = ({ open }) => {
  return (
    <S.DropdownWrapper open={open}>
      <S.DropdownItem>
        <FontAwesomeIcon icon={faUserCircle} /> Profile
      </S.DropdownItem>
      <S.DropdownItem>
        <FontAwesomeIcon icon={faCog} /> Settings
      </S.DropdownItem>
      <S.DropdownItem>
        <FontAwesomeIcon icon={faQuestion} /> Help
      </S.DropdownItem>
    </S.DropdownWrapper>
  );
};

export default ProfileDropdown;
