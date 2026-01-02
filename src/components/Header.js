import React, { useState, useRef, useEffect } from "react";
import "./Header.css";
import { FaCalendarAlt, FaSearch, FaBars, FaTimes, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FiClock, FiMapPin, FiPhone } from "react-icons/fi";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { serviceData } from "../data/serviceData";

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
   const location = useLocation();
   const formatServiceUrl = (name) => {
  return name
    .toLowerCase()
    .replace(/&/g, "and")         // replace & with 'and'
    .replace(/[^a-z0-9\s-]/g, "") // remove other special chars
    .replace(/\s+/g, "-");        // replace spaces with -
};

    const isServicesActive = location.pathname.startsWith("/services");
const handleSearch = () => {
  if (!searchQuery.trim()) return;

  navigate(`/blogs?search=${encodeURIComponent(searchQuery)}`);

  setSearchQuery("");     
  setShowSearch(false);   
};
   
  const navigate=useNavigate(); 
  const mobileSearchRef = useRef(null);
const desktopSearchRef = useRef(null);
  useEffect(() => {
  const handleScroll = () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 20) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  // Close search when clicking outside
useEffect(() => {
  const handleClickOutside = (event) => {
    if (
      mobileSearchRef.current &&
      !mobileSearchRef.current.contains(event.target) &&
      desktopSearchRef.current &&
      !desktopSearchRef.current.contains(event.target)
    ) {
      setShowSearch(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
}, []);


  return (
    <>
{/* ===== TOP BAR ===== */}
<div className="topbar">
  <div className="topbar-container">

    {/* Left: Address */}
    <div className="topbar-left">
      <FiMapPin className="topbar-icon" />
      371, Guru Hargobind Nagar, Phagwara (Punjab)
    </div>

    {/* Right: Timing + Social */}
    <div className="topbar-right">
      <span className="timing">
        <FiClock className="topbar-icon" />
        24 hours a day, 7 days a week
      </span>

      <div className="topbar-social">
        <a
          href="https://www.facebook.com/ParharHospital/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.instagram.com/official_parhar_hospital/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.youtube.com/@ParharHospital-yz3kw"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube />
        </a>
      </div>
    </div>

  </div>
</div>


    <header className="navbar">
      <div className="navbar-container">

        {/* === MOBILE LEFT: Hamburger === */}
        <div className="hamburger" onClick={() => setIsMenuOpen(true)}>
          <FaBars />
        </div>

        {/* === CENTER LOGO === */}
      <div className="logo">
  <Link to="/">
    <img src="/images/parharlogo.png" alt="Logo" />
  </Link>
</div>

        {/* === RIGHT SEARCH ICON === */}
       <div className="mobile-search" ref={mobileSearchRef}>
          <FaSearch
            onClick={() => setShowSearch((prev) => !prev)}
            className="search-icon"
          />
          {showSearch && (
            <div
              className="header-search-dropdown"
              onClick={(e) => e.stopPropagation()}
            >
             <input
  type="text"
  placeholder="Search..."
  value={searchQuery}
  onChange={(e) => setSearchQuery(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === "Enter") handleSearch();
  }}
/>
             <button className="search-btn" onClick={handleSearch}>
                <FaSearch />
              </button>
            </div>
          )}
        </div>

        {/* === DESKTOP NAVIGATION === */}
       <div className="nav-right-wrapper">
  <ul className="menu">
    <li>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        Home
      </NavLink>
    </li>

    <li>
      <NavLink
        to="/about-us"
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        About
      </NavLink>
    </li>

<li className={`dropdown ${isServicesActive ? "active-link" : ""}`}>
  <NavLink to="/services" className="dropdown-btn">
    Services <span className="arrow">▾</span>
  </NavLink>

  <div className="dropdown-menu categories">
{Object.entries(serviceData).map(([key, category]) => (
  <div className="services-column" key={key}>
    <p>{category.title}</p>
{category.items.map((item) => (
  <NavLink
    key={item}
    to={`/services/${formatServiceUrl(item)}`}
  >
    {item}
  </NavLink>
))}

  </div>
))}

  </div>
</li>


    <li>
      <NavLink
        to="/gallery"
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        Gallery
      </NavLink>
    </li>
        <li>
      <NavLink
        to="/faculty-positions"
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        Faculty Positions
      </NavLink>
    </li>


    <li>
      <NavLink
        to="/blogs"
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        Blogs
      </NavLink>
    </li>


    <li>
      <NavLink
        to="/faq"
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        FAQ
      </NavLink>
    </li>

    <li>
      <NavLink
        to="/contact-us"
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        Contact
      </NavLink>
    </li>
  </ul>

  <div className="right-section">
    <div className="phone-box">
      <FiPhone className="icon" style={{ fontSize: "20px" }} />
      <span>90563-32253</span>
    </div>

    <NavLink to="/book-an-appointment">
      <div className="appointment-box" style={{ cursor: "pointer" }}>
        <FaCalendarAlt className="icon" />
        <span>Appointment</span>
      </div>
    </NavLink>

    <div className="desktop-search" ref={desktopSearchRef}>
      <FaSearch
        onClick={() => setShowSearch((prev) => !prev)}
        className="search-icon"
      />
      {showSearch && (
        <div
          className="header-search-dropdown"
          onClick={(e) => e.stopPropagation()}
        >
        <input
  type="text"
  placeholder="Search..."
  value={searchQuery}
  onChange={(e) => setSearchQuery(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === "Enter") handleSearch();
  }}
/>

        <button className="header_search-btn" onClick={handleSearch}>
            <FaSearch />
          </button>
        </div>
      )}
    </div>
  </div>
</div>
      </div>

      {/* === SIDEBAR MENU FOR MOBILE === */}
   <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
  <div className="mobile-menu-header">
    <FaTimes className="close-icon" onClick={() => setIsMenuOpen(false)} />
    <img src="/images/parharlogo.png" alt="Logo" className="mobile-logo" />
  </div>

  {/* Scrollable links container */}
  <div className="mobile-links-container">
    <ul className="mobile-links">
      <li onClick={() => { navigate("/"); setIsMenuOpen(false); }}>Home</li>
      <li onClick={() => { navigate("/about-us"); setIsMenuOpen(false); }}>About</li>

      <li
        className="mobile-dropdown-header"
        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
      >
        <span onClick={(e) => { e.stopPropagation(); navigate("/services"); setIsMenuOpen(false); }}>
          Services
        </span>
        <span className="mobile-dropdown-icon">{mobileServicesOpen ? "−" : "+"}</span>
      </li>

{mobileServicesOpen && (
  <ul className="mobile-submenu">
    {Object.entries(serviceData).map(([key, category]) => (
      <li key={key} className="mobile-category">
        <span>{category.title}</span>
        <ul className="mobile-inner-submenu">
          {category.items.map((item) => (
     <li
  key={item}
  onClick={() => { 
    navigate(`/services/${formatServiceUrl(item)}`); 
    setIsMenuOpen(false);
  }}
>
  {item}
</li>

          ))}
        </ul>
      </li>
    ))}
  </ul>
)}


      <li onClick={() => { navigate("/gallery"); setIsMenuOpen(false); }}>Gallery</li>
       <li onClick={() => { navigate("/faculty-positions"); setIsMenuOpen(false); }}>Faculty Positions</li>
      <li onClick={() => { navigate("/blogs"); setIsMenuOpen(false);}}>Blogs</li>
      <li onClick={() => { navigate("/faq"); setIsMenuOpen(false); }}>FAQ</li>
      <li onClick={() => { navigate("/contact-us"); setIsMenuOpen(false); }}>Contact</li>
    </ul>
  </div>

  {/* Footer stays fixed at bottom */}
  <div className="mobile-footer">
    <div className="phone-box">
      <FiPhone className="icon" />
      <span>90563-32253</span>
    </div>
  <div
  className="appointment-box"
  onClick={() => {
    navigate("/book-an-appointment");
    setIsMenuOpen(false); // close sidebar after click
  }}
>
  <FaCalendarAlt className="icon" />
  <span>Appointment</span>
</div>
  </div>
</div>


      {/* Overlay when menu is open */}
      {isMenuOpen && (
        <div className="menu-overlay" onClick={() => setIsMenuOpen(false)}></div>
      )}
    </header>
    </>
  );
};

export default Header;
