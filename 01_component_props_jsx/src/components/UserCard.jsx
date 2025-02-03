import more from '../assets/more.jpg'

import './UserCard.css'

const UserCard = (props) => {
  return (
    <div>
      <div id="user-container">
         <p id="user-name">{props.name}</p>
        <img id='user-img' src={more} alt="" />
        <p className="user-descp">decription of Punit </p>
      </div>
    </div>
  )
}

export default UserCard
