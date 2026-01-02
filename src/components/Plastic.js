import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Plastic.css";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import ServiceEnquiryForm from "./ServiceEnquiryForm";

const Plastic = () => {
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
  <title>Plastic and reconstructive surgery center in Phagwara</title>
  <meta
    name="description"
    content="Phagwara's top Plastic and reconstructive surgery center with expert surgery doctors and a specialist team delivering safe, advanced care. Visit today Parhar Hospital Phagwara"
  />
  <meta
    name="keywords"
    content="Best plastic and reconstructive surgery doctors, Best plastic and reconstructive surgeons, Plastic and reconstructive surgery hospital, Plastic and reconstructive hospital in Phagwara, Best Plastic surgeon in Phagwara, Best plastic and reconstructive surgery center, Reconstructive surgery specialists, Reconstructive surgery hospital in Phagwara"
  />
</Helmet>

      {/* === HERO SECTION === */}
      <section
        className="plasti-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(242,246,246,0.7), rgba(242,246,246,0.7)), url('/images/plastic_banner_img.png')`,
        }}
      >
        <div className="plasti-hero-overlay" data-aos="fade-up">
          <h1 className="plasti-title">Plastic & Reconstructive Surgery</h1>
          <div className="plasti-breadcrumb">
           <Link to="/"> <span className="plasti-bc-home">Home</span></Link>
            <span className="plasti-bc-sep">››</span>
            <span className="plasti-bc-current">Plastic & Reconstructive Surgery</span>
          </div>
        </div>
      </section>

      {/* === MAIN CONTENT AREA === */}
      <section className="plasti-section">
        <div className="plasti-container">
          <div className="plasti-grid">
            
            {/* MAIN CONTENT */}
            <main className="plasti-main">
              {/* Top Image + Intro */}
              <div className="plasti-top">
                <div className="plasti-top-image" data-aos="fade-up">
                  <img
                    src="/images/plastic_main_img.png"
                    alt="Plastic & Reconstructive Surgery at Parhar Hospital"
                    loading="lazy"
                  />
                </div>
                <div className="plasti-top-paras" data-aos="fade-up">
<p>
  At Parhar Hospital, our Plastic & Reconstructive Surgery Department is led by some of the <strong>best plastic and reconstructive surgery doctors</strong> in Phagwara. Our team of highly skilled <strong>reconstructive surgery specialists</strong> focuses on restoring function, mobility, and appearance for patients with traumatic injuries, burns, or soft tissue damage. 
</p>
<p>
  Recognized as a leading <strong>plastic and reconstructive surgery hospital</strong> in Phagwara, we provide comprehensive care for complex injuries, including limb salvage, soft tissue reconstruction, and post-traumatic deformity correction. With advanced surgical techniques, modern imaging, and dedicated post-operative rehabilitation, we ensure patients receive safe, timely, and effective treatment for optimal recovery.
</p>

                </div>
              </div>

              {/* Services Offered */}
              <div className="plasti-block" data-aos="fade-up">
<h2 className="plasti-subheading">Our Plastic & Reconstructive Surgery Services</h2>
<ul className="plasti-tick-list">
  <li><strong>Limb Salvage:</strong> Advanced procedures to save injured limbs, including microvascular repair, external fixation, and bone reconstruction performed by the <strong>best plastic and reconstructive surgeons</strong> in Phagwara.</li>
  <li><strong>Soft Tissue Reconstruction:</strong> Management of traumatic or post-surgical soft tissue injuries with flap surgeries, skin grafting, and wound coverage to ensure proper healing and restore function.</li>
  <li><strong>Burn Management:</strong> Comprehensive care for burn injuries, including debridement, grafting, and reconstructive surgery for functional and structural restoration.</li>
  <li><strong>Post-Traumatic Deformity Correction:</strong> Surgical correction of deformities caused by fractures, trauma, or injuries, helping patients regain mobility and quality of life.</li>
  <li><strong>Complex Wound Management:</strong> Treatment of chronic wounds or injuries requiring advanced reconstructive techniques to restore tissue health and prevent complications.</li>
</ul>

              </div>

              {/* Why Choose Us */}
              <div className="plasti-block" data-aos="fade-up">
           <h3 className="plasti-subheading">Why Choose Parhar Hospital for Reconstructive Surgery?</h3>
<ul className="plasti-tick-list">
  <li>Recognized as one of the top <strong>plastic and reconstructive hospitals in Phagwara</strong> for trauma and orthopaedic-related reconstruction.</li>
  <li>Expert team of <strong>reconstructive surgery specialists</strong> handling complex injuries and limb salvage procedures.</li>
  <li>State-of-the-art operation theatres and advanced surgical equipment for precise reconstruction.</li>
  <li>Comprehensive treatment for trauma, burns, soft tissue injuries, and post-fracture deformities.</li>
  <li>Structured post-operative care and physiotherapy for full functional recovery.</li>
  <li>Personalized treatment plans ensuring safe, effective, and long-lasting outcomes for every patient.</li>
</ul>
              </div>

              {/* Conclusion */}
    <div className="plasti-conclusion-box" data-aos="fade-up">
  <h4>Conclusion</h4>
  <p>
    Parhar Hospital is a trusted <strong>plastic and reconstructive surgery hospital in Phagwara</strong>, specializing in trauma-related reconstructive procedures. Our team of <strong>reconstructive surgery specialists</strong> and <strong>best plastic surgeons in Phagwara</strong> provide meticulous surgical care for limb salvage, soft tissue reconstruction, burn management, and post-traumatic deformity correction. With personalized treatment plans, modern surgical techniques, and dedicated post-operative rehabilitation, we ensure every patient achieves optimal recovery and restores function, mobility, and quality of life. Parhar Hospital is recognized as one of the leading <strong>plastic and reconstructive surgery centers</strong> in the region for orthopaedic and trauma care.
  </p>
</div>
            </main>

            {/* SIDEBAR */}
            <aside className="plasti-sidebar">
              {/* Search */}
              <div className="plasti-widget plasti-search" data-aos="fade-up">
                <input
                  type="search"
                  className="plasti-search-input"
                  placeholder="Search..."
                  value={sideSearch}
                  onChange={(e) => setSideSearch(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSideSearch()}
                />
                <button className="plasti-search-btn" onClick={handleSideSearch}>Search</button>
              </div>

              {/* Enquiry Form */}
              <ServiceEnquiryForm serviceName="Plastic & Reconstructive Surgery" />

              {/* Services List */}
              <div className="plasti-widget plasti-services" data-aos="fade-up">
                 <div className="rk-widget-header">Explore Other Sevices</div>

                <ul className="rk-services-list">
    <li>
      <Link to="/services/robotic-joint-replacement">Robotic Joint Replacement</Link>
    </li>
    <li>
      <Link to="/services/complex-trauma">Complex Trauma</Link>
    </li>
    <li>
      <Link to="/services/anesthesiology">Anesthesiology</Link>
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
      <Link to="/services/robotic-surgery">Robotic Surgery</Link>
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

export default Plastic;