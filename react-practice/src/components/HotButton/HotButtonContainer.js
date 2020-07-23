import React, { useContext } from "react"
import { HotButtonContext } from "../../contexts/HotButtonContext";
import styles from "./HotButtonContainer.module.css"

const HotButtonContainer = () => {

  const { count, increaseCount } = useContext(HotButtonContext)

  const increaseCountHandler = () => {
    increaseCount();
  }

  const buttonColor = () => {
    if (count <= 3) {
      return styles.purple
    } else if (count <= 6) {
      return styles.violet
    } else if (count <= 9) {
      return styles.lightOrange
    } else if (count <= 12) {
      return styles.orange
    } else if (count <= 15) {
      return styles.yellow
    } else {
      return styles.white
    }
  }

  return (
  <>
    <div>
      <h2>HOT BUTTON TEST</h2>
    </div>
    <div className={styles.container}>
      <div className={styles.countContainer}>
        {count}
      </div>
      <div>
        <div onClick={increaseCountHandler} className={`${styles.hotButton} ${buttonColor()}`}>Hot Button</div>
      </div>
    </div>
  </>
  )
}

export default HotButtonContainer
