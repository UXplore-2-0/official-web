/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect } from "react";
import CountDown from "./CountDown";

const Landing = ({ contact, about }) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("hidden");
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
        entry.target.classList.add("hidden");
      }
    });
  });

  useEffect(() => {
    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));
  }, [observer]);

  return (
    <Fragment>
      <section className="landing">
        <div className="circle circle-1"></div>
        <div className="circle circle-2 hide-sm"></div>
        <div className="logo">
          <div className="logo-img"></div>
          <svg
            id="rectangle-blue"
            viewBox="0 0 237 342"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="100.022"
              height="378.108"
              rx="50"
              transform="matrix(0.902098 0.43153 -0.482048 0.876145 164.266 -15.9815)"
              fill="#005BFF"
              fillOpacity="0.3"
            />
          </svg>
          <svg
            id="rectangle-orange"
            viewBox="0 0 237 342"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="100.022"
              height="378.108"
              rx="50"
              transform="matrix(0.902098 0.43153 -0.482048 0.876145 164.808 -15.9815)"
              fill="#E05BF4"
              fillOpacity="0.3"
            />
          </svg>
          <svg
            id="rectangle-light-blue"
            viewBox="0 0 237 342"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="100.022"
              height="378.108"
              rx="50"
              transform="matrix(0.902098 0.43153 -0.482048 0.876145 164.724 -15.9815)"
              fill="#00FFF2"
              fillOpacity="0.3"
            />
          </svg>
        </div>
        <CountDown />
      </section>
      <section ref={about} id="about" className="about ">
        <div className="custom-shape-divider-top-1679898776">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <div className="about-content">
          <h1 className="vertical-header text-border-blue hidden bottom">
            What is
            <br />
            Uxplore?
          </h1>
          <div className="hidden right">
            <h2>What is Mora UXplore 1.0?</h2>
            <p style={{ lineHeight: "2" }}>
              Mora UXplore 1.0 is an event initiated by the IEEE Student Branch
              of University of Moratuwa. This event is conducted for the first
              time. Mora UXplore is a UI/UX designing competition bringing all
              undergraduates together with creativity and user-friendly
              creations. Mora UXplore is open to all undergraduates in any
              university who are enthusiastic to create UI/UX. This event
              consists of an awareness session, three workshops, three rounds
              and a final designathon. We are expecting 150+ teams consisting of
              450+ participants.
            </p>
          </div>
        </div>
      </section>
      <section className="guidlines text-primary">
        <div>
          <h2 className="hidden top">guidlines</h2>
          <ul className="hidden left">
            <li>
              All the participants must be undergraduates and should be from the
              same university.
            </li>
            <li>One team should consist of a maximum of up to 3 members.</li>
            <li>
              All interested teams must register for the event before the
              deadline specified by the organizing committee.
            </li>
            <li>
              All participating teams will be given a design challenge and have
              to submit their solutions within a specified timeframe.
            </li>
            <li>
              The selected teams from the previous round will move on to the
              next round, where they will be given a more complex design
              challenge.
            </li>
            <li>
              The top 15 teams from round 3 will participate in a final
              designathon, where they will have to work on a more advanced
              design challenge within a limited time frame.
            </li>
          </ul>
        </div>
        <h1 className="vertical-header text-border-gradient hidden top">
          guidlines
        </h1>
      </section>
      <section className="timeline">
        <svg
          id="curve2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,160L60,144C120,128,240,96,360,106.7C480,117,600,171,720,165.3C840,160,960,96,1080,74.7C1200,53,1320,75,1380,85.3L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
        <h1 id="timeline" className="text-border-white hidden shrink">
          Timeline
        </h1>
        <div className="timeline-card ">
          <div className="timeline-card-content hidden left">
            <p>April 25</p>
            <h2>Awareness Session</h2>
            <p>Via Zoom</p>
          </div>
        </div>
        <div className="timeline-card">
          <div className="timeline-card-content hidden right">
            <p>April 29</p>
            <h2>Workshop 01</h2>
            <p>Via Zoom</p>
          </div>
        </div>
        <div className="timeline-card">
          <div className="timeline-card-content hidden left">
            <p>April 30</p>
            <h2>Round 01</h2>
            <p>through Mora UXplore website</p>
          </div>
        </div>
        <div className="timeline-card">
          <div className="timeline-card-content hidden right">
            <p>May 06</p>
            <h2>Workshop 02</h2>
            <p>Via Zoom</p>
          </div>
        </div>
        <div className="timeline-card">
          <div className="timeline-card-content hidden left">
            <p>May 07</p>
            <h2>Round 02</h2>
            <p>through Mora UXplore website</p>
          </div>
        </div>
        <div className="timeline-card">
          <div className="timeline-card-content hidden right">
            <p>June 03</p>
            <h2>Workshop 03</h2>
            <p>at university premises</p>
          </div>
        </div>
        <div className="timeline-card">
          <div className="timeline-card-content hidden left">
            <p>June 04</p>
            <h2>Round 03</h2>
            <p>through Mora UXplore website</p>
          </div>
        </div>
        <div className="timeline-card">
          <div className="timeline-card-content hidden left">
            <p>June 17</p>
            <h2>Final Designathon</h2>
            <p>at university premises</p>
          </div>
        </div>
        <div className="timeline-card">
          <div className="timeline-card-content hidden left">
            <h2>Awards Ceremony</h2>
          </div>
        </div>
      </section>
      <section className="guidlines">
        <div ref={contact} id="contact" className="contacts">
          <div className="contact-card hidden left">
            <img src="./images/Chasila Withanage.jpg" alt="" />
            <div>
              <h4>Chasila Withanage</h4>
              <p>Charman of IEEE Student Branch</p>
              <p>University of Moratuwa</p>
              <p>chasilawithange@ieee.org</p>
              <p>+94 71 261 8255</p>
            </div>
          </div>
          <div className="contact-card hidden left">
            <img src="./images/Hiruna Harankahadeniya.JPG" alt="" />
            <div>
              <h4>Hiruna Harankahadeniya</h4>
              <p>Vice Charman of IEEE Student Branch</p>
              <p>University of Moratuwa</p>
              <p>hiruna.harankahadeniya@ieee.org</p>
              <p>+94 76 267 5516</p>
            </div>
          </div>
          <div className="contact-card hidden left">
            <img src="./images/Yasith Senarath.jpg" alt="" />
            <div>
              <h4>Yasith Senarath</h4>
              <p>Event Co-Chairperson</p>
              <p>IEEE Mora UXplore 1.0</p>
              <p>yasithsenarath@gmail.com</p>
              <p>+94 71 596 0336</p>
            </div>
          </div>
          <div className="contact-card hidden left">
            <img src="./images/Malinsha Vithanage.jpg" alt="" />
            <div>
              <h4>Malinsha Vithanage</h4>
              <p>Event Co-Chairperson</p>
              <p>IEEE Mora UXplore 1.0</p>
              <p>malikgvitha@gmail.com</p>
              <p>+94 70 382 9878</p>
            </div>
          </div>
        </div>
        <h1 className="text-border-blue vertical-header hidden top">
          Contact
          <br />
          Details
        </h1>
      </section>
    </Fragment>
  );
};

export default Landing;
