import { Link } from "react-router-dom";
import Button from "../Loginbutton/button";

import gsap from "gsap/gsap-core";
import React, {useEffect} from "react";

import "./hero.css";

import RegisterButton from "../RegisterButton/registerbutton";

const Hero = () => {



  const numberOfRegistrations = 10;


  useEffect(() => {
    let counter = 0;
    const interval = setInterval(() => {
      if (numberOfRegistrations > 100) {
      if (counter < numberOfRegistrations) {
        counter++;
        document.getElementById("registration-text").innerHTML = counter + "+";
      } else {
        clearInterval(interval);
      }
    }
    }, 10);
    return () => clearInterval(interval);
  });

  const Text  = () => {
    if (numberOfRegistrations > 100) {
      return (
        <>
        <h1 id="registration-text">{numberOfRegistrations}+</h1>
        <h2>REGISTRATIONS</h2>
        </>
      );
    } else {
      return (
        <>
         <h2 id = "intro-text">Shaping Tomorrow's Experiences Today!</h2>
        </>
       
      );
    }
  };
   

  return (
    <section id="section-hero">
      <img
        src="./sponsor/background-sky.jpeg"
        alt="backgroundimage"
        id="animated-page-background"
      />
      <img id="moon" src="./sponsor/moon.png" alt="moon" />
      <img id="cloud-right" src="./sponsor/clouds.png" alt="cloud" />

      <img id="cloud-left" src="./sponsor/clouds-2.png" alt="clouds-2" />


      <img id="ship" src="./sponsor/ship-new.png" alt="ship" />
      <div id = "text-division" >
      <Text />
      </div>

      <img id="logo" src="./sponsor/logowithbg.png" alt="logo" />
      <img src="./sponsor/ieelogo.png"   id="ieelogo" />
      <div
        style={{
          position: "absolute",
          flexDirection: "row",
          display: "flex",
          justifyContent: "right",
          width: "100%",
          right: 0,
          top: 0,
          overflow: "none",
        }}
      >
<Link to="/register">
          <RegisterButton buttonText="REGISTER" style={{ top: 0 }} />
        </Link>

        <Link to="/login">
          {" "}
          <Button buttonText="LOGIN" style={{ top: 0 }} />
        </Link>
        


      </div>
    </section>
  );
};

export default Hero;
