import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Quotes from "./pages/Quotes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [user, setUser] = useState("batman");

  return (
    <div className="App">
      <BrowserRouter>
        <div className="app-outer">
          <Header user={user} setUser={setUser} />
          <div className="app-main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/quotes" element={user ? <Login /> : <Quotes />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
