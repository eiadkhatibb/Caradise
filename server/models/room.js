import mongoose from 'mongoose'


const roomSchema = new mongoose.Schema({
   _id:{
      type:String,
      unique:true
   },
   post:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'Post'
   }
})

export default mongoose.model('Room',roomSchema)