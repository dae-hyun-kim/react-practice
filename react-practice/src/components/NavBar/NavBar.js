import React from "react";
import styles from "./NavBar.module.css"

const NavBar = () => {
  return (
    <nav className={styles.mainHeader}>
      <h2 className={styles.logo}>Logo</h2>
      <ul className={styles.navBar}>
        <li>About</li>
        <li>Contact</li>
        <li>Form</li>
      </ul>
    </nav>
  )
}

export default NavBar;
