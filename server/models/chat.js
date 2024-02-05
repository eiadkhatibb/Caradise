import mongoose from 'mongoose'

const chatSchema = new mongoose.Schema({
   message:String,
   room:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'Room'
   },
   author:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'User'
   },

},{
   timestamps:true
})



export default mongoose.model('Chat',chatSchema)