import React from 'react'
import './Intro.css'

function Intro() {
  return (
    <>
     <section  className="intro-backdrop">
        <div class="container mx-auto ">
            <div class="lg:flex bg-brown bg-blue flex-wrap lg:mx-5 py-7">
                <div class="box1 lg:basis-1/2 md:text-center text-center sm:text-center lg:text-start">
                    <span class="lg:text-[124px] md:text-[90px] sm:text-[64px] text-[48px] leading-[1] text-white font-[300]" style={{ fontFamily: "sans-serif" }}>WHAT IS UXPLORE 2.0 </span>
                    <img src="./logo.png" alt="" class="logo w-48 lg:mt-16 md:hidden sm:hidden hidden lg:block "/>
                </div>
                <div class="box2  lg:basis-4/6 lg:mt-72 md:mt-8 sm:mt-8 mt-10 lg:-mx-60">
                    <span class="lg:text-[22px] md:text-[20px] sm:text-[18px] text-[16px] text-white font-[200]" style={{ fontFamily: "rubik,sans-serif" }}>Mora UXplore 1.0 is an event initiated by the IEEE Student Branch of University of Moratuwa. This event is conducted for the first time. Mora UXplore is a UI/UX designing competition bringing all undergraduates together with creativity and user-friendly creations. Mora UXplore is open to all undergraduates in any university who are enthusiastic to create UI/UX. This event consists of an awareness session, three workshops, three rounds and a final designathon. We are expecting 150+ teams consisting of 450+ participants.</span>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Intro