import styled from "styled-components";

export const InboxWrap = styled.div`
  background-color: #e9ebed;
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
`;
export const Inbox = styled.div`
  width: 100vw;
  max-width: 1000px;
  min-width: 340px;
  margin: 80px auto 20px auto;
  height: calc(100vh - 100px);
  background-color: red;

  display: grid;
  grid-template-columns: 1fr 2fr;

  @media (max-width: 800px) {
    margin: 70px auto 0px auto;
    height: calc(100vh - 70px);
    grid-template-columns: 1fr;
  }
`;

export const Profiles = styled.div`
  display: grid;
  grid-auto-rows: 60px;
  overflow-y: scroll;
`;

export const ProfileBox = styled.div`
  border: 1px solid blue;
`;

export const ChatBox = styled.div``;
