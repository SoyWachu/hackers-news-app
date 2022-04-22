import React from "react";
import styles from "./nav.module.css";

const subTitle = "We <3 hacker news!";

function Nav() {
  return (
    <div>
      <div className={styles.topContainer}>
        <h1>HN Feed</h1>
        <h2>{subTitle}</h2>
      </div>
    </div>
  );
}

export default Nav;
