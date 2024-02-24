import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../api/axios";

function ForgetPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleResetPassword = (e) => {
    e.preventDefault();

    // check for validations
    if (!email) {
      setError("Fill the fields");
    }

    const data = { email: email };
    axios
      .post("/auth/forget-password", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setSuccess(true);
        setError(null);
        setTimeout(() => {
          setSuccess(false);
          setError(null);
        }, 3000);
        navigate("/");
      })
      .catch((err) => {
        setError("Error");
      });
  };

  return (
    <>
      <section>
        <div className="flex flex-col items-center justify-center py-8 mx-auto md:h-screen lg:py-0 dark">
          <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
            <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Reset Password
            </h2>

            <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
              {error && (
                <div
                  class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                  role="alert"
                >
                  <span class="font-medium">Invalid!</span> {error}.
                </div>
              )}

              <div>
                <label
                  for="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Team Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="john@company.com"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="flex items-start"></div>
              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                onClick={handleResetPassword}
              >
                Reset passwod
              </button>
            </form>
          </div>
          {success && (
            <div class="flex justify-center items-center p-4 m-10 text-base leading-5 text-white bg-green-500 rounded-lg opacity-100 font-regular">
              Password reset email send successfully
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default ForgetPassword;
