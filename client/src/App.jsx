import React from "react";
import Navbar from "./layout/NavBar/Navbar";
import Home from "./pages/Home/Home";
import Bubble from "./pages/Dashboard/ContactUs/Bubble";
import ContactUsPage from "./pages/Dashboard/ContactUs/ContactUsPage";
import ContactUs from "./pages/Dashboard/ContactUs/Contact Us/ContactUs";

function App() {
  return (
    <>
      <ContactUsPage />
      <ContactUs />
    </>
  );
}

export default App;
