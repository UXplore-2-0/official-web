import React, { useState } from "react";

function Submission() {
  const [selectedFile, setSelectedFile] = useState("");

  const handleFileChange = (e) => {
    console.log(e.target.value);
    setSelectedFile(e.target.value);
  };

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
          {/* <label
            for="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-20 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span class="font-semibold">Click to upload</span> or drag and
                drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input
              id="dropzone-file"
              type="file"
              className="hidden"
              value={selectedFile}
              onChange={handleFileChange}
            />
          </label> */}

          <div className="flex flex-col justify-center items-center my-2">
            <input
              className="block w-full mt-6 text-base text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              id="multiple_files"
              type="file"
              multiple
              value={selectedFile}
              onChange={handleFileChange}
            />
            <p
              class="mt-1 text-sm text-gray-600 dark:text-gray-400"
              id="file_input_help"
            >
              JPG, PNG, PDF, FIGMA (No More Than 50MB).
            </p>

            <button className="px-10 py-2 bg-sky-600 rounded-lg hover:bg-sky-500 transition-all duration-300 mt-6">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Submission;
