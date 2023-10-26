import React from "react";
import "../sidePanel.css";
import listIcon from "../../../images/menu.png";
import readIcon from "../../../images/read.png";

const ToggleCard = () => {
  return (
    <div className="toggle-card">
      <h1>View Toggle</h1>
      <div>
        <img src={readIcon} alt="icon" className="description-icon" />
        <img src={listIcon} alt="icon" className="list-icon" />
      </div>
    </div>
  );
};

export default ToggleCard;
