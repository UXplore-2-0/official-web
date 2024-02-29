import React from 'react';
import logo from './logo.png';
import { Link } from 'react-router-dom';


function Terms() {
  return (
    <div className="">
      <div className="container logo-section mt-3">
        <img src={logo} alt="" className="w-32" />
      </div>

      <div className="container mx-auto text-white mt-5">
        <div className="sm:mx-5 mx-5 lg:mx-0">
          <p className="text-[22px] font-bold">Terms and Conditions</p>
          <ul className="text-[16px] list-disc list-inside mt-6 lg:space-y-2 md:space-y-2 sm:space-y-4 space-y-4">
            <li>By creating an account on the website, users agree to comply with these terms and conditions.</li>
            <li>All content provided on the website, including text, graphics, images, and the official event logo, is the property of Mora UXplore 2.0 and protected by copyright laws.</li>
            <li>Users agree to use the website solely for lawful purposes and in accordance with these terms and conditions.</li>
            <li>Users may be required to create an account to access certain features of the website. Account holders are responsible for maintaining the confidentiality of their account credentials and are liable for any activities conducted through their accounts.</li>
            <li>Details of the registered competitors for the event shall be shared with the industry sponsors of Mora UXPlore 2.0.</li>
            <li>All trademarks, service marks, and logos displayed on the website are the property of their respective owners and may not be used without permission.</li>
            <li>The website may contain links to third-party websites or resources. Mora UXplore 2.0 is not responsible for the content or availability of these external sites and does not endorse or guarantee any products, services, or information offered by them.</li>
            <li>Mora UXplore 2.0 shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in any way connected with the use of the website.</li>
            <li>Mora UXplore 2.0 reserves the right to modify or revise these terms and conditions at any time without prior notice. Users are responsible for regularly reviewing the terms to stay informed of any changes.</li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-10">
        <Link to="/register">
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <svg className="transform rotate-180 w-3.5 h-3.5 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg >
            Back To Registration
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Terms;
