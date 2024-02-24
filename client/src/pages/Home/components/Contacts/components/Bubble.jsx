import React from "react";
import "./Bubble.css";
import bubble from "../assests/bubble.png";

function Bubble() {
  return (
    <div className="bubblemain">
      <div class="contact_us">
        <div class="bubble">
          {Array.from({ length: 15 }).map((_, i) => (
            <img key={i} src={bubble} alt={`bubble${i}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Bubble;
