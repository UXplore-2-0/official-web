import React from "react";
import "./Intro.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import logo from "./logo.png";
import Button from "../Loginbutton/button";

function Intro() {
  useGSAP(() => {
    gsap.from(".text1", {
      duration: 3,
      x: 100,
      stagger: 1,
      scrollTrigger: {
        trigger: ".box2",
        start: "top 80%",
        end: "bottom 40%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(".text2", {
      duration: 3,
      x: -20,
      stagger: 1,
      scrollTrigger: {
        trigger: ".box2",
        start: "top 80%",
        end: "bottom 40%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(".text3", {
      duration: 3,
      x: 150,
      stagger: 1,
      scrollTrigger: {
        trigger: ".box2",
        start: "top 80%",
        end: "bottom 40%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(".explanation", {
      duration: 3,
      opacity: 0,
      ease: "slow(0.7,0.7,false)",
      scrollTrigger: {
        trigger: ".box2",
        start: "top 60%",
        end: "bottom 40%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(".logo", {
      duration: 3,
      opacity: 0,
      delay: 0.5,
      scrollTrigger: {
        trigger: ".box2",
        // start: "top 60%",

        end: "bottom 40%",
        toggleActions: "play none none none",
      },
    });


  }, []);
  gsap.registerPlugin(ScrollTrigger);

  return (
    <>
      <section className="intro-backdrop main-section">
        <div id="Intro" class="container mx-auto ">
          <div class="lg:flex bg-brown bg-blue flex-wrap lg:mx-5 py-9">
            <div class="box1 lg:basis-1/2 md:text-center text-center sm:text-center lg:text-start">
              <span
                class="lg:text-[124px] md:text-[90px] sm:text-[64px] text-[48px] leading-[1]   heading font-medium"
                style={{ fontFamily: "Roboto" }}
              >
                <div class="text-white text1">What is</div>{" "}
                <div class="text-white text2">MORA</div>{" "}
                <div class="text-white text3"> UXplore 2.0</div>
              </span>
              <img
                src={logo}
                alt=""
                className="logo w-48 lg:mt-40 md:hidden sm:hidden hidden lg:block opacity-1"
              />
            </div>
            <div class="box2  lg:basis-4/6 lg:mt-96 md:mt-8 sm:mt-8 mt-10 lg:-mx-60 mx-10">
              <span
                class="lg:text-[22px] md:text-[20px] sm:text-[18px] text-[16px] text-white font-[200] explanation opacity-1"
                
              >
               Mora UXplore 2.0 is an event initiated by the IEEE Student
                Branch of the University of Moratuwa. This event is conducted
                for the second consecutive year, followed by the success of its
                inaugural counterpart, Mora UXplore 1.0 in 2023. Mora UXplore is
                a UI/UX designing competition, that brings together all
                enthusiastic undergraduates through creativity and user-friendly
                creations. The event welcomes undergraduates from all
                universities with a passion for UI/UX. Mora UXplore 2.0 consists
                of an awareness session, three instructive workshops, three
                competitive rounds, and a final designathon. It’s expected to
                accompany 500+ teams consisting of over 1,500
                participants for the event.
              </span>
            </div>
          </div>
        </div>
        {/* <Button buttonText="DOWNLOAD PDF" style={{ bottom: 0 }} /> */}
      </section>
    </>
  );
}

export default Intro;
