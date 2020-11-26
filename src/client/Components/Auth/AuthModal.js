import { useContext } from "react";
import { StoreContext } from "../../store/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons"; // can i * as icon? performance?
import * as actions from "../../store/actions";
import * as S from "./AuthModal.styles";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";

const AuthModal = ({ onClose }) => {
  const [{ isSignUpOpen, isLogInOpen }, dispatch] = useContext(StoreContext);

  const changeTab = (e) => {
    e.target.innerHTML == "Login"
      ? dispatch(actions.changeIsLogInOpen(true))
      : dispatch(actions.changeIsSignUpOpen(true));
  };

  return (
    <S.AuthWrap>
      <S.CancelIcon>
        <FontAwesomeIcon onClick={onClose} icon={faTimes} size="2x" />
      </S.CancelIcon>
      <S.TabWrap onClick={changeTab}>
        <S.TabText selected={isSignUpOpen}>Sign Up</S.TabText>
        <S.TabText selected={isLogInOpen}>Login</S.TabText>
      </S.TabWrap>
      {isLogInOpen ? <Login /> : <SignUp />}
    </S.AuthWrap>
  );
};

export default AuthModal;
