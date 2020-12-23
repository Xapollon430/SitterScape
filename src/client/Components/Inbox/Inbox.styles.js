import styled from "styled-components";

export const InboxWrap = styled.div``;

export const Inbox = styled.div`
  width: 100vw;
  max-width: 900px;
  min-width: 340px;
  margin-top: 70px;
  height: calc(100vh - 70px);
  background-color: red;

  display: grid;
  grid-template-columns: 1fr 2fr;
`;

export const Profiles = styled.div`
  border: 1px solid black;
  display: grid;
  grid-auto-rows: 60px;
  overflow-y: scroll;
`;

export const ProfileBox = styled.div`
  border: 1px solid blue;
`;

export const ChatBox = styled.div``;
