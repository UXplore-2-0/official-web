import React, { useState } from "react";
import Problem from "./Pages/Problem";
import TeamDetails from "./Pages/TeamDetails";
import SubmissionDetails from "./Pages/SubmissionDetails";
import Static from "./Pages/Static";
import Sidebar from "./Components/Sidebar";
import Faq from "./Pages/Faq";
import Announcement from "./Pages/Announcement";

function AdminDashboard() {
    const [selected, setSelected] = useState("Dashboard");

    return (
        <div className="flex flex-row">

            <div className="border">
                <Sidebar selected={selected} setSelected={setSelected} />
            </div>


            <div className="sm:ml-64 dark w-full h-full">
                {selected === "Dashboard" && <Static />}
                {selected === "TeamDetails" && <TeamDetails />}
                {selected === "SubmissionDetails" && <SubmissionDetails />}
                {selected === "Problem" && <Problem />}
                {selected === "Faq" && <Faq />}
                {selected === "Announcement" && <Announcement />}

            </div>
        </div>
    );

}

export default AdminDashboard;
