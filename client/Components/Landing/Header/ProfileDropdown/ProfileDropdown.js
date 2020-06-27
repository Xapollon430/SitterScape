import React from "react";
import { DropdownWrapper, DropdownItem } from "../HeaderCss";

const ProfileDropdown = ({ open }) => {
    return (
        <DropdownWrapper open={open}>
            <DropdownItem>
                <i className="fas fa-user-circle"></i> Profile
            </DropdownItem>
            <DropdownItem>
                <i className="fas fa-cog"></i> Settings
            </DropdownItem>
            <DropdownItem>
                <i className="fas fa-question"></i> Help
            </DropdownItem>
        </DropdownWrapper>
    );
};

export default ProfileDropdown;
