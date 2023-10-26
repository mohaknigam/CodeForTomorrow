import React from "react";
import faceImage from "../../images/faceImage.jpg";
import cross from "../../images/close.png";
import "./body.css";

const ListTile = ({ title, body, id, handleDelete }) => {
  const now = new Date();
  const date = now.getUTCDate();
  const month = now.getUTCMonth() + 1; // Months are 0-indexed, so add 1 to get the correct month.
  const year = now.getUTCFullYear();
  const hours = now.getUTCHours();
  const minutes = now.getUTCMinutes();
  const seconds = now.getUTCSeconds();

  const gmtDateTime = `${date}/${month}/${year} ${hours}:${minutes}:${seconds} GMT`;

  const handleImageClick = (id) => {
    handleDelete(id);
  };
  return (
    <div className="tile">
      <div className="details">
        <img src={faceImage} alt="icon" />
        <div className="texts">
          <h2>{title}</h2>
          <p>{body}</p>
          <span>{gmtDateTime}</span>
        </div>
      </div>
      <div className="img-container">
        <img
          src={cross}
          alt="cross-icon"
          onClick={() => handleImageClick(id)}
        />
      </div>
    </div>
  );
};

export default ListTile;
