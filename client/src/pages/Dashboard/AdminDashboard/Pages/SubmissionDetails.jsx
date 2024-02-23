import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../../../../context/AuthContext";
import axios from "../../../../api/axios";
import { DateFormatter } from "../../../../util/DateFormatter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";

function SubmissionDetails() {
  const { user } = useContext(AuthContext);
  const [submissions, setSubmissions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const loadSubmissions = () => {
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

    const intervalID = setInterval(() => {
      loadSubmissions();
    }, 2500);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  const filteredSubmissions = submissions.filter(
    (submission) =>
      !searchTerm ||
      submission.Team.team_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="justify-between w-full h-[100%]">
      <div className="flex flex-row items-center  justify-between w-full h-[20%] my-5">
        <h1 className="text-white text-6xl font-bold mx-3">Submissions</h1>
        <form className="mx-auto w-[60%]">
          <label
            for="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Submissions..."
              required
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
      </div>

      <div class="relative overflow-x-auto shadow-md sm:rounded-lg dark">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
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
                Submitted
              </th>
              <th scope="col" class="px-6 py-3">
                Submission Link
              </th>
              <th scope="col" class="px-6 py-3">
                Added At
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredSubmissions &&
              filteredSubmissions.map((sub, index) => (
                <tr class="odd:bg-white cursor-pointer dark:hover:bg-gray-800 duration-150 transition-all odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    onClick={() => showMemberDetails(team.team_name)}
                  >
                    {sub.Team && sub.Team.team_name}
                  </th>
                  <td class="px-6 py-4">{sub.Team && sub.Team.email}</td>
                  <td class="px-6 py-4">{sub.Team && sub.Team.university}</td>
                  <td class="px-6 py-4">
                    {sub.is_submitted ? (
                      <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-700 dark:text-green-100">
                        Submitted
                      </span>
                    ) : (
                      <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800 dark:bg-red-700 dark:text-red-100">
                        Not Submitted
                      </span>
                    )}
                  </td>
                  <td class="px-6 py-4">
                    {DateFormatter(new Date(sub.submitted_at))}
                  </td>
                  <td class="px-6 py-4">
                    {sub.is_submitted && (
                      <a
                        href={sub.submission_link}
                        target="_blank"
                        rel="noreferrer"
                        class="text-blue-500 hover:underline"
                      >
                        <FontAwesomeIcon icon={faFile} className="px-2" />
                        View
                      </a>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SubmissionDetails;
