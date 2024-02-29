import React, { useEffect, useState } from "react";
import axios from "../../../../api/axios";
import Loading from "../../../Loading/Loading";

function EditMember({ member, user, setClose, refreshTeam }) {
  const [name, setName] = useState(member.name);
  const [email, setEmail] = useState(member.email);
  const [uniIndex, setUniIndex] = useState(member.uni_index);
  const [nic, setNic] = useState(member.nic);
  const [phone, setPhone] = useState(member.contact_no);
  const [beverage, setBeverage] = useState(member.beverages);
  const [leader, setLeader] = useState(member.is_leader);
  const [uploading, setUploading] = useState(false);

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      email: email,
      uni_index: uniIndex,
      contact_no: phone,
      nic: nic,
      beverages: beverage,
    };

    setUploading(true);
    axios
      .put(`/teams/${member.member_id}`, data, {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": user.token,
        },
      })
      .then((res) => {
        setSuccess(true);
        setError(null);
        setUploading(false);

        refreshTeam();

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
    <div className="dark">
      {!uploading && (
        <>
          <section className="bg-white dark:bg-gray-900">
            <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
              <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                Update Member
              </h2>
              <form action="#">
                <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
                  <div className="sm:col-span-2">
                    <label
                      for="name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Member Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      value={member.name}
                      placeholder="Type member name"
                      required=""
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div class="w-full">
                    <label
                      for="uni_index"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      University Index
                    </label>
                    <input
                      type="text"
                      name="uni_index"
                      id="brand"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      value={member.uni_index}
                      placeholder="Type University Index"
                      required=""
                      onChange={(e) => setUniIndex(e.target.value)}
                    />
                  </div>
                  <div className="w-full">
                    <label
                      for="nic"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      NIC Number
                    </label>
                    <input
                      type="text"
                      name="nic"
                      id="price"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      value="2999"
                      placeholder={member.nic}
                      required=""
                      pattern="^[0-9]{9}[vVxX]$|^[0-9]{12}$"
                      onChange={(e) => setNic(e.target.value)}
                    />
                  </div>
                  <div>
                    <label
                      for="contact_no"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Contact Number
                    </label>
                    <input
                      type="text"
                      name="contact_no"
                      id="contact_id"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      value={member.contact_no}
                      placeholder="123-45-678"
                      pattern="[0-9]{10}"
                      required=""
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div>
                    <label
                      for="category"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Beverages Preference
                    </label>
                    <select
                      id="category"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      value={member.beverages}
                      required=""
                      onChange={(e) => setBeverage(e.target.value)}
                    >
                      <option selected="" value="Veg">
                        Veg
                      </option>
                      <option value="Non-Veg">Non Veg</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      for="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Email
                    </label>
                    {member.is_leader && (
                      <input
                        type="text"
                        name="email"
                        id="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        value={member.email}
                        placeholder="Type email"
                        required=""
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                        disabled
                      />
                    )}
                    {!member.is_leader && (
                      <input
                        type="text"
                        name="email"
                        id="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        value={member.email}
                        placeholder="Type email"
                        required=""
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    )}
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <button
                    type="submit"
                    className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    onClick={onSubmit}
                  >
                    Update Member
                  </button>
                  <button
                    type="button"
                    className="text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                    onClick={() => setClose(false)}
                  >
                    <svg
                      className="w-5 h-5 mr-1 -ml-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Close
                  </button>
                </div>
              </form>

              {success && (
                <div class="flex justify-center items-center p-4 m-10 text-base leading-5 text-white bg-green-500 rounded-lg opacity-100 font-regular">
                  Member Updated Successfully.
                </div>
              )}
            </div>
          </section>
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

export default EditMember;
