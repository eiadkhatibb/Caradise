import mongoose from "mongoose";
const chatRoomSchema = mongoose.Schema({
   chatId:[{ type: mongoose.Schema.Types.ObjectId, ref: "Chat"}],
   createdAt: {
      type: Date,
      default: new Date(),
  },
 });
 var ChatRoomModel = mongoose.model('ChatRoomModel', chatRoomSchema);
 export default ChatRoomModel;