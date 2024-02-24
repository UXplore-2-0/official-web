import React from "react";
import ResetPassword from "./ResetPassword";

function Settings({ open }) {
  return (
    <div className={`${open ? "sm:ml-64" : "sm:ml-32"} dark`}>
      <ResetPassword />
    </div>
  );
}

export default Settings;
