import React from "react";
import ImageView from "./ImageView";
import P1 from "../images/Hiruna Harankahadeniya.svg";
import P2 from "../images/Hiruna Harankahadeniya.svg";
import P3 from "../images/Hiruna Harankahadeniya.svg";
import P4 from "../images/Hiruna Harankahadeniya.svg";
import ImageText from "./ImageText";

function PageLeft() {
  return (
    <div class="grid justify-items-start">
      <div class="w-full flex flex-row justify-center items-center">
        <ImageView Image={P1} />
        <ImageText
          name="Chasila Withanage"
          lead="Charman of IEEE Student Branch"
          University="University of Moratuwa"
          email="chasilawithange@ieee.org"
          number="+94 71 261 8255"
        />
      </div>

      <div class="w-full flex flex-row justify-center items-center">
        <ImageText
          name="Chasila Withanage"
          lead="Charman of IEEE Student Branch"
          University="University of Moratuwa"
          email="chasilawithange@ieee.org"
          number="+94 71 261 8255"
        />
        <ImageView Image={P2} />
      </div>

      <div class="w-full flex flex-row justify-center items-center">
        <ImageView Image={P3} />
        <ImageText
          name="Chasila Withanage"
          lead="Charman of IEEE Student Branch"
          University="University of Moratuwa"
          email="chasilawithange@ieee.org"
          number="+94 71 261 8255"
        />
      </div>

      <div class="w-full flex flex-row justify-center items-center">
        <ImageText
          name="Chasila Withanage"
          lead="Charman of IEEE Student Branch"
          University="University of Moratuwa"
          email="chasilawithange@ieee.org"
          number="+94 71 261 8255"
        />
        <ImageView Image={P4} />
      </div>
    </div>
  );
}

export default PageLeft;
