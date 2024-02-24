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
    "All participants must be currently enrolled undergraduates, and all team members should be from the same university or institute.";

  const sentence2 =
    "One team should consist of a maximum of three members and minimum of two members.";
  const sentence3 =
    "All interested teams must register for the event before the deadline. Registrations after the deadline are not approved.";
  const sentence4 =
    "All participating teams will be assigned a design challenge to which the solutions must be submitted within the specified timeframe.";
  const sentence5 =
    "Teams may use any design platform of their choice for the competition.";
  const sentence6 =
    "Each team can submit only one entry at the submission rounds.";
  const sentence7 =
    "All entries must be submitted through the official Mora UXPlore 2.0 Website.";
  const sentence8 =
    "Participants will engage in two preliminary rounds, followed by a semi-final and the final designathon.";
  const sentence9 =
    "Copying another project or plagiarism is strictly prohibited.";

  const array = [
    sentence1,
    sentence2,
    sentence3,
    sentence4,
    sentence5,
    sentence6,
    sentence7,
    sentence8,
    sentence9,
  ];

  gsap.registerPlugin(ScrollTrigger);
  return (
    <div className="w-[100%] h-[100%] flex flex-col bg-cover  py-11 lg:flex-row-reverse lg:flex-end lg:text-[120px] justify-between">
      <div className="text-[45px] text-white rounded-xl mb-3 ml-5 p-3 guidelines flex items-center mr-8  w-full sm:ml-5 md:flex-end md:text-[60px] min-[1222px]:text-[100px] lg:justify-center justify-center">
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
