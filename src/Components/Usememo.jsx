import React , {useState} from 'react'

const Usememo = () => {
  
    const [counterOne ,setCounterOne]=useState(0)
    const [counterTwo ,setCounterTwo]=useState(0)


    const increamentOne = ()=>{
        setCounterOne( counterOne +1)
    }

    const increamentTwo = ()=>{
        setCounterTwo( counterTwo +1)
    }

    const Even = ()=>{
        return counterOne %2 ===0
    }
  
  
  
    return (
    <>
    <h1>What is UseMemo Hook ?(Implementation)</h1>
    
    <button onClick={increamentOne}>Cont  {counterOne}</button> <br />
    <span>{Even()? 'Even':'odd'}</span> <br />
    <button onClick={increamentTwo}> Count  {counterTwo}</button> <br />
      
    </>
  )
}

export default Usememo
