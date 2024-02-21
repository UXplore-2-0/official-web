import React from "react";
import Chart_fill from "../Component/Assets/Chart_fill.png";

import control from "../Component/Assets/control.png";
import logo from "../Component/Assets/logo.png";
import Setting from "../Component/Assets/Setting.png";
import User from "../Component/Assets/User.png";
import images from "../Component/Assets/images.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faRightFromBracket,
  faSignOut,
  faUser,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

function Sidebar({ selected, setSelected }) {
  const [open, setOpen] = React.useState(true);
  const Menus = [
    { title: "Dashboard", src: Chart_fill },

    { title: "Members", src: User },

    { title: "AddMember", src: User },

    { title: "Setting", src: Setting },
  ];
  return (
    // <div>
    //   <div className="flex ml-1 rounded">
    //     <div
    //       className={` ${
    //         open ? "w-72" : "w-20 "
    //       } bg-[#2c405e] h-screen p-5 pt-8 relative duration-300 mt-3 mb-3 rounded-lg`}
    //     >
    //       <img
    //         src={control}
    //         className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple border-2 rounded-full  ${
    //           !open && "rotate-180"
    //         }`}
    //         onClick={() => setOpen(!open)}
    //       />
    //       <div className="flex gap-x-4 items-center">
    //         <img
    //           src={logo}
    //           className={`cursor-pointer duration-500 ${
    //             open && "rotate-[360deg]"
    //           } `}
    //         />
    //       </div>
    //       <ul className="pt-6">
    //         {Menus.map((Menu, index) => (
    //           <li
    //             key={index}
    //             className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white hover:bg-sky-800 transition-all  text-gray-300 text-sm items-center gap-x-4 ${
    //               Menu.gap ? "mt-9" : "mt-2"
    //             } ${index === 0 && "bg-light-white"} ${
    //               selected === Menu.title && "bg-blue-500 hover:bg-blue-400"
    //             }`}
    //             onClick={() => setSelected(Menu.title)}
    //           >
    //             <img src={Menu.src} />
    //             <span
    //               className={`${!open && "hidden"} origin-left duration-200`}
    //             >
    //               {Menu.title}
    //             </span>
    //           </li>
    //         ))}
    //       </ul>
    //       <div className="absolute bottom-10 mb-3 ml-2">
    //         <button
    //           className={
    //             open &&
    //             `bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded ${
    //               !open ? "flex items-center gap-x-2" : ""
    //             }`
    //           }
    //         >
    //           {!open && (
    //             <img src={images} style={{ width: "20px", height: "20px" }} />
    //           )}
    //           {open && "Logout"}
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="dark ">
      <button
        data-drawer-target="sidebar-multi-level-sidebar"
        data-drawer-toggle="sidebar-multi-level-sidebar"
        aria-controls="sidebar-multi-level-sidebar"
        type="button"
        class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="sidebar-multi-level-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 dark:bg-gray-800"
        aria-label="Sidebar"
      >
        <div
          className={` ${
            open ? "w-64" : "w-20 "
          } p-5 pt-8 relative duration-300 mt-3 mb-3 rounded-lg dark:bg-gray-800`}
        >
          <img
            src={control}
            className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple border-2 rounded-full  ${
              !open && "rotate-180"
            }`}
            onClick={() => setOpen(!open)}
          />
          <div className="flex gap-x-4 items-center">
            <img
              src={logo}
              className={`cursor-pointer duration-500 ${
                open && "rotate-[360deg]"
              } `}
            />
          </div>
        </div>

        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="#"
                className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group transition-all ${
                  selected === "Dashboard" &&
                  "dark:bg-slate-600 hover:dark:bg-blue-900"
                }`}
                onClick={() => setSelected("Dashboard")}
              >
                <svg
                  className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="ms-3">Dashboard</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${
                  selected === "Members" &&
                  "dark:bg-slate-600 hover:dark:bg-blue-900"
                }`}
                onClick={() => setSelected("Members")}
              >
                <FontAwesomeIcon icon={faUsers} />
                <span className="flex-1 ms-3 whitespace-nowrap">Members</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${
                  selected === "AddMember" &&
                  "dark:bg-slate-600 hover:dark:bg-blue-900"
                }`}
                onClick={() => setSelected("AddMember")}
              >
                <FontAwesomeIcon icon={faUser} />
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Add Members
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${
                  selected === "Settings" &&
                  "dark:bg-slate-600 hover:dark:bg-blue-900"
                }`}
                onClick={() => setSelected("Settings")}
              >
                <FontAwesomeIcon icon={faUser} />
                <span className="flex-1 ms-3 whitespace-nowrap">Settings</span>
              </a>
            </li>
          </ul>
          <a
            href="#"
            className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-red-700 transition group`}
            style={{ justifySelf: "flex-end" }}
          >
            <FontAwesomeIcon icon={faSignOut} />
            <span className="flex-1 ms-3 whitespace-nowrap">Logout</span>
          </a>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
