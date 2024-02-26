import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState, useContext } from "react";
import { DateFormatter } from "../../../../util/DateFormatter";
import { faClose, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import AuthContext from "../../../../context/AuthContext";
import axios from "../../../../api/axios";

function Faq() {
  const { user } = useContext(AuthContext);
  const [faqs, setFaqs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedFAQ, setSelectedFAQ] = useState({});
  const [answer, setAnswer] = useState("");
  const [answerValue, setAnswerValue] = useState(null);

  const filteredFAQs = faqs.filter(
    (faq) =>
      !searchTerm ||
      faq.Team.team_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openPopup = (faq) => {
    setSelectedFAQ(faq);
    setOpen(true);
  };

  const closePopup = () => {
    setOpen(false);
  };

  const submitReply = (qa_id) => {
    const data = {
      answer: answer,
    };
    axios
      .post(`/teams/qa/${qa_id}/answer`, data, {
        headers: {
          "x-auth-token": user.token,
        },
      })
      .then((res) => {
        closePopup();
        // set the faq to answered
        setFaqs(
          faqs.map((faq) => {
            if (faq.qa_id === qa_id) {
              faq.is_answered = true;
              faq.answer = answer;
            }
            return faq;
          })
        );
      })
      .catch((err) => {
        console.error("Error submitting reply: ", err);
      });
  };

  const loadFAQs = () => {
    axios
      .get("/teams/qa/all", {
        headers: {
          "x-auth-token": user.token,
        },
      })
      .then((res) => {
        setFaqs(res.data);
      })
      .catch((err) => {
        console.error("Error fetching FAQs: ", err);
      });
  };

  useEffect(() => {
    axios
      .get("/teams/qa/all", {
        headers: {
          "x-auth-token": user.token,
        },
      })
      .then((res) => {
        setFaqs(res.data);
      })
      .catch((err) => {
        console.error("Error fetching FAQs: ", err);
      });

    const intervalID = setInterval(() => {
      loadFAQs();
    }, 2500);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  return (
    <div className="justify-between w-full h-[100%]">
      <div className="flex flex-row items-center  justify-between w-full h-[20%] my-5">
        <h1 className="text-white text-6xl font-bold mx-3">FAQ Portal</h1>
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
              placeholder="Search FAQs..."
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

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg dark">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Team Name
              </th>
              <th scope="col" className="px-6 py-3">
                Leader Email
              </th>
              <th scope="col" className="px-6 py-3">
                Question
              </th>
              <th scope="col" className="px-6 py-3">
                Answered
              </th>
              <th scope="col" className="px-6 py-3">
                Asked At
              </th>
              <th scope="col" className="px-6 py-3">
                Answered At
              </th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {filteredFAQs &&
              filteredFAQs.map((faq, index) => (
                <tr
                  class="odd:bg-white cursor-pointer duration-150 transition-all odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                  onClick={() => {
                    if (faq.is_answered) {
                      setAnswerValue(faq.answer);
                    }
                  }}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {faq.Team && faq.Team.team_name}
                  </th>
                  <td className="px-6 py-4">{faq.Team && faq.Team.email}</td>
                  <td className="px-6 py-4">{faq.question}</td>
                  <td className="px-6 py-4">
                    {faq.is_answered ? (
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-700 dark:text-green-100">
                        Answered
                      </span>
                    ) : (
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800 dark:bg-red-700 dark:text-red-100">
                        No Ans
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    {DateFormatter(new Date(faq.createdAt))}
                  </td>
                  <td className="px-6 py-4">
                    {DateFormatter(new Date(faq.updatedAt))}
                  </td>
                  <td className="px-6 py-4">
                    {!faq.is_answered && (
                      <button
                        className="flex justify-center items-center rounded-lg bg-blue-700 text-white hover:bg-blue-500 py-2 px-5 transition"
                        onClick={() => openPopup(faq)}
                      >
                        Reply
                      </button>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {open && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-opacity-50 dark p-5 flex-col"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(5px)",
          }}
        >
          <div className="flex flex-col justify-start items-center my-3">
            <h1 className="text-white font-bold text-lg my-2">
              Team {selectedFAQ.faq}
            </h1>
          </div>

          <label
            for="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your Answer
          </label>
          <textarea
            id="message"
            rows="4"
            className="block p-2.5 w-[50%] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your Answer here..."
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          ></textarea>

          <div className="flex flex-row justify-between items-center w-[50%]">
            <button
              className="mt-4 bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded w-[40%]"
              onClick={() => submitReply(selectedFAQ.qa_id)}
            >
              <FontAwesomeIcon icon={faPaperPlane} className="px-3" />
              Submit
            </button>
            <button
              className="mt-4 bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded"
              onClick={closePopup}
            >
              <FontAwesomeIcon icon={faClose} className="px-3" />
              Close
            </button>
          </div>
        </div>
      )}

      {answerValue && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-opacity-50 dark p-5 flex-col"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(5px)",
          }}
        >
          <h2 className="text-xl text-white font-semibold my-3">Answer</h2>
          <textarea
            id="message"
            rows="4"
            className="block p-2.5 w-[50%] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your Answer here..."
            value={answerValue}
            disabled
          ></textarea>
          <button
            className="mt-4 bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded"
            onClick={() => setAnswerValue(null)}
          >
            <FontAwesomeIcon icon={faClose} className="px-3" />
            Close
          </button>
        </div>
      )}
    </div>
  );
}

export default Faq;
