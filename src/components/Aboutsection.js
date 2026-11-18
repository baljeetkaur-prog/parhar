import React from "react";
import "./Aboutsection.css";
import { FaMedal, FaAward, FaUserMd, FaStar, FaHospital } from "react-icons/fa";
import SlideUpOnScroll from "./SlideUpOnScroll";

// Hospital/service-focused content
const points = [
{
  icon: <FaMedal />,
  title: "Experienced Team",
  text: "Our highly skilled orthopaedic team has successfully handled over 50K+ procedures with precision and care.",
},

{
  icon: <FaAward />,
  title: "Advanced Robotic Surgery",
  text: "Our hospital uses robotic technology for safe and precise joint surgeries. Patients benefit from quicker healing.",
},
{
  icon: <FaUserMd />,
  title: "Wide Range of Treatments",
  text: "We offer a wide range of orthopaedic treatments, from advanced joint surgeries to complex trauma care.",
},
{
  icon: <FaStar />,
  title: "Quality You Can Trust",
  text: "We follow strict clinical protocols to ensure safe, reliable, and result-oriented treatments.",
}
];

const Aboutsection = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">

        {/* ---- SMALL TOP SUBHEADING ---- */}
      

        {/* ---- MAIN HEADING WITH ICON ---- */}
        <SlideUpOnScroll>
     <SlideUpOnScroll>
  <h1 className="main-about-heading">
    Best Orthopaedic Hospital in Phagwara <FaHospital className="heading-icon" />
  </h1>
</SlideUpOnScroll>

        </SlideUpOnScroll>
        <h2 className="seo-hidden-heading">
  Orthopedic Doctor in Phagwara
</h2>

        {/* ---- GRID: LEFT IMAGE + RIGHT POINTS ---- */}
        <div className="about-layout">

          {/* LEFT IMAGE */}
          <div className="about-left-img">
            <img src="/images/about_img.png" alt="Hospital" />
          </div>

          {/* RIGHT POINTS (4 CARDS) */}
          <div className="about-right-points">
            {points.map((item, index) => (
              <SlideUpOnScroll delay={index * 0.2} key={index}>
                <div className="about-card">
                  <div className="icon-box">{item.icon}</div>
                  <span className="highlight-title">{item.title}</span>
                  <p>{item.text}</p>
                </div>
              </SlideUpOnScroll>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Aboutsection;
