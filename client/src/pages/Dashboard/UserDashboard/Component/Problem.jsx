import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../../../../context/AuthContext";
import axios from "../../../../api/axios";

function Problem() {
  const { user } = useContext(AuthContext);
  const [question, setQuestion] = useState(null);

  const loadQuestion = () => {
    axios
      .get("/teams/getquestion", {
        headers: {
          "x-auth-token": user.token,
        },
      })
      .then((response) => {
        setQuestion(response.data);
      })
      .catch((err) => {
        console.error("Error fetching question: ", err);
      });
  };

  useEffect(() => {
    axios
      .get("/teams/getquestion", {
        headers: {
          "x-auth-token": user.token,
        },
      })
      .then((response) => {
        setQuestion(response.data);
      })
      .catch((err) => {
        console.error("Error fetching question: ", err);
      });

    const intervalId = setInterval(() => {
      loadQuestion();
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="mt-3 w-full h-56">
      <div className="flex justify-between flex-col items-center h-full w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-2">
        <a href="#">
          <h1
            className="mb-2 font-medium tracking-tight text-gray-900 dark:text-white"
            style={{ fontSize: "40px" }}
          >
            Question
          </h1>
        </a>

        {question && question.question && question.question.property_value ? (
          <>
            <div className="flex overflow-auto max-h-8">
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {question.question.property_value}
              </p>
            </div>
            <a
              href={
                question.questionLink
                  ? question.questionLink.property_value
                  : "#"
              }
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              View Question
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </>
        ) : (
          <div
            className="text-slate-500 text-2xl text-center dark:text-gray-400"
            style={{ justifyItems: "flex-start" }}
          >
            No Problems Yet
          </div>
        )}
      </div>
    </div>
  );
}

export default Problem;
