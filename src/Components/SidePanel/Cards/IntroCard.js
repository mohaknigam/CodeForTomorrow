import React from "react";
import "../sidePanel.css";
import faceImage from "../../../images/faceImage.jpg";

const IntroCard = () => {
  return (
    <div className="intro-card">
      <img src={faceImage} alt="photo" />
      <div>
        <h2>Hi Reader,</h2>
        <h4>Here's Your News!</h4>
      </div>
    </div>
  );
};

export default IntroCard;
