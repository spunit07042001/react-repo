import { useNavigate } from "react-router-dom"

const About = () => {
    const navigate =useNavigate();
    function handleClick(){
        navigate('/dashboard');
    }
  return (
    <div>
      about page
      <button onClick={handleClick}>move to dash board</button>
    </div>
  )
}

export default About
