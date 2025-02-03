
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {

  const [count, setCount] = useState(0)

  const [total, setTotal] = useState(1)

  // variation 1 st

  // useEffect(() =>{
  //   alert('i will run on each render')
  // })


  // // variation 2 

  // useEffect(() =>{
  //   alert('i will run on only 1st render')
  // }, [])




  // // variation 3
  
  // useEffect(() =>{
  //   alert('i will run on eyery time when count is updated ')
  // }, [count])



 // variation 4
  // multiple depencies

//  useEffect(() =>{
//   alert('i will run on eyery time when count/total is updated ')
// }, [count, total])





// variations 5 

// useEffect(() => {
//   alert ('count is updated')

//   return () => {
//     alert(" count is unmounted form UI")
//   }
// }, [count])












  function handleClick() {
    setCount(count + 1)
    


  }
  function handleClickTotal(){
    setTotal(total + 1) // this will trigger a re-render
  }

  return (
    <>
      <div>
        <button onClick={handleClick}>Click me </button>
        <br />
        count is {count}

        <br />

        <button onClick={handleClickTotal}>Update total </button>
        <br />
        Total is {total}
      </div>
    </>
  )
}

export default App
