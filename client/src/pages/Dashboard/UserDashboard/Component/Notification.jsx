import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faRefresh } from "@fortawesome/free-solid-svg-icons";
import React, { useContext, useEffect, useState } from "react";
import axios from "../../../../api/axios";
import AuthContext from "../../../../context/AuthContext";
import DateFormatter from "../../../../util/DateFormatter";

function Notification() {
  const { user } = useContext(AuthContext);
  const [notifications, setNotifications] = useState([]);

  const loadNotifications = () => {
    axios
      .get("/notifications", {
        headers: {
          "x-auth-token": user.token,
        },
      })
      .then((response) => {
        setNotifications(response.data);
      })
      .catch((error) => {
        console.error("Error fetching notifications: ", error);
      });
  };

  useEffect(() => {
    // make the API request to get all the notifications
    axios
      .get("/notifications", {
        headers: {
          "x-auth-token": user.token,
        },
      })
      .then((response) => {
        setNotifications(response.data);
      })
      .catch((error) => {
        console.error("Error fetching notifications: ", error);
      });

    const intervalID = setInterval(() => {
      loadNotifications();
    }, 2000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  return (
    <div className="min-w-80 w-150 mr-0 h-2/4 rounded-lg p-4 gap-4 flex flex-col text-sm mt-3 mb-3">
      <div className="flex flex-row justify-between">
        <h1 className="text-white font-bold text-lg border-sky-500">
          <FontAwesomeIcon icon={faBell} className="mx-3" />
          Notification
        </h1>
        <button
          className="px-1 py-1 mx-5 text-base font-medium transition text-center inline-flex items-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={loadNotifications}
        >
          <FontAwesomeIcon icon={faRefresh} className="px-2" />
        </button>
      </div>

      <div class="overflow-auto h-52 text-sm px-4 py-2">
        {notifications.map((notification, index) => (
          <div
            id="toast-notification"
            className="w-full max-w-xs p-4 text-gray-900 bg-white rounded-lg shadow dark:bg-gray-800 dark:text-gray-300 my-5"
            role="alert"
          >
            <div class="flex items-center mb-3">
              <span className="mb-1 text-sm font-semibold text-gray-900 dark:text-white">
                {notification.message_title}
              </span>
              <button
                type="button"
                className="ms-auto -mx-1.5 -my-1.5 bg-white justify-center items-center flex-shrink-0 text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                data-dismiss-target="#toast-notification"
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
            <div className="flex items-center">
              <div className="relative inline-block shrink-0"></div>
              <div className="ms-3 text-sm font-normal">
                <div className="text-sm font-normal">
                  {notification.message}
                </div>
                <span className="text-xs font-medium text-blue-600 dark:text-blue-500">
                  {DateFormatter(new Date(notification.added_at))}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notification;
