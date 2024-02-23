import React from "react";

function SubmissionDetails() {
  const Team_Details = [
    {
      teamName: "Team 1",
      email: "team1@example.com",
      Link: "https://www.google.com",
      Date: "12/12/2021",
      submit: true,
    },
    {
      teamName: "Team 2",
      email: "team2@example.com",

      Link: "https://www.google.com",
      Date: "12/12/2021",
      submit: true,
    },
    {
      teamName: "Team 3",
      email: "team3@example.com",
      Link: "https://www.google.com",
      Date: "12/12/2021",
      submit: false,
    },
  ];
  return (
    <div className="relative overflow-x-auto ">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-black uppercase dark:text-gray-400 bg-blue-600">
          <tr>
            <th scope="col" className="px-6 py-3">
              <button className="text-white">Team Name</button>
            </th>
            <th scope="col" className="px-6 py-3">
              <button className="text-white">Email</button>
            </th>
            <th scope="col" className="px-6 py-3">
              <button className="text-white">Link</button>
            </th>
            <th scope="col" className="px-6 py-3">
              <button className="text-white">Date</button>
            </th>{" "}
            <th scope="col" className="px-6 py-3">
              <button className="text-white">Submit</button>
            </th>
          </tr>
        </thead>
        <tbody className="bg-blue-950">
          {Team_Details.map((team, index) => (
            <tr key={index}>
              <td
                className="px-6 py-3 cursor-pointer"
                onClick={() => showMemberDetails(team.teamName)}
              >
                {team.teamName}
              </td>
              <td className="px-6 py-3">{team.email}</td>
              <td className="px-6 py-3">{team.Link}</td>
              <td className="px-6 py-3">{team.Date}</td>

              <td className="px-6 py-3">
                {team.submit ? (
                  <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs">
                    Submitted
                  </span>
                ) : (
                  <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs">
                    Not Submitted
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SubmissionDetails;
