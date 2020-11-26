import React from "react";
import { DropdownWrapper, DropdownItem } from "../HeaderCss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faCog,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";
const ProfileDropdown = ({ open }) => {
  return (
    <DropdownWrapper open={open}>
      <DropdownItem>
        <FontAwesomeIcon icon={faUserCircle} /> Profile
      </DropdownItem>
      <DropdownItem>
        <FontAwesomeIcon icon={faCog} /> Settings
      </DropdownItem>
      <DropdownItem>
        <FontAwesomeIcon icon={faQuestion} /> Help
      </DropdownItem>
    </DropdownWrapper>
  );
};

export default ProfileDropdown;
