import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false); // 🔄 loading state
  const navigate = useNavigate();

  const API = process.env.REACT_APP_APIURL;

  const handleLogin = async (e) => {
    e.preventDefault();

    if (isLoading) return; // 🛑 prevent double submit
    setIsLoading(true);

    try {
      const res = await axios.post(`${API}/api/admin/login`, {
        username,
        password,
      });

      // ✅ store login flag or token
      localStorage.setItem("adminLoggedIn", "true");

      toast.success(res.data.message);
      navigate("/admin-dashboard");
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed");
    } finally {
      setIsLoading(false); // ✅ always stop loading
    }
  };

  return (
    <div className="adminlogin-bg">
      <div className="adminlogin-box">
        <img
          src="/images/parharlogo.png"
          alt="Logo"
          className="adminlogin-logo"
        />

        <form className="adminlogin-form" onSubmit={handleLogin}>
          <label className="adminlogin-label">
            Username
            <input
              type="text"
              value={username}
              placeholder="Enter username here"
              onChange={(e) => setUsername(e.target.value)}
              className="adminlogin-input"
              required
              disabled={isLoading}
            />
          </label>

          <label className="adminlogin-label">
            Password
            <input
              type="password"
              value={password}
              placeholder="Enter password here"
              onChange={(e) => setPassword(e.target.value)}
              className="adminlogin-input"
              required
              disabled={isLoading}
            />
          </label>

          <button
            type="submit"
            className="adminlogin-btn"
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
