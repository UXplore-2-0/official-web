import React, { useRef } from 'react';
import Main from './components/Hero/hero';
import {useGSAP} from '@gsap/react'
import { gsap } from "gsap";
// import Guidlines from './components/Guidlines/Guidlines';
// import Timeline from './components/Timeline/Timeline';
// import Sponsorships from './components/Sponsorships/Sponsorships';
// import Contacts from './components/Contacts/Contacts';
// import Intro from './components/Intro/Intro';

import StickyButton from './components/StickyButtons/stickybuttons';

function Home() {
//   const mainRef = useRef(null);
//   const introRef = useRef(null);
//    const guidelinesRef = useRef(null);
//   const timelineRef = useRef(null);

//   console.log("mainRef:", mainRef);
//   console.log("introRef:", introRef);
// console.log("guidelinesRef:", guidelinesRef);
//   console.log("timelineRef:", timelineRef);
useGSAP(() => {
  //set 3 sec delay on sticky button
  gsap.from('.sticky-buttons-container-button, .circular-sticky-button', {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 6
  });
});

  return (

    

    <>
      <StickyButton className = "sticky-buttons-container-button" />
      <Main />
      {/* <Main /> */}
      {/* <Intro /> */}
  {/* <Guidelines ref={guidelinesRef} /> */}
      {/* <Timeline />
      <Sponsorships />
      <Contacts /> */}

    </>
  );
}

export default Home;
