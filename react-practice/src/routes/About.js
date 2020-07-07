import React, { useState } from "react";

const About = () => {

  const [count, setCount] = useState(() => {
    return 0
  })

  const [recipe, setRecipe] = useState(async () => {
    const data = await fetch("https://api.openbrewerydb.org/breweries/");
    const item = await data.json();
    console.log(item)
  })

  const increment = () => {
    setCount(prevCount => prevCount + 1)
  }

  const decrement = () => {
    setCount(prevCount => prevCount - 1)
  }

  return (
    <>
    <h3>ABOUT PAGE</h3>
      <div>
        <button onClick={decrement}> - </button>
        {count}
        <button onClick={increment}> + </button>
      </div>
    </>
  )
}

export default About;
