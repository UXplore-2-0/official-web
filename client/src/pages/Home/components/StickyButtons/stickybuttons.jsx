
import React from 'react';
import './stickybutton.css';

function StickyButton({ mainRef, introRef, timelineRef }) {
  const scrollToRef = (ref) => {
    if (ref && ref.current) {
      const yOffset = -80;
      const y = ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    } else {
      console.error('Ref object is null or not initialized:', ref);
    }
  };
  return (
    <div className="sticky-buttons-container">
      <button className="sticky-buttons-container-button" ><a href='#main'>Main </a></button>
      <button className="sticky-buttons-container-button"><a href="#Intro"> Intro </a></button>
      {/* <button className="sticky-buttons-container-button" onClick={() => scrollToRef(guidelinesRef)}>Guidelines</button> */}
      <button className="sticky-buttons-container-button"  > <a href="#timeline">Timeline</a></button>
      <button className= "circular-sticky-button">Register</button>
    </div>
  );
}

export default StickyButton;
