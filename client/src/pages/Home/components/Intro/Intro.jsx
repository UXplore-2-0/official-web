import React from 'react'
import './Intro.css'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import logo from './logo.png'



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
    
        gsap.from("img", {
          duration: 3,
          opacity: 0,
          delay: 0.5,
          scrollTrigger: {
            trigger: ".box2",
            start: "top 60%",
            end: "bottom 40%",
            toggleActions: "play none none none",
          },
        });
    
        gsap.fromTo(".main-section", {
          scale: 1.1
        }, {
          duration: 5,
          scale: 1,
          ease: 'power1.inOut',
          yoyo: true,
          scrollTrigger: {
            trigger: ".main-section",
            start: "top top",
            end: "bottom bottom",
            start: "top 60%",
            end: "bottom 40%",
            toggleActions: "play none none none",
          }
        });
      }, []);
    gsap.registerPlugin(ScrollTrigger);

  return (
    <>
     <section  className="intro-backdrop main-section">
        <div class="container mx-auto ">
            <div class="lg:flex bg-brown bg-blue flex-wrap lg:mx-5 py-7">
                <div class="box1 lg:basis-1/2 md:text-center text-center sm:text-center lg:text-start">
                    <span class="lg:text-[124px] md:text-[90px] sm:text-[64px] text-[48px] leading-[1]   heading font-medium" style={{ fontFamily: "Raleway" }}>
                    <div class="text-white text1">WHAT IS</div> <div class="text-white text2">UXPLORE</div>  <div class="text-white text3"> 2.0</div>

                    </span>
                    <img src={logo} alt="" className="logo w-48 lg:mt-48 md:hidden sm:hidden hidden lg:block opacity-1"/>
                </div>
                <div class="box2  lg:basis-4/6 lg:mt-96 md:mt-8 sm:mt-8 mt-10 lg:-mx-60 mx-10">
                    <span class="lg:text-[22px] md:text-[20px] sm:text-[18px] text-[16px] text-white font-[200] explanation opacity-1" style={{ fontFamily: "rubik,sans-serif" }}>Mora UXplore 1.0 is an event initiated by the IEEE Student Branch of University of Moratuwa. This event is conducted for the first time. Mora UXplore is a UI/UX designing competition bringing all undergraduates together with creativity and user-friendly creations. Mora UXplore is open to all undergraduates in any university who are enthusiastic to create UI/UX. This event consists of an awareness session, three workshops, three rounds and a final designathon. We are expecting 150+ teams consisting of 450+ participants.</span>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Intro