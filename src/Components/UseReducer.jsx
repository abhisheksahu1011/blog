
import React, {useReducer} from 'react'



const initilialState = 0;
const reducer = (state, action )=>{
    switch(action){
        case "add" : 
        return state +1;
        case "sub" : 
        return state - 1;
        case "reset" : 
        return 0;
        default :
        throw new Error("unexpected actioon");


    }

}

const UseReducer = () => {
    const [count ,setCount] = useReducer (reducer,initilialState);
  return (
    <div>
    <h1>  What is UseReducer Hook ?(Implementation)</h1>
  

    <li>

    The useReducer Hook is the better alternative to the useState hook and is generally more preferred over the useState hook when you have complex state-building logic or when the next state value depends upon its previous value or when the components are needed to be optimized.
    </li>
    <li>The useReducer hook takes three arguments including reducer, initial state, and the function to load the initial state lazily.</li>
      <h2>{count}</h2>
      <button onClick={()=>setCount("add")}>add</button> <br /> <br />
      <button onClick={()=>setCount("sub")}>sub</button> <br /><br />
      <button onClick={()=>setCount("reset")}>reset</button> <br />
    
    <br /> <br />
    
    </div>
    
    )
}
export default UseReducer 
