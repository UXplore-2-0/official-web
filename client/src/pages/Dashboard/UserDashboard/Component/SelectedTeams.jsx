import React, { useState, useEffect } from "react";

function SelectedTeams() {
  const [teamNames, setTeamNames] = useState([]);

  useEffect(() => {
    fetch("/winners.txt") // Change this to the actual path of your text file
      .then((response) => response.text())
      .then((text) => {
        const names = text.split("\n");
        setTeamNames(names);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div
      className={`${
        open ? "sm:ml-64" : "sm:ml-32"
      } dark p-20 justify-between h-[100%]`}
    >
      <div className="flex justify-between items-center px-5 py-2">
        <div className="text-white font-bold py-5" style={{ fontSize: "35px" }}>
          Selected Teams of the Round 1
        </div>
      </div>

      <div class="relative overflow-x-auto shadow-md sm:rounded-lg dark">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3 flex justify-center" style={{ fontSize: "20px" }}>
                Team Names
              </th>
            </tr>
          </thead>
          <tbody>
            {teamNames &&
              teamNames.map((team, index) => (
                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <td class="px-6 py-4 flex justify-center">{team}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SelectedTeams;
