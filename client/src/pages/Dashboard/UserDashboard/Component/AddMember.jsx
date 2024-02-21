import React, { useState, useEffect, useContext } from "react";
import axios from "../../../../api/axios";
import AuthContext from "../../../../context/AuthContext";

function AddMember({ team, setTeam }) {
  const { user } = useContext(AuthContext);

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [uniIndex, setUniIndex] = useState();
  const [phone, setPhone] = useState();
  const [beverage, setBeverage] = useState();
  const [leader, setLeader] = useState(false);

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      email: email,
      uni_index: uniIndex,
      contact_no: phone,
      beverages: beverage,
      is_leader: leader,
      university: "Uni of Moratuwa",
    };

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

        setTeam({
          ...team,
          members: [...team.members, res.data],
          count: team.count + 1,
        });

        setTimeout(() => {
          setSuccess(false);
          setError(null);
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
        setError("Something went wrong");
      });
  };

  return (
    <div className="sm:ml-64 dark p-20">
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
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label
              for="last_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              University Index
            </label>
            <input
              type="text"
              id="last_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Doe"
              required
              value={uniIndex}
              onChange={(e) => setUniIndex(e.target.value)}
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
    </div>
  );
}

export default AddMember;
