import "./App.css";
import io from "socket.io-client";
import React, { useEffect, useState } from "react";
import Chat from "./Chat";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const socket = io.connect("http://localhost:3001");

function ChatSection({creator}) {
  const {id} =useParams()
  const user = JSON.parse(localStorage.getItem('profile'))


  const [room, setRoom] = useState(`${user.result._id}${id}`);
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };

  if(user?.result?._id === creator){
    return <>chats</>
  }
  return (
    <div className="App">


    {
    !showChat ?
    <div className="joinChatContainer" >
      <h3>Join A Chat</h3>

      <button onClick={joinRoom} style={{ backgroundColor: '#d62b2b', color: 'white' }}>Join A Room</button>

      </div>
      :(
        <Chat socket={socket} username={user.result.name} room={room} />

      )
}

    </div>
  );
}


export default ChatSection;