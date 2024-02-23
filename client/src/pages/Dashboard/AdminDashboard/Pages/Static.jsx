import React, { useState, useEffect } from "react";

function Static() {
  const [statsData, setStatsData] = useState([]);

  useEffect(() => {
    // Fetch data from backend when the component mounts
    fetch("/api/stats")
      .then((response) => response.json())
      .then((data) => setStatsData(data))
      .catch((error) => console.error("Error fetching stats:", error));
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-blue-400">
      <div className="w-full max-w-screen-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold mb-4">Statistics</h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {statsData.map((stat, index) => (
            <div key={index} className="p-4 bg-gray-100 rounded-lg shadow-md">
              <div className="mb-2 text-gray-600">{stat.title}</div>
              <div className="text-2xl font-bold text-blue-500">
                {stat.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Static;
