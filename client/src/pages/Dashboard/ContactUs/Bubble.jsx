import React from "react";
import "./Bubble.css";
import bubble from "./images/bubble.png";

function Bubble() {
  return (
    <div className="contact_us">
      <div className="bubble">
        {Array.from({ length: 15 }).map((_, i) => (
          <img key={i} src={bubble} alt={`bubble${i}`} />
        ))}
      </div>
      {/* <div className="bubble">
        <img src={bubble} alt="bubble5" />
        <img src={bubble} alt="bubble6" />
        <img src={bubble} alt="bubble7" />
        <img src={bubble} alt="bubble8" />
        <img src={bubble} alt="bubble9" />
        <img src={bubble} alt="bubble10" />
      </div> */}
    </div>
  );
}

export default Bubble;
