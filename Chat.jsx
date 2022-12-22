import React from "react";
import Messages from "../components/Messages";
import img1 from "../Assets/img.png"
import Searchtitle from "./Searchtitle";



const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>KNOWLEDGE</span>
        <div className="chatIcons">
          <h1>CREATE COURSE</h1>
          <img src={img1} alt="" />
          <div></div>
        </div>
      </div>
      <Searchtitle />
      <Messages />

    </div>
  );
};

export default Chat;
