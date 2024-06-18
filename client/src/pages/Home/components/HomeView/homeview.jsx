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
import StickyButton from "../StickyButtons/stickybuttons";
import Shirt from "../Shirt/Shirt";



const HomeView = ({isAnimated}) => {
  

 
  return (
    <div style={{ backgroundColor: "#000" }} id="main">
      {isAnimated ? (
        <div id="main-div-after-animated" style={{ opacity: 0 }}>
          <StickyButton />
          <Hero />
          <Intro />
          <Timeline />
          <Guidlines />
          <Sponsorships />
          <Shirt />
          <Contacts />
        </div>
      ) : (
        <Landing />
      )}
    </div>
  );
};
export default HomeView;
