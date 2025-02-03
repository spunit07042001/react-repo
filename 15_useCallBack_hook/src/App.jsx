
import { useState } from 'react'
import './App.css'
import ChildComponent from './components/ChildComponent'
import { useCallback } from'react'

function App() {
  const [count, setCount] = useState(0)

  // function handleClick() {
  //   setCount(count + 1)
  // }

  // freez the fn
  const handleClick = useCallback(() => {
    setCount(count + 1)
  }, [count])
  return (
    <>
      <div>
        <div>
          count: {count}
        </div>
        <br />
        <div>
          <button onClick={handleClick}>Increment</button>
        </div>
        <br />
        <div>
          <ChildComponent buttonName="click me" 
          handleClick= {handleClick}/>

        </div>
      </div>
    </>
  )
}

export default App
