import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./Guidlines.css";

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
      stagger: 0.085,
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
      opacity: 0.05,
      stagger: 0.5,
      x: 20,
      transformOrigin: "60% 50% -100",
      ease: "ease-in",
    });
  }, []);

  const sentence1 =
    "The project's success is contingent on adhering to the established guidelines.";

  const sentence2 = "Hello, GSAP is awesome gsd! ugasbuzdb ushncihn hnduiaHNXS";
  const sentence3 =
    "Employees should familiarize themselves with the company's ethical guidelines";
  const sentence4 =
    "The teacher provided clear guidelines for the research paper, including formatting and citation requirements.";
  const sentence5 =
    "The team developed comprehensive guidelines for project management to improve efficiency.";
  const sentence6 =
    "Guidelines for social media use in the workplace help maintain a professional online presence.";
  const sentence7 =
    "When in doubt, consult the guidelines to make informed decisions.";

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
      className="w-[100%] h-[100%] flex flex-col bg-cover justify-between py-11 sm:flex-row-reverse custom-background"
      id = "guidlines"
      // style={{
      //   backgroundImage:
      //     "url('https://rare-gallery.com/thumbs/1180321-sea-artwork-underwater-light-ocean-darkness.jpg')",
      // }}
    >
      <div className="text-[45px] text-white rounded-xl mb-3 ml-5 p-3 guidelines flex items-center mr-8 md:text-[128px] sm:text-[45] w-full sm:justify-end sm:ml-0">
        {"GUIDELINES".split("").map((characters, index) => {
          return characters === " " ? (
            <span key={index}>&nbsp;</span>
          ) : (
            <span key={index} className="characters font-medium" >
              {characters}
            </span>
          );
        })}
      </div>
      <div className="bg-white/0 mb-3 points-block backdrop-blur-md sm:max-w-[80%] w-[100%] justify-center">
        {array.map((sentence, index) => {
          return (
            <div key={index} className="ml-5  text-white  p-3 flex-wrap">
              <div
                className="flex ml-2 text-sm text-white/40 flex-wrap sm:text-base md:text-lg"
                style={{ fontFamily: "rubik,sans-serif" }}
              >
                {sentence.split(" ").map((word, index) => (
                  <span key={index} className="char">
                    {index > 0 && <span>&nbsp;</span>}
                    {word}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
