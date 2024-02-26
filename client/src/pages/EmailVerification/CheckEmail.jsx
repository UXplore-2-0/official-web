import React from "react";
import Logo from "./images/Logo.png";
import SeaImage from "./images/Sea.png";
import { Link } from "react-router-dom";

function CheckEmail() {


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
            <img src={SeaImage} alt="" className="fixed object-cover h-1vh w-full sm:w-1/2"/>
        </div>
        <div className="relative z-20 text-white flex flex-col items-center justify-center w-full min-h-screen">
          
          <div className="bg-white/5 backdrop-blur-2xl shadow-lg flex flex-col items-center justify-center px-8 md:px-16 py-8 lg:py-10 xl:py-16 rounded-2xl font-poppins my-5">
            <img
              src={Logo}
              alt="Mora UXplore 2.0 Logo"
              className="w-28 sm:w-32 lg:w-36"
            />

             <div className="w-16 h-16 rounded-full bg-cyan-100 py-4 flex items-center justify-center mx-auto my-4">
                <svg
                  aria-hidden="true"
                  className="w-8 h-8 text-cyan-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Success</span>
              </div>
              <p className="mb-8 text-lg md:text-3xl text-center  font-semibold text-white">
                Check your email!
              </p>
              <p className="text-sm text-center  font-medium text-cyan-50">
                Verification sent , please check your email.
              </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckEmail;
