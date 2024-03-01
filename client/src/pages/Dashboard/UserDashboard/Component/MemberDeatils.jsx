import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRefresh } from "@fortawesome/free-solid-svg-icons";
import EditMember from "./EditMember";

function MemberDeatils({ selected, setSelected, team, refreshTeam, open }) {
  const [edit, setEdit] = useState(false);
  const [selectedMember, setSelectedMember] = useState({});

  const handleAddMembers = () => {
    setSelected("AddMember");
  };

  const MAX_NUMBERS = 3;

  return (
    <div className={`${open ? "sm:ml-64" : "sm:ml-32"} dark p-20 h-full`}>
      <div className="flex justify-between items-center px-5 py-2">
        <div className="text-white font-bold py-5" style={{ fontSize: "35px" }}>
          Member Details
        </div>
        <div className="flex flex-row justify-end items-center">
          <button
            type="button"
            className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none border-2 border-gray-700 mx-5"
            disabled
          >
            <span className="inline-flex items-center justify-center w-4 h-4 ms-2 mx-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
              {MAX_NUMBERS - team.count}
            </span>
            More Members
          </button>
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={refreshTeam}
          >
            <FontAwesomeIcon icon={faRefresh} className="px-2" />
            Refresh
          </button>

          {team.count < 3 && (
            <button
              className="flex justify-center items-center rounded-lg bg-blue-700 text-white hover:bg-blue-500 py-2 px-5 transition"
              onClick={handleAddMembers}
            >
              Add Member
            </button>
          )}
        </div>
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
              <th scope="col" class="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {team.members &&
              team.members.map((member, index) => (
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

                  <td class="px-6 py-4">
                    <button
                      type="submit"
                      className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      onClick={() => {
                        setEdit(true);
                        setSelectedMember(member);
                      }}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {edit && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-opacity-50 dark p-5 flex-col"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(5px)",
          }}
        >
          <EditMember
            member={selectedMember}
            setClose={setEdit}
            user={user}
            refreshTeam={refreshTeam}
          />
        </div>
      )}
    </div>
  );
}

export default MemberDeatils;
