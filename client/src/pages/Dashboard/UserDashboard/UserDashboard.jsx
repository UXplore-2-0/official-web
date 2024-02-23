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

function UserDashboard() {
  const { user } = useContext(AuthContext);
  const [open, setOpen] = useState(true);
  const [selected, setSelected] = useState("Dashboard");
  const [team, setTeam] = useState({});
  const [status, setStatus] = useState({});

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
            <div className="flex flex-col justify-between items-center h-full">
              <div className="flex flex-row justify-between items-center h-full w-full">
                <div className="flex flex-col justify-center items-center w-full">
                  <div
                    className="flex justify-start items-center p-5 text-sky-600 font-bold"
                    style={{ alignSelf: "flex-start", fontSize: "3rem" }}
                  >
                    Hi Team {"  "}
                    <span className="text-sky-400 px-2">
                      {" "}
                      {` ${team.team && team.team.team_name}`}
                    </span>
                  </div>
                  <div className="flex flex-row justify-between items-center w-full h-1/2">
                    <div className=" mx-3 flex w-2/4 ml-3 rounded">
                      <Problem />
                    </div>
                    <div className="w-2/4 ml-2 mr-2 rounded">
                      <Submission />
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
