import React, { useContext, useEffect, useState } from "react";
import Problem from "./Pages/Problem";
import TeamDetails from "./Pages/TeamDetails";
import SubmissionDetails from "./Pages/SubmissionDetails";
import Static from "./Pages/Static";
import Sidebar from "./Components/Sidebar";
import Faq from "./Pages/Faq";
import Announcement from "./Pages/Announcement";
import AuthContext from "../../../context/AuthContext";
import axios from "../../../api/axios";

function AdminDashboard() {
  const { user } = useContext(AuthContext);
  const [selected, setSelected] = useState("Dashboard");
  const [teams, setTeams] = useState([]);

  const loadTeams = () => {
    axios
      .get("/teams/all", {
        headers: {
          "x-auth-token": user.token,
        },
      })
      .then((res) => {
        setTeams(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    axios
      .get("/teams/all", {
        headers: {
          "x-auth-token": user.token,
        },
      })
      .then((res) => {
        setTeams(res.data);
      })
      .catch((err) => {
        console.error(err);
      });

    const intervalID = setInterval(() => {
      loadTeams();
    }, 2500);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  return (
    <div
      className="flex flex-row h-[100%] dark"
      style={{
        background:
          "linear-gradient(to bottom right, #182B44 5%, #1E3855 15%, #0F2132 40%, #1E455E 95%)",
      }}
    >
      <div className="border">
        <Sidebar selected={selected} setSelected={setSelected} />
      </div>

      <div className="sm:ml-64 dark w-full h-[100%]">
        {selected === "Dashboard" && <Static />}
        {selected === "TeamDetails" && (
          <TeamDetails teams={teams} setTeams={setTeams} />
        )}
        {selected === "SubmissionDetails" && <SubmissionDetails />}
        {selected === "Problem" && <Problem />}
        {selected === "Faq" && <Faq />}
        {selected === "Announcement" && <Announcement />}
      </div>
    </div>
  );
}

export default AdminDashboard;
