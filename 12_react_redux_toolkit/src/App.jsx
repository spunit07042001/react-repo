
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react';
import './App.css'
import { increment , decrement , reset,incrementByAmount } from './features/counter/counterSlice';

function App() {
  const [amount, setAmount] = useState(0);
  const count =useSelector((state) => state.counter.value)
  const dispatch = useDispatch();

  function handleIncrementClick() {
    dispatch(increment());
  }

  function handleDecrementClick() {
    dispatch(decrement());
  }
  function handleResetClick() {
    dispatch(reset());
  }
  function handleIncAmaount() {
    dispatch(incrementByAmount(Number(amount)));
  }

  return (
    <>
    <div>
      <button onClick={handleIncrementClick}>+</button> </div>
      <p>count:{count}</p>
      <button onClick={handleDecrementClick}>-</button>
      <br />
      <br />
      <button onClick={handleResetClick}>Reset</button>

      <input  type= 'number' 
      placeholder='' value={amount}
      onChange={(e)=> setAmount(e.target.value)}/>
      <br />
      <br />
      <button onClick={handleIncAmaount}>IncrementByAmaount</button>
      
    </>
  )
}

export default App
