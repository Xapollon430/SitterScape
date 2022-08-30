const Message = require("../database/models/Message");
const User = require("../database/models/User");

const mongoose = require("mongoose");

const socketEndPoints = async (socket) => {
  const id = socket.handshake.auth.token;

  const { allRooms, allChatsAndUsers } = await findAllChatsForUser(id);

  socket.join(allRooms);

  socket.emit("join_rooms", { allChatsAndUsers, allRooms });

  socket.on("send_message", async (data) => {
    const message = new Message({
      from: mongoose.Types.ObjectId(data.from),
      to: mongoose.Types.ObjectId(data.to),
      message: data.message,
    });
    await message.save();

    socket.to(data.roomID).emit("received_message", data.message);
  });

  socket.on("disconnect", (data) => {
    console.log("socket disconnected.");
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

  console.log(usersWithData);

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

    allRooms.push([user._id, mainUserID].sort().join("_"));

    return {
      name: user.name,
      profilePicture: user.profilePicture,
      id: user._id,
      chat: [...temporary],
    };
  });

  return { allChatsAndUsers, allRooms };
};

module.exports = {
  socketEndPoints,
};
