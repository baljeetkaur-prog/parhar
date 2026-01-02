import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Anesthesiology.css";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import ServiceEnquiryForm from "./ServiceEnquiryForm";

const Anesthesiology = () => {
  const [sideSearch, setSideSearch] = useState("");
  const navigate = useNavigate();

  const handleSideSearch = () => {
    if (!sideSearch.trim()) return;

    navigate(`/blogs?search=${encodeURIComponent(sideSearch)}`);
    setSideSearch("");
  };

  const handleEnquiry = (e) => {
    e.preventDefault();
    alert("Enquiry submitted (demo). Connect this to backend.");
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out",
      once: true,
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Best Anesthesiology Hospitals in Phagwara | Anesthesiology Specialist</title>
        <meta
          name="description"
          content="Best anesthesiology hospital in Phagwara with expert anesthesiology specialists. Find a nearby anesthesiology doctor near me for safe, personalized care."
        />
        <meta
          name="keywords"
          content="Anesthesiology, Pain Management, General Anesthesia, ICU Care, Regional Anesthesia, Parhar Hospital Phagwara"
        />
      </Helmet>

      {/* === HERO SECTION === */}
      <section
        className="anes-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(242,246,246,0.7), rgba(242,246,246,0.7)), url('/images/anes_banner_img.png')`,
        }}
      >
        <div className="anes-hero-overlay" data-aos="fade-up">
          <h1 className="anes-title">Anesthesiology Specialist</h1>

          <div className="anes-breadcrumb">
           <Link to="/"><span className="anes-bc-home">Home</span></Link>
            <span className="anes-bc-sep">››</span>
            <span className="anes-bc-current">Anesthesiology</span>
          </div>
        </div>
      </section>

      {/* === MAIN CONTENT AREA === */}
      <section className="anes-section">
        <div className="anes-container">
          <div className="anes-grid">
            
            {/* MAIN CONTENT */}
            <main className="anes-main">
              
              {/* Top Image + Intro */}
              <div className="anes-top">
                <div className="anes-top-image" data-aos="fade-up">
                  <img
                    src="/images/anesthesiology_top_banner.png"
                    alt="Anesthesiology at Parhar Hospital"
                    loading="lazy"
                  />
                </div>

                <div className="anes-top-paras" data-aos="fade-up">
          <p>
  The Anesthesiology Department at <strong>Parhar Hospital, Phagwara</strong> is dedicated 
  to delivering safe, precise, and patient-focused anesthesia care for all surgeries and 
  medical procedures. Our team includes some of the <strong>best anesthesiology doctors</strong> in the region, ensuring complete comfort and safety before, during, and after treatment.
</p>
<p>
  Whether you are searching for an <strong>anesthesiology hospital near me</strong> or a 
  trusted centre for advanced anesthesia care, Parhar Hospital provides modern technology, 
  skilled monitoring, and round-the-clock support. We offer comprehensive 
  <strong> anesthesiology services</strong> including general anesthesia, regional blocks, 
  sedation, airway management, ICU anesthesia support, and specialized pain control.
</p>

                </div>
              </div>

              {/* Services Offered */}
              <div className="anes-block" data-aos="fade-up">
                <h3 className="anes-subheading">Are you looking the anesthesiology specialist in Phagwara (Punjab)</h3>

              <ul className="anes-tick-list">
  <li>
    <strong>General Anesthesia:</strong> Full unconsciousness for major surgeries with 
    continuous expert monitoring.
  </li>

  <li>
    <strong>Spinal & Epidural Anesthesia:</strong> Safe and effective anesthesia for 
    orthopaedic, gynaecology, and lower-body procedures.
  </li>

  <li>
    <strong>Local & Regional Nerve Blocks:</strong> Targeted pain relief ideal for limb and 
    day-care procedures.
  </li>

  <li>
    <strong>Sedation & Monitored Anesthesia Care (MAC):</strong> Light sedation for 
    minor surgeries, endoscopy, and short procedures.
  </li>

  <li>
    <strong>ICU & Critical Care Anesthesia:</strong> Ventilator management, emergency airway 
    support, and life-saving intervention by expert anesthesiologists.
  </li>

  <li>
    <strong>Pain Management Services:</strong> Post-operative pain control, nerve blocks, 
    and customized pain relief plans.
  </li>
