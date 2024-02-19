import React from "react";
import "./imageview.css";

function ImageView({ Image }) {
  return (
    <div class="member-image">
      <img src={Image} alt="ProfileImage" className="ProfileImage" />
    </div>
  );
}

export default ImageView;
