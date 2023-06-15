import React, { useState } from "react"; 
import { 
  Navigate, 
  useNavigate
} from "react-router-dom"; 
import "./Header.css";

function Header({ user, setUser }) {

  let navigate = useNavigate();

  let handleLogout = () => {
    console.log("handleLogout called"); 
    setUser(null); 
    navigate("/");
  }

  return (
    <nav className="nav">
      <div>
        <a href="/" className="site-title">Home</a>
      </div>
      <ul>
        <li><a href="#">Quotes</a></li>
        <li><a href="#">Register</a></li>
        <li><a href="#">Login</a></li>
        <li><a href="#">User: Batman55</a></li>
        <li><button className="logout-button">Logout</button></li>
      </ul>
    </nav>
  )
}

export default Header