import React from "react";
import "./imagetext.css";

function ImageText({ name, lead, University, email, number }) {
  return (
    <div className="imagetext">
      <div className="name-dev">
        <p className="name">{name}</p>
      </div>
      <div className="details-dev">
        <p>{lead}</p>
        <p>{University}</p>
        <p>{email}</p>
        <p>{number}</p>
      </div>
    </div>
  );
}

export default ImageText;
