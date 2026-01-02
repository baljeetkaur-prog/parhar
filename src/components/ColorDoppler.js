import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./ColorDoppler.css";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import ServiceEnquiryForm from "./ServiceEnquiryForm";

const ColorDoppler = () => {
  const [sideSearch, setSideSearch] = useState("");
  const navigate = useNavigate();

  const handleSideSearch = () => {
    if (!sideSearch.trim()) return;
    navigate(`/blogs?search=${encodeURIComponent(sideSearch)}`);
    setSideSearch("");
  };

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
   <Helmet>
  <title>Best Color Doppler test center in Phagwara - MRI, X-Ray Ultra sound</title>
  <meta
    name="description"
    content="Best Color Doppler test center in Phagwara offering MRI, X-Ray and Ultrasound. Trusted Sonography Centres – scan near me for accurate results."
  />
  <meta
    name="keywords"
    content="Color Doppler test center, Doppler scan near me, Best Doppler ultrasound clinic, Color Doppler cost, 2D echo with Doppler test, Diagnostic center with Doppler, Doppler sonography services"
  />
</Helmet>

      {/* HERO */}
      <section
        className="cd-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(242,246,246,0.7), rgba(242,246,246,0.7)), url('/images/colordoppler_banner_img.png')`,
        }}
      >
        <div className="cd-hero-overlay" data-aos="fade-up">
          <h1 className="cd-title">Color Doppler Test Center</h1>

          <div className="cd-breadcrumb" data-aos="fade-up" data-aos-delay="200">
           <Link to="/"><span className="cd-bc-home">Home</span></Link>
            <span className="cd-bc-sep">››</span>
            <span className="cd-bc-current">Color Doppler</span>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="cd-section">
        <div className="cd-container">
          <div className="cd-grid">

            {/* LEFT MAIN */}
            <main className="cd-main">

              {/* TOP IMAGE + INTRO */}
              <div className="cd-top" data-aos="fade-up">
                <div className="cd-top-image">
                  <img
                    src="/images/color_doppler_main_img.png"
                    alt="Color Doppler Scan"
                    loading="lazy"
                  />
                </div>

                <div className="cd-top-paras">
         <p>
  Parhar Hospital is recognized as a leading <strong>Color Doppler test center</strong> providing advanced <strong>Doppler sonography services</strong> for accurate assessment of blood flow in arteries and veins. Our diagnostic center is equipped with high-precision ultrasound machines and staffed by experienced radiologists, ensuring precise imaging and reliable results for every patient.
</p>
<p>
  Whether you are searching for a <strong>Doppler scan near me</strong> or seeking the <strong>best Doppler ultrasound clinic</strong> in Phagwara, our hospital offers comprehensive testing, including <strong>2D echo with Doppler test</strong>. We focus on early detection of vascular conditions, monitoring heart and blood vessel health, and providing timely guidance for proper treatment.
</p>
                </div>
              </div>

              {/* What is Color Doppler */}
              <div className="cd-block" data-aos="fade-up">
          <h2 className="cd-subheading">What is Color Doppler Ultrasound?</h2>

<p>
  Color Doppler is a non-invasive and painless imaging technique that uses sound waves to visualize blood flow in real-time. It shows how blood moves through arteries and veins, helping doctors identify blockages, narrowing, clots, and other abnormalities. Our <strong>diagnostic center with Doppler</strong> ensures precise imaging for accurate diagnosis.
</p>
              </div>

              {/* Uses */}
              <div className="cd-block" data-aos="fade-up">
           <h3 className="cd-subheading">Uses of Color Doppler Test</h3>

<ul className="cd-tick-list">
  <li>Detect blood clots and vascular blockages.</li>
  <li>Evaluate artery and vein health to prevent serious complications.</li>
  <li>Monitor blood flow in pregnancy for maternal and fetal safety.</li>
  <li>Identify varicose veins or abnormal circulation.</li>
  <li>Assess heart and vascular conditions using <strong>2D echo with Doppler test</strong>.</li>
</ul>
              </div>

              {/* Benefits */}
              <div className="cd-block" data-aos="fade-up">
             <h3 className="cd-subheading">Benefits of Color Doppler Scan</h3>

<p>
  Our <strong>Color Doppler test center</strong> offers a range of benefits for patients seeking reliable vascular evaluation:
</p>

<ul className="cd-tick-list">
  <li>Painless and non-invasive, suitable for all age groups.</li>
  <li>Provides immediate, real-time imaging for accurate assessment.</li>
  <li>Helps detect vascular conditions early, allowing prompt treatment.</li>
  <li>Safe procedure with no radiation exposure.</li>
  <li>Affordable and transparent <strong>Color Doppler cost</strong> with advanced facilities.</li>
</ul>
              </div>

              {/* Procedure */}
              <div className="cd-block" data-aos="fade-up">
            <h3 className="cd-subheading">How is the Color Doppler Procedure Performed?</h3>

<p>
  The procedure is simple and comfortable. A special gel is applied to the area being examined, and a handheld transducer is moved over the skin to capture real-time images of blood flow. Patients can see the circulation patterns on the screen while our experienced radiologists analyze and interpret the results accurately.
</p>
              </div>

              {/* Conclusion */}
         <div className="cd-conclusion-box" data-aos="fade-up">
  <h4>Conclusion</h4>
  <p>
    Parhar Hospital is a trusted <strong>Color Doppler test center</strong> and <strong>best Doppler ultrasound clinic</strong> in Phagwara. With advanced equipment, expert radiologists, and comprehensive <strong>Doppler sonography services</strong>, we provide accurate diagnosis, effective monitoring of vascular and heart conditions, and proper guidance for treatment. Book your <strong>Doppler scan</strong> today and ensure precise evaluation of your vascular health.
  </p>
</div>

            </main>

            {/* RIGHT SIDEBAR */}
            <aside className="cd-sidebar">

              {/* Search */}
              <div className="cd-widget cd-search" data-aos="fade-up">
                <input
                  type="search"
                  className="cd-search-input"
                  placeholder="Search..."
                  value={sideSearch}
                  onChange={(e) => setSideSearch(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSideSearch()}
                />
                <button className="cd-search-btn" onClick={handleSideSearch}>
                  Search
                </button>
              </div>

              {/* Enquiry */}
              <ServiceEnquiryForm serviceName="Color Doppler" />

              {/* Services List */}
              <div className="cd-widget cd-services" data-aos="fade-up">
                <div className="echo-widget-header">Explore Other Services</div>

<ul className="echo-services-list">
  <li>
    <Link to="/services/2d-echo">2D Echo</Link>
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

export default ColorDoppler;