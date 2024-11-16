import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
import GoogleMapReact from 'google-maps-react';
//import Map from "./Map";
import App from "./App.css";


const Metadata = () => {
  const [users, setUsers] = useState([])
  const navigate=useNavigate();

  const fetchUserData = () => {
    fetch("https://panorbit.in/api/users.json")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data.users.filter(d => d.id === 1))
        console.log(data)
        
      })
  }

  useEffect(() => {
    fetchUserData()
  }, [])
  


  return (
   
    <h2 class="header">Profile</h2>,<hr></hr>,
       
      <div class="container">
            
<ul class="nav flex-column">
  <div class="nav-item"
     aria-current="page" href="">Profile
  </div>
  <br/>
  <hr></hr>
  <div class="nav-item"
     aria-current="page" href="posts">Posts
  </div>
  <br/>
  <hr></hr>
  <div class="nav-item"
     aria-current="page" href="gallery">Gallery
  </div>
  <br/>
  <hr></hr>
  <div class="nav-item"
     aria-current="page" href="Todo">ToDo
  </div> 
  
</ul>


{users.length > 0 && (
        
        <tr class="containt">
          {users.map(user => (
            
             <td class="details" key={user.id}>
              <div id="element1"><h2>Profile</h2><hr></hr><br/></div>
              
              <img class="circle-img" src={user.profilepicture} alt="profile picture" />
              <h4>{user.name}</h4><br/>
              <th>Username: {user.username}</th><br/>
              <th>e-mail: {user.email}</th><br/>
              <th>Phone: {user.phone}</th><br/>
              <th>Website: {user.website}</th><br/> <hr></hr> 
              <h3>Company</h3>
              <th>Name: {user.company.name}</th><br/>
              <th>catchphrase: {user.company.catchPhrase}</th><br/>
              <th>bs: {user.company.bs}</th>
              
              <h3>Address</h3>
              <th>Street: {user.address.street}</th><br/>
              <th>Suite: {user.address.suite}</th><br/>
              <th>City: {user.address.city}</th><br/>
              <th>Zipcode: {user.address.zipcode}</th><br/>
              
    
              </td>
          ))}
        </tr>
      )}
</div>
    
  );   
}  

export default Metadata;