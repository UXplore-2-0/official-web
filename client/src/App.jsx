import React from "react";
import Navbar from "./layout/NavBar/Navbar";
import Home from "./pages/Home/Home";
import Guidlines from "./pages/Home/components/Guidlines/Guidlines";
import Timeline from "./pages/Home/components/Timeline/Timeline";
import "./App.css";

function App() {
  return (
    <div>
      <Guidlines />
      <Timeline />
    </div>
  );
}

export default App;
