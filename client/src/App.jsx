import React, { useState, useEffect ,useRef } from "react";
import { BrowserRouter, Routes, Route, useNavigate, HashRouter} from "react-router-dom";
import gsap from "gsap";
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
import { ReactLenis, useLenis  } from '@studio-freight/react-lenis'

function App() {
  const [user, setUser] = useState(null);


  const logout = () => {
    // Clear authentication
    setUser(null);
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("role");
  };

  return (
    <ReactLenis root>
    <AuthContext.Provider value={{ user, setUser, logout }}>
      
        <div>
          <HashRouter>
            <Routes>
            
              <Route exact path="/" element={<Login />} />
              {user && (
                <Route
                  exact path="/dashboard"
                  element={
                    user && user.role === "admin" ? (
                      <AdminDashboard key={window.location.pathname} />
                    ) : (
                      <UserDashboard key={window.location.pathname} />
                    )
                  }
                />
              )}
              <Route path="/login" element={<Login />} />
              {/* <Route path="/register" element={<Register />} /> */}
              <Route path="/Terms" element={<Terms />} />
              <Route path="/forget-password" element={<ForgetPassword />} />
              <Route path="/verify/:team_name/:token" element={<EmailVerify />} />
              <Route
                path="/reset-password/:team_id/:token"
                element={<PasswordReset />}
              />
              <Route path="*" element={<PageNotFound404 />} />
            </Routes>
          </HashRouter>
        </div>
      
    </AuthContext.Provider>
    </ReactLenis>
  );
}

export default App;