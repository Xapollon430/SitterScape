const Message = require("../database/models/Message");
const User = require("../database/models/User");

const mongoose = require("mongoose");

const socketEndPoints = async (io, socket) => {
  const id = socket.handshake.auth.token;

  const { allRooms, allChatsAndUsers } = await findAllChatsForUser(id);

  socket.join(allRooms);

  socket.emit("join_rooms", allChatsAndUsers);

  socket.on("send_message", async ({ to, message, roomID }) => {
    const latestMessage = new Message({
      from: id,
      to: mongoose.Types.ObjectId(to),
      message: message,
    });
    await latestMessage.save();

    const { allRooms, allChatsAndUsers } = await findAllChatsForUser(id);

    socket.join(allRooms);

    const roomChat = allChatsAndUsers.find((room) => room.roomID === roomID);

    io.in(roomID).emit("received_message", roomChat);
  });

  socket.on("disconnect", (data) => {
    // console.log(`socket ${id}.`);
  });
};

const findAllChatsForUser = async (mainUserID) => {
  let uniqueIDs = [];
  let allRooms = [];

  const allChatsIncludingID = await Message.find({
    $or: [
      { to: mongoose.Types.ObjectId(mainUserID) },
      { from: mongoose.Types.ObjectId(mainUserID) },
    ],
  });

  //store all ids
  allChatsIncludingID.forEach((chat) => {
    uniqueIDs = [...uniqueIDs, chat.to.toString(), chat.from.toString()];
  });

  //find all unique ids except main user
  uniqueIDs = [...new Set(uniqueIDs)].filter((userId) => userId !== mainUserID);

  const usersWithData = await User.find({
    _id: {
      $in: uniqueIDs,
    },
  }).select({ name: 1, profilePicture: 1 });

  const allChatsAndUsers = usersWithData.map((user) => {
    const temporary = [];
    allChatsIncludingID.forEach((messageWithIds) => {
      if (
        user._id.toString() === messageWithIds.to.toString() ||
        user._id.toString() === messageWithIds.from.toString()
      ) {
        temporary.push(messageWithIds);
      }
    });

    const roomID = [user._id, mainUserID].sort().join("_");

    allRooms.push(roomID);

    return {
      name: user.name,
      profilePicture: user.profilePicture,
      roomID,
      chat: [...temporary],
    };
  });

  return { allChatsAndUsers, allRooms };
};

module.exports = {
  socketEndPoints,
};
