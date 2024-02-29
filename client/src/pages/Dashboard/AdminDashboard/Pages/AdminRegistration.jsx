import React, { useState } from "react";
import axios from "../../../../api/axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faClose } from "@fortawesome/free-solid-svg-icons";

function AdminRegistration({ user }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const registerAdmin = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("Fill the fields");
      return;
    }

    const data = {
      team_name: name,
      email,
      password,
      university: "University of Moratuwa",
    };
    axios
      .post("auth/signup/admin", data, {
        headers: {
          "x-auth-token": user.token,
        },
      })
      .then((res) => {
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 3000);
      })
      .catch((err) => {
        setError(err.response.data.message);
        setTimeout(() => {
          setError(null);
        }, 3000);
      });
  };

  return (
    <div
      className="flex flex-col items-center w-full h-screen dark"
      style={{
        background:
          "linear-gradient(to bottom right, #182B44 5%, #1E3855 15%, #0F2132 40%, #1E455E 95%)",
      }}
    >
      {error && (
        <div className="absolute top-[50%] left-[50%]">
          <div
            className="flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
            role="alert"
          >
            <FontAwesomeIcon
              icon={faClose}
              style={{ color: "red" }}
              className="px-3"
            />
            <span className="sr-only">Info</span>
            <div>
              <span className="font-medium">Error! </span> {error}
            </div>
          </div>
        </div>
      )}
      {success && (
        <div className="absolute top-[40%] left-[40%]">
          <div
            className="flex items-center p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
            role="alert"
          >
            <FontAwesomeIcon
              icon={faCheck}
              style={{ color: "green" }}
              className="px-3"
            />
            <span className="sr-only">Info</span>
            <div>
              <span className="font-medium">Success!</span> Successfully
              Registered as a Admin
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-row justify-between items-center mx-5 my-3 h-[25%] w-full px-5">
        <h1
          className="flex text-6xl font-bold mb-4 text-white"
          style={{ alignSelf: "flex-start" }}
        >
          Admin Registration
        </h1>
      </div>
      <form className="w-[40%]">
        <div className="grid gap-6 mb-6 w-full h-full">
          <div className="mb-5">
            <label
              for="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              User Name
            </label>
            <input
              type="name"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="User"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@flowbite.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label
              for="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your password
            </label>
            <input
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={registerAdmin}
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}

export default AdminRegistration;
