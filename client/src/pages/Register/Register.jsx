import React, { useState } from "react";
import axios from "../../api/axios";
import universities from "../../data/universities";
import logo from "../../../public/logo512.png";
import Logo from "./images/Logo.png";
import SeaImage from "./images/Sea.png";
import { IoHomeOutline } from "react-icons/io5";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWarning } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";

function Register() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    team_name: "",
    university: "",
    email: "",
    password: "",
    otherUniversity: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear error when user types
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    
    // Validate team name
    if (!formData.team_name.trim()) {
      validationErrors.team_name = "Team name is required";
    }

    if (!formData.team_name.trim().length >= 3) {
      validationErrors.team_name =
        "Team name must be at least 3 characters long";
      }
      
    // Validate university
    if (!formData.university.trim()) {
      validationErrors.university = "University is required";
    }
    
    if (formData.university === "Other" && !formData.otherUniversity.trim()) {
      validationErrors.otherUniversity = "University is required";
    }
    
    // Validate email format
    if (!formData.email.trim()) {
      validationErrors.email = "Leader's email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Invalid email address";
    }
    
    // Validate password
    if (!formData.password.trim() ) {
      validationErrors.password = "Password is required";
    }
    
    if (formData.password.trim().length < 8) {
      validationErrors.password = "Password must be at least 8 characters long";
    }
    
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setLoading(true);
      const data = {
        team_name: formData.team_name,
        university:
          formData.university !== "Other"
            ? formData.university
            : formData.otherUniversity,
        email: formData.email,
        password: formData.password,
      };

      // Form is valid, proceed with submission
      // make the API request
      axios
        .post("auth/signup", data, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          setSuccess(true);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.response.data.message);
          setLoading(false);

          setTimeout(() => {
            setError("");
          }, 2500);
        });

      // Clear form data
      setFormData({
        team_name: "",
        university: "",
        email: "",
        password: "",
      });
    }
  };

  return (
    <>
      {!loading && (
        <>
          {!success && (
        <div
          className="relative overflow-hidden w-full h-full"
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
              <div className="flex flex-col items-center justify-center my-6 xl:my-10">
                <h1 className="text-2xl tracking-widest">REGISTER NOW</h1>
                <p className="text-xs">Please enter your details.</p>
              </div>
              <div className="relative w-[85%] sm:w-[55%] md:w-[45%]">
                <Link to="/">
                  <button className="fixed top-0 left-0 p-2 sm:p-3 m-2">
                    <IoHomeOutline className="text-white/70 text-lg sm:text-2xl" />
                  </button>
                </Link>
                <form
                  className="flex flex-col items-center justify-center"
                  onSubmit={handleSubmit}
                  noValidate
                  autoComplete="off"
                >
                  <label className="w-full text-sm mb-1" htmlFor="team">
                    Team Name
                  </label>
                  <input
                    type="text"
                    id="team_name"
                    name="team_name"
                    value={formData.team_name}
                    onChange={handleChange}
                    placeholder="Enter your team name"
                    className={`w-full bg-transparent text-sm p-2 mb-4 border border-white border-opacity-25 rounded-lg
                          ${errors.team_name ? "border-red-500" : ""}`}
                  />
                  {errors.team_name && (
                    <div className="w-full text-xs text-red-500 -mt-3 mb-4">
                      {errors.team_name}
                    </div>
                  )}

                  <label className="w-full text-sm mb-1" htmlFor="university">
                    University
                  </label>
                  <select
                    id="university"
                    name="university"
                    value={formData.university}
                    placeholder="Enter your university"
                    className={`w-full bg-transparent text-sm p-2 mb-4 border border-white border-opacity-25 rounded-lg
                          ${errors.university ? "border-red-500" : ""}`}
                    onChange={handleChange}
                  >
                    <option className="bg-[#1E3855]" value="">
                      Select your university
                    </option>
                    {universities.map((uni) => (
                      <option key={uni} className="bg-[#1E3855]" value={uni}>
                        {uni}
                      </option>
                    ))}
                    <option className="bg-[#1E3855]">Other</option>
                  </select>
                  {errors.university && (
                    <div className="w-full text-xs text-red-500 -mt-3 mb-4">
                      {errors.university}
                    </div>
                  )}

                  {formData.university === "Other" && (
                    <div className="w-full">
                      <input
                        type="text"
                        id="otherUniversity"
                        name="otherUniversity"
                        value={formData.otherUniversity}
                        onChange={handleChange}
                        placeholder="Enter your university"
                        className={`w-full bg-transparent text-sm p-2 -mt-3 mb-4 border border-white border-opacity-25 rounded-lg
                          ${errors.otherUniversity ? "border-red-500" : ""}`}
                      />
                      {errors.otherUniversity && (
                        <div className="w-full text-xs text-red-500 -mt-3 mb-4">
                          {errors.otherUniversity}
                        </div>
                      )}
                    </div>
                  )}

                  <label className="w-full text-sm mb-1" htmlFor="email">
                    Leader's Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter the leader's email"
                    className={`w-full bg-transparent text-sm p-2 mb-4 border border-white border-opacity-25 rounded-lg
                          ${errors.email ? "border-red-500" : ""}`}
                  />
                  {errors.email && (
                    <div className="w-full text-xs text-red-500 -mt-3 mb-4">
                      {errors.email}
                    </div>
                  )}

                  <label className="w-full text-sm mb-1" htmlFor="password">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter a new password"
                    className={`w-full bg-transparent text-sm p-2 mb-4 border border-white border-opacity-25 rounded-lg
                          ${errors.password ? "border-red-500" : ""}`}
                  />
                  {errors.password && (
                    <div className="w-full text-xs text-red-500 -mt-3 mb-4">
                      {errors.password}
                    </div>
                  )}
                  <div
                    className="text-xs flex flex-row justify-start w-full mb-4"
                    style={{ textAlign: "left" }}
                  >
                    By Registering you agree to these <Link to="/Terms"> <span className="text-blue-700 cursor-pointer">Terms and Conditions</span>. </Link> 
                  </div>

                  <button
                    type="submit"
                    className="w-[100%] my-4 bg-black bg-opacity-10 rounded-md py-1 sm:py-2 text-sm"
                  >
                    Register
                  </button>

                  <div className="flex flex-col sm:flex-row sm:gap-1 items-center justify-center">
                    <div className="text-xs">Already have an account?</div>
                    <div className="text-xs">
                      <Link to="/login" className="hover:underline">
                        Log in
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {success && (
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
                  Verification sent , please check your email (If it is not there please check your spam).
                </p>
            </div>
          </div>
        </div>
      </>
  
      )}

      {error && (
        <div
          className="fixed top-0 left-0 w-full h-full flex justify-center items-center dark"
          style={{
            backdropFilter: "blur(5px)",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 99999,
          }}
        >
          <div
            id="toast-danger"
            className="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
            role="alert"
          >
            <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
              <FontAwesomeIcon icon={faWarning} className="w-4 h-4" />
              <span className="sr-only">Error icon</span>
            </div>
            <div className="ms-3 text-base font-normal">{error}.</div>
            <button
              onClick={() => setError("")}
              type="button"
              className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
              data-dismiss-target="#toast-danger"
              aria-label="Close"
            >
              <span className="sr-only">Close</span>
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
        </>
      )}
      {loading && <Loading />}
    </>
  );
}

export default Register;
