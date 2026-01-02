import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "./SportsLigament.css";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import ServiceEnquiryForm from "./ServiceEnquiryForm";

const SportsLigament = () => {
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
        <title>Sports Medicine Specialist in Phagwara|Best Hospital Phagwara</title>
        <meta
          name="description"
          content="Seeking a Best sports medicine doctor in Phagwara? Our top sports medicine specialist near me offers expert care, injury prevention, and rehabilitation."
        />
        <meta
          name="keywords"
          content="Sports medicine doctor, sports medicine specialist near me, orthopedic sports medicine, Sports Medicine Specialist, best sports medicine doctor in Phagwara"
        />
      </Helmet>

      {/* === HERO SECTION === */}
      <section
        className="sl-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(242,246,246,0.7), rgba(242,246,246,0.7)), url('/images/sports_main_banner.png')`,
        }}
      >
        <div className="sl-hero-overlay" data-aos="fade-up">
          <h1 className="sl-title">Sports Medicine Specialist</h1>
          <div className="sl-breadcrumb">
           <Link to="/"><span className="sl-bc-home">Home</span></Link>
            <span className="sl-bc-sep">››</span>
            <span className="sl-bc-current">Sports Medicine</span>
          </div>
        </div>
      </section>

      {/* === MAIN CONTENT === */}
      <section className="sl-section">
        <div className="sl-container">
          <div className="sl-grid">

            {/* MAIN CONTENT */}
            <main className="sl-main">

              {/* Overview Image */}
              <div className="sl-top" data-aos="fade-up">
                <div className="sl-top-image">
                  <img
                    src="/images/sports_second_banner.png"
                    alt="Sports Medicine Overview"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Introduction Text */}
              <div className="sl-flex-block" data-aos="fade-up" data-aos-delay="150">
                <div className="sl-flex-text">
                  <p>
                    Sports medicine is a specialized branch of orthopaedics focused on
                    preventing, diagnosing, and treating injuries related to sports and
                    physical activity. Athletes and active individuals frequently face
                    ligament injuries, muscle tears, joint pain, and repetitive strain
                    conditions. Our expert <strong>sports medicine doctors</strong> at Parhar Hospital
                    provide comprehensive care that combines advanced diagnostics, modern
                    treatment options, and structured rehabilitation to ensure a safe and
                    effective recovery.
                  </p>

            
                </div>

                <div className="sl-flex-image">
                  <img
                    src="/images/sports_img.jpg"
                    alt="Sports Injury Treatment"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Common Sports Injuries */}
              <div className="sl-block" data-aos="fade-up">
                <h2 className="sl-subheading">Common Sports and Ligament Injuries</h2>
                <div className="sl-ligament-grid">

                  <div className="sl-ligament-box sl-bg-light" data-aos="fade-up" data-aos-delay="100">
                    <h4>Anterior Cruciate Ligament (ACL) Tears</h4>
                    <p>
                      The ACL stabilizes the knee during sudden stops, jumps, and changes
                      in direction. ACL injuries are common in football, basketball, and
                      soccer. Our orthopedic sports medicine experts provide both
                      non-surgical and minimally invasive surgical options for ACL
                      reconstruction, combined with a tailored rehabilitation plan to
                      restore full functionality.
                    </p>
                  </div>

                  <div className="sl-ligament-box sl-bg-white" data-aos="fade-up" data-aos-delay="200">
                    <h4>Medial Collateral Ligament (MCL) Injuries</h4>
                    <p>
                      MCL injuries often result from contact sports or sudden twisting
                      motions. Our specialists assess the severity of the injury using
                      imaging tools and recommend targeted treatment ranging from
                      physiotherapy and bracing to surgical repair when necessary.
                    </p>
                  </div>

                  <div className="sl-ligament-box sl-bg-light" data-aos="fade-up" data-aos-delay="300">
                    <h4>Ankle Ligament Sprains</h4>
                    <p>
                      Ankle sprains are among the most frequent sports injuries and can
                      lead to long-term instability if untreated. Our sports medicine
                      specialists use modern therapy techniques, including functional
                      bracing, proprioception exercises, and minimally invasive procedures
                      to ensure quick recovery and prevent recurrence.
                    </p>
                  </div>

      

                </div>
              </div>

              {/* Treatment Section */}
              <div className="sl-block" data-aos="fade-up">
                <h3 className="sl-subheading">Treatment Approach for Sports Injuries</h3>
                <ul className="sl-tick-list">
                  <li data-aos="fade-up" data-aos-delay="100">
                    <strong>Comprehensive Diagnosis:</strong> Using MRI, X-rays, ultrasound, and
                    biomechanical analysis to determine the exact nature of the injury.
                  </li>

                  <li data-aos="fade-up" data-aos-delay="200">
                    <strong>Individualized Treatment Plan:</strong> Our sports medicine
                    specialists develop a personalized plan addressing the athlete’s
                    injury severity, sport, and performance goals.
                  </li>

                  <li data-aos="fade-up" data-aos-delay="300">
                    <strong>Minimally Invasive Surgery:</strong> When necessary, advanced
                    arthroscopic procedures reduce recovery time and tissue trauma.
                  </li>

                  <li data-aos="fade-up" data-aos-delay="400">
                    <strong>Rehabilitation and Physiotherapy:</strong> Structured
                    post-injury rehab programs, including strength training, flexibility,
                    and proprioception exercises.
                  </li>

                  <li data-aos="fade-up" data-aos-delay="500">
                    <strong>Performance Enhancement & Injury Prevention:</strong> Guidance
                    on nutrition, biomechanics, and training to reduce recurrence risk.
                  </li>
                </ul>

                {/* Conclusion */}
                <div className="sl-conclusion-box" data-aos="fade-up" data-aos-delay="600">
                  <h4>Conclusion</h4>
                  <p>
                    At Parhar Hospital, our <strong>orthopedic sports medicine</strong> team is
                    dedicated to helping athletes of all levels recover safely and
                    return to their sport confidently. By combining expert care, advanced
                    diagnostics, and evidence-based rehabilitation, we aim to deliver
                    long-lasting recovery, peak performance, and prevention of future injuries.
                  </p>
                </div>
              </div>
            </main>

            {/* SIDEBAR */}
            <aside className="sl-sidebar">
              <div className="sl-widget sl-search">
                <input
                  type="search"
                  className="sl-search-input"
                  placeholder="Search..."
                  value={sideSearch}
                  onChange={(e) => setSideSearch(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSideSearch()}
                />
                <button className="sl-search-btn" onClick={handleSideSearch}>
                  Search
                </button>
              </div>

              <ServiceEnquiryForm serviceName="Sports Medicine" />

              <div className="sl-widget sl-services" data-aos="fade-up" data-aos-delay="250">
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
      <Link to="/services/robotic-surgery">Robotic Surgery</Link>
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

export default SportsLigament;