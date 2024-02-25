import React from "react";
import Logo from "./images/Logo.png";
import SeaImage from "./images/Sea.png";


function EmailVerification() {


  return (
    <>
      <div
        className="relative"
        style={{
          background:
            "linear-gradient(to bottom right, #182B44 5%, #1E3855 15%, #0F2132 40%, #1E455E 95%)",
        }}
      >
        <div className="absolute z-10 w-full flex justify-end top-1/2 sm:top-0">
          <img
            src={SeaImage}
            alt="Sea Image"
            className="fixed object-cover h-lvh w-full sm:w-1/2"
          />
        </div>
        <div className="relative z-20 text-white flex flex-col items-center justify-center w-full min-h-screen">
          <div className="bg-white/5 backdrop-blur-2xl shadow-lg flex flex-col items-center justify-center w-[85%] sm:w-[78%] md:w-[70%] lg:w-[55%] py-8 lg:py-10 xl:py-16 rounded-2xl font-poppins my-5">
            <img
              src={Logo}
              alt="Mora UXplore 2.0 Logo"
              className="w-28 sm:w-32 lg:w-36"
            />
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore repudiandae aspernatur molestiae ad at molestias hic possimus vitae ab, perspiciatis autem nesciunt asperiores nihil ex deserunt quas. Architecto, ipsam vel?</p>
          
          </div>
        </div>
      </div>
    </>
  );
}

export default EmailVerification;
