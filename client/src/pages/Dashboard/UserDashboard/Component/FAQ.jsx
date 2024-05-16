import { faPaperPlane, faRefresh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState, useEffect } from "react";
import AuthContext from "../../../../context/AuthContext";
import axios from "../../../../api/axios";
import FAQCard from "./FAQCard";

function FAQ({ open }) {
  const { user } = useContext(AuthContext);
  const [faqs, setFaqs] = useState([]);
  const [newFAQ, setNewFAQ] = useState("");

  const submitFAQ = () => {
    const data = {
      question: newFAQ,
    };
    axios
      .post("/teams/qa", data, {
        headers: {
          "x-auth-token": user.token,
        },
      })
      .then((res) => {
        setFaqs([...faqs, res.data]);
      })
      .catch((err) => {
        console.error("Error adding FAQ: ", err);
      });

    // clear the input field
    setNewFAQ("");
  };

  const loadFAQ = () => {
    axios
      .get("/teams/getqa", {
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

  const calculateAnsweredFAQs = () => {
    let answered = 0;
    faqs.forEach((faq) => {
      if (faq.is_answered) {
        answered++;
      }
    });
    return answered;
  };

  useEffect(() => {
    axios
      .get("/teams/getqa", {
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

    const intervalId = setInterval(() => {
      loadFAQ();
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div
      className={`${
        open ? "sm:ml-64" : "sm:ml-32"
      } flex flex-col justify-between items-center h-min-screen dark`}
    >
      <div className="flex flex-row justify-between items-center w-full">
        <div
          className="text-white font-bold text-6xl px-5 py-2 w-[60%]"
          style={{ alignSelf: "flex-start" }}
        >
          FAQs
        </div>
        <div className="flex flex-row justify-end items-center">
          <span class="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-3 py-1.5 rounded dark:bg-blue-900 dark:text-blue-300">
            {faqs.length} Questions
          </span>

          <span class="bg-green-100 text-green-800 text-sm font-medium me-2 px-3 py-1.5 rounded dark:bg-green-900 dark:text-green-300">
            {calculateAnsweredFAQs()} answered
          </span>
          <span class="bg-red-100 text-red-800 text-sm font-medium me-2 px-3 py-1.5 rounded dark:bg-red-900 dark:text-red-300">
            {faqs.length - calculateAnsweredFAQs()} not answered{" "}
          </span>
        </div>
        <button
          className="px-4 py-2 mx-5 text-base font-medium transition text-center inline-flex items-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={loadFAQ}
        >
          <FontAwesomeIcon icon={faRefresh} className="px-2" />
          Refresh
        </button>
      </div>
      <div className="flex flex-row h-[100%] my-8 overflow-auto w-full">
        <div
          id="accordion-collapse"
          data-accordion="collapse"
          className="w-full mx-10 h-[100%] overflow-auto"
        >
          {faqs.reverse().map((faq, index) => (
            <FAQCard
              question={faq.question}
              is_answered={faq.is_answered}
              answer={faq.answer}
              date={faq.createdAt}
              key={index}
            />
          ))}
        </div>
      </div>
      <div className="mb-6">
        <label
          for="large-input"
          className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
        >
          Ask a question
        </label>
        <div className="flex flex-row justify-between items-center w-full">
          <input
            type="text"
            id="large-input"
            className="block p-4 w-96 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Type your question here"
            style={{ width: "1000px" }}
            value={newFAQ}
            onChange={(e) => setNewFAQ(e.target.value)}
          />
          <button
            type="button"
            class="px-5 py-3  mx-5 text-base font-medium transition text-center inline-flex items-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={submitFAQ}
          >
            <FontAwesomeIcon icon={faPaperPlane} className="px-3" />
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
