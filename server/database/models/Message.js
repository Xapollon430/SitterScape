const mongoose = require("mongoose");

const messageSchema = mongoose.Schema({
  from: mongoose.Types.ObjectId,
  to: mongoose.Types.ObjectId,
  dateTime: { type: Date, default: Date.now },
  message: String,
  expireAt: { type: Date, expires: 2630000, default: Date.now },
});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
