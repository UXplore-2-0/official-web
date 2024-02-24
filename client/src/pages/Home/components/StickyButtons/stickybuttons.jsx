
import React from 'react';
import './stickybutton.css';

function StickyButton() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="sticky-buttons-container">
      <button className="sticky-buttons-container-button" onClick={() => scrollToSection('main')}>
        Main
      </button>
      <button className="sticky-buttons-container-button" onClick={() => scrollToSection('Intro')}>
        Intro
      </button>
      <button className="sticky-buttons-container-button" onClick={() => scrollToSection('timeline')}>
        Timeline
      </button>
      <button className="sticky-buttons-container-button" onClick={() => scrollToSection('guidlines')}>
        Guidlines
      </button>
      <button className="sticky-buttons-container-button" onClick={() => scrollToSection('sponsorships')}>
        Sponsorships
      </button>
      {/* <button className="circular-sticky-button">Register</button> */}
    </div>
  );
}

export default StickyButton;
