import React from "react";

function Stat() {
  const stat = { teamCount: 391, memberCount: 249, submissionCount: 25 };

  const renderStatCard = (title, value) => (
    <div className="p-4 bg-gray-100 rounded-xl shadow-md text-2xl">
      <span className="flex justify-center font-medium mb-2 text-gray-700">
        {title}
      </span>
      <div className="flex justify-center text-2xl font-bold text-blue-500">
        {value}
      </div>
    </div>
  );

  return (
    <div className="flex justify-center items-center h-screen bg-blue-700">
      <div className="flex flex-col justify-start items-start h-screen">
        <div className="flex flex-row justify-between items-center mx-5 my-3 h-[25%] w-full px-5">
          <h1
            className="flex justify-start text-6xl font-bold mb-4 text-white"
            style={{ alignSelf: "flex-start" }}
          >
            Statistics
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {renderStatCard("Total Teams", stat.teamCount)}
          {renderStatCard("Total Users", stat.memberCount)}
          {renderStatCard("Total Submissions", stat.submissionCount)}
        </div>
      </div>
    </div>
  );
}

export default Stat;
