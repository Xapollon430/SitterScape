import * as S from "./Inbox.styles.js";
import Header from "./Header/InboxHeader";

const Inbox = () => {
  return (
    <S.InboxWrap>
      <Header />
      <S.Inbox />
    </S.InboxWrap>
  );
};

export default Inbox;
