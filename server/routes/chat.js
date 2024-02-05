// import express from 'express';

// import { getMessages } from '../controllers/chat.js';

// const router = express.Router();

// router.get('/post/messages', getMessages);


// export default router;


import express from 'express'
import catchAsync from 'express-async-handler'
import room from '../models/room.js'
import chat from '../models/chat.js'

const router = express.Router()


router.post('/post/messages/create',catchAsync(async(req,res)=>{
   const {roomId,message,userId,postId} = req.body
   // const newRoom = new room({_id:roomId,post:postId})
   // const room = new room({_id:roomId,post:postId}
   const r =await  room.findById(roomId)
   let temp

   if(r){
      temp = r
   }else{
      temp = new room({_id:roomId,post:postId})
      await temp.save()
   }
   const newChat = new chat({room:temp._id,message,author:userId})
   await newChat.save()
   res.sendStatus(200)
}))


router.post('/post/messages',catchAsync(async(req,res)=>{
   const {roomId} = req.body
   const roomChat = await chat.find({room:roomId}).sort({createdAt:-1})
   res.json(roomChat)


}))


export default router