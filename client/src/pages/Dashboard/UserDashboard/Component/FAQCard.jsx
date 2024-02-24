import {
  faCheck,
  faComment,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function FAQCard({ question, is_answered, answer, date }) {
  return (
    <div>
      <div
        id="toast-default"
        className="flex items-center w-full p-4 text-gray-500 bg-white rounded-t-lg shadow dark:text-gray-400 dark:bg-gray-800 border-b-2 border-gray-700"
        role="alert"
      >
        <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-blue-500 bg-blue-100 rounded-lg dark:bg-blue-800 dark:text-blue-200">
          <FontAwesomeIcon icon={faComment} className="mx-2" />
          <span className="sr-only">Fire icon</span>
        </div>
        <div className="ms-3 text-base font-normal">{question}</div>
      </div>

      {/* answer */}
      {is_answered && (
        <div
          id="toast-success"
          className="flex items-center w-full p-4 mb-4 text-gray-500 bg-white rounded-b-lg shadow dark:text-gray-400 dark:bg-gray-800"
          role="alert"
        >
          <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
            <FontAwesomeIcon icon={faCheck} className="mx-2" />
            <span className="sr-only">Check icon</span>
          </div>
          <div className="ms-3 text-base font-normal">{answer}</div>
        </div>
      )}

      {!is_answered && (
        <div
          id="toast-warning"
          className="flex items-center w-full p-4 mb-4 text-gray-500 bg-white rounded-b-lg shadow dark:text-gray-400 dark:bg-gray-800"
          role="alert"
        >
          <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-yellow-500 bg-yellow-100 rounded-lg dark:bg-yellow-800 dark:text-yellow-200">
            <FontAwesomeIcon icon={faMessage} className="mx-2" />
            <span className="sr-only">Warning icon</span>
          </div>
          <div className="ms-3 text-base font-normal text-slate-600">
            No answer yet
          </div>
        </div>
      )}
    </div>
  );
}

export default FAQCard;
