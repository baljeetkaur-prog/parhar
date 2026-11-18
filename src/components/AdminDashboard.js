import React, { useEffect, useState } from "react";
import "./AdminDashboard.css";
import AdminBlogUpload from "./AdminBlogUpload";
import AdminAppointments from "./AdminAppointments";
import AdminContactQueries from "./AdminContactQueries";
import AdminServiceEnquiries from "./AdminServiceEnquiries";
import AdminJobApplications from "./AdminJobApplications";
import AdminJobTracking from "./AdminJobTracking";
import ChangePassword from "./ChangePassword";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const AdminDashboard = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState(""); 
  const [counts, setCounts] = useState({
    appointments: 0,
    serviceEnquiries: 0,
    contacts: 0, 
      jobApplications: 0
  });
  const [recentAppointments, setRecentAppointments] = useState([])  ;

  const API = process.env.REACT_APP_APIURL;

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleLogout = () => {
    localStorage.removeItem("adminLoggedIn");
    navigate("/admin-login");
    toast.success("Logged out successfully");
  };

  const handleChangePassword = () => setActiveSection("change-password");
  const handleSidebarClick = (section) => setActiveSection(section);
  const handleLogoClick = () => setActiveSection("");

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("adminLoggedIn");
    if (!isLoggedIn) navigate("/admin-login");
  }, [navigate]);

  // Fetch counts and recent appointments
  useEffect(() => {
    const fetchCounts = async () => {
      try {
const [appointmentsRes, serviceRes, contactRes, jobAppsRes] = await Promise.all([
  axios.get(`${API}/api/admin/appointments`),
  axios.get(`${API}/api/service-enquiry`),
  axios.get(`${API}/api/contact`), 
  axios.get(`${API}/api/admin/jobs/applications`) 
]);

        setCounts({
          appointments: appointmentsRes.data.length,
          serviceEnquiries: serviceRes.data.length,
          contacts: contactRes.data.data.length,
            jobApplications: jobAppsRes.data.length 
        });

        // Get last 5 appointments for dashboard
        const sortedAppointments = appointmentsRes.data
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .slice(0, 5);
        setRecentAppointments(sortedAppointments);

      } catch (err) {
        console.error("Error fetching counts:", err);
      }
    };

    fetchCounts();
  }, [API]);

  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  return (
    <div className="admindash">
      {/* HEADER */}
<header className="admindash-header">
  {/* Hamburger for mobile */}
  <div className="hamburger" onClick={toggleSidebar}>
    &#9776; {/* ☰ symbol */}
  </div>

  {/* Logo centered */}
  <div className="admindash-logo" onClick={handleLogoClick} style={{ cursor: "pointer" }}>
    <img src="/images/parharlogo.png" alt="Logo" />
  </div>

  {/* Doctor avatar on right */}
<div className="admindash-right">
  <button className="admindash-btn" onClick={handleChangePassword}>Change Password</button>
  <button className="admindash-btn" onClick={handleLogout}>Logout</button>
  
  <div className="admindash-profile">
    <div className="admindash-avatar-border">
      <img src="/images/dr_icon.png" alt="Doctor Avatar" className="admindash-avatar" />
    </div>
  </div>
</div>
</header>


      {/* MAIN */}
      <div className="admindash-main">
<aside className={`admindash-sidebar ${isSidebarOpen ? "open" : ""}`}>
  <ul>
    <li onClick={() => { handleSidebarClick("enquiries"); setIsSidebarOpen(false); }}>
      Enquiries
    </li>
    <li onClick={() => { handleSidebarClick("contact"); setIsSidebarOpen(false); }}>
      Contact Queries
    </li>
    <li onClick={() => { handleSidebarClick("service-enquiries"); setIsSidebarOpen(false); }}>
      Service Enquiries
    </li>
     <li onClick={() => { handleSidebarClick("job-applications"); setIsSidebarOpen(false); }}>
      Job Applications
    </li>

    <li onClick={() => { handleSidebarClick("job-tracking"); setIsSidebarOpen(false); }}>
      Job Tracking Applications
    </li>
  </ul>

  {/* MOBILE ONLY ACTIONS */}
  <div className="sidebar-actions">
    <button
      className="sidebar-btn"
      onClick={() => {
        handleChangePassword();
        setIsSidebarOpen(false);
      }}
    >
      Change Password
    </button>

    <button
      className="sidebar-btn logout"
      onClick={() => {
        handleLogout();
        setIsSidebarOpen(false);
      }}
    >
      Logout
    </button>
  </div>
</aside>

<div className="admindash-content">
  {activeSection && activeSection !== "" && activeSection !== "blogs" && (
    <div className="back-button" onClick={() => setActiveSection("")} style={{ cursor: "pointer", marginBottom: "20px", display: "flex", alignItems: "center", gap: "5px" }}>
      <span style={{ fontSize: "18px" }}>←</span> {/* Arrow */}
      <span>Back</span>
    </div>
  )}

{activeSection === "blogs" ? (
  <AdminBlogUpload />
) : activeSection === "enquiries" ? (
  <AdminAppointments />
) : activeSection === "contact" ? (
  <AdminContactQueries />
) : activeSection === "service-enquiries" ? (
  <AdminServiceEnquiries />
) : activeSection === "job-applications" ? (
  <AdminJobApplications />
  ) : activeSection === "job-tracking" ? (
  <AdminJobTracking />   
) : activeSection === "change-password" ? (
  <ChangePassword />
) : (

            // Default Dashboard Summary
            <div className="dashboard-summary">
              <div className="dashboard-calendar">
                <h2>Today's Date</h2>
                <p>{currentDate}</p>
              </div>

<div className="dashboard-cards">
  <div
    className="dashboard-card card-appointments"
    onClick={() => handleSidebarClick("enquiries")}
    style={{ cursor: "pointer" }}
  >
    <h3>Appointment Enquiries</h3>
    <p>{counts.appointments}</p>
  </div>

  <div
    className="dashboard-card card-service"
    onClick={() => handleSidebarClick("service-enquiries")}
    style={{ cursor: "pointer" }}
  >
    <h3>Service Enquiries</h3>
    <p>{counts.serviceEnquiries}</p>
  </div>

  <div
    className="dashboard-card card-contact"
    onClick={() => handleSidebarClick("contact")}
    style={{ cursor: "pointer" }}
  >
    <h3>Contact Queries</h3>
    <p>{counts.contacts}</p>
  </div>

  {/* 🔴 New Job Applications Card */}
  <div
    className="dashboard-card card-jobapps"
    onClick={() => handleSidebarClick("job-applications")}
    style={{ cursor: "pointer" }}
  >
    <h3>Job Applications</h3>
    <p>{counts.jobApplications}</p>
  </div>
</div>



              {/* Recent Appointments Table */}
            {/* Recent Appointments Table */}
<div className="dashboard-recent">
  <h2>Recent Appointments</h2>
  {recentAppointments.length === 0 ? (
    <p>No recent appointments.</p>
  ) : (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Service</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {recentAppointments.map((appt) => (
          <tr key={appt._id}>
            <td>{appt.fullName}</td>
            <td>{appt.email}</td>
            <td>{appt.phone}</td>
            <td>{appt.service}</td>
            <td>{new Date(appt.createdAt).toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )}
</div>

            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
