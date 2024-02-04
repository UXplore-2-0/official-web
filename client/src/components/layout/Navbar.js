import React, { Fragment } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";

const Navbar = ({ about, contact }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleAbout = () => {
    const about = document.querySelector("#about");
    about.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  const handleContact = () => {
    const contact = document.querySelector("#contact");
    contact.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <Fragment>
      <nav>
        <img src="logo 2.svg" alt="" />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {location.pathname === "/dashboard" ? (
            <Fragment>
              <li>
                <Link onClick={() => handleAbout()}>About</Link>
              </li>
              <li>
                <Link onClick={() => handleContact()}>Contact us</Link>
              </li>
            </Fragment>
          ) : (
            <Fragment></Fragment>
          )}
        </ul>
        {/* <div className="nav-buttons">
          <button
            className="btn btn-secondary"
            onClick={() => navigate("/register")}
          >
            Register
          </button>
          <button
            className="btn btn-gradient"
            onClick={() => navigate("/login")}
          >
            Sign In
          </button>
        </div> */}
      </nav>
    </Fragment>
  );
};

export default Navbar;
