import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Quotes from "./pages/Quotes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    //Runs only on the first render
    let existingUser = localStorage.getItem("css-practice-user");
    if (existingUser){
      setUser(existingUser); 
    }
  }, []);

  return (
    <div className="App">
      { console.log("user: ", user) }
      <BrowserRouter>
        <div className="app-outer">
          <Header user={user} setUser={setUser} />
          <div className="app-main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login setUser={setUser} />} />
              <Route path="/quotes" element={user ? <Quotes /> : <Login setUser={setUser} />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
