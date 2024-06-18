import React, { useState, useEffect } from 'react';

function Winners() {
  const [teamNames, setTeamNames] = useState([]);

  useEffect(() => {
    fetch('/winners.txt') // Change this to the actual path of your text file
      .then(response => response.text())
      .then(text => {
        const names = text.split('\n');
        setTeamNames(names);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="flex flex-col h-screen overflow-y-scroll">
      <div className="flex flex-row items-center justify-center w-full h-[20%] py-5" style={{
        background: "linear-gradient(to bottom right, #182B44 5%, #1E3855 15%, #0F2132 40%, #1E455E 95%)",
      }}>
        <h1 className="text-white text-6xl font-bold mx-3 flex justify-center">Winners of Round 2</h1>
      </div>

      <div className="relative overflow-hidden shadow-md sm:rounded-lg dark">
        <div className="overflow-y-auto max-h-[80vh]">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 px-5">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3 flex justify-center">
                  Team Name
                </th>
              </tr>
            </thead>
            <tbody>
              {teamNames.map((name, index) => (
                <tr key={index} className={`${index % 2 === 0 ? 'bg-white dark:bg-gray-900' : 'bg-gray-50 dark:bg-gray-800'} cursor-pointer duration-150 transition-all`}>
                  <td className="py-5 text-center">{name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Winners;
