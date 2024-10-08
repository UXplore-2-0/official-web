import React from "react";
import "./imagetext.css";

function ImageText({ name, lead, organization, university, email, number }) {
  return (
    <div className="member-imagetext">
      <div className="name-dev">
        <p className="name">{name}</p>
      </div>
      <div className="details-dev">
        <p>{lead}</p>
        <p>{organization}</p>
        <p>{university}</p>
        <p>{email}</p>
        <p>{number}</p>
      </div>
    </div>
  );
}

export default ImageText;
