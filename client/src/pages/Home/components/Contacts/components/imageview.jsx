import React from "react";
import "./imageview.css";

function ImageView({ Image }) {
  return (
    <div className="member-image">
      <img src={Image} alt="ProfileImage" className="ProfileImage" />
    </div>
  );
}

export default ImageView;
