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
      })
      .catch((err) => {
        console.error("Error fetching stats");
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

      <div className="flex flex-row justify-between items-center mx-5 my-3 h-[75%] w-full px-5">
        <div className="flex flex-col justify-start items-start w-1/2 h-full">
          <div className="flex flex-row justify-between items-center w-full">
            <h1 className="text-2xl font-bold text-white">Total Teams</h1>
            <h1 className="text-4xl font-bold text-sky-500">
              {stat && stat.teamCount}
            </h1>
          </div>
        </div>

        <div className="flex flex-col justify-start items-start w-1/2 h-full">
          <div className="flex flex-row justify-between items-center w-full">
            <h1 className="text-2xl font-bold text-white">Total Members</h1>
            <h1 className="text-4xl font-bold text-sky-500">
              {stat && stat.memberCount}
            </h1>
          </div>
        </div>

        <div className="flex flex-col justify-start items-start w-1/2 h-full">
          <div className="flex flex-row justify-between items-center w-full">
            <h1 className="text-2xl font-bold text-white">Total Submissions</h1>
            <h1 className="text-4xl font-bold text-sky-500">
              {stat && stat.submissionCount}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Static;
