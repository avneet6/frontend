import React, { useEffect, useState } from "react"
import {useNavigate} from "react-router-dom"
import index from "./index.css";

const Home = () => {
    const navigate=useNavigate();
  const [users, setUsers] = useState([])

  const fetchUserData = () => {
    fetch("https://panorbit.in/api/users.json")
  
      .then(response => {
        return response.json()
        
      })
      .then(data => {
        setUsers(data.users)
        console.log(data)
        
      })
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  return (
    <div class="whole">
      
    <div class="contain">
    
        <h2 class="account">Select an account</h2>
      {users.length > 0 && (
        
        <ul>
          {users.map(user => (


            <ul key={user.id}><img class="image" src={user.profilepicture} alt="profile picture" />  {user.name} <hr></hr></ul>

            
          ))}
        </ul>

      )}

      
    </div>
    </div>

  );
}

export default Home;