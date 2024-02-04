import Login from "./components/layout/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Register from "./components/layout/Register";
import React, { Fragment } from "react";
import Landing from "./components/layout/Landing";
import Navbar from "./components/layout/Navbar";
import EmailVerify from "./components/layout/EmailVerify";
import TeamRegister from "./components/layout/TeamRegister";
import Pending from "./components/layout/Pending";
import { TeamProvider } from "./components/layout/TeamContext";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: "dashboard",
    };
  }
  setRoute = (route) => {
    this.setState({
      route: route,
    });
  };

  render() {
    return (
      <Router>
        <Fragment>
          <Navbar />
          <TeamProvider>
            <Routes>
              <Route exact path="/dashboard" element={<Landing />} />
              {/* <Route exact path="/login" element={<Login />} /> */}
              {/* <Route
                exact
                path="/register"
                element={<Register setRoute={this.setRoute} />}
              /> */}
              <Route path="/activate/:token" element={<EmailVerify />} />
              <Route exact path="/addMembers" element={<TeamRegister />} />
              <Route path="/pending" element={<Pending />} />
              <Route
                path="*"
                element={<Navigate to="/dashboard" replace={true} />}
              />
            </Routes>
          </TeamProvider>
        </Fragment>
      </Router>
    );
  }
}

export default App;
