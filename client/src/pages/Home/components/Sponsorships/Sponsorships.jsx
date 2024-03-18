import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import "./sponsorship.css";

function Sponsorships() {
  const logos = [
    {
      src: "./sponsor/zone24x7-logo - Light Background.png",
      text: "Zone 24x7",
    },
    {
      src: "./sponsor/IEEEYoungProfessionalsLogoTM_RGB_Horiz.png",
      text: "IEEE Young Professionals",
    },
    {
      src: "./sponsor/zone24x7-logo - Light Background.png",
      text: "Zone 24x7",
    },
    {
      src: "./sponsor/IEEEYoungProfessionalsLogoTM_RGB_Horiz.png",
      text: "IEEE Young Professionals",
    },
  ];

 
  const logosCombined = [...logos, ...logos];

  const containerRef = useRef();

  useEffect(() => {
    const totalWidth = logosCombined.length * 40;

   
    const slideAnimation = gsap.to(containerRef.current, {
      x: `-${totalWidth}%`,
      duration: 20,
      ease: "linear",
      repeat: -1,
    });

   
    const resetAnimation = gsap.to(containerRef.current, {
      x: 0,
      duration: 0,
      onComplete: () => {
        slideAnimation.restart();
      },
    });

    
    slideAnimation.eventCallback("onRepeat", () => {
      resetAnimation.restart();
    });

    return () => {
      slideAnimation.pause();
      resetAnimation.pause();
    };
  }, [logosCombined]);

  return (
    <section id="sponsorship-backdrop" className="py-16">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-medium text-white">
            OUR PARTNERS
          </h2>
        </div>
        <div className="overflow-hidden relative flex items-center">
          <div
            className="flex items "
            ref={containerRef}
            style={{
              width: `${logosCombined.length * 40}%`,
              marginLeft: "-40%",
            }}
          >
            {logosCombined.map((logo, index) => (
              <>
                <img
                  src={logo.src}
                  alt={`Logo ${index + 1}`}
                  className="mx-0.5 md:mx-0.5 lg:mx-0.5 xl:mx-1.25 w-full bg-white p-1 rounded-md"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    transform: "scale(0.56)",
                  }}
                  // <p className="text-white text-center">{logo.text}</p>
                />
              </>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sponsorships;
