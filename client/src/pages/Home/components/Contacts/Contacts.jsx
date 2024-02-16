import React from "react";
import Bubble from "./ContactUs/Bubble Animation/Bubble.jsx";
import ContactUsPage from "./ContactUs/ContactUsPage";

function Contacts() {
  return (
    <div class="layer-container relative">
      <div class="z-10 relative">
        <ContactUsPage />
      </div>
      <div class="z-20 relative">
        <Bubble />
      </div>
    </div>
  );
}

export default Contacts;
