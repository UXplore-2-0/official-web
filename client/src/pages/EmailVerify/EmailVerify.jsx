import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "../../api/axios";
import Loading from "../Loading/Loading";
import Logo from "../../../public/images/Logo.png"

function EmailVerify() {
  const { team_name, token } = useParams();
  const [success, setSuccess] = React.useState(false);

  useEffect(() => {
    document.addEventListener("DOMContentLoaded", function (event) {
      document.getElementById("successButton").click();
    });

    // call the API to verify the email
    axios
      .post(`/auth/verify/${team_name}/${token}`)
      .then((res) => {
        if (res.data.status) {
          setSuccess(true);
        }
      })
      .catch((err) => {
        setSuccess(true);
        console.log(err);
      });
  });

  return (
    <>
      {success && (
        <>
        <div
          className="relative"
          style={{
            background:
              "linear-gradient(to bottom right, #182B44 5%, #1E3855 15%, #0F2132 40%, #1E455E 95%)",
          }}
        >
          <div className="absolute z-10 w-full flex justify-center  sm:top-0">
          
             <img src="https://media.tenor.com/pz0zpQXlK5sAAAAi/sparkle-confetti.gif" alt=""  className="fixed object-cover h-100vh w-full sm:w-1/2" />
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
                <p className="mb-8 text-lg md:text-2xl text-center  font-semibold text-white">
                  Successfully registered the team{" "}
                  <span className="text-cyan-400">Space x</span>.
                </p>
                <p className="mb-8 text-lg md:text-2xl text-center  font-semibold text-white">
                  <span className="text-sky-500">Next Step {" "}</span> Continue to the dashbard and add members.
                  </p>
                <Link to="/login">
                  <button
                    data-modal-toggle="successModal"
                    type="button"
                    className="py-2 px-4  text-sm font-medium text-center text-white rounded-full bg-gradient-to-r from-cyan-500 to-blue-500  hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:focus:ring-primary-900"
                  >
                    Continue to Dashboard
                  </button>
                </Link>
            </div>
          </div>
        </div>
      </>
      )}
      {!success && (
        <Loading />
      )}
    </>
  );
}

export default EmailVerify;
