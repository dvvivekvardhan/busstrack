import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [credentials, setCredentials] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/login_credentials.json")
      .then((response) => {
        if (!response.ok) { 
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setCredentials(data))
      .catch((err) => {
        console.error("Error loading credentials:", err);
        setError("Failed to load credentials. Check the console for details.");
      });
  }, []);

  const handleLogin = () => {
    if (credentials.length === 0) {
      setError("Failed to load credentials");
      return;
    }
    const user = credentials.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      navigate(user.nextRoute);
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div style={{ 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center", 
      height: "100vh", 
      backgroundImage: "url('/aboutbg.png')", 
      backgroundSize: "cover", 
      backgroundPosition: "center" 
    }}>
      <div style={{ width: "300px", padding: "20px", backgroundColor: "white", borderRadius: "8px", boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" , color:"black"}}>Login</h2>
        {error && (
          <div style={{ color: "red", marginBottom: "10px", textAlign: "center" }}>{error}</div>
        )}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ width: "92%", padding: "10px", marginBottom: "10px", border: "1px solid #ccc", borderRadius: "4px" }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "92%", padding: "10px", marginBottom: "10px", border: "1px solid #ccc", borderRadius: "4px" }}
        />
        <button
          onClick={handleLogin}
          style={{ width: "100%", padding: "10px", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}
        >
        Login
        </button>
      </div>
    </div>
  );
}
