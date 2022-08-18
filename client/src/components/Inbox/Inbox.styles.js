import styled from "styled-components";

export const InboxWrap = styled.div`
  background-color: #e9ebed;
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
`;
export const Inbox = styled.div`
  width: 100%;
  max-width: 1000px;
  min-width: 280px;
  height: calc(100vh - 100px);
  background-color: white;
  margin-top: 80px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  border: 1px solid rgb(219, 219, 219);
  border-radius: 5px;

  @media (max-width: 800px) {
    height: calc(100vh - 80px);
    grid-template-columns: 1fr;
  }
`;

export const Profiles = styled.div`
  display: grid;
  grid-auto-rows: 60px;
  overflow-y: scroll;
`;

export const ProfileBox = styled.div`
  padding: 5px;
  border-bottom: 1px solid rgb(219, 219, 219);
  border-right: 1px solid rgb(219, 219, 219);

  display: grid;
  align-items: center;
  &:last-child {
    border-bottom: none;
  }
`;

export const ChatBox = styled.div``;
