import { StoreContext } from "../../store/store";
import { Fragment, useContext, useEffect, useState } from "react";
import {
  Route,
  Router,
  useNavigate,
  useLocation,
  Outlet,
} from "react-router-dom";
import ProfileHeader from "./Header/ProfileFormHeader";
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import SitterInfo from "./SitterInfo/SitterInfo";
import * as S from "./Profile.styles";

const Profile = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [state] = useContext(StoreContext);
  const [selectedTab, setSelectedTab] = useState();
  const [showBothTabs, setShowBothTabs] = useState(state.user.isActiveSitter);

  useEffect(() => {
    location.pathname.includes("sitter")
      ? (() => {
          setSelectedTab("sitter");
          setShowBothTabs(true);
        })()
      : setSelectedTab("personal");
  }, []);

  const changeShowBothTabs = () => {
    setShowBothTabs(true);
    setSelectedTab("sitter");
    navigate("/profile/sitter");
  };

  const changeTab = (e) => {
    e.target.innerHTML == "Personal Information"
      ? (() => {
          setSelectedTab("personal");
          navigate("/profile");
        })()
      : (() => {
          setSelectedTab("sitter");
          navigate("/profile/sitter");
        })();
  };

  return (
    <S.Wrap>
      <ProfileHeader />
      <S.ProfileWrap>
        <S.FormWrap>
          {showBothTabs && (
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

          <Outlet changeShowBothTabs={changeShowBothTabs} />
          {selectedTab == "sitter" ? (
            <SitterInfo />
          ) : (
            <PersonalInfo changeShowBothTabs={changeShowBothTabs} />
          )}
        </S.FormWrap>
      </S.ProfileWrap>
    </S.Wrap>
  );
};

export default Profile;
