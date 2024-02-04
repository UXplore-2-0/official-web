import React from "react";
import styles from "./error2.module.css";

function Error() {
  return (
    <div style={{ paddingTop: "10rem" }}>
      <div className={styles.center}>
        <div className={styles.error}>
          <div className={styles.number}>4</div>
          <div className={styles.illustration}>
            <div className={styles.circle}></div>
            <div className={styles.clip}>
              <div className={styles.paper}>
                <div className={styles.face}>
                  <div className={styles.eyes}>
                    <div
                      className={`${styles.eye} ${styles["eye-left"]}`}
                    ></div>
                    <div
                      className={`${styles.eye} ${styles["eye-right"]}`}
                    ></div>
                  </div>
                  <div
                    className={`${styles.rosyCheeks} ${styles["rosyCheeks-left"]}`}
                  ></div>
                  <div
                    className={`${styles.rosyCheeks} ${styles["rosyCheeks-right"]}`}
                  ></div>
                  <div className={styles.mouth}></div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.number}>4</div>
        </div>

        <div className={styles.text}>
          Oops. The page you're looking for doesn't exist.
        </div>
        <a className={styles.button} href="/">
          Back Home
        </a>
      </div>
    </div>
  );
}

export default Error;
