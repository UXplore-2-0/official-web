import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import "./sponsorship.css";

function Sponsorships() {
  const logos = [
    './sponsor/zone24x7-logo - Light Background.png',
    './sponsor/IEEEYoungProfessionalsLogoTM_RGB_Horiz.png',
    './sponsor/zone24x7-logo - Light Background.png',
    './sponsor/IEEEYoungProfessionalsLogoTM_RGB_Horiz.png',
  ];

  const containerRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });
    const totalWidth = logos.length * 100;

    tl.to(containerRef.current, {
      x: `-${totalWidth}%`,
      duration: 20,
      ease: "linear",
    });
  }, [logos]);

  return (
    <section id="sponsorship-backdrop" className="py-16">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-medium text-white">OUR PARTNERS</h2>
        </div>
        <div className="overflow-hidden relative flex items-center">
          <div className="flex items" ref={containerRef} style={{ width: `${logos.length * 100}%` }}>
            {logos.map((logo, index) => (
              <div key={index}
              >
              <img
                
                src={logo}
                alt={`Logo ${index + 1}`}
                className="mx-2 md:mx-4 lg:mx-6 xl:mx-8 w-1/2 h-1/2"
                style={{ backgroundColor: "white", borderRadius: "10px", height: "200px", width: "auto" }}
              />
              <p>{logo == './sponsor/zone24x7-logo - Light Background.png' ? "Zone24x7" : "IEEE Young Professionals"}</p>
              </div>
            ))}
            {logos.map((logo, index) => (
              <div key={index}
              >
              <img 
                
                src={logo}
                alt={`Logo ${index + 1}`}
                className="mx-2 md:mx-4 lg:mx-6 xl:mx-8 w-1/2 h-1/2"
                style={{ backgroundColor: "white", borderRadius: "10px", height: "200px", width: "auto" }}
              />
              <p>{logo == './sponsor/zone24x7-logo - Light Background.png' ? "Zone24x7" : "IEEE Young Professionals"}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sponsorships;
