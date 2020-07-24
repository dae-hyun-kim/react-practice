import React, { createContext, useState } from "react"

export const ToggleSwitchContext = createContext();

const ToggleSwitchProvider = (props) => {

  const [toggleSwitch, setToggleSwitch] = useState(false)

  const switchHandler = () => {
    setToggleSwitch(!toggleSwitch)
  }

  return (
    <ToggleSwitchContext.Provider value={{toggleSwitch, switchHandler}}>
      {props.children}
    </ToggleSwitchContext.Provider>
  )
}

export default ToggleSwitchProvider
