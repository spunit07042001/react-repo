
// import { useState } from 'react'
// import './App.css'
// import { useEffect } from 'react';
// import { useRef } from 'react';

// function App() {
//   const [count, setCount] = useState(0);
//   // let val = 1;

//   let val = useRef(0)

//   let btnRef = useRef()

//   const handleIncrement = () => {
//     // val = val + 1;
//     // console.log(val);
//     val.current = val.current + 1;
//     console.log(val.current);
//     setCount(count + 1);
//   };
//   // it reuns on every render
//   useEffect(() => {
//     console.log("mai firse rander ho gya hu")
//   })

//   const changeColor = () => {
//     btnRef.current.style.backgroundColor = 'red';
//   }

//   return (
//     <>
//       <div>

//         <button onClick={handleIncrement}  ref={btnRef}>Increment</button>
//         <br />
//         <button onClick={changeColor}>change the color of 1st button </button>
//         <br />
//         <div>
//           count: {count}
//         </div>
//       </div>
//     </>
//   )
// }

// export default App


// ====================================================



import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import { useRef } from 'react';

function App() {
  const [time, setTime] = useState(0)
  let timerRef = useRef(null) 

  function starttime() {
   timerRef.current =  setInterval(() => {
      setTime(time => time + 1)  // update the state every second
      
    }, 1000);
  }
  function stoptime() {
  clearInterval(timerRef.current)
  timerRef.current= null;
  }

  function resettime() {
    stoptime()
    setTime(0)
  }

  return (
    <>
      <div>
        <h1>StopWatch : {time} Second </h1>
        <button onClick={starttime}> start</button>
        <br /><br />
        <button onClick={stoptime}> stop</button>
        <br /><br />
        <button onClick={resettime}> reset</button>
        <br /><br />
      </div>
    </>
  )
}

export default App