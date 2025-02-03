import { useNavigate } from "react-router-dom";

const Home = () => {
const navigate = useNavigate();
  
function handleClick(){
    navigate('/about');
}
    
  return (
    <div>
      Home page
      <button onClick={handleClick}>Move to about Page</button>
    </div>
  )
}

export default Home
