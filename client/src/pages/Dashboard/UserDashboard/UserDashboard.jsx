import React, { useState } from "react";
import Sidebar from "./Component/Sidebar";
import Notification from "./Component/Notification";
import Card from "./Component/Card";
import MemberDeatils from "./Component/MemberDeatils";
import Problem from "./Component/Problem";
import Timer from "./Component/Timer";
import Submission from "./Component/Submission";
import AddMember from "./Component/AddMember";
import Settings from "./Component/Settings";

function UserDashboard() {
  const [selected, setSelected] = useState("Dashboard");

  return (
    <div className="flex flex-row dark rounded-lg border-r-slate-950 justify-between space-x-5  h-full">
      <div className="ml-3 mb-8" style={{ justifySelf: "flex-start" }}>
        <Sidebar selected={selected} setSelected={setSelected} />
      </div>

      {selected === "Dashboard" && (
        <>
          <div className="  w-full mt-3 mb-3   ">
            <div className="flex flex-row  w-full  h-2/4   ">
              <div className=" mx-3 flex w-2/4 ml-3 rounded bg-[#081A51]">
                <Problem details="Coming Soon " />
              </div>

              <div className="w-2/4 ml-2 mr-2 rounded bg-[#081A51]">
                <Submission />
              </div>
            </div>

            <div className="w-auto mt-8 mb-3 h-80  ml-3 mr-2 rounded bg-[#081A51] overflow-hidden scroll-m-48">
              <MemberDeatils />
            </div>
          </div>

          {/* Notification bar */}

          <div className="mr-3">
            <Notification />
            <Timer />
          </div>
        </>
      )}

      {selected === "AddMember" && <AddMember />}
      {selected === "Setting" && <Settings />}
    </div>
  );
}

export default UserDashboard;
