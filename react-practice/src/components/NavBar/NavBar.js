import React from "react";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav className={styles.mainHeader}>
      <Link to="/">
      <h2 className={styles.logo}>REACT PRACTICE</h2>
      </Link>
      <ul className={styles.navBar}>
        <Link to="/about">
          <li>Hot Button</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
        <Link to="/form">
          <li>Form</li>
        </Link>
      </ul>
    </nav>
  )
}

export default NavBar;
