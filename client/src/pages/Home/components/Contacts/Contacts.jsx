import React from "react";
import deapsea from "./assests/DeepSea.jpg";
import "./Contacts.css";
import "./components/Bubble.jsx";
import Bubble from "./components/Bubble.jsx";
import PageLeft from "./components/pageleft.jsx";

function Contacts() {
  return (
    <div id="contact"  className="ContactUsMain">
      <div className="contactus">
        <div className="bg-gradient-2"></div>
        <div className="deapsea-dev">
          <img src={deapsea} alt="deapsea" className="deapsea" />
        </div>
        <div className="bg-gradient"></div>
      </div>

      <div className="bubble-contacts">
        <Bubble></Bubble>
      </div>

      <div className="pageleft-contacts">
        <PageLeft></PageLeft>
      </div>
    </div>
  );
}

export default Contacts;
