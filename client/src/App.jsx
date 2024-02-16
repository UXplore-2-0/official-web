import React from "react";
import Navbar from "./layout/NavBar/Navbar";
import Home from "./pages/Home/Home";
import "./App.css";
import ContactUsPage from "./pages/Home/components/Contacts/ContactUs/ContactUsPage";
import Contacts from "./pages/Home/components/Contacts/Contacts";

function App() {
  return (
    <>
      {/* <ContactUsPage /> */}
      <Contacts />
    </>
  );
}

export default App;
