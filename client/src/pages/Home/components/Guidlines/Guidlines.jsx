import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Guidlines() {
  useGSAP(() => {
    gsap.from(".char", {
      duration: 0.8,
      scrollTrigger: {
        trigger: ".char",
        start: "top 90%",
        markers: false,
      },
      opacity: 0,
      scale: 0,
      y: 100,
      rotationX: 180,
      transformOrigin: "0% 50% -50",
      ease: "back",
      stagger: 0.015,
    });

    gsap.from(".points-block", {
      duration: 0.8,
      opacity: 0,
      x: -100,
      ease: "ease-in-out",
      delay: 0.5,
      stagger: 0.05,
    });
    gsap.from(".characters", {
      scrollTrigger: {
        trigger: ".characters",
        start: "-10% 90%",
        end: "bottom 56%",
        scrub: true,
        markers: false,
      },
      opacity: 0,
      stagger: 0.5,
      x: 20,
      transformOrigin: "60% 50% -100",
      ease: "ease-in",
    });
  }, []);

  const sentence1 = "sdfvsdefdsvdse  dsbfkbka bsakcb hjsb kc";

  const sentence2 = "Hello, GSAP is awesome gsd! ugasbuzdb ushncihn hnduiaHNXS";
  const sentence3 =
    "Hello, GSAP is awesome hjbaszjba! BAIBIU HIHXA UHOHisbx jnhaho";
  const sentence4 =
    "Hello, GSAP is awesome hjbaszjba! BAIBIU HIHXA UHOHisbx jnhaho";
  const sentence5 =
    "Hello, GSAP is awesome hjbaszjba! BAIBIU HIHXA UHOHisbx jnhaho";
  const sentence6 =
    "Hello, GSAP is awesome hjbaszjba! BAIBIU HIHXA UHOHisbx jnhaho";
  const sentence7 =
    "Hello, GSAP is awesome hjbaszjba! BAIBIU HIHXA UHOHisbx jnhaho";

  const array = [
    sentence1,
    sentence2,
    sentence3,
    sentence4,
    sentence5,
    sentence6,
    sentence7,
  ];

  gsap.registerPlugin(ScrollTrigger);
  return (
    <div
      className="w-[100%] h-[100%] flex flex-col bg-cover justify-between py-11 sm:flex-row-reverse"
      style={{
        backgroundImage:
          "url('https://rare-gallery.com/thumbs/1180321-sea-artwork-underwater-light-ocean-darkness.jpg')",
      }}
    >
      <div className="text-[45px] text-white rounded-xl mb-3 ml-5 p-3 guidelines flex items-center mr-8 md:text-[96px] sm:text-[45] w-full sm:justify-end sm:ml-0">
        {"GUIDELINES".split("").map((characters, index) => {
          return characters === " " ? (
            <span key={index}>&nbsp;</span>
          ) : (
            <span key={index} className="characters font-medium">
              {characters}
            </span>
          );
        })}
      </div>
      <div className="bg-white/0 mb-3 points-block backdrop-blur-md w-full sm:max-w-[80%]">
        {array.map((sentence, index) => {
          return (
            <div key={index} className="ml-5  text-white  p-3 flex-wrap">
              <div
                className="flex ml-2 text-sm text-white/40 flex-wrap sm:text-base md:text-lg"
                style={{ fontFamily: "rubik,sans-serif" }}
              >
                {sentence.split("").map((char, index) => {
                  return char === " " ? (
                    <span key={index}>&nbsp;</span>
                  ) : (
                    <span key={index} className="char">
                      {char}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
