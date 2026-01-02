import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "./Echo.css";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import ServiceEnquiryForm from "./ServiceEnquiryForm";

const Echo = () => {
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
  <title>2D echo test center in Phagwara | Echocardiography  test center</title>
  <meta
    name="description"
    content="Discover a trusted 2D echo test center in Phagwara with Affordable 2D test options and a leading Echocardiography test center for quick, precise results."
  />
  <meta
    name="keywords"
    content="2D echo test center, 2D echocardiography center, 2D echo clinic, Echo test laboratory, Echocardiography services, Cardiac echo test center, 2D echo test center in Phagwara"
  />
</Helmet>

      {/* HERO */}
      <section
        className="echo-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(242,246,246,0.7), rgba(242,246,246,0.7)), url('/images/echo_banner_img.png')`,
        }}
      >
        <div className="echo-hero-overlay" data-aos="fade-up">
          <h1 className="echo-title">2D Echo Test Center</h1>

          <div className="echo-breadcrumb">
            <Link to="/"><span className="echo-bc-home">Home</span></Link>
            <span className="echo-bc-sep">››</span>
            <span className="echo-bc-current">2D Echo</span>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="echo-section">
        <div className="echo-container">
          <div className="echo-grid">
            {/* MAIN CONTENT */}
            <main className="echo-main">

              {/* Top Image */}
              <div className="echo-top" data-aos="fade-up">
                <div className="echo-top-image">
                  <img
                    src="/images/2decho_main_img.png"
                    alt="2D Echo Test"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* TEXT + IMAGE BLOCK */}
              <div
                className="echo-flex-block"
                data-aos="fade-up"
                data-aos-delay="150"
              >
                <div className="echo-flex-text">
           <p>
  Parhar Hospital is a leading <strong>2D echo test center</strong> in Phagwara, providing advanced <strong>echocardiography services</strong> for patients of all ages. Our <strong>2D echocardiography center</strong> is equipped with modern ultrasound machines and staffed by experienced cardiologists, ensuring precise evaluation of the heart’s structure and function. 
</p>
<p>
  As a trusted <strong>2D echo clinic</strong> and <strong>echo test laboratory</strong>, we focus on early detection of heart conditions, monitoring cardiac health, and providing timely guidance for further treatment. From assessing heart valves to measuring pumping efficiency, our <strong>cardiac echo test center</strong> delivers accurate and reliable results for optimal patient care.
</p>
                </div>

                <div className="echo-flex-image">
                  <img
                    src="/images/echo1.png"
                    alt="2D Echo Machine"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* COMMON USES */}
              <div className="echo-block" data-aos="fade-up">
               <h2 className="echo-subheading">What Can You Detect with a 2D Echo Test?</h2>

<div className="echo-lig-grid">
  <div className="echo-lig-box echo-bg-light" data-aos="fade-up" data-aos-delay="100">
    <h4>Heart Valve Function</h4>
    <p>
      Our <strong>2D echocardiography center</strong> evaluates heart valves for narrowing, leakage, or improper functioning, detecting conditions such as stenosis, regurgitation, or prolapse accurately.
    </p>
  </div>

  <div className="echo-lig-box echo-bg-white" data-aos="fade-up" data-aos-delay="200">
    <h4>Pumping Efficiency</h4>
    <p>
      The test measures the heart’s ejection fraction, showing how effectively the heart pumps blood. This is important for patients with hypertension, diabetes, or heart failure, helping doctors provide precise care.
    </p>
  </div>

  <div className="echo-lig-box echo-bg-light" data-aos="fade-up" data-aos-delay="300">
    <h4>Congenital Heart Abnormalities</h4>
    <p>
      Any structural defects present from birth, such as holes in the heart or malformed valves, can be reliably diagnosed at our <strong>2D echo test center in Phagwara</strong>.
    </p>
  </div>
</div>

              </div>

              {/* TREATMENT / BENEFITS */}
              <div className="echo-block" data-aos="fade-up">
               <h2 className="echo-subheading">Benefits of 2D Echocardiography</h2>

<ul className="echo-tick-list">
  <li data-aos="fade-up" data-aos-delay="100">
    <strong>Non-invasive & Painless:</strong> No injections or incisions; completely safe for all patients.
  </li>
  <li data-aos="fade-up" data-aos-delay="200">
    <strong>Immediate and Accurate Results:</strong> Real-time imaging for precise assessment of heart function.
  </li>
  <li data-aos="fade-up" data-aos-delay="300">
    <strong>Comprehensive Cardiac Evaluation:</strong> Helps in early detection of valve issues, heart failure, and congenital heart defects.
  </li>
  <li data-aos="fade-up" data-aos-delay="400">
    <strong>Safe for All Ages:</strong> No radiation exposure, making it suitable for children, adults, and seniors.
  </li>
</ul>


                {/* Conclusion Box */}
     <div className="echo-conclusion-box" data-aos="fade-up" data-aos-delay="500">
  <h4>Conclusion</h4>
  <p>
    Parhar Hospital’s <strong>2D echo test center</strong> provides advanced echocardiography services with precise imaging and expert interpretation. As a trusted <strong>2D echo clinic</strong> and <strong>echo test laboratory</strong> in Phagwara, we are dedicated to accurate diagnosis, personalized cardiac care, and timely intervention to ensure the best outcomes for every patient.
  </p>
</div>
              </div>
            </main>

            {/* SIDEBAR */}
            <aside className="echo-sidebar">
              <div className="echo-widget echo-search">
                <input
                  type="search"
                  className="echo-search-input"
                  placeholder="Search..."
                  value={sideSearch}
                  onChange={(e) => setSideSearch(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSideSearch()}
                />
                <button className="echo-search-btn" onClick={handleSideSearch}>
                  Search
                </button>
              </div>

              <ServiceEnquiryForm serviceName="2D Echo" />

              <div
                className="echo-widget echo-services"
                data-aos="fade-up"
                data-aos-delay="250"
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

export default Echo;