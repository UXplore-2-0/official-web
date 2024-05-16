import React, { useState, useContext, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "../../api/axios";
import Logo from "./images/Logo.png";
import SeaImage from "./images/Sea.png";
import { IoHomeOutline } from "react-icons/io5";
import AuthContext from "../../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWarning } from "@fortawesome/free-solid-svg-icons";
import Loading from "../Loading/Loading";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [invalid, setInvalid] = useState(false);

  const { setUser } = useContext(AuthContext);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    if (token) {
      setUser({ token, role });
      navigate("/dashboard");
    }
  }, []);

  const saveToken = async (token, role) => {
    localStorage.setItem("token", token);
    localStorage.setItem("role", role);
  }

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

    setLoading(true);
    if (Object.keys(validationErrors).length === 0) {
      axios
        .post(
          "/auth/login",
          {
            email: formData.email,
            password: formData.password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          // set the user value
          setUser({ token: res.data.token, role: res.data.role });
          // save the token in the local storage
          try {
            saveToken(res.data.token, res.data.role);
          } catch (error) {
            console.error("Error saving token to local storage", error);
          }
          
          setLoading(false);
          navigate("/dashboard");
        })
        .catch((err) => {
          setLoading(false);
          setInvalid(true);
        });

      setFormData({ email: "", password: "", rememberMe: false });
    }
  };

  const handleResetPassword = () => {
    navigate("/forget-password");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear error when user types
  };

  return (
    <>
      {!loading && (
        <>
          {!invalid && (
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
                style={{
                  transition: "clip-path 1s ease", /* This is the transition property responsible for the fade effect */
                  clipPath: "polygon(100% 0, 100% 100%, 0% 100%, 0% 0)" /* Initially clip the image to show only the right side */
                }}
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
                          setFormData({
                            ...formData,
                            remember: e.target.checked,
                          })
                        }
                        className="mr-1"
                      />
                      <label htmlFor="remember">Remember me</label>
                    </div>
                    <div>
                      <div
                        className="hover:underline"
                        onClick={handleResetPassword}
                      >
                        Forgot password?
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-[100%] mb-4 bg-black bg-opacity-10 rounded-md py-1 sm:py-2 text-sm"
                  >
                    Log in
                  </button>
                  {/* <div className="flex flex-col sm:flex-row sm:gap-1 items-center justify-center">
                    <div className="text-xs">Don't have an account?</div>
                    <div className="text-xs">
                      <Link to="/register" className="hover:underline">
                        Register
                      </Link>
                    </div>
                  </div> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {invalid && (
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
            <div className="ms-3 text-base font-normal">
              Invalid Email or Password!
            </div>
            <button
              onClick={() => setInvalid(false)}
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

export default Login;
