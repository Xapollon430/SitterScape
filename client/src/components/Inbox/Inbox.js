import * as S from "./Inbox.styles.js";
import InboxHeader from "./Header/InboxHeader";
import io from "socket.io-client";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import Spinner from "../common/Spinner";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import useMediaQuery from "@mui/material/useMediaQuery";
import DefaultUser from "../../images/default-user.png";
import { useEffect, useContext, useState, useRef } from "react";
import { StoreContext } from "../../store/store";
import { useLocation } from "react-router-dom";

let socket;

const Inbox = () => {
  const [loadingRooms, setLoadingRooms] = useState(true);
  const [{ user }, dispatch] = useContext(StoreContext);
  const location = useLocation();

  const [chatMessage, setChatMessage] = useState("");

  // If user joined the inbox from search, find the roomID, or show all chats
  const [selectedRoom, setSelectedRoom] = useState(
    location?.state?.to ? [location?.state?.to, user._id].sort().join("_") : ""
  );

  const [rooms, setRooms] = useState([]);
  const matches = useMediaQuery("(max-width:800px)");

  const mobileChat = useRef();
  const desktopChat = useRef();

  const sendMessage = (roomID, message) => {
    const to = roomID.split("_").find((i) => i !== user._id);

    if (message.length > 0) {
      socket.emit("send_message", {
        to,
        roomID,
        message,
      });

      setChatMessage("");
    }
  };

  useEffect(() => {
    socket = io.connect(`${process.env.REACT_APP_SERVER_URL}`, {
      auth: {
        token: user._id,
      },
    });

    return () => socket.disconnect();
  }, []);

  useEffect(() => {
    if (matches) {
      if (mobileChat?.current)
        mobileChat.current.scrollTop = mobileChat?.current?.scrollHeight;
    } else {
      if (desktopChat?.current)
        desktopChat.current.scrollTop = desktopChat?.current?.scrollHeight;
    }

    socket.on("join_rooms", (rooms) => {
      setRooms(rooms);
      setLoadingRooms(false);
    });

    socket.on("received_message", (data) => {
      const indexOfRoomToUpdate = rooms
        .map((room) => room.roomID)
        .indexOf(selectedRoom);
      // If it is a new chat, just add it
      if (indexOfRoomToUpdate === -1) {
        setRooms([...rooms, data]);
        return;
      }

      const newRooms = [...rooms];
      newRooms[indexOfRoomToUpdate].chat = data.chat;

      setRooms(newRooms);
    });
  }, [rooms, selectedRoom]);

  const goBack = () => {
    setSelectedRoom("");
  };

  // Mobile View
  if (matches) {
    return (
      <S.InboxWrap>
        {selectedRoom === "" && (
          <InboxHeader
            goBack={goBack}
            selectedRoom={selectedRoom}
            matches={matches}
          />
        )}

        <S.Inbox selectedRoom={selectedRoom} matches={matches}>
          {loadingRooms ? (
            <S.SpinnerWrapper>
              <Spinner />
            </S.SpinnerWrapper>
          ) : selectedRoom === "" && rooms.length === 0 ? (
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
          ) : rooms.length > 0 && selectedRoom === "" ? (
            <S.Profiles mobile>
              {rooms.map((room, index) => {
                return (
                  <S.ProfileBox
                    key={index}
                    onClick={() => setSelectedRoom(room.roomID)}
                  >
                    <S.SitterPicture src={room.profilePicture || DefaultUser} />
                    <S.SitterName>{room.name}</S.SitterName>
                  </S.ProfileBox>
                );
              })}
            </S.Profiles>
          ) : (
            <S.ChatBox matches={matches} selectedRoom={selectedRoom}>
              <S.BackIconWrapper onClick={goBack}>
                <ArrowBackIcon />
              </S.BackIconWrapper>
              <S.SitterNameChat>
                {rooms.find((room) => room.roomID === selectedRoom)?.name
                  ? rooms.find((room) => room.roomID === selectedRoom)?.name
                  : location?.state?.name}
              </S.SitterNameChat>
              <S.ChatBoxTop
                ref={mobileChat}
                selectedRoom={selectedRoom}
                matches={matches}
              >
                {rooms.length > 0 &&
                  rooms.find((room) => room.roomID === selectedRoom) &&
                  rooms
                    .find((room) => room.roomID === selectedRoom)
                    .chat.map(({ from, message }, index) => {
                      return from === user._id ? (
                        <S.RightBlue key={index}>{message}</S.RightBlue>
                      ) : (
                        <S.LeftGray key={index}>{message}</S.LeftGray>
                      );
                    })}
              </S.ChatBoxTop>
              <S.ChatBoxBottom>
                <TextField
                  placeholder="Type a message..."
                  variant="outlined"
                  size="medium"
                  multiline
                  value={chatMessage}
                  inputProps={{ maxLength: 500 }}
                  onChange={(e) => setChatMessage(e.target.value)}
                />
                <S.IconWrapper>
                  <SendIcon
                    fontSize="large"
                    style={{ fill: "white", marginLeft: "5px" }}
                    onClick={() => sendMessage(selectedRoom, chatMessage)}
                  />
                </S.IconWrapper>
              </S.ChatBoxBottom>
            </S.ChatBox>
          )}
        </S.Inbox>
      </S.InboxWrap>
    );
  }

  // Desktop View
  return (
    <S.InboxWrap>
      <InboxHeader />
      <S.Inbox>
        <S.Profiles>
          {loadingRooms ? (
            <S.SpinnerWrapper>
              <Spinner />
            </S.SpinnerWrapper>
          ) : (
            rooms.map((room, index) => {
              return (
                <S.ProfileBox
                  key={index}
                  onClick={() => setSelectedRoom(room.roomID)}
                >
                  <S.SitterPicture src={room.profilePicture || DefaultUser} />
                  <S.SitterName>{room.name}</S.SitterName>
                </S.ProfileBox>
              );
            })
          )}
        </S.Profiles>

        {selectedRoom !== "" ? (
          <S.ChatBox>
            <S.SitterNameChat>
              {rooms.find((room) => room.roomID === selectedRoom)?.name
                ? rooms.find((room) => room.roomID === selectedRoom)?.name
                : location?.state?.name}
            </S.SitterNameChat>
            <S.ChatBoxTop ref={desktopChat}>
              {rooms.length > 0 &&
                rooms.find((room) => room.roomID === selectedRoom) &&
                rooms
                  .find((room) => room.roomID === selectedRoom)
                  .chat.map(({ from, message }, index) => {
                    return from === user._id ? (
                      <S.RightBlue key={index}>{message}</S.RightBlue>
                    ) : (
                      <S.LeftGray key={index}>{message}</S.LeftGray>
                    );
                  })}
            </S.ChatBoxTop>
            <S.ChatBoxBottom>
              <TextField
                placeholder="Type a message..."
                variant="outlined"
                size="medium"
                multiline
                value={chatMessage}
                inputProps={{ maxLength: 500 }}
                onChange={(e) => setChatMessage(e.target.value)}
              />
              <Button
                variant="contained"
                endIcon={<SendIcon />}
                size="small"
                onClick={() => sendMessage(selectedRoom, chatMessage)}
              >
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
