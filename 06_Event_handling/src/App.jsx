
import './App.css'

function App() {

  function handleClick() {
    alert("I am clicked")
  }
  function handleMouseover() {
    alert("I am mouse")
  }

  function handleInputChange(e) {
    console.log("Inpute me value change hui hai", e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log("Form submitted")
  }


  return (
    <>
      <div>




{/* falte error fn as per interview prospective */}
{/* <button onClick={() =>alert("button click hua a")}>click me</button> */}


        {/* <form onSubmit={handleSubmit}>
          <input type="text " onChange={handleInputChange} />
          <button type='submit'>Submit</button>
        </form> */}




        {/* 
    <p onMouseOver={handleMouseover}>I am para</p>
    <button onClick={handleClick}>
      Click Me
    </button> */}
      </div>
    </>
  )
}

export default App
