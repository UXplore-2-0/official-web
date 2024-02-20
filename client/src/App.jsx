import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import UserDashboard from "./pages/Dashboard/UserDashboard/UserDashboard";
import "./App.css";
import EmailVerify from "./pages/EmailVerify/EmailVerify";

function App() {
  return (
    <div>
      {/* <Home /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/verify/:team_name/:token" element={<EmailVerify />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
