import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./HipReplacement.css";
import { Helmet } from "react-helmet";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ServiceEnquiryForm from "./ServiceEnquiryForm";

const HipReplacement = () => {
  const [sideSearch, setSideSearch] = useState("");
const navigate = useNavigate();

const handleSideSearch = () => {
  if (!sideSearch.trim()) return;

  navigate(`/blogs?search=${encodeURIComponent(sideSearch)}`);
  setSideSearch("");
};

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleHREnquiry = (e) => {
    e.preventDefault();
    alert("Enquiry submitted (demo). Connect backend here.");
  };

  return (
    <>
         <Helmet>
        <title>Hip Replacement Surgery at Parhar Hospital, Phagwara</title>
        <meta
          name="description"
          content="Learn about advanced hip replacement surgery at Parhar Hospital, Phagwara. Our orthopedic experts provide anterior, posterior, and revision hip replacement with precision and care."
        />
        <meta
          name="keywords"
          content="Hip Replacement, Anterior Hip Replacement, Posterior Hip Replacement, Arthroscopy, Revision Hip Surgery, Orthopedic Surgery, Parhar Hospital, Phagwara"
        />
      </Helmet>
      {/* === HERO SECTION === */}
      <section
        className="hr-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(242,246,246,0.7), rgba(242,246,246,0.7)), url('/images/hipreplace.png')`,
        }}
        
      >
        <div className="hr-hero-overlay" data-aos="fade-up">
          <h1 className="hr-title" data-aos="fade-up">Hip Replacement</h1>

          <div className="hr-breadcrumb" data-aos="fade-up">
            <span className="hr-bc-home">Home</span>
            <span className="hr-bc-sep">››</span>
            <span className="hr-bc-current">Hip Replacement</span>
          </div>
        </div>
      </section>

      {/* === MAIN CONTENT === */}
      <section className="hr-section" data-aos="fade-up">
        <div className="hr-container">
          <div className="hr-grid">

            {/* LEFT CONTENT */}
            <main className="hr-main">

              {/* Top Image + Paragraph */}
              <div className="hr-top" data-aos="fade-up">
                <div className="hr-top-image">
                  <img
                    src="/images/hipreplace_secondbanner.png"
                    alt="Hip Replacement Overview"
                    loading="lazy"
                  />
                </div>

                <div className="hr-top-paras">
                  <p>
                    Hip replacement is a common technique conducted across all major hospitals
                    for orthopaedic procedures. This surgery involves replacing a painful or
                    arthritic hip joint with an artificial implant made of metal and plastic.
                    It is recommended when all other treatments fail to relieve pain. Hip
                    replacement surgery helps restore mobility, reduce discomfort, and make
                    walking significantly easier.
                  </p>
                </div>
              </div>

              {/* Types of Surgery */}
              <div className="hr-block" data-aos="fade-up">
                <h3 className="hr-subheading">Types of Hip Replacement Surgery in India</h3>

                <p>
                  In addition to standard hip replacement surgery, orthopaedic surgeons may
                  perform the procedure either traditionally or using a minimally-invasive
                  technique. The key difference lies in the size of the incision. During
                  standard hip replacement surgery, general anaesthesia is administered to 
                  relax your muscles and ensure a pain-free experience throughout the procedure.
                </p>
              </div>

              <div className="hr-block hr-flex-block" data-aos="fade-up">

  {/* LEFT TEXT */}
  <div className="hr-flex-text">
    <h3 className="hr-subheading">Anterior Hip Replacement</h3>

    <p>
      This type of hip replacement is a surgical process in which damaged bones are replaced 
      with total hip arthroplasty. Other names for the procedure are minimally invasive or 
      muscle-sparing hip arthroplasty. An anterior hip replacement surgery in India is more 
      popular because it’s less invasive than posterior and lateral approaches. This technique 
      causes less damage to surrounding muscles and tendons, leading to a faster recovery.
    </p>
  </div>

  {/* RIGHT SMALL IMAGE */}
  <div className="hr-flex-image">
    <img
      src="/images/hip1.png"
      alt="Anterior Hip Replacement"
      loading="lazy"
    />
  </div>

</div>

<div className="hip-method" data-aos="fade-up">
  <div className="hip-method-left">
    <img src="/images/hip2.png" alt="Posterior Hip Replacement" />
  </div>

  <div className="hip-method-right">
    <h3 className="hr-subheading">Posterior Hip Replacement</h3>
    <p>
      This technique is a minimally invasive hip replacement surgery performed
      to replace the hip joint. It is a quick recovery process and is also
      known as muscle-sparing surgery. It is traditionally the most common and
      the first option to perform a total hip replacement. In a posterior hip
      replacement, the incision is placed at the back of the hip so that the
      significant walking muscles are not cut.
    </p>
  </div>
</div>

