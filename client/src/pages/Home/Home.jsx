
import React, { useState } from "react";
import HomeView from "./components/HomeView/homeview";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Guidlines from './components/Guidlines/Guidlines';
// import Timeline from './components/Timeline/Timeline';
// import Sponsorships from './components/Sponsorships/Sponsorships';
// import Contacts from './components/Contacts/Contacts';
// import Intro from './components/Intro/Intro

import StickyButton from "./components/StickyButtons/stickybuttons";
gsap.registerPlugin(ScrollTrigger);
function Home() {
  const [isAnimated, setIsAnimated] = useState(false);
  // useGSAP(() => {
  //   gsap.from(".rectangle, .arrow-image, .sticky-buttons-container, .sticky-buttons-container-button", {
  //     opacity: 0,
  //     y: 50,
  //     duration: 1,
  //     delay: 6,
     

  //   });
  // });

  useGSAP(
    () => {
      let timeLine = gsap.timeline();
      const numBlinks = 14;

      for (let i = 0; i <= numBlinks; i++) {
        timeLine.to(
          "#uxplore-landing-right, #mora-landing-left, #mora-landing-right, #logo-landing, #uxplore-landing",
          {
            opacity: 0,
            duration: 0.1,
            ease: "power1.inOut",
          }
        );

        if (i % 6 === 0) {
          timeLine.to("#mora-landing-left", {
            opacity: 1,
            duration: 0.1,
            ease: "power1.inOut",
          });
        } else if (i % 6 === 3) {
          timeLine.to("#uxplore-landing", {
            opacity: 1,
            duration: 0.1,
            ease: "power1.inOut",
          });
        } else if (i % 6 === 4) {
          timeLine.to("#mora-landing-right", {
            opacity: 1,
            duration: 0.1,
            ease: "power1.inOut",
          });
        } else if (i === 14) {
          timeLine.to("#logo-landing", {
            opacity: 1,
            duration: 1.5,
            ease: "power1.inOut",
            onComplete: function () {
              setIsAnimated(true);
            },
          });
        } else {
          timeLine.to("#uxplore-landing-right", {
            opacity: 1,
            duration: 0.1,
            ease: "power1.inOut",
            delay: 0.05,
          });
        }
      }
      gsap.to("#main-div-after-animated", {
        opacity: 1,
        ease: "power1.inOut",
      });

      

      // gsap.to("#ship", {
      //   x: 100,
      //   delay: 1,
      //   duration: 1,
      // });
      //scale up scale down forever
      // gsap.to("#registration-button", {
      //   scale: 1.1,
      //   duration: 1,
      //   repeat: -1,

      //   yoyo: true,
      // });
      
      // gsap.to("#title-1", {
      //   scrollTrigger: {
      //     scrub: 1,
      //   },
      //   scale: 2.5,
      // });

      gsap.to("#ship", {
        scrollTrigger: {
          scrub: 1,
        },
        scale: 0.3,
        y: 600,
      });

      gsap.to("#cloud-left", {
        scrollTrigger: {
          scrub: 1,
        },
        scale: 2.25,
      });

      gsap.to("#cloud-right", {
        scrollTrigger: {
          scrub: 1,
        },
        scale: 2.25,
      });

      gsap.to("#moon", {
        scrollTrigger: {
          scrub: 1,
        },
        scale: 1.25,
        y: 1000,
        x: -300,
      });

      
    },
    { scope: document.getElementById("container"), dependencies: [isAnimated] }
  );


  return (
    <>
      
     
      <HomeView isAnimated={isAnimated} />

     
    </>
  );
}

export default Home;
