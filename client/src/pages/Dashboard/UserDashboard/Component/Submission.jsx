import React, { useContext, useState, useEffect } from "react";
import AuthContext from "../../../../context/AuthContext";
import axios from "../../../../api/axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudUpload,
  faFileAlt,
  faFileUpload,
  faSave,
} from "@fortawesome/free-solid-svg-icons";

function Submission({ team, setError, setSuccess, setUploading }) {
  const { user } = useContext(AuthContext);
  const [selectedFile, setSelectedFile] = useState(null);
  const [submission, setSubmission] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const uploadFileToServer = async () => {
    const formData = new FormData();
    formData.append("file", selectedFile);
    setUploading(true);

    axios
      .post("/teams/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "x-auth-token": user.token,
        },
      })
      .then((res) => {
        setSubmission(res.data.data);
        setUploading(false);
        setError(null);
        setSuccess(true);
        setTimeOut(() => {
          setSuccess(false);
        }, 2000);
      })
      .catch((err) => {
        setError(err.message);
        setTimeout(() => {
          setError(null);
        }, 2000);
      });
  };

  useEffect(() => {
    axios
      .get("/teams/submission", {
        headers: {
          "x-auth-token": user.token,
        },
      })
      .then((res) => {
        setSubmission(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    // <div className="flex flex-col justify-center items-center p-3 my-5 bg-[#1b222b] rounded-xl">
    <div className="mt-3 w-full">
      <div className="flex justify-center flex-col items-center h-full w-full p-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-4">
        <div
          className="text-white font-semibold my-1"
          style={{ fontSize: "35px" }}
        >
          Submission
        </div>

        <div className="flex items-center justify-center w-full flex-col">
          <div className="flex flex-col justify-center items-center my-2 w-full">
            <input
              className="block w-full mt-6 text-base text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              id="multiple_files"
              type="file"
              multiple
              onChange={handleFileChange}
            />
            <p
              class="mt-1 text-sm text-gray-600 dark:text-gray-400"
              id="file_input_help"
            >
              JPG, PNG, PDF, FIGMA (No More Than 50MB).
            </p>

            {submission &&
              submission.submission &&
              submission.submission.is_submitted && (
                <div className="text-slate-500 text-sm py-1 ">
                  Uploaded File:{" "}
                  <span className="text-blue-700">
                    <a href={submission.submission.submission_link}>
                      <FontAwesomeIcon icon={faFileAlt} className="px-1" />{" "}
                      Download
                    </a>
                  </span>
                </div>
              )}

            <button
              className="px-10 py-2 w-full bg-sky-600 rounded-lg hover:bg-sky-500 transition-all duration-300 mt-6"
              onClick={uploadFileToServer}
            >
              <FontAwesomeIcon icon={faCloudUpload} className="px-3" />
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Submission;
