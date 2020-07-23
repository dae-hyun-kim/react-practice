import React, {createContext, useState} from "react"

export const HotButtonContext = createContext();

const HotButtonContextProvider = (props) => {
  const [count, setCount] = useState(() => 0);

  const increaseCount = () => {
    setCount(count + 1)
  }

  return (
    <HotButtonContext.Provider value={{count, increaseCount}}>
      {props.children}
    </HotButtonContext.Provider>
  )
}

export default HotButtonContextProvider;
