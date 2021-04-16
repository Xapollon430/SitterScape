import { StoreContext } from "../../store/store";
import { useContext, useState } from "react";
import { Route, useRouteMatch } from "react-router-dom";
import ProfileHeader from "./Header/ProfileFormHeader";
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import * as S from "./Profile.styles";

const X = () => {
  return <h1>123</h1>;
};

const Profile = () => {
  const [state, dispatch] = useContext(StoreContext);
  const [selectedTab, setSelectedTab] = useState("personal");

  console.log(state);

  const changeTab = (e) => {
    e.target.innerHTML == "Personal Information"
      ? setSelectedTab("personal")
      : setSelectedTab("sitter");
  };

  return (
    <S.Wrap>
      <ProfileHeader />
      <S.ProfileWrap>
        <S.FormWrap>
          {/* <X /> */}
          <S.TabWrap>
            <S.TabText
              selected={selectedTab === "personal"}
              onClick={changeTab}
            >
              Personal Information
            </S.TabText>
            <S.TabText selected={selectedTab === "sitter"} onClick={changeTab}>
              Sitter Information
            </S.TabText>
          </S.TabWrap>
          <PersonalInfo />
        </S.FormWrap>
      </S.ProfileWrap>
    </S.Wrap>
  );
};

export default Profile;
