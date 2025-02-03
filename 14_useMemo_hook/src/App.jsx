
import { useState } from 'react'
import './App.css'
import react from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [input, setInput] = useState(0)

  function expensiveTask(num) {
    console.log("expensiveTask task")
    for (let i = 0; i <= 10000000000000; i++) {
      return num * 2;
    }

  }

  let doubleValue = react.useMemo(() => expensiveTask(input), [input])

  return (
    <>
      <div>
        <button onClick={() => setCount(count + 1)}>Increment </button>
      </div>
      <br />
      <div>
        count: {count}
      </div>
      <input type="number" placeholder='enter number' value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div>
        Double: {doubleValue}
      </div>

    </>
  )
}

export default App
