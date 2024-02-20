import React from "react";

function MemberDeatils() {
  const MemberDetails = [
    {
      name: "John Doe",
      email: "johndoe@example.com",
      phone: "1234567890",
      index: "114578D",
      beverage: "Coffee",
    },
    {
      name: "John Doe",
      email: "johndoe@example.com",
      phone: "1234567890",
      index: "114578D",
      beverage: "Coffee",
    },
    {
      name: "John Doe",
      email: "johndoe@example.com",
      phone: "1234567890",
      index: "114578D",
      beverage: "Coffee",
    },
    {
      name: "John Doe",
      email: "johndoe@example.com",
      phone: "1234567890",
      index: "114578D",
      beverage: "Coffee",
    },
  ];

  return (
    <div className="w-full h-full">
      <div className="flex justify-between items-center px-5 py-2">
        <div
          className="text-white font-bold px-10 py-5"
          style={{ fontSize: "30px" }}
        >
          Member Details
        </div>
        <button className="flex justify-center items-center rounded-lg bg-blue-700 text-white hover:bg-blue-500 py-2 px-5 transition">
          Add Member
        </button>
      </div>
      {/* <div className='grid grid-cols-2 gap-x-50 h-fix text-white font-bold'>
                <div>
                    Name
                </div>
                <div>
                    Email
                </div>

            </div>

            {MemberDeatls.map((member, index) => (
                <div key={index} className='grid grid-cols-2 justify h-auto gap-x-50 text-white'>
                    <div>
                        {member.name}
                    </div>
                    <div>
                        {member.email}
                    </div>
                    <div>
                        {member.phone}
                    </div>
                </div>
            ))} */}

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
              <th scope="col" class="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {MemberDetails.map((member, index) => (
              <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  member.name
                </th>
                <td class="px-6 py-4">{member.email}</td>
                <td class="px-6 py-4">{member.phone}</td>
                <td class="px-6 py-4">{member.index}</td>
                <td class="px-6 py-4">{member.beverage}</td>

                <td class="px-6 py-4">
                  <a
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MemberDeatils;
