import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./RoboticKnee.css";
import { Helmet } from "react-helmet";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ServiceEnquiryForm from "./ServiceEnquiryForm";

const RoboticKnee = () => {
  const [sideSearch, setSideSearch] = useState("");
const navigate = useNavigate();

const handleSideSearch = () => {
  if (!sideSearch.trim()) return;

  navigate(`/blogs?search=${encodeURIComponent(sideSearch)}`);
  setSideSearch("");
};

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <>
   <Helmet>
  <title>Best Robotic Orthopedic Surgeon in Phagwara|Best Bone Hospital</title>
  <meta
    name="description"
    content="Best Robotic orthopedic surgeon in Phagwara at the leading bone hospital. Expert knee replacement, shoulders care, and comprehensive robotic surgery hospital services."
  />
  <meta
    name="keywords"
    content="Robotic Surgery Hospital, Robotic orthopedic Surgeon, Bone Hospital Phagwara, Robotic Joint Replacement Hospital, Robotic Orthopedic Surgery Center, Best Robotic Surgery Hospital, Robotic Knee Replacement, Affordable Robotic Joint Replacement, Robotic Surgery Near Me, Robotic Treatment for Joint Pain, Best Robotic Joint Replacement Surgeon, Top Robotic Orthopedic Hospitals"
  />
</Helmet>
      {/* === HERO SECTION === */}
      <section
        className="rk-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(242,246,246,0.7), rgba(242,246,246,0.7)), url('/images/robotic.png')`,
        }}
      >
        <div className="rk-hero-overlay" data-aos="fade-up">
          <h1 className="rk-title">Best Robotic Orthopedic Surgeon in Phagwara</h1>

          <div className="rk-breadcrumb">
            <Link to="/"><span className="rk-bc-home">Home</span></Link>
            <span className="rk-bc-sep">››</span>
            <span className="rk-bc-current">Robotic Surgery</span>
          </div>
        </div>
      </section>

      {/* === MAIN CONTENT AREA === */}
      <section className="rk-section">
        <div className="rk-container">
          <div className="rk-grid">
            {/* LEFT: MAIN CONTENT */}
            <main className="rk-main">
              {/* Top image + paragraphs */}
              <div className="rk-top">
                <div className="rk-top-image" data-aos="fade-up">
                  <img
                    src="/images/robotictwo.png"
                   alt="Robotic Surgery - overview"
                    loading="lazy"
                  />
                </div>

                <div className="rk-top-paras" data-aos="fade-up">
<p>
  Parhar Hospital, Phagwara is a leading center for <strong>Robotic Surgery</strong>,
  offering advanced, technology-driven solutions for patients suffering from chronic 
  joint pain, arthritis, and mobility-related issues. Our hospital is widely regarded 
  as one of the <strong>best robotic surgery hospitals</strong> in the region, bringing 
  precision and safety to every orthopedic procedure.
</p>


           
<p>
  With robotic-assisted techniques, surgeons at Parhar Hospital achieve exceptional 
  accuracy during joint replacement. The robotic system provides a real-time 3D 
  assessment of the patient’s bone and soft tissue, ensuring that every cut, angle, 
  and implant positioning is performed with millimeter-level precision. This detailed 
  accuracy sets Parhar Hospital apart as a <strong>top robotic orthopedic surgery center</strong>.
</p>


<p>
  Patients seeking <strong>robotic treatment for joint pain</strong> benefit from faster 
  recovery, minimal pain, smaller incisions, and longer-lasting implant performance. 
  Our advanced robotic approach makes Parhar Hospital the preferred choice for 
  individuals looking for a reliable, safe, and <strong>affordable robotic surgery hospital 
  near them</strong>.
</p>

                </div>
              </div>

              {/* Benefits */}
              <div className="rk-block" data-aos="fade-up">
      <h2 className="rk-subheading">Benefits of Robotic Surgery at Parhar Hospital in Phagwara</h2>
<ul className="rk-tick-list">
  <li>Highly accurate implant placement with robotic guidance</li>
  <li>Less soft-tissue damage and minimal blood loss</li>
  <li>Reduced post-operative pain and quicker recovery</li>
  <li>Natural joint movement due to perfect implant alignment</li>
  <li>Earlier return to daily activities and walking</li>
  <li>Ideal option for complex or advanced joint damage</li>
