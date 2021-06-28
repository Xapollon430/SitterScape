import { StoreContext } from "../../store/store";
import { useContext, useState } from "react";
import { Route, useHistory } from "react-router-dom";
import ProfileHeader from "./Header/ProfileFormHeader";
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import SitterInfo from "./SitterInfo/SitterInfo";
import * as S from "./Profile.styles";

const Profile = () => {
  const [state] = useContext(StoreContext);
  const history = useHistory();
  const [selectedTab, setSelectedTab] = useState("personal");
  const [showBothTabs, setShowBothTabs] = useState(state.user.isActiveSitter);

  const changeShowTabs = () => {
    setShowBothTabs(true);
    setSelectedTab("sitter");
  };

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
          {showBothTabs || (
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

          <Route
            exact
            path="/profile"
            render={() => <PersonalInfo changeShowTabs={changeShowTabs} />}
          />
          <Route exact path="/profile/sitter" render={() => <SitterInfo />} />
          
        </S.FormWrap>
      </S.ProfileWrap>
    </S.Wrap>
  );
};

export default Profile;
