import React from "react";
import Bubble from "./ContactUs/Bubble Animation/Bubble.jsx";
import ContactUsPage from "./ContactUs/ContactUsPage";
import BackGround from "./ContactUs/images/Deepsea.svg";

function Contacts() {
  return (
    <div class="layer-container relative">
      <div class="z-10 relative">
        <img
          src={BackGround}
          alt="BackGround Image"
          className="w-fill h-fill"
        />
      </div>
      <div class="z-20 relative">
        <ContactUsPage />
      </div>
      <div class="z-30 relative">
        <Bubble />
      </div>
    </div>
  );
}

export default Contacts;
