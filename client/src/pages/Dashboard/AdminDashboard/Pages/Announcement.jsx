import {
  faCheck,
  faClose,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState, useContext } from "react";
import AuthContext from "../../../../context/AuthContext";
import axios from "../../../../api/axios";

function Announcement() {
  const { user } = useContext(AuthContext);
  const [messageTitle, setMessageTitle] = useState("");
  const [total, setTotal] = useState(0);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const clearFields = () => {
    setMessageTitle("");
    setMessage("");
  };

  const submitAnnoucemnt = () => {
    const data = {
      message_title: messageTitle,
      message: message,
    };
    axios
      .post("/notifications", data, {
        headers: {
          "x-auth-token": user.token,
        },
      })
      .then((res) => {
        clearFields();
        setSuccess(true);
        setTotal(total + 1);

        setTimeout(() => {
          setSuccess(false);
        }, 3000);
      })
      .catch((err) => {
        console.error("Error adding Announcement: ", err);
        setError("Error adding Announcement");

        setTimeout(() => {
          setError(null);
        }, 3000);
      });
  };

  useEffect(() => {
    axios
      .get("/notifications", {
        headers: {
          "x-auth-token": user.token,
        },
      })
      .then((response) => {
        setTotal(response.data.length);
      })
      .catch((error) => {
        console.error("Error fetching notifications: ", error);
      });
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-start h-screen dark"
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
              <span className="font-medium">Success!</span> Successfully addded
              the announcement
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-row justify-between items-center mx-5 my-3 h-[25%] w-full px-5">
        <h1
          className="flex text-6xl font-bold mb-4 text-white"
          style={{ alignSelf: "flex-start" }}
        >
          Announcement
        </h1>
        <button
          type="button"
          className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none border-2 border-gray-700 mx-5"
          disabled
        >
          <span className="inline-flex items-center justify-center w-4 h-4 ms-2 mx-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
            {total}
          </span>
          Notifications
        </button>
      </div>
      <form className="w-1/2">
        <div class="mb-6">
          <label
            for="default-input"
            className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
          >
            Title
          </label>
          <input
            type="text"
            id="default-input"
            className="bg-gray-50 border h-16 border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter announcement title"
            value={messageTitle}
            onChange={(e) => setMessageTitle(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            for="message"
            className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
          >
            Message
          </label>
          <textarea
            id="message"
            rows="4"
            className="block p-2.5 w-full h-56 text-base text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>

        <div className="flex items-center justify-between">
          <button
            type="button"
            class="px-3 py-3 text-base font-medium transition text-center inline-flex items-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-[60%]"
            onClick={submitAnnoucemnt}
          >
            <FontAwesomeIcon icon={faPaperPlane} className="px-3" />
            Send
          </button>
          <button
            type="button"
            class="px-3 py-3  text-base font-medium transition text-center inline-flex items-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 w-[30%]"
            onClick={clearFields}
          >
            <FontAwesomeIcon icon={faClose} className="px-3" />
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default Announcement;
