import * as S from "./Inbox.styles.js";
import InboxHeader from "./Header/InboxHeader";
import Footer from "../Footer/Footer";

const Inbox = () => {
  return (
    <S.InboxWrap>
      <InboxHeader />
      <S.Inbox>
        <S.Profiles>
          <S.ProfileBox>123</S.ProfileBox>
          <S.ProfileBox>123</S.ProfileBox>
          <S.ProfileBox>123</S.ProfileBox>
          <S.ProfileBox>123</S.ProfileBox>
          <S.ProfileBox>123</S.ProfileBox>
          <S.ProfileBox>123</S.ProfileBox>
          <S.ProfileBox>123</S.ProfileBox>
          <S.ProfileBox>123</S.ProfileBox>
          <S.ProfileBox>123</S.ProfileBox>
          <S.ProfileBox>123</S.ProfileBox>
          <S.ProfileBox>123</S.ProfileBox>
          <S.ProfileBox>123</S.ProfileBox>
          <S.ProfileBox>123</S.ProfileBox>
          <S.ProfileBox>123</S.ProfileBox>
          <S.ProfileBox>123</S.ProfileBox>
          <S.ProfileBox>123</S.ProfileBox>
          <S.ProfileBox>123</S.ProfileBox>
        </S.Profiles>
        <S.ChatBox />
      </S.Inbox>
    </S.InboxWrap>
  );
};

export default Inbox;
