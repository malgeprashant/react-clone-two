import React from "react";
import img1 from "../Assets/Propertyimages/img1.jpg";
import img2 from "../Assets/Propertyimages/img2.jpg";
import img3 from "../Assets/Propertyimages/img3.jpg";
import img4 from "../Assets/Propertyimages/img4.jpg";
import img5 from "../Assets/Propertyimages/img5.jpg";
import img6 from "../Assets/Propertyimages/img6.jpg";
import img7 from "../Assets/Propertyimages/img6.jpg";

const Message = () => {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img src={img1} alt="" />
        <h4>XYZ</h4>
        <h6>DRAFT</h6>
        <h4>Last updated: 04/0822</h4>
        <div className="message-img-cont">
          <span>lesson:1</span>
          <span>Minute: 13</span>
        </div>
        <div className="messagemarketing">
          <h5 style={{ color: "black" }}>Marketing</h5>
        </div>
      </div>

      <div className="messageInfo">
        <img src={img2} alt="" />
        <h4>XYZ</h4>
        <h6 style={{position: "absolute", top: "15px", left: "180px"}}>ARCHIEVED</h6>
        <h4>Last updated: 04/0822</h4>
        <div className="message-img-cont">
          <span>lesson:1</span>
          <span>Minute: 13</span>
        </div>
        <div className="messagemarketing">
        <h5 style={{ color: "black" }}>Sales</h5>
          <h5 style={{ color: "black" }}>Marketing</h5>
          
        </div>
      </div>

      <div className="messageInfo">
        <img src={img3} alt="" />
        <h4>XYZ</h4>
        <h6>LIVE</h6>
        <h4>Last updated: 04/0822</h4>
        <div className="message-img-cont">
          <span>lesson:1</span>
          <span>Minute: 13</span>
        </div>
        <div className="messagemarketing">
          <h5 style={{ color: "black" }}>Sales</h5>
        </div>
      </div>

      <div className="messageInfo">
        <img src={img4} alt="" />
        <h4>XYZ</h4>
        <h6>DRAFT</h6>
        <h4>Last updated: 04/0822</h4>
        <div className="message-img-cont">
          <span>lesson:1</span>
          <span>Minute: 13</span>
        </div>
        <div className="messagemarketing">
          <h5 style={{ color: "black" }}>Marketing</h5>
          <h5 style={{ color: "black" }}>Sales</h5>
        </div>
      </div>

      <div className="messageInfo">
        <img src={img5} alt="" />
        <h4>XYZ</h4>
        <h6>DRAFT</h6>
        <h4>Last updated: 04/0822</h4>
        <div className="message-img-cont">
          <span>lesson:1</span>
          <span>Minute: 13</span>
        </div>
        <div className="messagemarketing">
          <h5 style={{ color: "black" }}>Sales</h5>
        </div>
      </div>

      <div className="messageInfo">
        <img src={img6} alt="" />
        <h4>XYZ</h4>
        <h6>DRAFT</h6>
        <h4>Last updated: 04/0822</h4>
        <div className="message-img-cont">
          <span>lesson:1</span>
          <span>Minute: 13</span>
        </div>
        <div className="messagemarketing">
          <h5 style={{ color: "black" }}>Marketing</h5>
        </div>
      </div>

      <div className="messageInfo">
        <img src={img7} alt="" />
        <h4>XYZ</h4>
        <h6>DRAFT</h6>
        <h4>Last updated: 04/0822</h4>
        <div className="message-img-cont">
          <span>lesson:1</span>
          <span>Minute: 13</span>
        </div>
        <div className="messagemarketing">
          <h5 style={{ color: "black" }}>Marketing</h5>
        </div>
      </div>

      <div className="messageInfo">
        <img src={img1} alt="" />
        <h4>XYZ</h4>
        <h6>DRAFT</h6>
        <h4>Last updated: 04/0822</h4>
        <div className="message-img-cont">
          <span>lesson:1</span>
          <span>Minute: 13</span>
        </div>
        <div className="messagemarketing">
          <h5 style={{ color: "black" }}>Marketing</h5>
        </div>
      </div>

      <div className="messageInfo">
        <img src={img2} alt="" />
        <h4>XYZ</h4>
        <h6>DRAFT</h6>
        <h4>Last updated: 04/0822</h4>
        <div className="message-img-cont">
          <span>lesson:1</span>
          <span>Minute: 13</span>
        </div>
        <div className="messagemarketing">
          <h5 style={{ color: "black" }}>Marketing</h5>
        </div>
      </div>
      <div className="messageContent">{/* <p>hello</p> */}</div>
    </div>
  );
};

export default Message;
