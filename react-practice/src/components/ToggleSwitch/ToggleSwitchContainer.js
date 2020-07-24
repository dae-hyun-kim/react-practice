import React, { useContext } from "react";
import { ToggleSwitchContext } from "../../contexts/ToggleSwitchContext";
import styles from "./ToggleSwitchContainer.module.css"

const ToggleSwitchContainer = () => {

  const {toggleSwitch, switchHandler } = useContext(ToggleSwitchContext);

  const togglePosition = () => {
    if (toggleSwitch) {
      return styles.right
    } else {
      return styles.left
    }
  }

  const toggleBackground = () => {
    if (toggleSwitch) {
      return styles.on
    } else {
      return styles.off
    }
  }

  return (
    <div className={styles.container}>
      <div className={`${styles.toggleContainer} ${toggleBackground()}`} onClick={() => switchHandler()}>
        <div className={`${styles.toggle} ${togglePosition()}`}>
        </div>
      </div>
    </div>
  )
}

export default ToggleSwitchContainer
