import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Navigation.module.css";

function Navigation() {
  return (
    <div className={styles.navigation}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
