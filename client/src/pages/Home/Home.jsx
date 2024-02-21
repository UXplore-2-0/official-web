import React, { useRef } from 'react';
import Main from './components/Hero/hero';
import Guidlines from './components/Guidlines/Guidlines';
import Timeline from './components/Timeline/Timeline';
import Sponsorships from './components/Sponsorships/Sponsorships';
import Contacts from './components/Contacts/Contacts';
import Intro from './components/Intro/Intro';

import StickyButton from './components/StickyButtons/stickybuttons';

function Home() {
  const mainRef = useRef(null);
  const introRef = useRef(null);
  // const guidelinesRef = useRef(null);
  const timelineRef = useRef(null);

  console.log("mainRef:", mainRef);
console.log("introRef:", introRef);
// console.log("guidelinesRef:", guidelinesRef);
console.log("timelineRef:", timelineRef);


  return (
    <>
      <StickyButton
        mainRef={mainRef}
        introRef={introRef}
        // guidelinesRef={guidelinesRef}
        timelineRef={timelineRef}
      />
      <Main ref={mainRef} />
  <Intro ref={introRef} />
  {/* <Guidelines ref={guidelinesRef} /> */}
  <Timeline ref={timelineRef} />
      <Sponsorships />
      <Contacts />
    </>
  );
}

export default Home;
