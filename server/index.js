
import express from 'express';
// import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

import postRoutes from './routes/posts.js';
import userRouter from "./routes/user.js";
import chatRoutes from './routes/chat.js'

const { Server } = require("socket.io");

const app = express();

const http = require("http");
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});
io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on("send_message", (data) => {
    console.log(data)
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});

server.listen(3001, () => {
  console.log("SERVER RUNNING");
});


app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);
app.use("/user", userRouter);
app.use('/',chatRoutes);
// app.use("/post/messages",chatRouter)



const CONNECTION_URL = 'mongodb+srv://eiad_khatib:b31XsFmcA0fgsHMC@cluster0.jktwpz3.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));



// const Gun = require('gun');


// app.use(Gun.serve);
// const port = 3030
// const server = app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })

// Gun({ web: server });
mongoose.set('useFindAndModify', false);



