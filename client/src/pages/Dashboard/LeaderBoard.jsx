import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../../context/AuthContext";
import axios from "../../api/axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function LeaderBoard({ open }) {
  const { user } = useContext(AuthContext);
  const [submissions, setSubmissions] = useState([]);

  const loadScores = () => {
    axios
      .get("/teams/submissions", {
        headers: {
          "x-auth-token": user.token,
        },
      })
      .then((res) => {
        setSubmissions(res.data.submissions);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    loadScores();

    const intervalID = setInterval(() => {
      loadScores();
    }, 20000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  // sort the submissions by score
  const sortedSubmissions = submissions.sort((a, b) => b.score - a.score);

  return (
    <div className={`${open ? "sm:ml-64" : "sm:ml-32"} dark p-20 h-full`}>
      <div className="flex flex-row items-center  justify-between w-full h-[20%] my-5">
        <h1 className="text-white text-6xl font-bold mx-3">LeaderBoard</h1>
      </div>

      <div class="relative overflow-x-auto shadow-md sm:rounded-lg dark">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Rank
              </th>
              <th scope="col" class="px-6 py-3">
                Team Name
              </th>
              <th scope="col" class="px-6 py-3">
                Leader Email
              </th>
              <th scope="col" class="px-6 py-3">
                University
              </th>
              <th scope="col" class="px-6 py-3">
                Score
              </th>
            </tr>
          </thead>
          <tbody>
            {submissions &&
              submissions.map((sub, index) => (
                <tr class="odd:bg-white cursor-pointer dark:hover:bg-gray-800 duration-150 transition-all odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <th class="px-6 py-4">{index + 1}</th>
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {sub.Team && sub.Team.team_name}
                  </th>
                  <td class="px-6 py-4">{sub.Team && sub.Team.email}</td>
                  <td class="px-6 py-4">{sub.Team && sub.Team.university}</td>
                  <td class="px-6 py-4">
                    <span class="bg-green-100 text-green-800 text-sm font-medium me-2 px-5 py-1.5 rounded dark:bg-green-900 dark:text-green-300">
                      {sub.score}
                    </span>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LeaderBoard;
