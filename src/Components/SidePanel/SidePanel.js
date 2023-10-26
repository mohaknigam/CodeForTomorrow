import React from "react";
import "./sidePanel.css";
import IntroCard from "./Cards/IntroCard";
import ToggleCard from "./Cards/ToggleCard";
import FeedbackCard from "./Cards/FeedbackCard";

function SidePanel() {
  return (
    <div className="panelContainer">
      <IntroCard />
      <ToggleCard />
      <FeedbackCard />
    </div>
  );
}

export default SidePanel;
