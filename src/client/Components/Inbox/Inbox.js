import * as S from "./Inbox.styles.js";
import Header from "./Header/InboxHeader";
import Footer from "../Footer/Footer";

const Inbox = () => {
  return (
    <S.InboxWrap>
      <Header />
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
      <Footer />
    </S.InboxWrap>
  );
};

export default Inbox;
