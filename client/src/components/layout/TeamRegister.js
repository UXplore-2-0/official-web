import React, { Fragment, useState } from "react";
//import { Link } from 'react-router-dom';
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import { CAlert } from "@coreui/react";
import { useTeam } from "./TeamContext";
import { API_URL } from "../constants";

function TeamRegister() {
  const { team } = useTeam();
  const [university, setUniversity] = useState("");
  const [t01name, setT01name] = useState("");
  const [t01contact, setT01contact] = useState("");
  const [t01university_index, setT01university_index] = useState("");
  const [t02university_index, setT02university_index] = useState("");
  const [t02name, setT02name] = useState("");
  const [t03name, setT03name] = useState("");
  const [t03university_index, setT03university_index] = useState("");

  const [alert, setAlert] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `${API_URL}/teams/addMembers`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          team: team,
          university: university,
          t01name: t01name,
          t01university_index: t01university_index,
          t01contact: t01contact,
          t02name: t02name,
          t02university_index: t02university_index,
          t03name: t03name,
          t03university_index: t03university_index,
        }),
      }
    );
    const data = await response.json();
    //console.log(team);
    //console.log(data);
    // you can handle the response data here, such as showing a success message to the user
    if (response.ok === false) {
      setAlert(
        <CAlert
          className="my-alert"
          color="danger"
          variant="solid"
          style={{
            backgroundColor: "#F44336",
            color: "#FFFFFF",
            border: "none",
            borderRadius: "10px",
            padding: "20px",
            boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "fixed",
            top: "0",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: "999",
            width: "40%",
            marginTop: "100px",
            marginRight: "150px",
          }}
        >
          <FaExclamationCircle
            size={30}
            style={{ marginRight: "5px", color: "#FFFFFF" }}
          />
          <span style={{ fontSize: "1rem", marginLeft: "5px" }}>
            Submission Failed
          </span>
        </CAlert>
      );
    } else {
      window.location.href = "/pending";

      setAlert(
        <CAlert
          className="my-alert"
          color="success"
          variant="solid"
          style={{
            backgroundColor: "#4CAF50",
            color: "#FFFFFF",
            border: "none",
            borderRadius: "10px",
            padding: "20px",
            boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "fixed",
            top: "0",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: "999",
            width: "46%",
            marginTop: "100px",
            marginRight: "170px",
          }}
        >
          <FaCheckCircle
            size={30}
            style={{ marginRight: "5px", color: "#FFFFFF" }}
          />
          <span style={{ fontSize: "1rem", marginLeft: "5px" }}>
            Submission Successfull
          </span>
        </CAlert>
      );
      setUniversity("");
      setT01name("");
      setT01university_index("");
      setT02name("");
      setT02university_index("");
      setT03name("");
      setT03university_index("");
      setT01contact("");
    }

    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  return (
    <Fragment>
      <section className="container-center">
        <div className="register">
          <h1
            style={{
              textAlign: "center",
              paddingBottom: "8px",
              paddingTop: "20px",
            }}
          >
            Register
          </h1>
          <h3 style={{ textAlign: "center", paddingBottom: "19px" }}>
            Your Team Members
          </h3>
          <form action="POST" className="form" onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="university">University</label>
              <input
                type="text"
                placeholder="Enter university name"
                name="university"
                value={university}
                onChange={(e) => setUniversity(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="name1">Team Member 1 (Leader)</label>
              <input
                type="text"
                placeholder="Enter name"
                name="name1"
                value={t01name}
                onChange={(e) => setT01name(e.target.value)}
              />
              <input
                type="text"
                placeholder="Enter index number"
                name="index1"
                value={t01university_index}
                onChange={(e) => setT01university_index(e.target.value)}
              />
              <input
                type="text"
                placeholder="Enter contact number"
                name="contact1"
                value={t01contact}
                onChange={(e) => setT01contact(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="name2">Team Member 2</label>
              <input
                type="text"
                placeholder="Enter name"
                name="name2"
                value={t02name}
                onChange={(e) => setT02name(e.target.value)}
              />
              <input
                type="text"
                placeholder="Enter index number"
                name="index2"
                value={t02university_index}
                onChange={(e) => setT02university_index(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="name3">Team Member 3</label>
              <input
                type="text"
                placeholder="Enter name"
                name="name3"
                value={t03name}
                onChange={(e) => setT03name(e.target.value)}
              />
              <input
                type="text"
                placeholder="Enter index number"
                name="index3"
                value={t03university_index}
                onChange={(e) => setT03university_index(e.target.value)}
              />
            </div>
            <div className="card-footer mt-1">
              <button
                className="btn btn-gradient"
                type="submit"
                style={{ marginBottom: "20px" }}
              >
                Submit
              </button>
            </div>
          </form>
          {alert}
        </div>
      </section>
      <style jsx>{`
        .container-center {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 129vh;
          padding: 60px 70px;
        }
        .register {
          background-color: #fff;
          padding-left: 100px;
          padding-right: 100px;
          border-radius: 10px;
          box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
          height: 100%;
        }
        form {
          display: flex;
          flex-direction: column;
          width: 100%;
        }
        label {
          margin-bottom: 10px;
        }
        .input-group {
          margin-bottom: 20px;
        }
        input {
          padding: 10px;
          border-radius: 5px;
          border: 1px solid #ccc;
          margin-bottom: 10px;
          width: 100px;
        }
        input:focus {
          outline: none;
          box-shadow: 0px 0px 3px #ccc;
          border: 1px solid #ccc;
        }
        .btn {
          background-color: #2196f3;
          color: #fff;
          padding: 10px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
      `}</style>
    </Fragment>
  );
}
export default TeamRegister;
