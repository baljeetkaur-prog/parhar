import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Physiotherapy.css";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import ServiceEnquiryForm from "./ServiceEnquiryForm";

const Physiotherapy = () => {
  const [sideSearch, setSideSearch] = useState("");
  const navigate = useNavigate();

  const handleSideSearch = () => {
    if (!sideSearch.trim()) return;
    navigate(`/blogs?search=${encodeURIComponent(sideSearch)}`);
    setSideSearch("");
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
        <title>Best Physiotherapy Hospital in Phagwara|Sports injury Center</title>
        <meta
          name="description"
          content="Best physiotherapy hospital in Phagwara offering expert care for sports injury and shoulder pain. Advanced rehab, personalized plans, and prompt recovery."
        />
        <meta
          name="keywords"
          content="Physiotherapy, Rehabilitation, Injury Recovery, Pain Management, Parhar Hospital, Phagwara, Physical Therapy"
        />
      </Helmet>

      {/* HERO SECTION */}
      <section
        className="pt-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(242,246,246,0.7), rgba(242,246,246,0.7)), url('/images/physio_banner_img.png')`,
        }}
      >
        <div className="pt-hero-overlay" data-aos="fade-up">
          <h1 className="pt-title">Physiotherapy Hospital</h1>
          <div className="pt-breadcrumb">
            <Link to="/"><span className="pt-bc-home">Home</span></Link>
            <span className="pt-bc-sep">››</span>
            <span className="pt-bc-current">Physiotherapy</span>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT AREA */}
      <section className="pt-section">
        <div className="pt-container">
          <div className="pt-grid">

            {/* LEFT SIDE MAIN CONTENT */}
            <main className="pt-main">
              <div className="pt-top">
                <div className="pt-top-image" data-aos="fade-up">
                  <img
                    src="/images/physiotherapy_main_img.png"
                    alt="Physiotherapy overview"
                    loading="lazy"
                  />
                </div>
                <div className="pt-top-paras" data-aos="fade-up">
                <p>
  At Parhar Hospital, our Physiotherapy Department is dedicated to restoring 
  strength, mobility, and flexibility for patients of all ages. As the 
  <strong> best physiotherapy clinic in Phagwara</strong>, we focus on safe, 
  evidence-based treatments designed to reduce pain, enhance movement, and 
  speed up recovery. Whether you are healing from an injury, surgery, or dealing 
  with long-term discomfort, our experts ensure personalized care that fits your 
  needs. If you are searching for a <strong>physiotherapist near me</strong>, 
  Parhar Hospital offers trusted and <strong>affordable physiotherapy</strong> with advanced equipment and experienced specialists.
</p>
                </div>
              </div>

              {/* Types / Treatments */}
              <div className="pt-block" data-aos="fade-up">
                <h3 className="pt-subheading">Sports Injury Physiotherapy Hospital </h3>
            <ul className="pt-tick-list">
  <li><strong>Orthopedic Rehabilitation:</strong> Recovery programs for fractures, joint replacements, ligament injuries, and post-surgical healing to restore mobility.</li>
  <li><strong>Sports Physiotherapy:</strong> Professional rehabilitation for athletes, sports injury care, performance improvement, and injury prevention.</li>
  <li><strong>Neurological Physiotherapy:</strong> Supportive therapy for stroke recovery, spinal cord injuries, nerve disorders, and balance issues.</li>
  <li><strong>Pain Management:</strong> Effective treatments for chronic back pain, neck pain, joint pain, and muscle stiffness using advanced techniques.</li>
  <li><strong>Pediatric & Geriatric Physiotherapy:</strong> Gentle and specialized therapy for children with developmental needs and elderly patients requiring mobility assistance.</li>
</ul>
              </div>

              {/* Benefits */}
              <div className="pt-block" data-aos="fade-up">
               <h3 className="pt-subheading">Why Choose Our Physiotherapy Services?</h3>
      <ul className="pt-tick-list">
  <li>Reduces pain, swelling, and stiffness naturally</li>
  <li>Improves posture, joint flexibility, and daily movement</li>
  <li>Speeds up recovery after injuries and surgeries</li>
  <li>Strengthens muscles and improves body coordination</li>
  <li>Helps prevent future injuries and long-term complications</li>
</ul>
              </div>

              {/* Conclusion */}
              <div className="pt-conclusion-box" data-aos="fade-up">
                <h4>Conclusion</h4>
             <p>
  Parhar Hospital is widely recognized as the 
  <strong> best physiotherapy clinic in Phagwara</strong>, offering 
  patient-focused, result-oriented treatment plans. Our experienced team works 
  closely with each patient to ensure effective recovery, improved mobility, 
  and long-term wellness. If you are looking for a 
  <strong> physiotherapist near me</strong> who provides high-quality and 
  <strong> affordable physiotherapy</strong>, our clinic is a trusted choice. 
  Whether you need rehabilitation, pain relief, or mobility enhancement, we are 
  here to guide you toward a healthier, more active life.
</p>
              </div>
            </main>

            {/* RIGHT SIDEBAR */}
            <aside className="pt-sidebar">
              {/* Search */}
              <div className="pt-widget pt-search" data-aos="fade-up">
                <input
                  type="search"
                  className="pt-search-input"
                  placeholder="Search..."
                  value={sideSearch}
                  onChange={(e) => setSideSearch(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSideSearch()}
                />
                <button className="pt-search-btn" onClick={handleSideSearch}>
                  Search
                </button>
              </div>

              {/* Enquiry Form */}
              <ServiceEnquiryForm serviceName="Physiotherapy" />

              {/* Services List */}
              <div className="pt-widget pt-services" data-aos="fade-up">
                <div className="echo-widget-header">Explore Other Services</div>

<ul className="echo-services-list">
  <li>
    <Link to="/services/color-doppler">Color Doppler</Link>
  </li>
  <li>
    <Link to="/services/ct-scan">CT Scan</Link>
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
    <Link to="/services/2d-echo">2d Echo</Link>
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

export default Physiotherapy;