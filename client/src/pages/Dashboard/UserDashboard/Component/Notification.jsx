import React from "react";

function Notification() {
  const UpdatesData = [
    {
      img: "dummy-img1.jpg",
      name: "John Doe",
      noti: "Lorem ipsum dolor sit amet",
      time: "10:00 AM",
    },
    {
      img: "dummy-img2.jpg",
      name: "Jane Smith",
      noti: "Consectetur adipiscing elit",
      time: "11:30 AM",
    },
  ];

  return (
    <div className="w-60 mr-0 h-2/4 bg-[#081A51] rounded-lg p-4 gap-4 flex flex-col text-sm mt-3 mb-3">
      <h1 className="text-white font-bold text-lg border-sky-500">
        Notification
      </h1>
      {UpdatesData.map((update, index) => (
        <div
          id="toast-notification"
          className="w-full max-w-xs p-4 text-gray-900 bg-white rounded-lg shadow dark:bg-gray-800 dark:text-gray-300"
          role="alert"
        >
          <div class="flex items-center mb-3">
            <span className="mb-1 text-sm font-semibold text-gray-900 dark:text-white">
              New notification
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
              <div className="text-sm font-semibold text-gray-900 dark:text-white">
                Bonnie Green
              </div>
              <div className="text-sm font-normal">commented on your photo</div>
              <span className="text-xs font-medium text-blue-600 dark:text-blue-500">
                a few seconds ago
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Notification;
