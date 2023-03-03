import React from 'react';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import { increment ,decrement,reset, incrementByAmount , decrementByAmount} from './CounterSlice';


const Counter = () => {
  const {count} = useSelector(state =>state.counter)

  const dispatch = useDispatch()

  const handleIncrementBy1 =() =>{
    dispatch(increment())
  }

  const handleDecrementBy1 =() =>{
    dispatch(decrement())
  }

  const handleReset =() =>{
    dispatch(reset())
  }
 
  const handleIncrementByAmount =() =>{
    dispatch(incrementByAmount(5))
  }

  const handleDecrementByAmount =() =>{
    dispatch(decrementByAmount(5))
  }

  return (
    <div className='counter'>
      <h2>Counter : {count}</h2>
      <div className='buttons'>
      <button className='btn' onClick={handleIncrementBy1}>Increment</button>
      <button className='btn' onClick={handleIncrementByAmount}>+5</button>
      <button className='btn' onClick={handleReset}>Reset</button>
      <button className='btn' onClick={handleDecrementBy1}>Decrement</button>
      <button className='btn' onClick={handleDecrementByAmount}>-5</button>
      </div>
    </div>
  )
}

export default Counter
