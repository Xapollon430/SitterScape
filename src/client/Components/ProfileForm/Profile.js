import { StoreContext } from "../../store/store";
import { useContext, useState } from "react";
import ProfileHeader from "./Header/ProfileFormHeader";
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import SitterInfo from "./SitterInfo/SitterInfo";
import * as S from "./Profile.styles";

const Profile = () => {
  const [state, dispatch] = useContext(StoreContext);
  const [selectedTab, setSelectedTab] = useState("personal");

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
          {state.activeSitter ? (
            <S.TabText>Personal Information</S.TabText>
          ) : (
            <S.TabWrap>
              <S.TabText
                selected={selectedTab === "personal"}
                onClick={changeTab}
              >
                Personal Information
              </S.TabText>
              <S.TabText
                selected={selectedTab === "sitter"}
                onClick={changeTab}
              >
                Sitter Information
              </S.TabText>
            </S.TabWrap>
          )}

          {selectedTab === "personal" ? <PersonalInfo /> : <SitterInfo />}
        </S.FormWrap>
      </S.ProfileWrap>
    </S.Wrap>
  );
};

export default Profile;
