import React from "react";
import ImageView from "./imageview.jsx";
import P1 from "../assests/member1.svg";
import P2 from "../assests/member2.svg";
import P3 from "../assests/member3.svg";
import P4 from "../assests/member4.svg";
import ImageText from "./imagetext.jsx";
import "./pageleft.css";

function PageLeft() {
  return (
    <div class="pageleft-main">
      <div class="member-full">
        <div className="member-image-dev">
          <ImageView Image={P1} />
        </div>
        <div className="member-imagetext-dev">
          <ImageText
            name="Chasila Withanage"
            lead="Charman of IEEE Student Branch"
            University="University of Moratuwa"
            email="chasilawithange@ieee.org"
            number="+94 71 261 8255"
          />
        </div>
      </div>

      <div class="member-full">
        <div className="member-imagetext-dev">
          <ImageText
            name="Chasila Withanage"
            lead="Charman of IEEE Student Branch"
            University="University of Moratuwa"
            email="chasilawithange@ieee.org"
            number="+94 71 261 8255"
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
            name="Chasila Withanage"
            lead="Charman of IEEE Student Branch"
            University="University of Moratuwa"
            email="chasilawithange@ieee.org"
            number="+94 71 261 8255"
          />
        </div>
      </div>

      <div class="member-full">
        <div className="member-imagetext-dev">
          <ImageText
            name="Chasila Withanage"
            lead="Charman of IEEE Student Branch"
            University="University of Moratuwa"
            email="chasilawithange@ieee.org"
            number="+94 71 261 8255"
          />
        </div>
        <div className="member-image-dev">
          <ImageView Image={P4} />
        </div>
      </div>
    </div>
  );
}

export default PageLeft;
