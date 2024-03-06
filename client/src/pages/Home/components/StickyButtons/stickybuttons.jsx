
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
    <div className = "sticky-buttons-container-wrapper">
    
    <img src="./sponsor/LeftDuo.svg" alt="arrow"  className = "arrow-image"/>
   {/* <img src="./sponsor/Rectangle.svg" alt="arrow"  className = "rectangle"/>
    */}
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
        Guidelines
      </button>
      <button className="sticky-buttons-container-button" onClick={() => scrollToSection('sponsorships')}>
        Partners
      </button>
      <button className="circular-sticky-button">Register</button>
      <button className="sticky-buttons-container-button" onClick={() => scrollToSection('contact')}>
        Contact Us
      </button>
    </div>
    </div>
  );
}

export default StickyButton;
