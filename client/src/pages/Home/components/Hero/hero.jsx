
import Button from "../Loginbutton/button";

import "./hero.css";
const Hero = () => {
  return (
    <section id = "section-hero">
      <img
        src="./sponsor/background-sky.jpeg"
        alt="backgroundimage"
        id="animated-page-background"
      />
      <img id="moon" src="./sponsor/moon.png" alt="moon" />
      <img id="cloud-right" src="./sponsor/clouds.png" alt="cloud" />

      <img id="cloud-left" src="./sponsor/clouds-2.png" alt="clouds-2" />

      <img id="ship" src="./sponsor/ship-new.png" alt="ship" />

      <img id="logo" src="./sponsor/logowithbg.png" alt="logo" />

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
        <Button buttonText="LOGIN" style={{ top: 0 }} />
        <Button buttonText="REGISTER" style={{ top: 0 }} />
      </div>
    </section>
  );
};

export default Hero;
