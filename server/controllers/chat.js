// import express from "express";
// import mongoose from "mongoose";
// import ChatModel from "../models/chat.js";
// export const getMessages = async (req, res) => {
//   const { postId, partner1, partner2 } = req.query;
//   console.log("Hello wmesages")
//   try {
//     const data = await ChatModel.find({
//       post: postId,
//       partner1: partner1,
//       partner2: partner2,
//     }).populate("partner1 partner2");

//     res.json({ messages: data });
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//  }
// };