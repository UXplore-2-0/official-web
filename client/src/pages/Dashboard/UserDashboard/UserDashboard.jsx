import React, { useEffect, useState, useContext } from "react";
import AuthContext from "../../../context/AuthContext";
import Sidebar from "./Component/Sidebar";
import Notification from "./Component/Notification";
import MemberDeatils from "./Component/MemberDeatils";
import Problem from "./Component/Problem";
import Timer from "./Component/Timer";
import Submission from "./Component/Submission";
import AddMember from "./Component/AddMember";
import Settings from "./Component/Settings";
import axios from "../../../api/axios";
import FAQ from "./Component/FAQ";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faClose, faLink } from "@fortawesome/free-solid-svg-icons";

function UserDashboard() {
  const { user } = useContext(AuthContext);
  const [open, setOpen] = useState(true);
  const [selected, setSelected] = useState("Dashboard");
  const [team, setTeam] = useState({});
  const [status, setStatus] = useState({});
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [uploading, setUploading] = useState(false);

  const refreshTeam = () => {
    axios
      .get("/teams/", {
        headers: {
          "x-auth-token": user.token,
        },
      })
      .then((res) => {
        setTeam(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios
      .get("/teams/status")
      .then((res) => {
        setStatus(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("/teams/", {
        headers: {
          "x-auth-token": user.token,
        },
      })
      .then((res) => {
        setTeam(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div
      className="h-screen"
      style={{
        background:
          "linear-gradient(to bottom right, #182B44 5%, #1E3855 15%, #0F2132 40%, #1E455E 95%)",
      }}
    >
      <Sidebar
        selected={selected}
        setSelected={setSelected}
        team={team}
        open={open}
        setOpen={setOpen}
      />

      {selected === "Dashboard" && (
        <>
          <div class={`${open ? "sm:ml-64 " : "sm:ml-28"} h-full dark`}>
            {error && (
              <div className="absolute top-[50%] left-[50%]">
                <div
                  className="flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                  role="alert"
                >
                  <FontAwesomeIcon
                    icon={faClose}
                    style={{ color: "red" }}
                    className="px-3"
                  />
                  <span className="sr-only">Info</span>
                  <div>
                    <span className="font-medium">Error! </span> {error}
                  </div>
                </div>
              </div>
            )}
            {success && (
              <div className="absolute top-[50%] left-[50%]">
                <div
                  className="flex items-center p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
                  role="alert"
                >
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ color: "green" }}
                    className="px-3"
                  />
                  <span className="sr-only">Info</span>
                  <div>
                    <span className="font-medium">Success!</span> Successfully
                    addded the announcement
                  </div>
                </div>
              </div>
            )}

            {uploading && (
              <div
                className="absolute w-full h-full z-50"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  backdropFilter: "blur(5px)",
                }}
              >
                <div className="flex items-center justify-center h-screen absolute left-[40%]">
                  <div className="relative">
                    <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
                    <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin"></div>
                  </div>
                </div>
              </div>
            )}

            <div className="flex flex-col justify-between items-center h-full">
              <div className="flex flex-row justify-between items-center h-full w-full">
                <div className="flex flex-col justify-center items-center w-full">
                  <div
                    className="flex justify-between items-center p-5 text-sky-600 font-bold w-full"
                    style={{ alignSelf: "flex-start", fontSize: "3rem" }}
                  >
                    <div>
                      Hi Team {"  "}
                      <span className="text-sky-400 px-2">
                        {" "}
                        {` ${team.team && team.team.team_name}`}
                      </span>
                    </div>
                    <button
                      type="button"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                      <FontAwesomeIcon icon={faLink} className="px-3" />
                      Connect to Zoom
                    </button>
                  </div>
                  <div className="flex flex-row justify-between items-center w-full h-1/2">
                    <div className=" mx-3 flex w-2/4 ml-3 rounded">
                      <Problem />
                    </div>
                    <div className="w-2/4 ml-2 mr-2 rounded">
                      <Submission
                        team={team}
                        setError={setError}
                        setSuccess={setSuccess}
                        setUploading={setUploading}
                      />
                    </div>
                  </div>
                </div>
                <div className=" mx-3 flex ml-3 rounded">
                  <Notification />
                </div>
              </div>
              <Timer status={status} />
            </div>
          </div>
        </>
      )}

      {selected === "AddMember" && <AddMember team={team} setTeam={setTeam} />}
      {selected === "Members" && (
        <MemberDeatils
          selected={selected}
          setSelected={setSelected}
          team={team}
          refreshTeam={refreshTeam}
        />
      )}
      {selected === "Settings" && <Settings />}
      {selected === "FAQ" && <FAQ />}
    </div>
  );
}

export default UserDashboard;
