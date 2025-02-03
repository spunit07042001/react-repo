
import { useState } from 'react'
import './App.css'
import Logout from './components/Logout'
import Login from './components/Login'

function App() {

  const [isLoggedIn, setLoggedIn] = useState(false)


// early return
if(!isLoggedIn) {
  return(
    <div>
      <h1>welcome everyone to page</h1>
      <Login/>
    </div>
  )
}




// logical operators

return(
  <div>
    <h1>welcome everyone to page</h1>
    <div>{isLoggedIn && <Logout/>}</div>
  </div>
)






// using  ternary operator 


// return(
//   <div>
//     {isLoggedIn?  <Logout />: <Login />}
//   </div>
// )




// using if else 

  // if(isLoggedIn) {
  //   return(
  //     <Logout />
  //   )
  // }
  // else {
  //   return(
  //     <Login />
  //   )
  // }
}

export default App
