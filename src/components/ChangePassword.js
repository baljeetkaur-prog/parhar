import { useState } from "react";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // 👈 import icons
import "./ChangePassword.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showOld, setShowOld] = useState(false);      // toggle old password
  const [showNew, setShowNew] = useState(false);      // toggle new password
  const [showConfirm, setShowConfirm] = useState(false); // toggle confirm password
  const navigate = useNavigate();
  const API = process.env.REACT_APP_APIURL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      toast.error("New passwords do not match!");
      return;
    }

    try {
      const username = "adminuser";
      const res = await axios.post(`${API}/api/admin/change-password`, {
        username,
        oldPassword,
        newPassword,
      });

      toast.success(res.data.message);

      // Clear form
      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");

      // Logout automatically
      localStorage.removeItem("adminLoggedIn");
      navigate("/admin-login");
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to change password");
    }
  };

  return (
    <div className="admin-contact">
      <h2>Change Password</h2>
      <form onSubmit={handleSubmit} className="change-password-form">

        {/* OLD PASSWORD */}
        <div className="form-group password-group">
          <label>Old Password</label>
          <div className="password-input-wrapper">
            <input
              type={showOld ? "text" : "password"}
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              required
              placeholder="Enter your old password"
            />
            <span className="password-toggle" onClick={() => setShowOld(!showOld)}>
              {showOld ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>

        {/* NEW PASSWORD */}
        <div className="form-group password-group">
          <label>New Password</label>
          <div className="password-input-wrapper">
            <input
              type={showNew ? "text" : "password"}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              placeholder="Enter new password"
            />
            <span className="password-toggle" onClick={() => setShowNew(!showNew)}>
              {showNew ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>

        {/* CONFIRM PASSWORD */}
        <div className="form-group password-group">
          <label>Confirm New Password</label>
          <div className="password-input-wrapper">
            <input
              type={showConfirm ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              placeholder="Confirm new password"
            />
            <span className="password-toggle" onClick={() => setShowConfirm(!showConfirm)}>
              {showConfirm ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>

        <button type="submit" className="admindash-btn">
          Change Password
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;
