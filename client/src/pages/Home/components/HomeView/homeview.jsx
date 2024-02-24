import { gsap } from "gsap";
import "./homeview.css";
import React from "react";
import { useState } from "react";
import { useGSAP } from "@gsap/react";

import Intro from "../Intro/Intro";
import Timeline from "../Timeline/Timeline";
import Sponsorships from "../Sponsorships/Sponsorships";

import Hero from "../Hero/hero";
import Landing from "../Landing/landing";
import Guidlines from "../Guidlines/Guidlines";
import Contacts from "../Contacts/Contacts";



const HomeView = ({isAnimated}) => {
  

 
  return (
    <div style={{ backgroundColor: "#000" }} id="main">
      {isAnimated ? (
        <div id="main-div-after-animated" style={{ opacity: 0 }}>
          <Hero />
          <Intro />
          <Timeline />
          <Guidlines />
          <Sponsorships />
          <Contacts />
        </div>
      ) : (
        <Landing />
      )}
    </div>
  );
};
export default HomeView;
