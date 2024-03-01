import React, { useState, useEffect, useContext } from "react";
import axios from "../../../../api/axios";
import AuthContext from "../../../../context/AuthContext";
import Loading from "../../../Loading/Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWarning } from "@fortawesome/free-solid-svg-icons";

function AddMember({ team, setTeam, open }) {
  const { user } = useContext(AuthContext);

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [uniIndex, setUniIndex] = useState();
  const [nic, setNic] = useState();
  const [phone, setPhone] = useState();
  const [beverage, setBeverage] = useState("Veg");
  const [leader, setLeader] = useState(false);
  const [uploading, setUploading] = useState(false);

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const isThereIsLeader = () => {
    console.log(team);
    const leader = team.members.find((member) => member.is_leader === true);
    if (leader) {
      return true;
    }
    return false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      email: leader ? team.team.email : email,
      uni_index: uniIndex,
      contact_no: phone,
      nic: nic,
      beverages: beverage,
      is_leader: leader,
    };

    setUploading(true);
    axios
      .post("/teams/add", data, {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": user.token,
        },
      })
      .then((res) => {
        setSuccess(true);
        setError(null);
        setUploading(false);

        setTeam({
          ...team,
          members: [...team.members, res.data.member],
          count: team.count + 1,
        });

        setTimeout(() => {
          setSuccess(false);
          setError(null);
        }, 3000);
      })
      .catch((err) => {
        setUploading(false);
        setError("Something went wrong");

        setTimeout(() => {
          setError(null);
        }, 2000);
      });
  };

  return (
    <div className={`${open ? "sm:ml-64" : "sm:ml-32"} dark p-20`}>
      {!uploading && (
        <>
          <div
            className="flex justify-center items-center font-bold text-white m-10"
            style={{ fontSize: "40px" }}
          >
            Add Member
          </div>
          <form>
            <div className="grid gap-6 mb-6 md:grid-cols-2 w-full">
              <div>
                <label
                  for="first_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="full_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="John"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label
                  for="uni_index"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  University Index
                </label>
                <input
                  type="text"
                  id="university Index"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="170000V"
                  required
                  value={uniIndex}
                  onChange={(e) => setUniIndex(e.target.value)}
                />
              </div>
              <div>
                <label
                  for="nic"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  NIC Number
                </label>
                <input
                  type="text"
                  id="nic"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="123456789V"
                  pattern="^[0-9]{9}[vVxX]$|^[0-9]{12}$"
                  required
                  value={nic}
                  onChange={(e) => setNic(e.target.value)}
                />
              </div>
              <div>
                <label
                  for="phone"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Phone number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="123-45-678"
                  pattern="[0-9]{10}"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div>
                <label
                  for="beverages"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Select an option
                </label>
                <select
                  id="beverages"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  value={beverage}
                  onChange={(e) => setBeverage(e.target.value)}
                >
                  <option value="Veg">Veg</option>
                  <option value="Non-Veg">Non Veg</option>
                </select>
              </div>
            </div>
            <div class="mb-6">
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email address
              </label>
              {!leader ? (
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="john.doe@company.com"
                  required
                  value={email}
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  onChange={(e) => setEmail(e.target.value)}
                />
              ) : (
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="john.doe@company.com"
                  required
                  value={team.team.email}
                  disabled
                />
              )}
            </div>

            {team && team.members && isThereIsLeader() ? (
              <div className="flex flex-row my-5">
                <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-3 py-1.5 rounded dark:bg-green-900 dark:text-green-300">
                  Leader is already chosen.
                </span>
              </div>
            ) : (
              <div className="flex items-center mb-4">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value={leader}
                  onChange={(e) => setLeader(e.target.checked)}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-checkbox"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Leader
                </label>
              </div>
            )}

            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={handleSubmit}
            >
              Add Member
            </button>
          </form>
          {success && (
            <div class="flex justify-center items-center p-4 m-10 text-base leading-5 text-white bg-green-500 rounded-lg opacity-100 font-regular">
              Member Added Successfully.
            </div>
          )}
        </>
      )}

      {error && (
        <div
          className="fixed top-0 left-0 w-full h-full flex justify-center items-center dark"
          style={{
            backdropFilter: "blur(5px)",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 99999,
          }}
        >
          <div
            id="toast-danger"
            className="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
            role="alert"
          >
            <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
              <FontAwesomeIcon icon={faWarning} className="w-4 h-4" />
              <span className="sr-only">Error icon</span>
            </div>
            <div className="ms-3 text-base font-normal">{error}</div>
            <button
              onClick={() => setError(null)}
              type="button"
              className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
              data-dismiss-target="#toast-danger"
              aria-label="Close"
            >
              <span className="sr-only">Close</span>
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
          </div>
        </div>
      )}

      {uploading && <Loading />}
    </div>
  );
}

export default AddMember;
