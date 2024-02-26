import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../../api/axios";

function PasswordReset() {
  const navigate = useNavigate();
  const { team_id, token } = useParams();
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleResetPassword = (e) => {
    e.preventDefault();

    // check for validations
    if (!password || !confirmPassword) {
      setError("Fill the fields");
    }

    if (password !== confirmPassword) setError("Password does not match!");
    const data = {
      password: password,
    };

    axios
      .post(`/auth/forget-password/reset/${team_id}/${token}`, data, {
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
        navigate("/login");
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
                  New Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <label
                  for="confirm-password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm password
                </label>
                <input
                  type="password"
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
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
              Password rsetted suucessfully.
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default PasswordReset;