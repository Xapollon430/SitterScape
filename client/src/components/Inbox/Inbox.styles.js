import styled from "styled-components";
import { Link } from "react-router-dom";

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
  height: calc(100vh - 80px);
  background-color: white;
  margin-top: 70px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  border: 1px solid rgb(219, 219, 219);
  border-radius: 5px;

  box-sizing: border-box;
  @media (max-width: 800px) {
    margin-top: ${({ matches, selectedRoom }) =>
      matches && selectedRoom ? "0px" : "80px"};
    height: ${({ matches, selectedRoom }) =>
      matches && selectedRoom ? "100vh" : "calc(100vh - 80px)"};
    grid-template-columns: 1fr;
  }
`;

export const Profiles = styled.div`
  display: grid;
  grid-auto-rows: 80px;
  overflow-y: scroll;
  border-right: ${({ mobile }) =>
    mobile ? "" : "1px solid rgb(219, 219, 219)"};
`;

export const SitterName = styled.h3``;

export const SitterNameChat = styled.h2`
  text-align: center;
`;

export const SitterPicture = styled.img`
  object-fit: cover;
  border-radius: 50%;
  height: 50px;
  width: 50px;
`;

export const ProfileBox = styled.div`
  padding: 5px;
  border-bottom: 1px solid rgb(219, 219, 219);

  display: grid;
  align-items: center;
  grid-gap: 10px;
  grid-template-columns: 50px 1fr;
  cursor: pointer;
`;

export const ChatBox = styled.div`
  display: grid;
  grid-template-rows: 70px 1fr 60px;
`;

export const ChatBoxBack = styled.div``;

export const ChatBoxTop = styled.div`
  display: grid;
  grid-auto-rows: auto;
  grid-gap: 10px;
  overflow-y: auto;

  padding: 10px 15px 0px 15px;
  height: ${({ matches, selectedRoom }) =>
    matches && selectedRoom ? "calc(100vh - 150px)" : "calc(100vh - 230px)"};
  align-content: flex-start;
`;

export const RightBlue = styled.div`
  background-color: #1876d2;
  color: white;
  padding: 10px;
  max-width: 75%;
  justify-self: right;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;
  align-self: center;
  word-break: break-word;
`;

export const LeftGray = styled.div`
  background-color: #eeeeee;
  padding: 10px;
  max-width: 75%;
  justify-self: left;
  word-break: break-word;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  align-self: center;
`;

export const ChatBoxBottom = styled.div`
  display: grid;
  grid-template-columns: 5fr auto;
  grid-gap: 5px;
`;

export const IconWrapper = styled.div`
  background-color: #166cbf;
  border-radius: 50%;
  height: 56px;
  width: 56px;
  display: grid;
  place-items: center;
`;

export const NoSelectedChat = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  grid-gap: 15px;
`;

export const NoSelectedText = styled.div`
  align-self: flex-end;
`;

export const NoSelectedButtonWrap = styled.div`
  align-self: flex-start;
`;

export const SearchSitterLink = styled(Link)`
  text-decoration: none;
`;

export const SpinnerWrapper = styled.div`
  margin-top: 20px;
`;

export const BackIconWrapper = styled.div`
  background-color: #166cbf;
  border-radius: 50%;
  height: 56px;
  width: 56px;
  display: grid;
  place-items: center;
  justify-self: left;
  align-self: center;

  top: 10px;
  left: 10px;

  position: absolute;
`;
