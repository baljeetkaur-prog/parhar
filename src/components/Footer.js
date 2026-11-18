import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Footer.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaSearch,
} from "react-icons/fa";

const Footer = () => {
  const [footerSearch, setFooterSearch] = useState("");
  const navigate = useNavigate();

  const handleFooterSearch = () => {
    if (!footerSearch.trim()) return;

    navigate(`/blogs?search=${encodeURIComponent(footerSearch)}`);

    setFooterSearch(""); // clear input
  };
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo + About */}
        <div className="footer-column">
          <img src="/images/parharlogo.png" alt="Parhar Hospital Logo" className="footer-logo" />
          <p className="footer-about">
            Dr. Rohan Singh Parhar, the highly rated orthopaedic surgeon in Punjab,
            is known for his extraordinary skills and experience in orthopaedics.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <p className="footer-heading">Quick Links</p>
          <ul className="footer-links">
            <Link to="/"><li>Home</li></Link>
            <Link to="/about-us"><li>About</li></Link>
            <Link to="/services"><li>Services</li></Link>
            <Link to="/gallery"><li>Gallery</li></Link>
            <Link to="/blogs"><li>Blogs</li></Link>
            <Link to="/careers"><li>Careers</li></Link>
            <Link to="/faq"><li>FAQ</li></Link>
            <Link to="/contact-us"><li>Contact</li></Link>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-column">
        <p className="footer-heading">Our Services</p>
          <ul className="footer-links">
           <Link to="/services/robotic-joint-replacement"><li>Robotic Joint Replacement</li></Link>
            <Link to="/services/complex-trauma"><li>Complex Trauma</li></Link>
            <Link to="/services/orthopaedic-surgery"><li>Orthopaedic Surgery</li></Link>
            <Link to="/services/obstetrics-and-gynaecology"><li>Obstetrics & Gynaecology</li></Link>
            <Link to="/services/anesthesiology"><li>Anesthesiology</li></Link>
            <Link to="/services/ct-scan"><li>CT-Scan</li></Link>
            <Link to="/services/sports-medicine"><li>Sports Medicine</li></Link>
            <Link to="/services/x-ray"><li>X-Ray</li></Link>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-column">
          <p className="footer-heading">Contact Us</p>
          <ul className="footer-contact">
            <li>
              <FaMapMarkerAlt className="contact-icon" />{" "}
              371, Guru Hargobind Nagar, Phagwara (Punjab)
            </li>
            <li>
              <FaPhoneAlt className="contact-icon" /> 90563-32253, 98555-63464
            </li>
            <li>
              <FaEnvelope className="contact-icon" /> parharhospital201@gmail.com
            </li>
          </ul>
        </div>

        {/* Social + Search */}
        <div className="footer-column">
          <p className="footer-heading">Social Link</p>
  <div className="footer-social">
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


<div className="footer-search">
  <input
    type="text"
    placeholder="Search..."
    value={footerSearch}
    onChange={(e) => setFooterSearch(e.target.value)}
    onKeyDown={(e) => e.key === "Enter" && handleFooterSearch()}
  />

  <button className="search-btn" onClick={handleFooterSearch}>
    <FaSearch />
  </button>
</div>

        </div>
      </div>

      {/* Divider */}
      <hr className="footer-divider" />

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p>
  © 2025 Parhar Hospital. Developed by{" "}
  <a
    href="https://socialsimba.com/"
    target="_blank"
    rel="noopener noreferrer"
    style={{ color: "#ce1e3b", fontWeight: "600", textDecoration: "none" }}
  >
    Social Simba
  </a>
  .
</p>
        <div className="footer-bottom-links">
          <Link to="/faq"><span>FAQ</span></Link> | <Link to="/gallery"><span>Gallery</span></Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
