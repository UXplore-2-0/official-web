import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import control from "../Component/Assets/control.png";
import logo from "../../../../../public/logo512.png";
import Setting from "../Component/Assets/Setting.png";
import User from "../Component/Assets/User.png";
import images from "../Component/Assets/images.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import winnerImage from "../../../../../public/images/success.png";
import {
  faArrowLeft,
  faArrowRight,
  faCircleQuestion,
  faRankingStar,
  faSignOut,
  faUser,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import AuthContext from "../../../../context/AuthContext";

function Sidebar({ selected, setSelected, team, open, setOpen }) {
  const navigate = useNavigate();
  const { user, setUser } = useContext(AuthContext);

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    // redirect to the main page
    navigate("/");
  };

  return (
    <div className="dark ">
      <button
        data-drawer-target="sidebar-multi-level-sidebar"
        data-drawer-toggle="sidebar-multi-level-sidebar"
        aria-controls="sidebar-multi-level-sidebar"
        type="button"
        class="inline-flex items-center p-2 mx-2 ms-3 text-sm bg-blue-500 text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        onClick={() => setOpen(!open)}
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
        className={`fixed top-0 left-0 z-40 ${
          open ? "w-64" : "w-20"
        } h-screen transition-transform -translate-x-full sm:translate-x-0 dark:bg-gray-800`}
        aria-label="Sidebar"
      >
        <div
          className={` ${
            open ? "w-64" : "w-20 "
          } p-5 pt-8 relative duration-300 mt-3 mb-3 rounded-lg dark:bg-gray-800`}
        >
          {/* <img
            src={control}
            className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple border-2 rounded-full  ${
              !open && "rotate-180"
            }`}
            onClick={() => setOpen(!open)}
          /> */}
          <FontAwesomeIcon
            icon={faArrowLeft}
            className={`absolute cursor-pointer -right-8 top-0 w-5 h-5 p-1 border-dark-purple border-2 rounded-full hover:bg-slate-700 transition-all duration-200 mx-2 border-gray-500 ${
              !open && "rotate-180"
            }`}
            size="2xs"
            style={{ color: "gray" }}
            onClick={() => setOpen(!open)}
          />
          <Link to="/">
            <div className="flex gap-x-4 items-center">
              <img
                src={logo}
                className={`cursor-pointer duration-500 ${
                  open && "rotate-[360deg]"
                } `}
              />
            </div>
          </Link>
        </div>

        {/* <div class="text-2xl font-bold text-center text-blue-500">
          Hello {team.team && team.team.team_name}
        </div> */}

        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <div
                className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group transition-all cursor-pointer ${
                  selected === "Dashboard" &&
                  "dark:bg-slate-600 hover:dark:bg-blue-900"
                } ${!open && "w-12"}`}
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
                {open && <span className="ms-3">Dashboard</span>}
              </div>
            </li>
            <li>
              <div
                className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group  cursor-pointer ${
                  selected === "Members" &&
                  "dark:bg-slate-600 hover:dark:bg-blue-900"
                } ${!open && "w-12"}`}
                onClick={() => setSelected("Members")}
              >
                <FontAwesomeIcon icon={faUsers} />
                {open && (
                  <span className="flex-1 ms-3 whitespace-nowrap">Members</span>
                )}
              </div>
            </li>

            {/* {team.count < 3 && (
              <li>
                <div
                  className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group cursor-pointer ${
                    selected === "AddMember" &&
                    "dark:bg-slate-600 hover:dark:bg-blue-900"
                  } ${!open && "w-12"}`}
                  onClick={() => setSelected("AddMember")}
                >
                  <FontAwesomeIcon icon={faUser} />
                  {open && (
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      Add Members
                    </span>
                  )}
                </div>
              </li>
            )} */}
            <li>
              <div
                className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group cursor-pointer ${
                  selected === "FAQ" &&
                  "dark:bg-slate-600 hover:dark:bg-blue-900"
                } ${!open && "w-12"}`}
                onClick={() => setSelected("FAQ")}
              >
                <FontAwesomeIcon icon={faCircleQuestion} />
                {open && (
                  <span className="flex-1 ms-3 whitespace-nowrap">FAQs</span>
                )}
              </div>
            </li>
            {/* <li>
              <div
                className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group cursor-pointer ${
                  selected === "LeaderBoard" &&
                  "dark:bg-slate-600 hover:dark:bg-blue-900"
                } ${!open && "w-12"}`}
                onClick={() => setSelected("LeaderBoard")}
              >
                <FontAwesomeIcon icon={faRankingStar} />
                {open && (
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Leader Board
                  </span>
                )}
              </div>
            </li> */}
            <li>
            <div
                className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group cursor-pointer ${
                  selected === "Winners" &&
                  "dark:bg-slate-600 hover:dark:bg-blue-900"
                } ${!open && "w-12"}`}
                onClick={() => setSelected("Winners")}
              >
                <FontAwesomeIcon icon={faUser} />
                {/* <img src={winnerImage} className="h-1" /> */}
                {open && (
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Selected Teams
                  </span>
                )}
              </div>


            </li>

            <li>
              <div
                className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group cursor-pointer ${
                  selected === "Settings" &&
                  "dark:bg-slate-600 hover:dark:bg-blue-900"
                } ${!open && "w-12"}`}
                onClick={() => setSelected("Settings")}
              >
                <FontAwesomeIcon icon={faUser} />
                {open && (
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Settings
                  </span>
                )}
              </div>
            </li>
          </ul>
          <div
            className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-red-700 transition group cursor-pointer ${
              !open && "w-12"
            }`}
            style={{ justifySelf: "flex-end" }}
            onClick={logout}
          >
            <FontAwesomeIcon icon={faSignOut} />
            {open && <span className="ms-3">Logout</span>}
          </div>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
