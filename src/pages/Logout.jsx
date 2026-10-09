import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/logout.css";

export default function Logout() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
    const newErrors = {};
    if (username.trim() === "")
      newErrors.username = "Please enter your username.";
    if (password.trim() === "")
      newErrors.password = "Please enter your password.";
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Logged out successfully!");
      navigate("/");
    }
  }

  return (
    <div className="logout-box">
      <h2>Confirm Log Out</h2>
      <p>Please enter your username and password to log out.</p>

      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <span className="error-msg">{errors.username}</span>
        </div>

        <div className="input-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="error-msg">{errors.password}</span>
        </div>

        <button type="submit">Log Out</button>
      </form>
    </div>
  );
}
