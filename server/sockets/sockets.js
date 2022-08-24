const Message = require("../database/models/Message");
const mongoose = require("mongoose");

const socketEndPoints = async (socket) => {
  socket.on("join_room", (data) => {
    socket.join(data.roomID);
  });

  socket.emit("send_message", (data) => {
    socket.to(data.roomID).emit(data.message);
  });

  //   const message = new Message({
  //     from: mongoose.Types.ObjectId("51bb793aca2ab77a3200000d"),
  //     to: mongoose.Types.ObjectId("51bb793aca2ab77a3200000d"),
  //     message: "sup",
  //   });

  //   await message.save();
};

module.exports = {
  socketEndPoints,
};
