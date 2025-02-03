import { createContext, useState } from 'react';
import './App.css';
import ChildA from './components/ChildA';
// import ChildC from './components/ChildC'


// step 1 : create a context
export const UserContext = createContext();  // ✅ Exporting UserContext



// step 2 : wrap all the child inside a provider
// step 3 : pass value
// step 4: cumsumer ke ander jaa kr consume kr lo 

function App() {
  const [user, setUser] = useState({ name: "soni" });

  return (
    <>
      {/* Step 2: Wrap all children inside the provider */}
      <UserContext.Provider value={user}>
        <ChildA />
      </UserContext.Provider>
    </>
  );
}

export default App;



// three step for useContext hook 
// 1. create a context
// 2. provide a context value to parent contect 
// 3. consume a context value where need to be consumed