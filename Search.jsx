import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faGraduationCap,
  faPeopleGroup,
  faUserFriends,
  faWallet,
  faMessage,
  faGear,
  faBuildingUn,
} from "@fortawesome/free-solid-svg-icons";

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <div className="searchIcons">
          <FontAwesomeIcon
            icon={faHouse}
            style={{ color: "white", marginRight: "20px" }}
          />
          <span style={{ color: "white" }}>DASHBOARD</span>
        </div>
        <div className="searchIcons">
          <FontAwesomeIcon
            icon={faGraduationCap}
            style={{ color: "white", marginRight: "20px" }}
          />
          <span style={{ color: "white" }}>KNOWLEDGE</span>
        </div>
        <div className="searchIcons">
          <FontAwesomeIcon
            icon={faPeopleGroup}
            style={{ color: "white", marginRight: "20px" }}
          />
          <span style={{ color: "white" }}>MEMBERS</span>
        </div>
        <div className="searchIcons">
          <FontAwesomeIcon
            icon={faUserFriends}
            style={{ color: "white", marginRight: "20px" }}
          />
          <span style={{ color: "white" }}>TEAMS</span>
        </div>
        <div className="searchIcons">
          <FontAwesomeIcon
            icon={faWallet}
            style={{ color: "white", marginRight: "20px" }}
          />
          <span style={{ color: "white" }}>VAULT</span>
        </div>
        <div className="searchIcons">
          <FontAwesomeIcon
            icon={faMessage}
            style={{ color: "white", marginRight: "20px" }}
          />
          <span style={{ color: "white" }}>CHAT</span>
        </div>
      </div>
      <div className="userChat">
        {/* <img
          src="data:image/jpeg;base64,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"
          alt=""
        /> */}
        <div className="userChatInfo">
          <div className="userchatinfoicon">
            <FontAwesomeIcon
              icon={faGear}
              style={{ color: "white", marginRight: "20px" }}
            />
            <span>SETTTINGS</span>
          </div>
          <div className="userchatinfoicon">
            <FontAwesomeIcon
              icon={faBuildingUn}
              style={{ color: "white", marginRight: "20px" }}
            />
            <span>COMPANY</span>
          </div>
          <div className="userchatinfoicon">
            <FontAwesomeIcon
              icon={faGear}
              style={{ color: "white", marginRight: "20px" }}
            />
            <span>MY PROFILE</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
