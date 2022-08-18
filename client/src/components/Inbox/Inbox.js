import * as S from "./Inbox.styles.js";
import InboxHeader from "./Header/InboxHeader";
import io from "socket.io-client";
import { useEffect } from "react";

const Inbox = () => {
  useEffect(() => {
    const socket = io(`${process.env.REACT_APP_SERVER_URL}`);
  }, []);
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
