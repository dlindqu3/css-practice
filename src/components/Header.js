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
    localStorage.removeItem("css-practice-user"); 
    navigate("/");
  }

  return (
    <nav className="nav">
      <div>
        <a href="/" className="site-title">Home</a>
      </div>
      <ul>
        { !user && <li><a href="/login">Login</a></li> }
        { user && <li><a href="/quotes">Quotes</a></li> } 
        { user && <li><a href="#">User: {user}</a></li> } 
        { user && <li><button onClick={handleLogout} className="logout-button">Logout</button></li> }
      </ul>
    </nav>
  )
}

export default Header