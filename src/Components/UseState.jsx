import React  from 'react'
import { useState } from 'react';

const UseState = () => {
    const [count,setCount]=useState(0)
    
    return (
      <>
            <h1>What is UseState Hook ?(Implementation)</h1>
      <h2>The React useState Hook allows us to track state in a function component. </h2>
      <h2>

    State generally refers to data or properties that need to be tracking in an application.
     </h2>

     <li>The first value, color, is our current state.</li>
<li>The second value, setColor, is the function that is used to update our state.</li>

      <h2>Count { count }</h2>
      <button onClick={()=>setCount(count+1)}>update count</button> <br /><br />
      ======================================================
      </>
  
    )
}

export default UseState ;