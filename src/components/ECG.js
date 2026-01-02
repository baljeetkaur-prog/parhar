import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./ECG.css";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import ServiceEnquiryForm from "./ServiceEnquiryForm";

const ECG = () => {
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
  <title>Best ECG Test in Phagwara|Affordable ECG Center and Electrocardiogram</title>
  <meta
    name="description"
    content="Best ECG Test in Phagwara — visit our Affordable ECG Center for accurate Electrocardiogram services. Reliable ECG test results at a competitive price."
  />
  <meta
    name="keywords"
    content="ECG test Center in Phagwara, ECG test near me, Best ECG test clinic in Phagwara, ECG test in hospital, Affordable ECG test Center, Cardiac diagnostic services, Emergency ECG test Center, ECG checkup Clinic"
  />
</Helmet>

      {/* === HERO SECTION === */}
      <section
        className="ecg-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(242,246,246,0.7), rgba(242,246,246,0.7)), url('/images/ecg_banner_img.png')`,
        }}
      >
        <div className="ecg-hero-overlay" data-aos="fade-up">
          <h1 className="ecg-title">ECG Center (Electrocardiogram)</h1>
          <div className="ecg-breadcrumb">
           <Link to="/"><span className="ecg-bc-home">Home</span></Link>
            <span className="ecg-bc-sep">››</span>
            <span className="ecg-bc-current">ECG Test</span>
          </div>
        </div>
      </section>

      {/* === MAIN CONTENT AREA === */}
      <section className="ecg-section">
        <div className="ecg-container">
          <div className="ecg-grid">

            {/* LEFT MAIN CONTENT */}
            <main className="ecg-main">

              {/* Top Image + Paragraph */}
              <div className="ecg-top" data-aos="fade-up">
                <div className="ecg-top-image">
                  <img
                    src="/images/ecg_main_img.png"
                    alt="ECG Test Overview"
                    loading="lazy"
                  />
                </div>

                <div className="ecg-top-para">
          <p style={{textAlign:"left"}}>
  An ECG (Electrocardiogram) at Parhar Hospital is a simple, painless, and highly reliable test that evaluates the electrical activity of the heart. As the <strong>best ECG test clinic in Phagwara</strong>, we provide precise <strong>cardiac diagnostic services</strong> to detect arrhythmia, heart diseases, and other cardiac issues early. If you are looking for an <strong>ECG test near me</strong> or an <strong>affordable ECG test center</strong>, our hospital offers seamless and patient-friendly care.
</p>

                </div>
              </div>

              {/* Why ECG is Done */}
              <div className="ecg-block" data-aos="fade-up" data-aos-delay="100">
                <h2 className="ecg-subheading">Why Choose ECG Test at Parhar Hospital?</h2>
<ul className="ecg-tick-list">
  <li>Detect abnormal heart rhythms (arrhythmias) early</li>
  <li>Diagnose heart attacks and heart damage</li>
  <li>Assess chest pain, shortness of breath, and other cardiac symptoms</li>
  <li>Monitor heart health for patients with chronic conditions</li>
  <li>Evaluate heart function before and after surgery</li>
</ul>
<p className="ecg-note">
  Our <strong>ECG test center in Phagwara</strong> ensures quick, accurate results and supports early intervention for all cardiac conditions.
</p>
              </div>

              {/* Types */}
              <div className="ecg-block" data-aos="fade-up" data-aos-delay="150">
              <h3 className="ecg-subheading">Types of ECG Tests Available</h3>
              </div>

              {/* Resting ECG */}
              <div className="ecg-flex-block" data-aos="fade-up" data-aos-delay="200">
                <div className="ecg-flex-text">
             <p className="ecg-subheading">Resting ECG</p>
<p>
  The most common ECG performed while the patient is resting. It helps detect heart rhythm issues, signs of heart attack, and structural abnormalities. Ideal for routine <strong>ECG checkup clinic</strong> visits.
</p>
                </div>
                <div className="ecg-flex-image">
                  <img
                    src="/images/ecg1.png"
                    alt="Resting ECG"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Stress ECG */}
              <div
                className="ecg-flex-block reverse"
                data-aos="fade-up"
                data-aos-delay="250"
              >
                <div className="ecg-flex-image">
                  <img
                    src="/images/ecg2.png"
                    alt="Stress ECG"
                    loading="lazy"
                  />
                </div>
                <div className="ecg-flex-text">
          <p className="ecg-subheading">Stress ECG</p>
<p>
  Conducted during physical activity or with medication to increase heart rate. This test identifies coronary artery disease and evaluates heart performance under stress. Available at our <strong>emergency ECG test center</strong> as well.