</ul>

              </div>

              {/* Pre-Anesthesia Evaluation */}
              <div className="anes-block" data-aos="fade-up">
                <h3 className="anes-subheading">Pre-Anesthesia Evaluation</h3>

            <ul className="anes-tick-list">
  <li>Thorough medical history evaluation</li>
  <li>Assessment of allergies, lifestyle, and past anesthesia experience</li>
  <li>Blood tests, ECG, chest X-ray, and other investigations</li>
  <li>Risk assessment for high-risk and elderly patients</li>
  <li>Personalized anesthesia plan designed for maximum safety</li>
</ul>
              </div>

              {/* Why Choose Us */}
              <div className="anes-block" data-aos="fade-up">
                <h3 className="anes-subheading">Why Choose Parhar Hospital?</h3>

       <ul className="anes-tick-list">
  <li>Team of highly experienced and skilled anesthesiology doctors</li>
  <li>Recognized as one of the <strong>best anesthesiology hospitals</strong> in Phagwara</li>
  <li>24×7 anesthesia support for surgeries, emergencies, and ICU care</li>
  <li>Modern operation theatres with advanced monitoring technology</li>
  <li>Safe anesthesia for children, elderly patients, and cardiac-risk cases</li>
  <li>Strict safety protocols to ensure a painless and stress-free experience</li>
</ul>
              </div>

              {/* Conclusion */}
              <div className="anes-conclusion-box" data-aos="fade-up">
                <h4>Conclusion</h4>
             <p>
  Parhar Hospital is committed to providing the best and safest <strong>anesthesiology 
  services</strong> for every patient. From pre-anesthesia evaluation to post-operative 
  recovery, our expert team ensures maximum comfort and safety at all stages.
</p>
<p>
  If you are looking for the <strong>best anesthesiology doctor</strong> or a trusted 
  <strong> anesthesiology hospital</strong> for surgery or pain management, 
  Parhar Hospital, Phagwara is the preferred choice for safe, reliable, and 
  advanced anesthesia care.
</p>

              </div>

            </main>

            {/* SIDEBAR */}
            <aside className="anes-sidebar">

              {/* Search */}
              <div className="anes-widget anes-search" data-aos="fade-up">
                <input
                  type="search"
                  className="anes-search-input"
                  placeholder="Search..."
                  value={sideSearch}
                  onChange={(e) => setSideSearch(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSideSearch()}
                />
                <button className="anes-search-btn" onClick={handleSideSearch}>
                  Search
                </button>
              </div>

              {/* Enquiry Form */}
              <ServiceEnquiryForm serviceName="Anesthesiology" />

              {/* Services List */}
              <div className="anes-widget anes-services" data-aos="fade-up">
                 <div className="rk-widget-header">Explore Other Sevices</div>

                <ul className="rk-services-list">
    <li>
      <Link to="/services/robotic-joint-replacement">Robotic Joint Replacement</Link>
    </li>
    <li>
      <Link to="/services/complex-trauma">Complex Trauma</Link>
    </li>
    <li>
      <Link to="/services/robotic-surgery">Robotic Surgery</Link>
    </li>
    <li>
      <Link to="/services/obstetrics-and-gynaecology">Obstetrics & Gynecology</Link>
    </li>
            <li>
          <Link to="/services/in-vitro-fertilization">In Vitro Fertilization</Link>
        </li>
    <li>
      <Link to="/services/orthopaedic-surgery">Orthopaedic Surgery</Link>
    </li>
    <li>
      <Link to="/services/arthroscopy-orthopaedic-surgery">Arthroscopy Orthopaedic Surgery</Link>
    </li>
    <li>
      <Link to="/services/arthroplasty-orthopaedic-surgery">Arthroplasty Orthopaedic Surgery</Link>
    </li>
    <li>
      <Link to="/services/sports-medicine">Sports Medicine</Link>
    </li>
    <li>
      <Link to="/services/paediatric-orthopedics">Paediatric Orthopedics</Link>
    </li>
    <li>
      <Link to="/services/plastic-and-reconstructive-surgery">Plastic & Reconstructive Surgery</Link>
    </li>
  </ul>
              </div>

            </aside>

          </div>
        </div>
      </section>
    </>
  );
};

export default Anesthesiology;