import { Fragment, useState } from "react";
import { useLocation } from "react-router-dom";
import * as S from "./Auth.styles";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";

const Auth = () => {
  const { state } = useLocation();
  const [selectedTab, setSelectedTab] = useState(state.type);

  console.log(state);

  const changeTab = (e) => {
    e.target.innerHTML == "Login"
      ? setSelectedTab("login")
      : setSelectedTab("signUp");
  };

  return (
    <Fragment>
      <S.BrandWrap>
        <S.BrandLink to="/">SitterScape</S.BrandLink>
      </S.BrandWrap>
      <S.AuthWrap>
        <S.TabWrap onClick={changeTab}>
          <S.TabText selected={selectedTab === "login"}>Sign Up</S.TabText>
          <S.TabText selected={selectedTab === "signUp"}>Login</S.TabText>
        </S.TabWrap>
        {selectedTab === "login" ? <Login /> : <SignUp />}
      </S.AuthWrap>
    </Fragment>
  );
};

export default Auth;
