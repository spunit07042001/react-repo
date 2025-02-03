import { useState } from 'react';
import './Counter.css'

const Counter = () => {
    const [count, setCount] = useState(0);
  return (
    <div className='counter-container'>
        <p id="para">you have clicked {count} time</p>
        <button id='btn' onClick={()=>{setCount(count+1)}}>CLick me</button>
      
    </div>
  )
}

export default Counter

