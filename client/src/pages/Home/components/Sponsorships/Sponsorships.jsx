import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./sponsorship.css";

gsap.registerPlugin(useGSAP);

function Sponsorships() {
  const logos = [
    './sponsor/zone24x7-logo - Light Background.png',
    './sponsor/IEEEYoungProfessionalsLogoTM_RGB_Horiz.png',
    './sponsor/zone24x7-logo - Light Background.png',
    './sponsor/IEEEYoungProfessionalsLogoTM_RGB_Horiz.png',
  ];

  const containerRef = useRef();

  useGSAP(() => {
    // GSAP animation
    const tl = gsap.timeline({ repeat: -1 });

    // Calculate the total width of all slides
    const totalWidth = logos.length * 100;

    // Animate the slide container to move left indefinitely
    tl.to(containerRef.current, {
      x: `-${totalWidth}%`,
      duration: 20, // Adjust as needed based on the speed you desire
      ease: "linear",
    });
  }, { scope: containerRef });

  return (
    <section id="sponsorship-backdrop" className="py-16">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-medium text-white">OUR PARTNERS</h2>
        </div>
        <div className="overflow-hidden relative flex items-center">
          <div className="flex items" ref={containerRef}>
            

         
            

          {logos.map((logo, index) => (
  <div>
  <img
    key={index}
    src={logo.path}
    alt={`Logo ${index + 1}`}
    className="mx-2 md:mx-4 lg:mx-6 xl:mx-8 w-1/2"
    style={{ backgroundColor: "white", borderRadius: "10px", height: "200px" , width : "auto"}}
  />
  </div>
))}

            



           
            {logos.map((logo, index) => (
              
              <img
                key={index}
                src={logo}
                alt={`Logo ${index + 1}`}
                className="mx-2 md:mx-4 lg:mx-6 xl:mx-8 w-1/2 h-1/2"
                style={{ backgroundColor: "white", borderRadius: "10px" , height: "200px" , width : "auto"}}
              />
              
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sponsorships;
