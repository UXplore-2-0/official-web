import React from 'react';

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

import './Timeline.css';

gsap.registerPlugin(ScrollTrigger);

function Timeline() {

  useGSAP(() => {
    gsap.utils.toArray(".inner-container").forEach((div) => {
      gsap.from(div, {
        opacity: 0,
        scale: 0,
        y: 50,
        duration: 1.6,
        scrollTrigger: {
          trigger: div,
          start: "top 95%",
          end: "top 70%",
          scrub: true,
          toggleActions: "play none none none",
          markers: true,
        },
      });
    });

    gsap.from('.timeline-title h1', {
      opacity: 0.5,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: '.timeline-title h1',
        start: "top 90%",
        end: "bottom 70%",
        scrub: true,
        toggleActions: "play none none none",
        markers: true,
      },
    });

    gsap.from('.timeline-title p', {
      opacity: 0,
      y: 35,
      duration: 1.6,
      scrollTrigger: {
        trigger: '.timeline-title p',
        start: "top 90%",
        end: "bottom 70%",
        scrub: true,
        toggleActions: "play none none none",
        markers: true,
      },
    });


  });

  return (
    
    <div className="timeline-backdrop text-white px-10 py-10 md:py-24">

      <div className='timeline-title flex flex-col items-center'>
        <h1 className='mb-1 text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold'>Timeline</h1>
        <p className='text-center text-stone-200 text-sm md:text-base lg:text-lg'>Unraveling the Dynamic Journey through Time in the Mora UXplore 2.0 Evolution</p>
      </div>

      <div className='timeline flex flex-col gap-y-[2em] items-center mx-auto my-[3em] md:my-[5em]'>
          
        <div className='inner-container shadow-lg bg-transparent backdrop-blur-xl border-2 border-solid border-[#888] rounded-2xl w-[225px] md:w-[375px] p-[0.8em] md:p-[1em] lg:p-[1.2em] xl:p-[1.5em]'>
          <p className='text-xs font-normal md:text-base'>February 25</p>
          <h1 className='text-xl md:text-3xl font-bold'>Registration Open</h1>
          <p className='text-xs font-normal md:text-base pt-[3px]'>Through Mora UXplore 2.0 Official Website</p>
        </div>

        <div className='inner-container shadow-lg bg-transparent backdrop-blur-xl border-2 border-solid border-[#888] rounded-2xl w-[225px] md:w-[375px] p-[0.8em] md:p-[1em] lg:p-[1.2em] xl:p-[1.5em]'>
          <p className='text-xs font-normal md:text-base'>March 2</p>
          <h1 className='text-xl md:text-3xl font-bold'>Awareness Session</h1>
          <p className='text-xs font-normal md:text-base pt-[3px]'>Via Zoom</p>
        </div>

        <div className='inner-container shadow-lg bg-transparent backdrop-blur-xl border-2 border-solid border-[#888] rounded-2xl w-[225px] md:w-[375px] p-[0.8em] md:p-[1em] lg:p-[1.2em] xl:p-[1.5em]'>
          <p className='text-xs font-normal md:text-base'>March 9</p>
          <h1 className='text-xl md:text-3xl font-bold'>Registration Closing</h1>
          <p className='text-xs font-normal md:text-base pt-[3px]'>Through Mora UXplore 2.0 Official Website</p>
        </div>

        <div className='inner-container shadow-lg bg-transparent backdrop-blur-xl border-2 border-solid border-[#888] rounded-2xl w-[225px] md:w-[375px] p-[0.8em] md:p-[1em] lg:p-[1.2em] xl:p-[1.5em]'>
          <p className='text-xs font-normal md:text-base'>March 16</p>
          <h1 className='text-xl md:text-3xl font-bold'>Workshop 01</h1>
          <p className='text-xs font-normal md:text-base pt-[3px]'>Via Zoom</p>
        </div>

        <div className='inner-container shadow-lg bg-transparent backdrop-blur-xl border-2 border-solid border-[#888] rounded-2xl w-[225px] md:w-[375px] p-[0.8em] md:p-[1em] lg:p-[1.2em] xl:p-[1.5em]'>
          <p className='text-xs font-normal md:text-base'>March 30</p>
          <h1 className='text-xl md:text-3xl font-bold'>Workshop 02</h1>
          <p className='text-xs font-normal md:text-base pt-[3px]'>Via Zoom</p>
        </div>

        <div className='inner-container shadow-lg bg-transparent backdrop-blur-xl border-2 border-solid border-[#888] rounded-2xl w-[225px] md:w-[375px] p-[0.8em] md:p-[1em] lg:p-[1.2em] xl:p-[1.5em]'>
          <p className='text-xs font-normal md:text-base'>April 9</p>
          <h1 className='text-xl md:text-3xl font-bold'>Semi Finals</h1>
          <p className='text-xs font-normal md:text-base pt-[3px]'>At University Premises</p>
        </div>

        <div className='inner-container shadow-lg bg-transparent backdrop-blur-xl border-2 border-solid border-[#888] rounded-2xl w-[225px] md:w-[375px] p-[0.8em] md:p-[1em] lg:p-[1.2em] xl:p-[1.5em]'>
          <p className='text-xs font-normal md:text-base'>April 27</p>
          <h1 className='text-xl md:text-3xl font-bold'>Final Designathon & Award Ceremony</h1>
          <p className='text-xs font-normal md:text-base pt-[3px]'>At University Premises</p>
        </div>
          
      </div>
    </div>
    
  )
}

export default Timeline