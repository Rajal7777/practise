import React, { useState } from 'react'

const Counter = ({initialValue}) => {
    const[count, setCount] = useState(initialValue)

   const  handleIncrease  = () => {
    setCount(count + 1)
   }

   const  handleDecrease  = () => {
    setCount(count - 1)
   }
  return (
    <>
  <h1>The value: {count}</h1>
   <button onClick={handleIncrease} style={{
    marginRight: "2rem"
   }}> +</button>
   <button onClick={handleDecrease}>-</button>
    </>
  )
}

export default Counter