</p>

                </div>
              </div>

              {/* Holter Monitoring */}
              <div className="ecg-block" data-aos="fade-up" data-aos-delay="300">
         <p className="ecg-title-inside">Holter Monitoring (24–48 hours)</p>
<ul className="ecg-top-paras">
  <li>Portable ECG device worn throughout the day</li>
  <li>Captures intermittent irregular heartbeats not detected in standard tests</li>
</ul>
<p className="ecg-note">
  Perfect for patients needing continuous monitoring at our <strong>ECG test in hospital</strong>.
</p>
              </div>

              {/* Symptoms needing ECG */}
              <div className="ecg-block" data-aos="fade-up" data-aos-delay="350">
               <p className="ecg-subheading">When Should You Get an ECG Test?</p>
<ul className="ecg-tick-list">
  <li>Chest discomfort or pain</li>
  <li>Rapid, irregular, or skipped heartbeat</li>
  <li>Dizziness or fainting spells</li>
  <li>Shortness of breath or fatigue</li>
  <li>General weakness and unexplained tiredness</li>
</ul>
              </div>

              {/* Diagnosis block */}
              <div
                className="ecg-flex-block-diagnosis"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="ecg-flex-image">
                  <img
                    src="/images/ecg3.png"
                    alt="ECG Diagnosis"
                    loading="lazy"
                  />
                </div>

                <div className="ecg-flex-text">
            <p className="ecg-subheading">How ECG Supports Heart Diagnosis</p>
<p>
  ECG provides detailed insights into the heart’s electrical activity. It can detect arrhythmias, blockages, prior or ongoing heart attacks, and structural heart defects, ensuring prompt and accurate treatment at our <strong>ECG test center in Phagwara</strong>.
</p>
                </div>
              </div>

              {/* Procedure */}
        <div
  className="ecg-flex-block-procedure"
  data-aos="fade-up"
  data-aos-delay="450"
>
  <div className="ecg-flex-text">
    <p className="ecg-subheading">How is the ECG Test Performed?</p>
    <p>
      Small electrodes are placed on the chest, arms, and legs. The test is painless, takes 5–10 minutes, and gives immediate results. Our <strong>affordable ECG test center</strong> ensures a safe and comfortable experience for every patient.
    </p>
  </div>

  <div className="ecg-flex-image">
    <img
      src="/images/ecg4.png"
      alt="ECG Procedure"
      loading="lazy"
    />
  </div>
</div>


              {/* Benefits */}
<div className="ecg-block benefits" data-aos="fade-up" data-aos-delay="500">
  <p className="ecg-subheading">Benefits of ECG Test</p>
  <ul className="ecg-tick-list">
    <li>Painless, fast, and accurate</li>
    <li>Instant results for timely diagnosis</li>
    <li>Early detection of heart diseases</li>
    <li>Helpful for pre-surgery assessment</li>
    <li>Supports prevention of serious heart conditions</li>
  </ul>
</div>

              {/* Conclusion */}
              <div
                className="ecg-conclusion-box"
                data-aos="fade-up"
                data-aos-delay="550"
              >
       <h4>Conclusion</h4>
<p>
  ECG testing is a vital part of heart care. Parhar Hospital’s <strong>ECG test center in Phagwara</strong> provides advanced cardiac diagnostic services, emergency ECG tests, and routine checkups. Our expert cardiology team ensures precise results, quick reporting, and effective treatment planning for all heart conditions.
</p>
              </div>
            </main>

            {/* === SIDEBAR === */}
            <aside className="ecg-sidebar">
              <div className="ecg-widget ecg-search">
                <input
                  type="search"
                  className="ecg-search-input"
                  placeholder="Search..."
                  value={sideSearch}
                  onChange={(e) => setSideSearch(e.target.value)}
                  onKeyDown={(e) =>
                    e.key === "Enter" && handleSideSearch()
                  }
                />
                <button
                  className="ecg-search-btn"
                  onClick={handleSideSearch}
                >
                  Search
                </button>
              </div>

              <ServiceEnquiryForm serviceName="ECG" />

              <div
                className="ecg-widget ecg-services"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="echo-widget-header">Explore Other Services</div>

<ul className="echo-services-list">
  <li>
    <Link to="/services/color-doppler">Color Doppler</Link>
  </li>
  <li>
    <Link to="/services/ct-scan">CT Scan</Link>
  </li>
  <li>
    <Link to="/services/2d-echo">2d Echo</Link>
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

export default ECG;