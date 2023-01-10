import React from 'react'
import '../App.css'

import { useDispatch, useSelector } from 'react-redux'
import { decrementCounter, incrementCounter, reset } from '../Sevices/Action/action'

const Counter = () => {
 
    
    const count = useSelector(state => state.count)
    const dispatch = useDispatch()

  const handleIncrement = () => {
    dispatch(incrementCounter())
  }
  const handleDecrement = () =>{
    dispatch(decrementCounter())
  }
  const handleReset = () =>{
    dispatch(reset())
  }
         
  return (
    <div className=''>
      <h2>Counter App</h2>
     <div class="main">
     <h2 class="counter">Count : {count} </h2>
      <button class="btn" onClick={handleIncrement}>Increment</button>
      <button class="middle-btn btn" onClick={handleDecrement}>Decrement</button>
      <button class="btn" onClick={handleReset}>Reset</button>
     </div>
    </div>
  )
}

export default Counter

// state   - count : 0
// action  - increment, decrement, reset
// reducer - increment - count + 1
//- decrement - count - 1
//- reset - 0
// store
// store provide
// use store
