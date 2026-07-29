import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Fracture.css";
import { Helmet } from "react-helmet";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ServiceEnquiryForm from "./ServiceEnquiryForm";

const Fracture = () => {
  const [sideSearch, setSideSearch] = useState("");
const navigate = useNavigate();

const handleSideSearch = () => {
  if (!sideSearch.trim()) return;

  navigate(`/blogs?search=${encodeURIComponent(sideSearch)}`);
  setSideSearch("");
};

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <>
    <Helmet>
        <title>Fractures Treatment & Causes at Parhar Hospital, Phagwara</title>
        <meta 
          name="description" 
          content="Learn about bone fractures, their causes, symptoms, and advanced treatment options available at Parhar Hospital, Phagwara. Expert orthopedic care for faster recovery." 
        />
        <meta 
          name="keywords" 
          content="Bone Fracture, Fracture Treatment, Orthopedic, Bone Injury, Parhar Hospital Phagwara" 
        />
      </Helmet>

      {/* === HERO SECTION === */}
      <section
        className="fr-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(242,246,246,0.7), rgba(242,246,246,0.7)), url('/images/fractures_main_banner.png')`,
        }}
      >
        <div className="fr-hero-overlay" data-aos="fade-up">
          <h1 className="fr-title">Fractures</h1>
          <div className="fr-breadcrumb">
            <span className="fr-bc-home">Home</span>
            <span className="fr-bc-sep">››</span>
            <span className="fr-bc-current">Fractures</span>
          </div>
        </div>
      </section>

      {/* === MAIN CONTENT AREA === */}
      <section className="fr-section">
        <div className="fr-container">
          <div className="fr-grid">

            {/* LEFT MAIN CONTENT */}
            <main className="fr-main">

              {/* Top Image + Paragraph */}
              <div className="fr-top" data-aos="fade-up">
                <div className="fr-top-image">
                  <img
                    src="/images/fracture_second_banner.png"
                    alt="Fracture overview"
                    loading="lazy"
                  />
                </div>
                <div className="fr-top-paras">
                  <p>
                    Bone Fracture is a common problem that occurs when the bone breaks
                    because of any reason. The cases are common in the country but the
                    bone fractures treatment in India helps to recover from it entirely.
                  </p>
                </div>
              </div>

              {/* Reasons */}
              <div className="fr-block" data-aos="fade-up" data-aos-delay="100">
                <h2 className="fr-subheading">Reasons for Bone Fractures</h2>
                <ul className="fr-tick-list">
                  <li>Accidents such as road injuries or falls</li>
                  <li>Sports injuries leading to sudden impact</li>
                  <li>Direct trauma on the bone</li>
                  <li>Repetitive stress or overuse of a bone</li>
                  <li>Violent twisting or pulling force</li>
                </ul>
                <p className="fr-note">
                  Other than these factors, a few more causes may increase the risk of
                  fracture: age, osteoporosis, weakened bones, and certain medical conditions.
                </p>
              </div>

              {/* Types of Treatment Heading */}
              <div className="fr-block" data-aos="fade-up" data-aos-delay="150">
                <h2 className="fr-subheading">Types of Bone Fractures Treatment in India</h2>
              </div>

              {/* Complete Fractures */}
              <div className="fr-flex-block" data-aos="fade-up" data-aos-delay="200">
                <div className="fr-flex-text">
                  <p className="fr-subheading">Complete Fractures</p>
                  <p>
                    When the bone breaks into two or more parts, it is termed a complete
                    fracture. Transverse, oblique, spiral, and comminute fractures are the
                    types of complete fractures.
                  </p>
                </div>
                <div className="fr-flex-image">
                  <img
                    src="/images/fracture1.png"
                    alt="Complete Bone Fracture"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Incomplete Fractures */}
              <div className="fr-flex-block reverse" data-aos="fade-up" data-aos-delay="250">
                <div className="fr-flex-image">
                  <img
                    src="/images/fracture3.png"
                    alt="Incomplete Bone Fracture"
                    loading="lazy"
                  />
                </div>
                <div className="fr-flex-text">
                  <p className="fr-subheading">Incomplete Fractures</p>
                  <p>
                    When a bone breaks but doesn’t part, it is an incomplete fracture.
                    It takes less time to heal and causes less pain. Usually, surgeries
                    aren’t required. Greenstick, buckle, and stress fractures are common
                    incomplete fractures.
                  </p>
                </div>
              </div>

              {/* Open vs Closed */}
              <div className="fr-block" data-aos="fade-up" data-aos-delay="300">
                <h2 className="fr-subheading">
                  Open (compound) fractures vs Closed (simple) fractures
                </h2>
                <ul className="fr-top-paras">
                  <li>Open (compound): bone breaks and pierces the skin</li>
                  <li>Closed (simple): bone breaks but skin remains intact</li>
                </ul>
                <p className="fr-note">
                  Non-union and malunion cases may occur where abnormal healing happens.
                </p>
              </div>

              {/* Symptoms */}
              <div className="fr-block" data-aos="fade-up" data-aos-delay="350">
                <p className="fr-subheading">Signs and Symptoms of Bone Fracture:</p>
                <ul className="fr-tick-list">
                  <li>Pain, swelling, and bruising</li>
                  <li>Visible deformity</li>
                  <li>Difficulty moving the limb</li>
                  <li>Numbness or tingling near the site</li>
                </ul>
              </div>

              {/* Diagnosis */}
              <div className="fr-flex-block-diagnosis" data-aos="fade-up" data-aos-delay="400">
                <div className="fr-flex-image">
                  <img
                    src="/images/fracture2.png"
                    alt="Bone Fracture Diagnosis"
                    loading="lazy"
                  />
                </div>
                <div className="fr-flex-text">
                  <p className="fr-subheading">How to Diagnose Bone Fracture?</p>
                  <p>
                    X-rays, CT scans, and MRI scans help diagnose fractures accurately.
                    Proper diagnosis ensures correct treatment and faster healing.
                  </p>
                </div>
              </div>

              {/* Treatment */}
              <div className="fr-flex-block" data-aos="fade-up" data-aos-delay="450">
                <div className="fr-flex-text">
                  <p className="fr-subheading">How to Treat Bone Fracture?</p>
                  <p>
                    Treatment includes non-surgical methods or surgical procedures
                    depending on severity. Non-surgical is preferred for children.
                  </p>
                </div>
                <div className="fr-flex-image">
                  <img
                    src="/images/fracture4.jpeg"
                    alt="Bone Fracture Treatment"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Non-Surgical */}
              <div className="fr-block" data-aos="fade-up" data-aos-delay="500">
                <p className="fr-subheading">For Non-Surgical ways:</p>
                <ul className="fr-tick-list">
                  <li>Immobilisation</li>
                  <li>Casting</li>
                  <li>Splinting</li>
                  <li>Bracing</li>
                  <li>Booting (for foot)</li>
                </ul>
              </div>

              {/* Surgical */}
              <div className="fr-block" data-aos="fade-up" data-aos-delay="550">
                <p className="fr-subheading">For Surgical ways:</p>
                <ul className="fr-tick-list">
                  <li>Internal fixation (plates, screws)</li>
                  <li>External fixation (pins, wires)</li>
                </ul>
              </div>

              {/* Rehab */}
              <div className="fr-block" data-aos="fade-up" data-aos-delay="600">
                <p className="fr-note">
                  Rehabilitation and physical therapy are required for faster healing.
                </p>
              </div>

              {/* Conclusion */}
              <div className="fr-conclusion-box" data-aos="fade-up" data-aos-delay="650">
                <h4>Conclusion</h4>
                <p>
                  Bone fractures can heal effectively with proper care. Dr. Avtar Singh
                  offers expert orthopaedic treatment designed for accurate diagnosis
                  and faster recovery.
                </p>
              </div>
            </main>

            {/* === SIDEBAR === */}
            <aside className="fr-sidebar">

         <div className="fr-widget fr-search">
  <input
    type="search"
    className="fr-search-input"
    placeholder="Search..."
    value={sideSearch}
    onChange={(e) => setSideSearch(e.target.value)}
    onKeyDown={(e) => e.key === "Enter" && handleSideSearch()}
  />
  <button className="fr-search-btn" onClick={handleSideSearch}>
    Search
  </button>
</div>

            <ServiceEnquiryForm serviceName="Fracture" />

              <div className="fr-widget fr-services" data-aos="fade-up" data-aos-delay="250">
                <div className="fr-widget-header">Our Services</div>
                <ul className="fr-services-list">
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

export default Fracture;
