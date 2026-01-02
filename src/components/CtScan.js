import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./CtScan.css";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import ServiceEnquiryForm from "./ServiceEnquiryForm";

const CtScan = () => {
  const [sideSearch, setSideSearch] = useState("");
  const navigate = useNavigate();

  const handleSideSearch = () => {
    if (!sideSearch.trim()) return;
    navigate(`/blogs?search=${encodeURIComponent(sideSearch)}`);
    setSideSearch("");
  };

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-out", once: true });
  }, []);

  return (
    <>
<Helmet>
  <title>Best CT Scan Hospital in Phagwara|Affordable CT Scan Center</title>
  <meta
    name="description"
    content="Discover the Best CT Scan Hospital in Phagwara. Our CT Scan center offers Diagnostic CT scan services with Affordable CT scan options and quick, accurate results."
  />
  <meta
    name="keywords"
    content="Best CT Scan center In Phagwara, CT Scan near me, Best CT Scan center, Affordable CT Scan, CT Scan laboratory, 24-hour CT Scan center, Advanced radiology imaging, CT scan appointment, CT scan diagnostic services"
  />
</Helmet>

      {/* HERO SECTION */}
      <section
        className="ctscan-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(242,246,246,0.7), rgba(242,246,246,0.7)), url('/images/ctscan_banner_img.png')`,
        }}
      >
        <div className="ctscan-hero-overlay" data-aos="fade-up">
          <h1 className="CT Scan Hospital-title">CT Scan</h1>

          <div className="ctscan-breadcrumb">
          <Link to="/"> <span className="ctscan-bc-home">Home</span></Link>
            <span className="ctscan-bc-sep">››</span>
            <span className="ctscan-bc-current">CT Scan</span>
          </div>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="ctscan-section">
        <div className="ctscan-container">
          <div className="ctscan-grid">

            {/* MAIN CONTENT */}
            <main className="ctscan-main">
              <div className="ctscan-top">
                <div className="ctscan-top-image" data-aos="fade-up">
                  <img
                    src="/images/ctscan_main_img.png"
                    alt="CT Scan Machine"
                    loading="lazy"
                  />
                </div>

                <div className="ctscan-top-paras" data-aos="fade-up">
           <p>
  Parhar Hospital is recognized as the <strong>best CT Scan center in Phagwara</strong>, offering advanced, high-resolution imaging for accurate diagnosis. Our <strong>CT Scan laboratory</strong> provides precise cross-sectional images to help doctors evaluate fractures, tumors, infections, internal injuries, and various medical conditions. With state-of-the-art machines and expert radiologists, we ensure reliable results and proper medical guidance.
</p>

<p>
  If you are searching for <strong>CT Scan near me</strong>, looking for <strong>affordable CT Scan</strong> options, or want to book a <strong>CT scan appointment</strong>, Parhar Hospital provides a seamless and patient-friendly experience. Our services are designed to deliver accurate diagnostic support, quick reporting, and professional care for every patient.
</p>
                </div>
              </div>

              {/* Where CT Scan Helps */}
              <div className="ctscan-block" data-aos="fade-up">
         <h2 className="ctscan-subheading">Where CT Scan is Used</h2>

<ul className="ctscan-tick-list">
  <li>Evaluate brain injuries, strokes, and neurological conditions</li>
  <li>Detect fractures, bone infections, and joint damage</li>
  <li>Examine chest and lung diseases for accurate treatment planning</li>
  <li>Assess abdominal organs including liver, kidneys, and intestines</li>
  <li>Early detection and staging of cancers</li>
  <li>Heart, vascular, and blood vessel evaluation using advanced radiology imaging</li>
</ul>
              </div>

              {/* Procedure */}
              <div className="ctscan-block" data-aos="fade-up">
     <h3 className="ctscan-subheading">How a CT Scan is Conducted</h3>

<ul className="ctscan-tick-list">
  <li>Patient lies on a motorized table that moves through the CT scanner</li>
  <li>The scanner rotates to capture multiple X-ray images of the body</li>
  <li>These images are processed into detailed 3D cross-sectional views</li>
  <li>The procedure is fast, taking approximately 5–10 minutes</li>
  <li>Painless, non-invasive, and safe, making it suitable for all age groups</li>
</ul>
              </div>

              {/* Preparation */}
              <div className="ctscan-block" data-aos="fade-up">
           <h3 className="ctscan-subheading">Preparation Before a CT Scan</h3>

<ul className="ctscan-tick-list">
  <li>Wear comfortable and loose-fitting clothing</li>
  <li>Remove metal objects, jewellery, or accessories</li>
  <li>Fasting may be required if contrast CT is planned</li>
  <li>Inform the doctor if you are pregnant or have medical implants</li>
</ul>
              </div>

              {/* Conclusion */}
    <div className="ctscan-conclusion-box" data-aos="fade-up">
  <h4>Conclusion</h4>
  <p>
    Parhar Hospital is your trusted <strong>24-hour CT Scan center</strong> providing comprehensive <strong>CT scan diagnostic services</strong> with advanced radiology imaging. Our experienced radiologists ensure accurate interpretation and reliable results. Whether you are looking for the <strong>best CT Scan center</strong> in Phagwara, an <strong>affordable CT Scan</strong>, or want to schedule a <strong>CT scan appointment</strong>, we are committed to offering precise, safe, and patient-friendly care.
  </p>
</div>
            </main>

            {/* SIDEBAR */}
            <aside className="ctscan-sidebar">

              {/* Search */}
              <div className="ctscan-widget ctscan-search" data-aos="fade-up">
                <input
                  type="search"
                  className="ctscan-search-input"
                  placeholder="Search..."
                  value={sideSearch}
                  onChange={(e) => setSideSearch(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSideSearch()}
                />
                <button className="ctscan-search-btn" onClick={handleSideSearch}>
                  Search
                </button>
              </div>

              {/* Enquiry */}
              <ServiceEnquiryForm serviceName="CT Scan" />

              {/* Services List */}
              <div className="ctscan-widget ctscan-services" data-aos="fade-up">
                <div className="echo-widget-header">Explore Other Services</div>

<ul className="echo-services-list">
  <li>
    <Link to="/services/color-doppler">Color Doppler</Link>
  </li>
  <li>
    <Link to="/services/2d-echo">2D Echo</Link>
  </li>
  <li>
    <Link to="/services/ecg">ECG</Link>
  </li>
  <li>
    <Link to="/services/ultrasound">Ultrasound</Link>
  </li>
  <li>
    <Link to="/services/x-ray">X-Ray</Link>
  </li>
  <li>
    <Link to="/services/physiotherapy">Physiotherapy</Link>
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

export default CtScan;