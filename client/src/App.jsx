import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import UserDashboard from "./pages/Dashboard/UserDashboard/UserDashboard";
import AdminDashboard from "./pages/Dashboard/AdminDashboard/AdminDashboard";
import EmailVerify from "./pages/EmailVerify/EmailVerify";
import AuthContext from "./context/AuthContext";
import axios from "./api/axios";
import PageNotFound404 from "./pages/404/PageNotFound404";
import PasswordReset from "./pages/PasswordReset/PasswordReset";
import ForgetPassword from "./pages/ForgetPassword/ForgetPassword";
import Terms from "./pages/Home/components/Terms/Terms";
import "./App.css";
function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    if (token) {
      setUser({ token, role });
    }
  }, []);


  const login = (userData) => {
    axios
      .post("/auth/login", userData)
      .then((response) => {
        setUser({ token: response.data.token, role: response.data.role });
        // save to the local storage
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("role", response.data.role);
      })
      .catch((error) => {});
  };


  const logout = () => {
    // Clear authentication
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("role");
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout }}>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            {user && (
              <Route
                path="/dashboard"
                element={
                  user && user.role === "admin" ? (
                    <AdminDashboard />
                  ) : (
                    <UserDashboard />
                  )
                }
              />
            )}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/Terms" element={<Terms />} />
            <Route path="/forget-password" element={<ForgetPassword />} />
            <Route path="/verify/:team_name/:token" element={<EmailVerify />} />
            <Route
              path="/reset-password/:team_id/:token"
              element={<PasswordReset />}
            />
            <Route path="*" element={<PageNotFound404 />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AuthContext.Provider>
  );
}

export default App;