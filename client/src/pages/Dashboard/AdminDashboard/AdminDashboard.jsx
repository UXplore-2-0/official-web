import React, { useState } from "react";
import Problem from "./Pages/Problem";
import TeamDetails from "./Pages/TeamDetails";
import SubmissionDetails from "./Pages/SubmissionDetails";
import Static from "./Pages/Static";
import Sidebar from "./Components/Sidebar";

function AdminDashboard() {
    const [selected, setSelected] = useState("Dashboard");

    return (
        <div className="flex">
            <div className="w-1/4">
                <Sidebar selected={selected} setSelected={setSelected} />
            </div>

            <div className="flex-1  w-3/4">
                {selected === "Dashboard" && <Static />}
                {selected === "TeamDetails" && <TeamDetails />}
                {selected === "SubmissionDetails" && <SubmissionDetails />}
                {selected === "Problem" && <Problem />}
            </div>
        </div>
    );
}

export default AdminDashboard;