</ul>
              </div>

              {/* Difference section */}
              <div className="rk-block" data-aos="fade-up">
                <h3 className="rk-subheading">
  Difference Between Conventional and Robotic Joint Replacement
</h3>


                <div className="rk-two-col">
                  <div className="rk-two-left" data-aos="fade-up">
                    <h4 className="rk-mini-title">Conventional Joint Replacement</h4>
                    <div className="rk-top-paras">
<p>
  Conventional joint replacement surgery has been effective for many years, 
  but it depends heavily on manual instruments and visual judgment. This can lead 
  to slight variations in implant positioning, which may affect joint movement, 
  recovery speed, and long-term comfort. While still useful, conventional surgery 
  does not match the precision offered by robotic technology.
</p>
                    </div>
                  </div>

                  <div className="rk-two-right" data-aos="fade-up">
                    <img
                      src="/images/robotic_content_1.png"
                      alt="Conventional vs Robotic - image"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              {/* Robotic section with swapped sides */}
              <div className="rk-block">
                <div className="rk-two-col rk-special-layout">
                  <div className="rk-two-left rk-image-left" data-aos="fade-up">
                    <img
                      src="/images/machine.webp"
                      alt="Robotic technique"
                      loading="lazy"
                    />
                  </div>

                  <div className="rk-two-right rk-text-right" data-aos="fade-up">
                    <h4 className="rk-mini-title">Robotic Surgery</h4>
                    <div className="rk-top-paras">
<p>
  Robotic Surgery at Parhar Hospital utilizes advanced imaging and robotic-arm 
  assistance to help surgeons perform joint replacement with unmatched accuracy. 
  The system creates a detailed 3D model of your joint and guides the surgeon 
  through each step, ensuring perfect balance, alignment, and implant placement. 
  This innovative approach makes Parhar Hospital a leading choice for high-precision 
  robotic procedures.
</p>

                    </div>
                  </div>
                </div>
              </div>

              {/* NAVIO advantages */}
              <div className="rk-block">
                <div className="rk-two-col">
                  <div className="rk-two-left rk-navio-text" data-aos="fade-up">
                   <h4 className="rk-mini-title">Advantages of Our Robotic System</h4>
                    <div className="rk-top-paras">
                   <p>
  The robotic system used at Parhar Hospital is designed to improve safety, 
  personalize the procedure, and deliver predictable results. Unlike many other 
  platforms, our system does not require CT scans, reducing radiation exposure 
  and making the process faster.
</p>
                    </div>
          <ul className="rk-list">
  <li>Creates a real-time 3D map to guide precise bone preparation</li>
  <li>Helps the surgeon achieve optimal implant fit and alignment</li>
</ul>
                  </div>

                  <div className="rk-two-right rk-navio-image" data-aos="fade-up">
                    <img
                      src="/images/robotic_img_2.png"
                      alt="NAVIO machine"
                      loading="lazy"
                      style={{ width: "90%" }}
                    />
                  </div>
                </div>
              </div>

              {/* Conclusion box */}
              <div className="rk-conclusion-box" data-aos="fade-up">
                <h4>Conclusion</h4>
           <p>
  Robotic Surgery at Parhar Hospital offers a new level of accuracy, safety, 
  and comfort for patients dealing with severe joint issues. With quicker recovery, 
  reduced pain, and long-lasting implant performance, robotic-assisted treatment 
  provides unmatched outcomes. As one of the <strong>top robotic orthopedic hospitals</strong> in Punjab, Parhar Hospital continues to lead the way in delivering advanced and 
  <strong>affordable robotic joint replacement</strong> solutions for patients seeking 
  world-class care.
</p>
              </div>
            </main>

            {/* RIGHT: SIDEBAR */}
            <aside className="rk-sidebar">
              {/* Search */}
        <div className="rk-widget rk-search" data-aos="fade-up">
  <input
    type="search"
    className="rk-search-input"
    placeholder="Search..."
    value={sideSearch}
    onChange={(e) => setSideSearch(e.target.value)}
    onKeyDown={(e) => e.key === "Enter" && handleSideSearch()}
  />

  <button
    className="rk-search-btn"
    onClick={handleSideSearch}
  >
    Search
  </button>
</div>

              {/* Enquiry form */}
       <ServiceEnquiryForm serviceName="Robotic Surgery" />

              {/* Services box */}
              <div className="rk-widget rk-services" data-aos="fade-up">
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

export default RoboticKnee;