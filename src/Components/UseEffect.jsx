
import React ,{useState,useEffect} from 'react'

function UseEffect(){
const [count ,setCount]= useState(0)

useEffect(()=>{
setTimeout(()=>{
    setCount((count)=> count+1)
},1000)
}

)





  return (
    <>

    
    <h1>What is useEffect Hook ?(Implementation)</h1>
   <li> The useEffect Hook allows you to perform side effects in your components. </li>

     <li>Some examples of side effects are: fetching data, directly updating the DOM, and timers.</li> 
     <li> useEffect accepts two arguments.
     useEffect(function, dependency ) 
     The second argument is optional.
     <h1>Count Time {count}</h1>
</li>

        

<br /><br />
      ======================================================




    </>
  )
}

export default UseEffect
