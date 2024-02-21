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
    <div>
      <Sidebar selected={selected} setSelected={setSelected} />

      {selected === "Dashboard" && (
        <>
          <div class="sm:ml-64 dark">
            <div className="  w-full mt-3 mb-3   ">
              <div className="flex flex-row  w-full  h-2/4   ">
                <div className=" mx-3 flex w-2/4 ml-3 rounded">
                  <Problem details="Coming Soon " />
                </div>

                <div className="w-2/4 ml-2 mr-2 rounded bg-[#1b222b]">
                  <Submission />
                </div>
              </div>
            </div>

            {/* Notification bar */}
            <div className="mr-3" style={{ justifySelf: "flex-end" }}>
              <Notification />
              <Timer />
            </div>
          </div>
        </>
      )}

      {selected === "AddMember" && <AddMember />}
      {selected === "Members" && <MemberDeatils />}
      {selected === "Settings" && <Settings />}
    </div>
  );
}

export default UserDashboard;
