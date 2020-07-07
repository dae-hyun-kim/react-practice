import React, { useState } from "react";

const About = () => {

  const [count, setCount] = useState(0)

  console.log(count)
  return (
    <>
    <h3>ABOUT PAGE</h3>
      <div>
        <button> - </button>
        {count}
        <button> + </button>
      </div>
    </>
  )
}

export default About;
