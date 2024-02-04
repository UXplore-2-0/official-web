import { useEffect, useState, Fragment, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import success from "../../img/success.png";
import styles from "./styles.module.css";
import Error from "./error2.js";
import { useTeam } from "./TeamContext";
import { API_URL } from "../constants";

const EmailVerify = () => {
  const { setTeam } = useTeam();
  const [validUrl, setValidUrl] = useState(false);
  const [hasSentRequest, setHasSentRequest] = useState(false);
  const hasSentRequestB = useRef(false);
  const param = useParams();
  const [route, setRoute] = useState("/addMembers");
  const [teamID, setTeamID] = useState(null);

  useEffect(() => {
    async function activateTeam() {
      try {
        const response = await fetch(
          `${API_URL}/teams/activate/${param.token}`,
          {
            method: "PATCH",
            headers: { "content-type": "application/json" },
          }
        );

        if (response.ok) {
          const data = await response.json();
          //console.log(data.data.team);
          setTeam(data.data.team);
          setTeamID(data.data.team);
          //console.log(teamID);
          setValidUrl(true);
        } else {
          setValidUrl(false);
        }
      } catch (error) {
        setValidUrl(false);
        //console.error(error);
      } finally {
        setHasSentRequest(true);
      }
    }

    if (!hasSentRequestB.current) {
      activateTeam();
      hasSentRequestB.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [param.token, setTeam]);

  useEffect(() => {
    async function getRoute() {
      if (teamID !== null) {
        try {
          console.log("Working");
          const response = await fetch(
            `${API_URL}/teams/getMember/${teamID}`,
            {
              method: "GET",
              headers: { "content-type": "application/json" },
            }
          );
          if (response.ok) {
            const data = await response.json();
            setRoute("/pending");
          } else {
            console.error("Something went wrong");
          }
        } catch (error) {
          //console.error(error);
        }
      }
    }
    if (hasSentRequest) {
      // add conditional check to ensure hasSentRequest is true
      getRoute();
    }
  }, [teamID, hasSentRequest]);

  return (
    <Fragment>
      {hasSentRequest && validUrl && (
        <div style={{ paddingTop: "10rem" }}>
          <div className={styles.container}>
            <img
              src={success}
              alt="success_img"
              className={styles.success_img}
            />
            <h1>Email verified successfully</h1>
            {/* <Link to="/addMembers">
            <button className={styles.green_btn}>Add Team Members</button>
          </Link> */}
            <Link to={route}>
              <button className={styles.green_btn}>Add Team Members</button>
            </Link>
          </div>
        </div>
      )}
      {hasSentRequest && !validUrl && <Error />}
    </Fragment>
  );
};

export default EmailVerify;
