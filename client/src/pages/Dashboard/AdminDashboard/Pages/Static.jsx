import React from "react";
import "./Stat.css";

function Static() {
  return (
    <div className="flex justify-center ml-45">
      <div className="flex flex-col items-center justify-center h-screen bg-blue-400">
        <div className="">
          <main class="main-container">
            <div class="main-title">
              <h2>DASHBOARD</h2>
            </div>

            <div class="main-cards">
              <div class="card">
                <div class="card-inner">
                  <h3>Submission</h3>
                  {/* <span class="material-icons-outlined">Group</span> */}
                </div>
                <h1>249</h1>
              </div>

              <div class="card">
                <div class="card-inner">
                  <h3>Online</h3>
                  {/* <span class="material-icons-outlined">Group</span> */}
                </div>
                <h1>25</h1>
              </div>

              {/* <div class="card">
                <div class="card-inner">
                  <h3>CUSTOMERS</h3>
                  <span class="material-icons-outlined">groups</span>
                </div>
                <h1>1500</h1>
              </div> */}

              {/* <div class="card">
                <div class="card-inner">
                  <h3>ALERTS</h3>
                  <span class="material-icons-outlined">
                    notification_important
                  </span>
                </div>
                <h1>56</h1>
              </div> */}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Static;
