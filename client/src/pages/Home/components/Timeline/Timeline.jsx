import React from 'react';

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Timeline() {

  useGSAP(() => {
    gsap.utils.toArray(".inner-container").forEach((div, index) => {
      gsap.from(div, {
        opacity: 0,
        x: index % 2 === 0 ? "100" : "-100",
        y: 25,
        duration: 1.6,
        scrollTrigger: {
          trigger: div,
          start: "top 90%",
          end: "bottom 60%",
          scrub: true,
          toggleActions: "play none none none",
          markers: true,
        },
      });
    });

    gsap.utils.toArray(".out-bar").forEach((div, index) => {
      gsap.from(div, {
        opacity: 0,
        scale: 0,
        duration: 1.6,
        scrollTrigger: {
          trigger: div,
          start: "top 90%",
          end: "bottom 60%",
          scrub: true,
          toggleActions: "play none none none",
          markers: true,
        },
      });
    });
  });

  return (
    <div className="font-sans bg-[#0F172A] text-white p-8">

    <div className='timeline-title flex flex-col items-center'>
      <h1 className='mb-1 text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold'>Timeline</h1>
      <p className='text-center text-[#0d71fc] lg:text-lg'>The timeline of the Mora UXplore 2.0</p>
    </div>

    <div className='timeline flex flex-col items-center mx-auto my-[5em]'>
      
      <div className='timeline-container relative max-w-[16em] py-[2em] transform
                      md:max-w-[25.15em] md:border-solid md:border-[#888] md:odd:border-l-[3px] md:even:border-r-[3px] md:odd:pl-[3em] md:even:pr-[3em] md:odd:translate-x-[9em] md:even:-translate-x-[9em]
                      lg:min-w-[25em] lg:even:pr-[3em] lg:odd:translate-x-[12.425em] lg:even:-translate-x-[12.425em]'>
        
        <div className='out-bar flex absolute bg-[#888] h-[4em] w-[3px] left-1/2 top-0 transform -translate-y-1/2
                        md:h-[3px] md:w-[3em] md:left-0 md:top-1/2'></div>
        <div className='inner-container min-w-[15em] md:max-w-[25em] border-2 border-solid border-[#888] rounded-2xl p-[0.7em] md:p-[0.8em] lg:p-[1.2em] xl:p-[1.5em] bg-white/[0.2]'>
          <p className='text-xs font-normal md:text-sm xl:text-lg'>April 25</p>
          <h1 className='text-xl md:text-2xl lg:text-3xl font-bold'>Awareness Session</h1>
          <p className='text-xs font-normal md:text-sm xl:text-lg'>Via Zoom</p>
        </div>
        
      </div>

      <div className='timeline-container relative max-w-[16em] py-[2em] transform
                      md:max-w-[25.15em] md:border-solid md:border-[#888] md:odd:border-l-[3px] md:even:border-r-[3px] md:odd:pl-[3em] md:even:pr-[3em] md:odd:translate-x-[9em] md:even:-translate-x-[9em]
                      lg:min-w-[25em] lg:even:pr-[3em] lg:odd:translate-x-[12.425em] lg:even:-translate-x-[12.425em]'>
        
        <div className='out-bar flex absolute bg-[#888] h-[4em] w-[3px] left-1/2 top-0 transform -translate-y-1/2
                        md:h-[3px] md:w-[3em] md:left-full md:ml-[-3em] md:top-1/2'></div>
        <div className='inner-container min-w-[15em] md:max-w-[25em] border-2 border-solid border-[#888] rounded-2xl p-[0.7em] md:p-[0.8em] lg:p-[1.2em] xl:p-[1.5em] bg-white/[0.2]'>
          <p className='text-xs font-normal md:text-sm xl:text-lg'>April 29</p>
          <h1 className='text-xl md:text-2xl lg:text-3xl font-bold'>Workshop 01</h1>
          <p className='text-xs font-normal md:text-sm xl:text-lg'>Via Zoom</p>
        </div>
        
      </div>

      <div className='timeline-container relative max-w-[16em] py-[2em] transform
                      md:max-w-[30.15em] md:border-solid md:border-[#888] md:odd:border-l-[3px] md:even:border-r-[3px] md:odd:pl-[3em] md:even:pr-[3em] md:odd:translate-x-[9em] md:even:-translate-x-[9em]
                      lg:min-w-[25em] lg:even:pr-[3em] lg:odd:translate-x-[12.425em] lg:even:-translate-x-[12.425em]'>
        
        <div className='out-bar flex absolute bg-[#888] h-[4em] w-[3px] left-1/2 top-0 transform -translate-y-1/2
                        md:h-[3px] md:w-[3em] md:left-0 md:top-1/2'></div>
        <div className='inner-container min-w-[15em] md:max-w-[25em] border-2 border-solid border-[#888] rounded-2xl p-[0.7em] md:p-[0.8em] lg:p-[1.2em] xl:p-[1.5em] bg-white/[0.2]'>
          <p className='text-xs font-normal md:text-sm xl:text-lg'>April 30</p>
          <h1 className='text-xl md:text-2xl lg:text-3xl font-bold'>Round 01</h1>
          <p className='text-xs font-normal md:text-sm xl:text-lg'>Through Mora UXplore Website</p>
        </div>
        
      </div>

      <div className='timeline-container relative max-w-[16em] py-[2em] transform
                      md:max-w-[25.15em] md:border-solid md:border-[#888] md:odd:border-l-[3px] md:even:border-r-[3px] md:odd:pl-[3em] md:even:pr-[3em] md:odd:translate-x-[9em] md:even:-translate-x-[9em]
                      lg:min-w-[25em] lg:even:pr-[3em] lg:odd:translate-x-[12.425em] lg:even:-translate-x-[12.425em]'>
        
        <div className='out-bar flex absolute bg-[#888] h-[4em] w-[3px] left-1/2 top-0 transform -translate-y-1/2
                        md:h-[3px] md:w-[3em] md:left-full md:ml-[-3em] md:top-1/2'></div>
        <div className='inner-container min-w-[15em] md:max-w-[25em] border-2 border-solid border-[#888] rounded-2xl p-[0.7em] md:p-[0.8em] lg:p-[1.2em] xl:p-[1.5em] bg-white/[0.2]'>
          <p className='text-xs font-normal md:text-sm xl:text-lg'>May 06</p>
          <h1 className='text-xl md:text-2xl lg:text-3xl font-bold'>Workshop 02</h1>
          <p className='text-xs font-normal md:text-sm xl:text-lg'>Via Zoom</p>
        </div>
        
      </div>

      <div className='timeline-container relative max-w-[16em] py-[2em] transform
                      md:max-w-[25.15em] md:border-solid md:border-[#888] md:odd:border-l-[3px] md:even:border-r-[3px] md:odd:pl-[3em] md:even:pr-[3em] md:odd:translate-x-[9em] md:even:-translate-x-[9em]
                      lg:min-w-[25em] lg:even:pr-[3em] lg:odd:translate-x-[12.425em] lg:even:-translate-x-[12.425em]'>
        
        <div className='out-bar flex absolute bg-[#888] h-[4em] w-[3px] left-1/2 top-0 transform -translate-y-1/2
                        md:h-[3px] md:w-[3em] md:left-0 md:top-1/2'></div>
        <div className='inner-container min-w-[15em] md:max-w-[25em] border-2 border-solid border-[#888] rounded-2xl p-[0.7em] md:p-[0.8em] lg:p-[1.2em] xl:p-[1.5em] bg-white/[0.2]'>
          <p className='text-xs font-normal md:text-sm xl:text-lg'>May 07</p>
          <h1 className='text-xl md:text-2xl lg:text-3xl font-bold'>Round 02</h1>
          <p className='text-xs font-normal md:text-sm xl:text-lg'>Through Mora UXplore Website</p>
        </div>
        
      </div>

      <div className='timeline-container relative max-w-[16em] py-[2em] transform
                      md:max-w-[25.15em] md:border-solid md:border-[#888] md:odd:border-l-[3px] md:even:border-r-[3px] md:odd:pl-[3em] md:even:pr-[3em] md:odd:translate-x-[9em] md:even:-translate-x-[9em]
                      lg:min-w-[25em] lg:even:pr-[3em] lg:odd:translate-x-[12.425em] lg:even:-translate-x-[12.425em]'>
        
        <div className='out-bar flex absolute bg-[#888] h-[4em] w-[3px] left-1/2 top-0 transform -translate-y-1/2
                        md:h-[3px] md:w-[3em] md:left-full md:ml-[-3em] md:top-1/2'></div>
        <div className='inner-container min-w-[15em] md:max-w-[25em] border-2 border-solid border-[#888] rounded-2xl p-[0.7em] md:p-[0.8em] lg:p-[1.2em] xl:p-[1.5em] bg-white/[0.2]'>
          <p className='text-xs font-normal md:text-sm xl:text-lg'>June 03</p>
          <h1 className='text-xl md:text-2xl lg:text-3xl font-bold'>Workshop 03</h1>
          <p className='text-xs font-normal md:text-sm xl:text-lg'>At University Premises</p>
        </div>
        
      </div>

      <div className='timeline-container relative max-w-[16em] py-[2em] transform
                      md:max-w-[25.15em] md:border-solid md:border-[#888] md:odd:border-l-[3px] md:even:border-r-[3px] md:odd:pl-[3em] md:even:pr-[3em] md:odd:translate-x-[9em] md:even:-translate-x-[9em]
                      lg:min-w-[25em] lg:even:pr-[3em] lg:odd:translate-x-[12.425em] lg:even:-translate-x-[12.425em]'>
        
        <div className='out-bar flex absolute bg-[#888] h-[4em] w-[3px] left-1/2 top-0 transform -translate-y-1/2
                        md:h-[3px] md:w-[3em] md:left-0 md:top-1/2'></div>
        <div className='inner-container min-w-[15em] md:max-w-[25em] border-2 border-solid border-[#888] rounded-2xl p-[0.7em] md:p-[0.8em] lg:p-[1.2em] xl:p-[1.5em] bg-white/[0.2]'>
          <p className='text-xs font-normal md:text-sm xl:text-lg'>June 04</p>
          <h1 className='text-xl md:text-2xl lg:text-3xl font-bold'>Semi Final</h1>
          <p className='text-xs font-normal md:text-sm xl:text-lg'>Through Mora UXplore Website</p>
        </div>
        
      </div>

      <div className='timeline-container relative max-w-[16em] py-[2em] transform
                      md:max-w-[25.15em] md:border-solid md:border-[#888] md:odd:border-l-[3px] md:even:border-r-[3px] md:odd:pl-[3em] md:even:pr-[3em] md:odd:translate-x-[9em] md:even:-translate-x-[9em]
                      lg:min-w-[25em] lg:even:pr-[3em] lg:odd:translate-x-[12.425em] lg:even:-translate-x-[12.425em]'>
        
        <div className='out-bar flex absolute bg-[#888] h-[4em] w-[3px] left-1/2 top-0 transform -translate-y-1/2
                        md:h-[3px] md:w-[3em] md:left-full md:ml-[-3em] md:top-1/2'></div>
        <div className='inner-container min-w-[15em] md:max-w-[25em] border-2 border-solid border-[#888] rounded-2xl p-[0.7em] md:p-[0.8em] lg:p-[1.2em] xl:p-[1.5em] bg-white/[0.2]'>
          <p className='text-xs font-normal md:text-sm xl:text-lg'>June 17</p>
          <h1 className='text-xl md:text-2xl lg:text-3xl font-bold'>Final Designathon</h1>
          <p className='text-xs font-normal md:text-sm xl:text-lg'>At University Premises</p>
        </div>
        
      </div>

      <div className='timeline-container relative max-w-[16em] py-[2em] transform
                      md:max-w-[25.15em] md:border-solid md:border-[#888] md:odd:border-l-[3px] md:even:border-r-[3px] md:odd:pl-[3em] md:even:pr-[3em] md:odd:translate-x-[9em] md:even:-translate-x-[9em]
                      lg:min-w-[25em] lg:even:pr-[3em] lg:odd:translate-x-[12.425em] lg:even:-translate-x-[12.425em]'>
        
        <div className='out-bar flex absolute bg-[#888] h-[4em] w-[3px] left-1/2 top-0 transform -translate-y-1/2
                        md:h-[3px] md:w-[3em] md:left-0 md:top-1/2'></div>
        <div className='inner-container min-w-[15em] md:max-w-[25em] border-2 border-solid border-[#888] rounded-2xl p-[0.7em] md:p-[0.8em] lg:p-[1.2em] xl:p-[1.5em] bg-white/[0.2]'>
          <p className='text-xs font-normal md:text-sm xl:text-lg'>June 17</p>
          <h1 className='text-xl md:text-2xl lg:text-3xl font-bold'>Award Ceremony</h1>
          <p className='text-xs font-normal md:text-sm xl:text-lg'>At University Premises</p>
        </div>
        
      </div>

    </div>
    </div>
  )
}

export default Timeline