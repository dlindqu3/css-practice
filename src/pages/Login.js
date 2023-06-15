import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [displayPassword, setDisplayPassword] = useState(false);
  const [passwordType, setPasswordType] = useState("password");

  let navigate = useNavigate();

  const handlePasswordDisplay = async () => {
    if (displayPassword === true) {
      setDisplayPassword(false);
      setPasswordType("password");
    } else if (displayPassword === false) {
      setDisplayPassword(true);
      setPasswordType("text");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("username: ", username);
    console.log("password: ", password);
    localStorage.setItem("css-practice-user", username); 
    setUser(username); 
    navigate("/");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h4>Login </h4>
        <label>Username:</label>
        <div>
          <input
            type="text"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            value={username}
          />
        </div>
        <label>Password:</label>
        <div>
          <input
            type={passwordType}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          />
        </div>
        <div>
          <input
            type="checkbox"
            onChange={() => {
              handlePasswordDisplay();
            }}
          />
          {displayPassword && <span>Hide password</span>}
          {!displayPassword && <span>Show password</span>}
        </div>

        <div>
          <button data-testid="submit-button">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
