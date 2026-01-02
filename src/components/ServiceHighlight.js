import React from "react";
import "./ServiceHighlight.css";
import { FiPhone, FiMail, FiCalendar } from "react-icons/fi";
import { Link } from "react-router-dom";

const ServiceHighlight = () => {
  return (
    <section className="service-highlight">
      <div className="cards-container">
        {/* First Card */}
        <div className="card card-primary">
          <div className="card-icon">
            <FiCalendar />
          </div>
         <span className="service-highlight-heading">Reserve Your Appointment</span>
          <p>
            <FiPhone /> +91-9056332253, +91-98555-63464 <br />
            <FiMail /> parharhospital201@gmail.com
          </p>
          <Link to="/book-an-appointment"><button>
            <FiCalendar style={{ marginRight: "8px" }} />
            Book Now
          </button></Link>
        </div>

        {/* Second Card */}
        <div className="card card-center">
          <div className="card-icon">
            <img 
              src="/images/robotic_home.png" 
              alt="Robotic Surgery Icon" 
              className="service-icon-img"
            />
          </div>
         <span className="service-highlight-heading">Robotic Joint Replacement</span>
          <p className="center-text">
            Advanced robotic-assisted joint replacement with high precision, less pain,
            and faster recovery for long-lasting joint performance.
          </p>
          <Link to="/services/robotic-joint-replacement"><button>Learn More →</button></Link>
        </div>

        {/* Third Card */}
        <div className="card card-primary">
          <div className="card-icon">
            <img 
              src="/images/complex_home.png" 
              alt="Complex Trauma Icon" 
              className="service-icon-img"
            />
          </div>
          <span className="service-highlight-heading">Complex Trauma</span>
          <p>
            Comprehensive treatment for complex fractures and severe injuries using
            advanced techniques and modern technology.
          </p>
          <Link to="/services/complex-trauma"><button>
          Learn More →
          </button></Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlight;
