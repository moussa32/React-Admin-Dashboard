import React from "react";
import { MdNotificationsNone } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import "./Topbar.css";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">ReactDashobard</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <MdNotificationsNone className="icon" />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <BiWorld className="icon" />
          </div>
          <div className="topbarIconContainer">
            <FiSettings className="icon" />
          </div>
          <img src="https://thumbs.dreamstime.com/b/cartoon-man-icon-person-design-vector-graphic-concept-represented-isolated-flat-illustration-73697341.jpg" className="topAvatar" title="user avatar" alt="user avatar" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
