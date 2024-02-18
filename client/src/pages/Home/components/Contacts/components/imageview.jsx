import React from "react";
import "./imageview.css";

function ImageView({ Image }) {
  return (
    <div class="member-image">
      <img src={Image} alt="ProfileImage" />
    </div>
  );
}

export default ImageView;
