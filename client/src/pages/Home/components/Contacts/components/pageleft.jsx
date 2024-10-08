import React from "react";
import ImageView from "./imageview.jsx";
import P1 from "../assests/Senel.png";
import P2 from "../assests/Yasith.png";
import P3 from "../assests/Nivishka.png";
import P4 from "../assests/Sahan.png";
import P5 from "../assests/Ishan.png";
import ImageText from "./imagetext.jsx";
import "./pageleft.css";

function PageLeft() {
  return (
    <div className="text-main">
      <div className="pageleft-main">
        <div className="pageleft-middle">
          <div class="member-full">
            <div className="member-image-dev">
              <ImageView Image={P1} />
            </div>
            <div className="member-imagetext-dev">
              <ImageText
                name="Senel Ephraims"
                lead="Chairman"
                organization="IEEE Student Branch"
                university="University of Moratuwa"
                email="senel.ephraims@ieee.org"
                number="+94 77 041 0762"
              />
            </div>
          </div>

          <div class="member-full">
            <div className="member-imagetext-dev">
              <ImageText
                name="Yasith Senarath"
                lead="Vice-Chairman"
                organization="IEEE Student Branch"
                university="University of Moratuwa"
                email="yasithsenarath@ieee.org"
                number="+94 71 596 0336"
              />
            </div>
            <div className="member-image-dev">
              <ImageView Image={P2} />
            </div>
          </div>

          <div class="member-full">
            <div className="member-image-dev">
              <ImageView Image={P3} />
            </div>
            <div className="member-imagetext-dev">
              <ImageText
                name="Nivishka Manchanayake"
                lead="Event Co-Chairperson"
                university="IEEE Mora UXplore 2.0"
                email="nivishkaabhith@gmail.com"
                number="+94 70 426 7365"
              />
            </div>
          </div>

          <div class="member-full">
            <div className="member-imagetext-dev">
              <ImageText
                name="Sahan Dilip"
                lead="Event Co-Chairperson"
                university="IEEE Mora UXplore 2.0"
                email="sahangunathunga.21@cse.mrt.ac.lk"
                number="+94 76 815 8332"
              />
            </div>
            <div className="member-image-dev">
              <ImageView Image={P4} />
            </div>
          </div>
          <div class="member-full">
            <div className="member-image-dev">
              <ImageView Image={P5} />
            </div>
            <div className="member-imagetext-dev">
              <ImageText
                name="Ishan Hansaka"
                lead="Event Co-Chairperson"
                university="IEEE Mora UXplore 2.0"
                email="ishanhansakasilva@gmail.com"
                number="+94 77 543 7008"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="pageright-main">
        <h1 className="contactus-title">CONTACT US</h1>
      </div>
    </div>
  );
}

export default PageLeft;
