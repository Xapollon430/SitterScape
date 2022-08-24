import { useState } from "react";
import { useQuery } from "../../utils/hooks";
import * as S from "./Auth.styles";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";
import Footer from "../Footer/Footer";

const Auth = ({ state, next }) => {
  const query = useQuery();

  const [selectedTab, setSelectedTab] = useState(query.get("type") || "login");

  const changeTab = (e) => {
    e.target.innerHTML == "Login"
      ? setSelectedTab("login")
      : setSelectedTab("signUp");
  };

  return (
    <S.Wrap>
      <S.BrandWrap>
        <S.BrandLink to="/">SitterScape</S.BrandLink>
      </S.BrandWrap>
      <S.AuthWrap isLoginOpen={selectedTab === "login"}>
        <S.TabWrap onClick={changeTab}>
          <S.TabText selected={selectedTab === "signUp"}>Sign Up</S.TabText>
          <S.TabText selected={selectedTab === "login"}>Login</S.TabText>
        </S.TabWrap>
        {selectedTab === "login" ? (
          <Login state={state} next={next} />
        ) : (
          <SignUp state={state} next={next} />
        )}
      </S.AuthWrap>
      <Footer />
    </S.Wrap>
  );
};

export default Auth;
