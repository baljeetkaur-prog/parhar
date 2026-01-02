import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Xray.css";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import ServiceEnquiryForm from "./ServiceEnquiryForm";

const Xray = () => {
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
        <title>Best X-ray Center in Phagwara|Chest, Bone, Spine & Joint</title>
        <meta
          name="description"
          content="Best X -Ray Center in Phagwara for chest, bone, spine & joint. Affordable X -Ray services near me — book now."
        />
        <meta
          name="keywords"
          content="X-ray, X-ray Imaging, X-ray Procedure, Radiology, Parhar Hospital Phagwara"
        />
      </Helmet>

      {/* HERO SECTION */}
      <section
        className="xr-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(242,246,246,0.7), rgba(242,246,246,0.7)), url('/images/xray_banner_img.png')`,
        }}
      >
        <div className="xr-hero-overlay" data-aos="fade-up">
          <h1 className="xr-title">X-ray Center</h1>
          <div className="xr-breadcrumb">
          <Link to="/"><span className="xr-bc-home">Home</span></Link>
            <span className="xr-bc-sep">››</span>
            <span className="xr-bc-current">X-ray Imaging</span>
          </div>
        </div>
      </section>

      {/* MAIN SECTION */}
      <section className="xr-section">
        <div className="xr-container">
          <div className="xr-grid">

            {/* LEFT CONTENT */}
            <main className="xr-main">

              {/* Top Block */}
              <div className="xr-top" data-aos="fade-up">
                <div className="xr-top-image">
                  <img
                    src="/images/xray_main_img.png"
                    alt="X-ray Overview"
                    loading="lazy"
                  />
                </div>
                <div className="xr-top-paras">
           <p>
  X-ray imaging is one of the most commonly used diagnostic tests to examine 
  bones, joints, and certain internal organs. It is quick, painless, and 
  extremely helpful in identifying fractures, infections, lung conditions, 
  and many other medical issues. At Parhar Hospital, Phagwara, our 
  <strong> digital X-ray center</strong> provides high-quality images with 
  fast reporting, making us one of the <strong>best X-ray clinics in Phagwara</strong>.
</p>
                </div>
              </div>

              {/* Procedure Block */}
              <div className="xr-block" data-aos="fade-up" data-aos-delay="100">
                <h2 className="xr-heading">How X-ray Works</h2>
                <div className="xr-row">
                  <div className="xr-left">
<p className="xr-smallheading">How Digital X-ray Works</p>
<p>
  Digital X-ray uses a controlled beam of radiation that passes through the body 
  to create clear images of bones and internal structures. Dense structures like 
  bones block the rays and appear white, while softer tissues appear darker. 
  This difference helps doctors identify injuries and abnormalities quickly. 
  At Parhar Hospital, our <strong>digital X-ray center in Phagwara</strong> uses advanced imaging systems that produce sharper images with less radiation, 
  ensuring a safer and more accurate diagnosis for every patient. This is why 
  many people searching for <strong> X-ray near me</strong> choose our hospital 
  for reliable and fast results.
</p>
                  </div>
                  <div className="xr-right">
                    <img
                      src="/images/xray-1.png"
                      alt="X-ray Process"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="xr-flex-block-two" data-aos="fade-up" data-aos-delay="150">
                <div className="xr-flex-two-image">
                  <img src="/images/xray2.png" alt="Benefits" loading="lazy" />
                </div>
                <div className="xr-flex-two-text">
            <p className="xr-smallheading">Benefits of X-ray</p>
<p>
  X-rays are an essential part of modern medical diagnosis. They help in 
  identifying bone fractures, joint dislocations, lung infections, arthritis 
  changes, dental problems, and many other conditions within minutes. X-rays 
  are quick, painless, and offer immediate results, making them especially useful 
  during emergencies. With our <strong>affordable X-ray test</strong> services 
  and advanced digital machines, Parhar Hospital ensures that patients receive 
  high-quality imaging without long waiting times. This makes us one of the 
  <strong> best X-ray clinics in Phagwara</strong>.
</p>
                </div>
              </div>

              {/* Safety */}
              <div className="xr-flex-block-three" data-aos="fade-up" data-aos-delay="200">
                <div className="xr-flex-three-text">
           <p className="xr-smallheading">Safety Considerations</p>
<p>
  X-ray imaging is safe when performed with proper precautions. At Parhar Hospital, 
  we use low-radiation digital machines along with protective lead shields to 
  minimize exposure. Our trained radiology team ensures that each scan is done 
  with maximum safety and accuracy. Although X-rays are safe for most people, 
  we advise pregnant women or those who may be pregnant to inform our technicians 
  so we can use alternative imaging methods when necessary. Your safety is always 
  our top priority at our <strong>radiology center in Phagwara</strong>.
</p>
                </div>
                <div className="xr-flex-three-image">
                  <img src="/images/xray3.png" alt="Safety" loading="lazy" />
                </div>
              </div>

              {/* Symptoms / Uses */}
              <div className="xr-block" data-aos="fade-up" data-aos-delay="250">
                <h3 className="xr-heading">When X-rays Are Recommended</h3>
     <p className="xr-symptoms-intro">
  Doctors may advise an X-ray for several reasons, depending on your symptoms or condition:
</p>

<ul className="xr-tick-list">
  <li>Detecting bone fractures, cracks, and joint dislocations</li>
  <li>Identifying bone infections, arthritis changes, or tumors</li>
  <li>Evaluating chest, lungs, or ribs for infection, pneumonia, or breathing issues</li>
  <li>Monitoring bone healing after surgery, plaster, or treatment</li>
  <li>Examining the spine, pelvis, and joints for injury or deformity</li>
  <li>Assessing dental structures and jaw alignment</li>
  <li>Emergency injury evaluation during accidents or falls</li>
</ul>
              </div>

              {/* Conclusion */}
              <div className="xr-conclusion-box" data-aos="fade-up" data-aos-delay="300">
                <h4>Conclusion</h4>
          <p>
  X-ray imaging is an essential tool in diagnosing a wide range of medical conditions quickly 
  and accurately. At Parhar Hospital, Phagwara, we offer reliable, fast, and affordable 
  digital X-ray tests performed by skilled radiology experts. Whether you need an 
  <strong> emergency X-ray</strong>, a routine health evaluation, or a follow-up imaging test, 
  our team ensures high-quality care with minimal waiting time. For anyone searching for 
  <strong> X-ray center in Phagwara</strong> or <strong> X-ray test hospital near me</strong>, 
  Parhar Hospital is a trusted and convenient choice.
</p>
              </div>

            </main>

            {/* SIDEBAR */}
            <aside className="xr-sidebar">
              <div className="xr-widget xr-search">
                <input
                  type="search"
                  className="xr-search-input"
                  placeholder="Search..."
                  value={sideSearch}
                  onChange={(e) => setSideSearch(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSideSearch()}
                />
                <button className="xr-search-btn" onClick={handleSideSearch}>
                  Search
                </button>
              </div>

              <ServiceEnquiryForm serviceName="X-ray Imaging" />

              <div className="xr-widget xr-services" data-aos="fade-up" data-aos-delay="250">
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
    <Link to="/services/2d-echo">2d Echo</Link>
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

export default Xray;