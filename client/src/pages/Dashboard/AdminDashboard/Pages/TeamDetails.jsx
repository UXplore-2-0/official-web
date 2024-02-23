import React, { useContext, useState } from "react";
import Searchbar from "../Components/Searchbar";
import {
  DateFormatter,
  DateFormatterZone,
} from "../../../../util/DateFormatter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClose,
  faDeleteLeft,
  faRecycle,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import axios from "../../../../api/axios";
import AuthContext from "../../../../context/AuthContext";

function TeamDetails({ teams, setTeams }) {
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [deletedTeam, setDeletedTeam] = useState(null);
  const [wantToDelete, setWantToDelete] = useState(false);
  const { user } = useContext(AuthContext);

  const filteredTeams = teams.filter(
    (team) =>
      !searchTerm ||
      team.team_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const showMemberDetails = (teamName) => {
    const team = teams.find((team) => team.team_name === teamName);
    setSelectedTeam(team);
  };

  const closePopup = () => {
    setSelectedTeam(null);
  };

  const deleteTeam = () => {
    // delete team
    axios
      .delete(`/teams/delete/${deletedTeam}`, {
        headers: {
          "x-auth-token": user.token,
        },
      })
      .then((res) => {
        console.log(res);
        // remove the team from the list
        const newTeams = teams.filter((team) => team._id !== team_id);
        setTeams(newTeams);
      })
      .catch((err) => {});
  };

  return (
    <div
      className="flex flex-col"
      style={{
        background:
          "linear-gradient(to bottom right, #182B44 5%, #1E3855 15%, #0F2132 40%, #1E455E 95%)",
      }}
    >
      <div className="flex flex-row items-center  justify-between w-full h-[20%] my-5">
        <h1 className="text-white text-6xl font-bold mx-3">Teams</h1>
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
              placeholder="Search Teams..."
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

      <div class="relative overflow-x-auto shadow-md sm:rounded-lg dark">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Team Name
              </th>
              <th scope="col" class="px-6 py-3">
                Leader Email
              </th>
              <th scope="col" class="px-6 py-3">
                University
              </th>
              <th scope="col" class="px-6 py-3">
                No of Members
              </th>
              <th scope="col" class="px-6 py-3">
                Added At
              </th>
              <th scope="col" class="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {filteredTeams &&
              filteredTeams.map((team, index) => (
                <tr class="odd:bg-white cursor-pointer dark:hover:bg-gray-800 duration-150 transition-all odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    onClick={() => showMemberDetails(team.team_name)}
                  >
                    {team.team_name}
                  </th>
                  <td class="px-6 py-4">{team.email}</td>
                  <td class="px-6 py-4">{team.university}</td>
                  <td class="px-6 py-4">
                    {team.members ? team.members.length : 0}
                  </td>
                  <td class="px-6 py-4">
                    {DateFormatter(new Date(team.createdAt))}
                  </td>

                  <td class="px-6 py-4">
                    <a
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      onClick={() => {
                        setDeletedTeam(team.team_id);
                        setWantToDelete(true);
                      }}
                    >
                      <FontAwesomeIcon
                        icon={faTrash}
                        className="px-2 hover:bg-slate-700 rounded-full w-3 h-3 p-1 duration-200 transition-all"
                        style={{ color: "red" }}
                      />
                    </a>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* Popup */}
      {selectedTeam && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-opacity-50 dark p-5 flex-col"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(5px)",
          }}
        >
          <div className="flex flex-col justify-start items-center my-3">
            <h1 className="text-white font-bold text-4xl my-2">
              Team {selectedTeam.team_name}
            </h1>
            <h2 className="text-blue-700 font-semibold text-2xl">
              {selectedTeam.university}
            </h2>
            <h3 className="text-blue-700 font-semibold text-xl">
              {selectedTeam.members.length} Members
            </h3>
          </div>

          <div class="relative overflow-x-auto shadow-md sm:rounded-lg dark">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Email
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Phone
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Index
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Beverages
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Leader
                  </th>
                </tr>
              </thead>
              <tbody>
                {selectedTeam.members &&
                  selectedTeam.members.map((member, index) => (
                    <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {member.name}
                      </th>
                      <td class="px-6 py-4">{member.email}</td>
                      <td class="px-6 py-4">{member.contact_no}</td>
                      <td class="px-6 py-4">{member.uni_index}</td>
                      <td class="px-6 py-4">
                        {member.beverages === "veg" ? (
                          <span class="bg-green-100 text-green-800 text-sm font-medium me-2 px-5 py-1.5 rounded dark:bg-green-900 dark:text-green-300">
                            Veg
                          </span>
                        ) : (
                          <span class="bg-yellow-100 text-yellow-800 text-sm font-medium me-2 px-5 py-1.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
                            Non Veg
                          </span>
                        )}
                      </td>
                      <td class="px-6 py-4">
                        {member.is_leader ? (
                          <span class="bg-green-100 text-green-800 text-sm font-medium me-2 px-5 py-1.5 rounded dark:bg-green-900 dark:text-green-300">
                            Leader
                          </span>
                        ) : (
                          <span class="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-5 py-1.5 rounded dark:bg-blue-900 dark:text-blue-300">
                            Member
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
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

      {wantToDelete && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-opacity-50 dark p-5 flex-col"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(5px)",
          }}
        >
          <div
            id="alert-additional-content-2"
            className="p-4 mb-4 text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800"
            role="alert"
          >
            <div className="flex items-center">
              <svg
                className="flex-shrink-0 w-4 h-4 me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
              </svg>
              <span className="sr-only">Warning</span>
              <h3 className="text-lg font-medium">Team Deleteion Alert</h3>
            </div>
            <div className="mt-2 mb-4 text-sm">
              Are you sure you want to delete the team? this is an irreversible
              action. you can't undo this action. All the members and related
              data will be deleted.
            </div>
            <div className="flex">
              <button
                type="button"
                className="text-white bg-red-800 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-1.5 me-2 text-center inline-flex items-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                onClick={() => deleteTeam()}
              >
                <svg
                  className="me-2 h-3 w-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 14"
                >
                  <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                </svg>
                Proceed
              </button>
              <button
                type="button"
                className="text-red-800 bg-transparent border border-red-800 hover:bg-red-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:hover:bg-red-600 dark:border-red-600 dark:text-red-500 dark:hover:text-white dark:focus:ring-red-800"
                data-dismiss-target="#alert-additional-content-2"
                aria-label="Close"
                onClick={() => setWantToDelete(false)}
              >
                Dismiss
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TeamDetails;
