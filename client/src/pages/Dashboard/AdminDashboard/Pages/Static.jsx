import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../../../../context/AuthContext";
import axios from "../../../../api/axios";

function Static() {
  const { user } = useContext(AuthContext);
  const [stat, setStat] = useState([]);

  useEffect(() => {
    axios
      .get("/stat/", {
        headers: {
          "x-auth-token": user.token,
        },
      })
      .then((res) => {
        setStat(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.error("Error fetching stats: ", err);
      });
  }, []);

  return (
    <div className="flex flex-col justify-start items-start h-screen">
      <div className="flex flex-row justify-between items-center mx-5 my-3 h-[25%] w-full px-5">
        <h1
          className="flex text-6xl font-bold mb-4 text-white"
          style={{ alignSelf: "flex-start" }}
        >
          Statistics
        </h1>
      </div>

      <div className="flex flex-col justify-center items-center w-[50%] h-full p-5 mx-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-4">
        <div
          className="flex items-center p-4 mb-4 text-4xl text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
          role="alert"
        >
          <span className="sr-only">Info</span>
          <div>
            <span className="font-medium">Total Teams</span>{" "}
            {stat && stat.teamCount}
          </div>
        </div>

        <div
          className="flex items-center p-4 mb-4 text-4xl text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
          role="alert"
        >
          <span className="sr-only">Total Users</span>
          <div>
            <span className="font-medium">Total Users</span>{" "}
            {stat && stat.memberCount}
          </div>
        </div>

        <div
          className="flex items-center p-4 mb-4 text-4xl text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
          role="alert"
        >
          <span className="sr-only">Total Submissions </span>
          <div>
            <span className="font-medium">Total Submissions</span>{" "}
            {stat && stat.submissionCount}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Static;
