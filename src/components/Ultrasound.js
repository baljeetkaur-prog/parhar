import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Ultrasound.css";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import ServiceEnquiryForm from "./ServiceEnquiryForm";

const Ultrasound = () => {
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

  return (
    <>
      <Helmet>
        <title>Best Ultrasound Scan Center in Phagwara|Affordable ultrasound test center</title>
        <meta
          name="description"
          content="Best Ultrasound Scan Center in Phagwara offering affordable Ultrasound scans by expert doctors. Your trusted scan center for precise, reliable results."
        />
        <meta
          name="keywords"
          content="Best ultrasound center in Phagwara, Ultrasound near me, Ultrasound scan center In Phagwara, Affordable ultrasound test, 3D/4D ultrasound clinic, Pregnancy ultrasound center, Advanced ultrasound services, Full body ultrasound scan, Skilled sonography expert, Ultrasound diagnostic lab near home"
        />
      </Helmet>

      {/* === HERO SECTION === */}
      <section
        className="us-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(242,246,246,0.7), rgba(242,246,246,0.7)), url('/images/ultrasound_banner_img.png')`,
        }}
      >
        <div className="us-hero-overlay" data-aos="fade-up">
          <h1 className="us-title">Ultrasound Scan Center</h1>

          <div className="us-breadcrumb" data-aos="fade-up">
          <Link to="/"><span className="us-bc-home">Home</span></Link>
            <span className="us-bc-sep">››</span>
            <span className="us-bc-current">Ultrasound</span>
          </div>
        </div>
      </section>

      {/* === MAIN CONTENT === */}
      <section className="us-section" data-aos="fade-up">
        <div className="us-container">
          <div className="us-grid">
            <main className="us-main">

              {/* TOP IMAGE + INTRO */}
              <div className="us-top" data-aos="fade-up">
                <div className="us-top-image" data-aos="fade-up">
                  <img
                    src="/images/ultrasound_main_img.png"
                    alt="Ultrasound Imaging"
                    loading="lazy"
                  />
                </div>

                <div className="us-top-paras" data-aos="fade-up">
                  <p>
                    Looking for the <strong>best ultrasound center in Phagwara</strong>? 
                    Parhar Hospital offers advanced ultrasound and sonography services with precise diagnostics and a patient-friendly experience. 
                    Our skilled sonography experts provide <strong>affordable ultrasound tests</strong> for a wide range of conditions, including pregnancy scans, abdominal checks, and full body evaluations.
                  </p>
                  <p>
                    Whether you are searching for "<strong>Ultrasound near me</strong>" or a trusted "<strong>ultrasound scan center in Phagwara</strong>", our modern facility ensures accurate results with the latest 3D/4D imaging technology.
                  </p>
                </div>
              </div>

              {/* TYPES OF ULTRASOUND */}
              <div className="us-block" data-aos="fade-up">
                <h2 className="us-subheading">Types of Ultrasound Scans We Offer</h2>

                <ul className="us-tick-list" data-aos="fade-up">
                  <li>Abdominal Ultrasound – Detailed imaging of organs like liver, kidneys, and pancreas.</li>
                  <li>Pelvic Ultrasound – Evaluation of reproductive organs for both men and women.</li>
                  <li>Obstetric (Pregnancy) Ultrasound – 2D, 3D, and 4D scans for fetal monitoring.</li>
                  <li>Breast Ultrasound – Early detection of lumps or abnormalities.</li>
                  <li>Thyroid Ultrasound – Accurate imaging for thyroid disorders.</li>
                  <li>Vascular (Doppler) Ultrasound – Blood flow and vascular assessment.</li>
                  <li>Full Body Ultrasound Scan – Comprehensive evaluation for general health checkups.</li>
                </ul>

                <div className="us-top-paras" data-aos="fade-up">
                  <p>
                    Each ultrasound scan is performed with the highest level of accuracy and patient care. Our <strong>advanced ultrasound services</strong> help detect health issues early, guide treatment plans, and ensure safety throughout the procedure.
                  </p>
                </div>
              </div>

              {/* DIAGNOSIS */}
              <div className="us-block" data-aos="fade-up">
                <div className="us-grid">
                  <div className="us-main" data-aos="fade-up">
                    <h2 className="us-subheading">Why Choose Ultrasound at Parhar Hospital?</h2>

                    <div className="us-top-paras" data-aos="fade-up">
                      <p>
                        Ultrasound is a completely safe, non-invasive diagnostic tool that uses sound waves instead of radiation. Our patients benefit from quick results, clear imaging, and expert guidance from our <strong>skilled sonography experts</strong>. 
                      </p>
                      <p>
                        Real-time imaging enables doctors to monitor organs, blood flow, and fetal development with exceptional clarity. Whether it’s a routine checkup or a specialized 3D/4D pregnancy scan, our facility is your trusted <strong>ultrasound diagnostic lab near home</strong>.
                      </p>
                    </div>
                  </div>

                  <div className="us-top-image diagnosis" data-aos="fade-up">
                    <img
                      src="/images/ultra1.png"
                      alt="Ultrasound Machine"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              {/* FEATURES SECTION */}
              <div className="us-block" data-aos="fade-up">
                <h3 className="us-subheading">Our Ultrasound Advantages</h3>

                <div className="us-treatment-grid">
                  <div className="us-treatment-box" style={{ backgroundColor: "#F2F6F6" }} data-aos="fade-up">
                    <h4>High-Resolution Imaging</h4>
                    <p>State-of-the-art equipment provides crystal-clear images for accurate diagnosis.</p>
                  </div>

                  <div className="us-treatment-box" style={{ backgroundColor: "#fff" }} data-aos="fade-up">
                    <h4>Experienced Sonographers</h4>
                    <p>Our skilled experts ensure every scan is precise, safe, and comfortable.</p>
                  </div>

                  <div className="us-treatment-box" style={{ backgroundColor: "#F2F6F6" }} data-aos="fade-up">
                    <h4>3D & 4D Pregnancy Ultrasound</h4>
                    <p>Advanced technology lets expecting parents see detailed images of their baby in real-time.</p>
                  </div>

                  <div className="us-treatment-box" style={{ backgroundColor: "#fff" }} data-aos="fade-up">
                    <h4>Full Body Ultrasound Scan</h4>
                    <p>Comprehensive checkup for general health and early detection of abnormalities.</p>
                  </div>

                  <div className="us-treatment-box" style={{ backgroundColor: "#F2F6F6" }} data-aos="fade-up">
                    <h4>Affordable & Convenient</h4>
                    <p>Quality ultrasound services at competitive prices, easily accessible in Phagwara.</p>
                  </div>

                  <div className="us-treatment-box" style={{ backgroundColor: "#fff" }} data-aos="fade-up">
                    <h4>Patient-Centered Care</h4>
                    <p>Comfortable, safe, and private ultrasound sessions with friendly staff support.</p>
                  </div>
                </div>
              </div>

              {/* CONCLUSION */}
              <div className="us-conclusion-box" data-aos="fade-up">
                <h4>Conclusion</h4>
                <p>
                  Parhar Hospital is your <strong>go-to ultrasound center in Phagwara</strong> for accurate, safe, and affordable diagnostic imaging. 
                  From routine abdominal scans to specialized 3D/4D pregnancy ultrasounds, we combine advanced technology with expert care to deliver exceptional results. 
                  Trust our <strong>skilled sonography experts</strong> for every scan and experience a patient-friendly, reliable diagnostic journey.
                </p>
              </div>
            </main>

            {/* SIDEBAR */}
            <aside className="us-sidebar" data-aos="fade-up">
              <div className="us-widget us-search">
                <input
                  type="search"
                  className="us-search-input"
                  placeholder="Search..."
                  value={sideSearch}
                  onChange={(e) => setSideSearch(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSideSearch()}
                />
                <button className="us-search-btn" onClick={handleSideSearch}>Search</button>
              </div>

              <ServiceEnquiryForm serviceName="Ultrasound" />

              <div className="us-widget us-services" data-aos="fade-up">
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
    <Link to="/services/2d-echo">2d Echo</Link>
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

export default Ultrasound;