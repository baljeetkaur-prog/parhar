import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Arthritis.css";
import { Helmet } from "react-helmet";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ServiceEnquiryForm from "./ServiceEnquiryForm";

const Arthritis = () => {
  const [sideSearch, setSideSearch] = useState("");
const navigate = useNavigate();

const handleSideSearch = () => {
  if (!sideSearch.trim()) return;

  navigate(`/blogs?search=${encodeURIComponent(sideSearch)}`);
  setSideSearch("");
};
  const handleArthritisEnquiry = (e) => {
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
        <title>Arthritis Treatment & Care at Parhar Hospital, Phagwara</title>
        <meta
          name="description"
          content="Explore advanced arthritis treatment options at Parhar Hospital, Phagwara. Our orthopedic specialists provide expert care for pain relief, joint mobility, and long-term health."
        />
        <meta
          name="keywords"
          content="Arthritis Treatment, Osteoarthritis, Rheumatoid Arthritis, Joint Pain, Parhar Hospital, Phagwara, Orthopedic Care, Joint Replacement"
        />
      </Helmet>
      {/* === HERO SECTION === */}
      <section
        className="ar-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(242,246,246,0.7), rgba(242,246,246,0.7)), url('/images/arthritisbanner.png')`,
        }}
      >
        <div className="ar-hero-overlay" data-aos="fade-up">
          <h1 className="ar-title">Arthritis</h1>

          <div className="ar-breadcrumb">
            <span className="ar-bc-home">Home</span>
            <span className="ar-bc-sep">››</span>
            <span className="ar-bc-current">Arthritis</span>
          </div>
        </div>
      </section>

      {/* === MAIN CONTENT AREA === */}
      <section className="ar-section">
        <div className="ar-container">
          <div className="ar-grid">

            {/* LEFT SIDE MAIN CONTENT */}
            <main className="ar-main">

              {/* Top Image + Intro Paragraph */}
              <div className="ar-top">
                <div className="ar-top-image" data-aos="fade-up">
                  <img
                    src="/images/arthritis.png"
                    alt="Arthritis overview"
                    loading="lazy"
                  />
                </div>

                <div className="ar-top-paras" data-aos="fade-up">
                  <p>
                    While focusing on arthritis, a widespread ailment that affects millions 
                    of individuals worldwide, we, as orthopaedic professionals, are committed 
                    to providing you with the most outstanding care and treatment choices 
                    since we know how arthritis affects your everyday life. Let’s look into 
                    the causes, symptoms, diagnoses, and methods of treating arthritis. 
                    Arthritis treatment in India is completed with different techniques, 
                    equipment and procedure. The team is committed to treating them with 
                    high-tech equipment, utmost care, skills and love.
                  </p>
                </div>
              </div>

              {/* Types of Arthritis */}
              <div className="ar-block" data-aos="fade-up">
                <h3 className="ar-subheading">Various Types of Arthritis</h3>

                <ul className="ar-tick-list">
                  <li>
                    <strong>Osteoarthritis:</strong> Osteoarthritis happens after your joints 
                    start deteriorating with age. Weight-bearing joints like the spine, hips, 
                    and knees are most commonly affected due to cartilage degeneration.
                  </li>

                  <li>
                    <strong>Rheumatoid Arthritis:</strong> An autoimmune condition where the 
                    immune system attacks the joints, causing severe pain, swelling and 
                    deformity in multiple joints.
                  </li>

                  <li>
                    <strong>Other Types:</strong> Infectious disorders, gout, psoriasis, lupus, 
                    and several other conditions can lead to arthritis. Your doctor will 
                    explain each type individually.
                  </li>
                </ul>
              </div>

              {/* Symptoms */}
              <div className="ar-block" data-aos="fade-up">
                <h3 className="ar-subheading">Symptoms</h3>

                <ul className="ar-tick-list">
                  <li>Joint stiffness</li>
                  <li>Discomfort and swelling</li>
                  <li>Limited range of motion</li>
                  <li>Trouble performing everyday tasks</li>
                  <li>Joint deformities or visible structural changes</li>
                  <li>Fatigue and fever (in some types of arthritis)</li>
                </ul>
              </div>

              {/* Diagnosis */}
              <div className="ar-block" data-aos="fade-up">
                <h3 className="ar-subheading">Diagnosis</h3>

                <ul className="ar-tick-list">
                  <li>Medical history evaluation and physical examination</li>
                  <li>X-rays, MRIs, or CT scans</li>
                  <li>Blood tests to detect markers of specific arthritis types</li>
                  <li>
                    Joint fluid analysis (arthrocentesis) to determine the kind and stage
                  </li>
                </ul>
              </div>

              {/* Treatment Alternatives */}
              <div className="ar-block" data-aos="fade-up">
                <h3 className="ar-subheading">Treatment Alternatives</h3>

                <p><strong>Non-surgical Methods:</strong></p>
                <ul className="ar-tick-list">
                  <li>NSAIDs, corticosteroids, DMARDs</li>
                  <li>Physical therapy including exercises & stretches</li>
                  <li>Assistive devices such as canes, braces, splints</li>
                  <li>Lifestyle modifications (joint protection, weight control)</li>
                </ul>

                <p><strong>Surgical Alternatives:</strong></p>

                <ul className="ar-tick-list">
                  <li>Arthroscopy – minimally invasive joint procedure</li>
                  <li>Joint Replacement – partial or complete</li>
                  <li>Joint Fusion – joining two bones to reduce pain</li>
                </ul>
              </div>

              {/* Conclusion */}
              <div className="ar-conclusion-box" data-aos="fade-up">
                <h4>Conclusion</h4>
                <p>
                  Arthritis is one of the most common diseases among the elderly, and we 
                  understand the pain patients experience. We are committed to treating 
                  arthritis with advanced technology, skills and compassion. With affordable 
                  orthopaedic treatment in India, our expert team ensures you receive the 
                  best care. Contact us for more details and expert guidance.
                </p>
              </div>

            </main>

            {/* RIGHT SIDEBAR — SAME AS ROBOTIC KNEE */}
            <aside className="ar-sidebar">

              {/* Search */}
        <div className="ar-widget ar-search" data-aos="fade-up">
  <input
    type="search"
    className="ar-search-input"
    placeholder="Search..."
    value={sideSearch}
    onChange={(e) => setSideSearch(e.target.value)}
    onKeyDown={(e) => e.key === "Enter" && handleSideSearch()}
  />
  <button className="ar-search-btn" onClick={handleSideSearch}>
    Search
  </button>
</div>

              {/* Enquiry Form */}
            <ServiceEnquiryForm serviceName="Arthritis" />

              {/* Services List */}
              <div className="ar-widget ar-services" data-aos="fade-up">
                <div className="ar-widget-header">Our Services</div>

                <ul className="ar-services-list">
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

export default Arthritis;
