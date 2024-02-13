import React from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

import './TimelineStyles.css';

gsap.registerPlugin(ScrollTrigger);

function Timeline() {

  useGSAP(() => {
    gsap.utils.toArray(".timeline-container div").forEach((div, index) => {
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
  });

  return (
    <>

    <div className='timeline-title'>
      <h1>Timeline</h1>
      <p>The timeline of the Mora UXplore 2.0</p>
    </div>

    <div className='timeline'>
      
      <div className='timeline-container'>
        <div>
          <p>April 25</p>
          <h1>Awareness Session</h1>
          <p>Via Zoom</p>
        </div>
      </div>

      <div className='timeline-container'>
        <div>
          <p>April 29</p>
          <h1>Workshop 01</h1>
          <p>Via Zoom</p>
        </div>
      </div>

      <div className='timeline-container'>
        <div>
          <p>April 30</p>
          <h1>Round 01</h1>
          <p>Through Mora UXplore Website</p>
        </div>
      </div>

      <div className='timeline-container'>
        <div>
          <p>May 06</p>
          <h1>Workshop 02</h1>
          <p>Via Zoom</p>
        </div>
      </div>

      <div className='timeline-container'>
        <div>
          <p>May 07</p>
          <h1>Round 02</h1>
          <p>Through Mora UXplore Website</p>
        </div>
      </div>

      <div className='timeline-container'>
        <div>
          <p>June 03</p>
          <h1>Workshop 03</h1>
          <p>At University Premises</p>
        </div>
      </div>

      <div className='timeline-container'>
        <div>
          <p>June 04</p>
          <h1>Round 03</h1>
          <p>Through Mora UXplore Website</p>
        </div>
      </div>

      <div className='timeline-container'>
        <div>
          <p>June 17</p>
          <h1>Final Designathon</h1>
          <p>At University Premises</p>
        </div>
      </div>

      <div className='timeline-container'>
        <div>
          <p>June 17</p>
          <h1>Award Ceremony</h1>
          <p>At University Premises</p>
        </div>
      </div>

    </div>
    </>
  )
}

export default Timeline