import React, { useState } from "react";
import Logo from "./images/Logo.png";
import SeaImage from "./images/Sea.png";
import { IoHomeOutline } from "react-icons/io5";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
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

    // Validate email format
    if (!formData.email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Invalid email address";
    }

    // Validate password
    if (!formData.password.trim()) {
      validationErrors.password = "Password is required";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, proceed with submission
      // @Shavin: You can send the form data to the server here
      console.log("Form submitted:", formData);

      // Clear form data
      setFormData({ email: "", password: "", rememberMe: false });
    }
  };

  return (
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
          <div className="flex flex-col items-center justify-center my-6 xl:my-10">
            <h1 className="text-2xl tracking-widest">WELCOME BACK</h1>
            <p className="text-xs">Please enter your details.</p>
          </div>
          <div className="relative w-[85%] sm:w-[55%] md:w-[45%]">
            <button className="fixed top-0 left-0 p-2 sm:p-3 m-2">
              <IoHomeOutline className="text-white/70 text-lg sm:text-2xl" />
            </button>
            <form
              className="flex flex-col items-center justify-center"
              onSubmit={handleSubmit}
              noValidate
              autoComplete="off"
            >
              <label className="w-full text-sm mb-1" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
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
                placeholder="Enter your password"
                className={`w-full bg-transparent text-sm p-2 mb-4 border border-white border-opacity-25 rounded-lg
                          ${errors.password ? "border-red-500" : ""}`}
              />
              {errors.password && (
                <div className="w-full text-xs text-red-500 -mt-3 mb-4">
                  {errors.password}
                </div>
              )}
              <div className="flex justify-between text-xs w-full mt-4 mb-2">
                <div className="flex flex-row">
                  <input
                    type="checkbox"
                    id="remember"
                    name="remember"
                    checked={formData.remember}
                    onChange={(e) =>
                      setFormData({ ...formData, remember: e.target.checked })
                    }
                    className="mr-1"
                  />
                  <label htmlFor="remember">Remember me</label>
                </div>
                <div>
                  <a href="#" className="hover:underline">
                    Forgot password?
                  </a>
                </div>
              </div>
              <button
                type="submit"
                className="w-[100%] mb-4 bg-black bg-opacity-10 rounded-md py-1 sm:py-2 text-sm"
              >
                Log in
              </button>
              <div className="flex flex-col sm:flex-row sm:gap-1 items-center justify-center">
                <div className="text-xs">Don't have an account?</div>
                <div className="text-xs">
                  <a href="#" className="hover:underline">
                    Register free!
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