<div className="hip-method hip-method-reverse" data-aos="fade-up">
  <div className="hip-method-left-text">
    <h3 className="hr-subheading">Arthroscopy</h3>
    <p>
      It is a surgical procedure that can diagnose and treat problems in the
      patient experiencing knee pain. It is helpful for a joint replacement
      surgeon to confirm the source of knee pain and treat the problem. The
      arthroscope enters one of the cuts during the surgery, and the surgeon
      will perform the surgery using the attached camera. The surgeon can
      investigate your joint’s condition through images produced by the camera.
    </p>
  </div>

  <div className="hip-method-right-img">
    <img src="/images/hip3.png" alt="Arthroscopy" />
  </div>
</div>

<div className="hip-method" data-aos="fade-up">
  <div className="hip-method-left">
    <img src="/images/hip4.png" alt="Hip Replacement Rehabilitation" />
  </div>

  <div className="hip-method-right">
    <h3 className="hr-subheading">Hip Replacement Rehabilitation</h3>
    <p>
      The recovery process from total hip replacement will be around 4 to 6
      weeks. Your hip replacement surgeon will work with you to heal your
      surgical wounds and internal soft tissues. Typical recoveries include
      physical therapy exercises to provide an everyday life to the patient
      with returning to work and the activities of daily living.
    </p>
  </div>
</div>

<div className="hip-method hip-method-reverse" data-aos="fade-up">
  <div className="hip-method-left-text">
    <h3 className="hr-subheading">Hip Revision</h3>
    <p>
      Hip revision is performed to repair an artificial hip joint that has been
      damaged due to an infection. This type of surgery removes old hip implants
      that may have become problematic and replaces them with new ones. Our team
      of experienced surgeons has the requisite expertise and surgical skills to
      remedy the initial replacement.
    </p>
  </div>

  <div className="hip-method-right-img">
    <img src="/images/hip5.png" alt="Hip Revision Surgery" />
  </div>
</div>

{/* Infected Total Joints */}
<div className="hr-block" data-aos="fade-up">
  <h3 className="ar-subheading">Infected Total Joints</h3>

  <p>
    If a total joint replacement becomes infected, the health of the joint and limb
    and the patient’s overall health become an immediate concern.
  </p>
</div>

{/* Materials Used in Hip Replacement */}
<div className="ar-block" data-aos="fade-up">
  <h3 className="ar-subheading">What Materials Are Used In A Hip Replacement?</h3>
  <div className="hr-top-paras">

  <p>
    According to experts, four basic options are used in making hip implants.
  </p>
  </div>

  <ul className="ar-tick-list">
    <li>
      <strong>Metal-on-Metal: </strong>
      The first one was used in 1955. It greatly reduces wear.
    </li>

    <li>
      <strong>Metal on Plastic: </strong>
      It is the longest-used material with a metal ball and polyethylene socket.
      It was first used in 1960 in hip replacements.
    </li>

    <li>
      <strong>Ceramic-on-Ceramic: </strong>
      It is a “21st-century” hip replacement material, especially for younger
      patients. It shows excellent performance over time.
    </li>

    <li>
      <strong>Ceramic-on-Plastic: </strong>
      It is the most durable hip replacement material and the first choice for
      younger patients. It is better lubricated than other materials.
    </li>
  </ul>
</div>

{/* Final Conclusion Box */}
<div className="ar-conclusion-box" data-aos="fade-up">
  <h4>Conclusion</h4>
  <p>
    Our orthopaedic surgeons are trained and fully capable of managing and treating
    total infected joints. This procedure includes the removal of the entire joint
    implant and a course of some medications followed by revision joint replacement.
  </p>
</div>

            </main>

            {/* RIGHT SIDEBAR — SAME AS ARTHRITIS BUT WITH hr- CLASSES */}
            <aside className="hr-sidebar" data-aos="fade-up">

              {/* Search */}
        <div className="hr-widget hr-search">
  <input
    type="search"
    className="hr-search-input"
    placeholder="Search..."
    value={sideSearch}
    onChange={(e) => setSideSearch(e.target.value)}
    onKeyDown={(e) => e.key === "Enter" && handleSideSearch()}
  />
  <button className="hr-search-btn" onClick={handleSideSearch}>
    Search
  </button>
</div>

              {/* Enquiry Form */}
           <ServiceEnquiryForm serviceName="Hip Replacement" />

              {/* Services */}
              <div className="hr-widget hr-services">
                <div className="hr-widget-header">Our Services</div>

                <ul className="hr-services-list">
                  <li>Robotic Knee Replacement</li>
                  <li>Arthritis</li>
                  <li>Joint Replacement</li>
                  <li>Hip Replacement</li>
                  <li>Bone Tumours</li>
                  <li>Sports and Ligament Injury</li>
                  <li>Fractures</li>
                  <li>Bone Infections</li>
                </ul>
              </div>

            </aside>

          </div>
        </div>
      </section>
    </>
  );
};

export default HipReplacement;
