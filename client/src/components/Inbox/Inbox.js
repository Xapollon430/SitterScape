import * as S from "./Inbox.styles.js";
import InboxHeader from "./Header/InboxHeader";
import io from "socket.io-client";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import { useEffect, useContext, useState } from "react";
import { StoreContext } from "../../store/store";
import { useLocation } from "react-router-dom";

const socket = io(`${process.env.REACT_APP_SERVER_URL}`);

const Inbox = () => {
  const [{ user }, dispatch] = useContext(StoreContext);
  const location = useLocation();

  const [selectedRoom, setSelectedRoom] = useState(location?.state?.to || "");
  const [rooms, setRooms] = useState([]);

  console.log(selectedRoom);

  const sendMessage = (toId, message) => {};

  // useEffect(() => {
  //   socket = io(`${process.env.REACT_APP_SERVER_URL}`, {query: });
  // }, []);

  useEffect(() => {
    if (selectedRoom !== "") {
      const fromID = user._id;
      const roomID = `${fromID}_${selectedRoom}`;
      socket.emit("join_room", { roomID });
    }
  }, [selectedRoom]);

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

        {selectedRoom !== "" ? (
          <S.ChatBox>
            <S.ChatBoxTop />
            <S.ChatBoxBottom>
              <TextField
                placeholder="Type a message..."
                variant="outlined"
                size="medium"
              />
              <Button variant="contained" endIcon={<SendIcon />} size="small">
                Send
              </Button>
            </S.ChatBoxBottom>
          </S.ChatBox>
        ) : (
          <S.NoSelectedChat>
            <S.NoSelectedText>
              Find local sitters and get in contact with them!
            </S.NoSelectedText>
            <S.NoSelectedButtonWrap>
              <S.SearchSitterLink to="/search">
                <Button variant="contained" size="small">
                  Find a Sitter
                </Button>
              </S.SearchSitterLink>
            </S.NoSelectedButtonWrap>
          </S.NoSelectedChat>
        )}
      </S.Inbox>
    </S.InboxWrap>
  );
};

export default Inbox;
