import mongoose from 'mongoose';

const chatSchema = mongoose.Schema({
    sender:{ type: mongoose.Schema.Types.ObjectId, ref: "User"},
    text: String,
  });

const postSchema = mongoose.Schema({
    type: String,
    title: String,
    message: String,
    name: String,
    price: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    comments: { type: [String], default: [] },
    chats: { type: [chatSchema], default: [] },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;