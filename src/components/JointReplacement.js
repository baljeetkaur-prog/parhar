import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./JointReplacement.css";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import ServiceEnquiryForm from "./ServiceEnquiryForm";

const JointReplacement = () => {
  const [sideSearch, setSideSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const handleSideSearch = () => {
    if (!sideSearch.trim()) return;
    navigate(`/blogs?search=${encodeURIComponent(sideSearch)}`);
    setSideSearch("");
  };

  return (
    <>
      <Helmet>
        <title>Best Robotic joint replacement hospital in Phagwara|Parhar Hospital</title>
        <meta
          name="description"
          content="Best robotic joint replacement hospital in Phagwara - affordable, trusted care from expert surgeons for knee and shoulder replacement. Consult Dr. Rohan Singh Parhar"
        />
        <meta
          name="keywords"
          content="Robotic Joint Replacement, Knee Replacement, Robotic Surgery, Parhar Hospital, Phagwara, Orthopedic Surgeon"
        />
      </Helmet>

      {/* =============== HERO SECTION =============== */}
      <section
        className="jr-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(242,246,246,0.7), rgba(242,246,246,0.7)), url('/images/joint_replacement_banner.png')`,
        }}
      >
        <div className="jr-hero-overlay" data-aos="fade-up">
          <h1 className="jr-title">Robotic Joint Replacement</h1>

          <div className="jr-breadcrumb">
           <Link to="/"><span className="jr-bc-home">Home</span></Link>
            <span className="jr-bc-sep">››</span>
            <span className="jr-bc-current">Robotic Joint Replacement</span>
          </div>
        </div>
      </section>

      {/* =============== PAGE CONTENT =============== */}
      <section className="jr-section">
        <div className="jr-container">
          <div className="jr-grid">
            <main className="jr-main">

              {/* TOP IMAGE */}
              <div className="jr-top" data-aos="fade-up">
                <img
                  src="/images/jointreplace.png"
                  alt="Robotic Joint Replacement"
                  className="jr-top-img"
                />
              </div>

              {/* TEXT + IMAGE FLEX BLOCK */}
              <div className="jr-flex-block" data-aos="fade-up">
                <div className="jr-flex-text">
      <h3>What is Robotic Joint Replacement?</h3>
<p>
  Robotic Joint Replacement is one of the most advanced and precise techniques used
  to treat severe knee arthritis, long-standing joint pain, deformity, and mobility
  limitations. At Parhar Hospital, Phagwara, 
  <strong> Dr. Rohan Singh Parhar</strong>, widely regarded as one of the 
  best orthopedic doctors in Punjab uses next-generation robotic systems to achieve
  accuracy far beyond conventional knee replacement surgery.
</p>

<p>
  The robotic system creates a detailed 3D model of your knee, allowing the surgeon 
  to perform bone cuts with millimetre-level precision. This ensures perfect implant 
  positioning, smoother joint movement, and significantly faster recovery. 
  Whether you are searching for the best knee replacement surgeon in Punjab or the 
  best orthopedic doctor near me, robotic knee replacement at Parhar Hospital provides 
  the safest and most effective solution for long-term pain relief.
</p>
                </div>

                <div className="jr-flex-img">
                  <img
                    src="/images/robotic_joint1.png"
                    alt="Robotic Joint Replacement Precision"
                  />
                </div>
              </div>

              {/* 3-BOX GRID (like echo-lig-grid) */}
<h3 className="ultra6-heading">Our Key Facilities</h3>

<div className="ultra6-grid">

  <div className="ultra6-box ultra6-bg1" data-aos="fade-up">
    <h4>High-Precision Robotic Technology</h4>
    <p>
      Our robotic-assisted surgical system enhances accuracy by mapping your knee 
      in 3D and guiding every surgical step. This results in smoother movement, 
      improved alignment, and long-lasting implant life. It is one of the most 
      trusted technologies for patients seeking the 
      best robotic knee replacement surgery in Punjab.
    </p>
  </div>

  <div className="ultra6-box ultra6-bg2" data-aos="fade-up" data-aos-delay="150">
    <h4>Expert Orthopaedic Surgeon</h4>
    <p>
      All robotic surgeries are led by 
      <strong> Dr. Rohan Singh Parhar</strong>, recognised as one of the 
      best orthopaedic surgeons in Punjab with years of expertise in knee replacement, 
      trauma care, and sports injuries. His precision-based approach ensures 
      safe outcomes and speedy recovery for every patient.
    </p>
  </div>

  <div className="ultra6-box ultra6-bg1" data-aos="fade-up" data-aos-delay="300">
    <h4>Personalised Surgery Planning</h4>
    <p>
      Every surgery is planned individually using robotic 3D mapping. This helps 
      design a customised surgical plan based on bone structure, alignment, and 
      joint movement. It ensures a more natural-feeling knee and excellent results 
      for patients looking for the best treatment for joint pain.
    </p>
  </div>

  <div className="ultra6-box ultra6-bg2" data-aos="fade-up">
    <h4>Comfortable & Safe Patient Experience</h4>
    <p>
      Parhar Hospital provides a modern, clean, and stress-free environment with 
      compassionate care at every step. From consultation to post-operative recovery, 
      our team ensures complete comfort, making us a preferred choice for those 
      searching for the best hospital for knee replacement.
    </p>
  </div>

  <div className="ultra6-box ultra6-bg1" data-aos="fade-up" data-aos-delay="150">
    <h4>24×7 Emergency Fracture Treatment</h4>
    <p>
      Our emergency unit is equipped to manage fractures, trauma, and accidental 
      injuries at any hour. Patients often rely on us when searching for 
      emergency fracture treatment or a back pain doctor near me because of our 
      immediate response and expert orthopaedic care.
    </p>
  </div>

  <div className="ultra6-box ultra6-bg2" data-aos="fade-up" data-aos-delay="300">
    <h4>Affordable & Ethical Treatment</h4>
    <p>
      We offer world-class robotic knee replacement surgery at fair and 
      transparent pricing. Our packages are designed keeping every patient in mind, 
      making advanced treatment accessible without compromising quality or safety.
    </p>
  </div>

</div>

              

              {/* TICK LIST SECTION */}
              <div className="jr-block" data-aos="fade-up">
          <h3>Benefits of Robotic Joint Replacement</h3>
<ul className="jr-tick-list">
  <li>Unmatched precision with robotic-guided implant alignment</li>
  <li>Least possible bone and tissue damage for faster healing</li>
  <li>Significantly reduced pain after surgery</li>
  <li>Lower risk of complications compared to traditional surgery</li>
  <li>More natural knee movement and improved flexibility</li>
  <li>Long-lasting implants with highly predictable outcomes</li>
</ul>

              </div>
              <div className="jr-block" data-aos="fade-up">
  <h2>Why Choose Parhar Hospital for Robotic Joint Replacement?  ?</h2>

  <ul className="jr-tick-list">
    <li>Advanced next-generation robotic system ensuring millimetre-level precision</li>
    <li>Highly experienced orthopaedic surgeon Dr. Rohan Singh Parhar leading every procedure</li>
    <li>Scientifically planned surgery with detailed 3D mapping and personalised alignment</li>
    <li>Modern modular operation theatre designed for infection-free robotic surgeries</li>
    <li>Dedicated post-operative care and physiotherapy for faster, smoother recovery</li>
    <li>Ethical, transparent, and patient-first treatment approach</li>
  </ul>
</div>


              {/* CONCLUSION BOX */}
              <div className="jr-conclusion-box" data-aos="fade-up">
                <h4>Conclusion</h4>
<p>
  Parhar Hospital offers advanced 
  <strong> Robotic Joint Replacement Surgery</strong> with exceptional precision, rapid recovery, and long-term durability. 
  Under the expertise of 
  <strong> Dr. Rohan Singh Parhar</strong>,
  known as one of the best orthopedic doctors in Punjab, patients receive 
  personalised treatment for knee arthritis, deformity, chronic joint pain, 
  and complex orthopaedic problems. If you are looking for the 
  best knee replacement surgeon in Punjab, emergency fracture treatment, 
  or the best treatment for joint pain, our hospital provides world-class care 
  that restores mobility and improves quality of life.
</p>
              </div>
            </main>

            {/* SIDEBAR */}
            <aside className="jr-sidebar">

              {/* Search Widget */}
              <div className="jr-widget jr-search" data-aos="fade-up">
                <input
                  type="search"
                  className="jr-search-input"
                  placeholder="Search..."
                  value={sideSearch}
                  onChange={(e) => setSideSearch(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSideSearch()}
                />
                <button className="jr-search-btn" onClick={handleSideSearch}>
                  Search
                </button>
              </div>

              {/* Enquiry Form */}
              <ServiceEnquiryForm serviceName="Robotic Joint Replacement" />

              {/* Services List */}
              <div className="jr-widget jr-services" data-aos="fade-up" data-aos-delay="250">
                 <div className="rk-widget-header">Explore Other Sevices</div>

                <ul className="rk-services-list">
    <li>
      <Link to="/services/robotic-surgery">Robotic Surgery</Link>
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

export default JointReplacement;