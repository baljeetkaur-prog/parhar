import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Arthroscopy.css";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import ServiceEnquiryForm from "./ServiceEnquiryForm";

const Arthroscopy = () => {
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
        <title>Best Arthroscopy Surgery Hospital in Phagwara|Arthroscopy Specialist</title>
        <meta
          name="description"
          content="Phagwara’s top Arthroscopy Surgery Hospital. Specialist for knee and shoulder issues—arthroscopy surgery by a dedicated Arthroscopy Specialist."
        />
        <meta
          name="keywords"
          content="Arthroscopy, Surgery Hospita, Phagwara, Knee Arthroscopy, Shoulder Arthroscopy, Cartilage Repair, Joint Treatment, Parhar Hospital"
        />
      </Helmet>

      {/* HERO SECTION */}
      <section
        className="arthro-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(242,246,246,0.7), rgba(242,246,246,0.7)), url('/images/arthroscopy_banner_img.png')`,
        }}
      >
        <div className="arthro-hero-overlay" data-aos="fade-up">
          <h1 className="arthro-title">Best Arthroscopy Surgery Hospital</h1>
          <div className="arthro-breadcrumb">
           <Link to="/"><span className="arthro-bc-home">Home</span></Link>
            <span className="arthro-bc-sep">››</span>
            <span className="arthro-bc-current">Arthroscopy</span>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="arthro-section">
        <div className="arthro-container">
          <div className="arthro-grid">

            {/* LEFT MAIN CONTENT */}
            <main className="arthro-main">

              {/* Top Image + Paragraph */}
              <div className="arthro-top" data-aos="fade-up">
                <div className="arthro-top-image">
                  <img
                    src="/images/arthroscopy_main_img.png"
                    alt="Arthroscopy Overview"
                    loading="lazy"
                  />
                </div>
                <div className="arthro-top-paras">
              <p>Arthroscopy is a cutting-edge minimally invasive surgical technique that allows orthopaedic surgeons to diagnose, treat, and repair joint problems without making large incisions. At Parhar Hospital, Phagwara, we specialize in arthroscopy procedures for the <strong>knee, shoulder, hip, ankle, and other joints</strong>, ensuring patients experience minimal pain, faster recovery, and optimal joint function.</p>
<p>Our team of experienced surgeons uses high-precision cameras and micro-instruments to inspect and repair damaged tissues, making Parhar Hospital one of the <strong>best arthroscopy surgery hospitals in Phagwara</strong>.</p>
                </div>
              </div>

              {/* Causes */}
              <div className="arthro-block" data-aos="fade-up" data-aos-delay="100">
                <h2 className="arthro-subheading">When Arthroscopy is Recommended</h2>
             <ul className="arthro-tick-list">
    <li>Sports injuries causing ligament tears or cartilage damage</li>
    <li>Chronic joint pain from arthritis or inflammation</li>
    <li>Recurrent dislocations or joint instability</li>
    <li>Meniscus tears, rotator cuff injuries, or labral tears</li>
    <li>Loose fragments or bone spurs causing joint obstruction</li>
  </ul>
               <p className="arthro-note">
    Arthroscopy provides accurate diagnosis and effective treatment while reducing the need for large incisions and long recovery periods.
  </p>
              </div>

              {/* Types of Arthroscopy */}
              <div className="arthro-block" data-aos="fade-up" data-aos-delay="150">
                <h3 className="arthro-subheading">Types of Arthroscopic Procedures</h3>
              </div>

              {/* Knee Arthroscopy */}
           <div className="arthro-flex-block" data-aos="fade-up" data-aos-delay="200">
  <div className="arthro-flex-text">
    <p className="arthro-subheading">Knee Arthroscopy Surgery</p>
    <p className="arthro-text">
      Knee arthroscopy is a minimally invasive procedure to diagnose and treat meniscus tears, ligament injuries, cartilage damage, and inflammation. At Parhar Hospital, our expert surgeons use precise instruments to repair or remove damaged tissue, restore knee function, and speed up recovery.
    </p>
  </div>
  <div className="arthro-flex-image">
    <img src="/images/arthro1.png" alt="Knee Arthroscopy" loading="lazy" />
  </div>
</div>

<div className="arthro-flex-block reverse" data-aos="fade-up" data-aos-delay="250">
  <div className="arthro-flex-image">
    <img src="/images/arthro2.png" alt="Shoulder Arthroscopy" loading="lazy" />
  </div>
  <div className="arthro-flex-text">
    <p className="arthro-subheading">Shoulder Arthroscopy Surgery</p>
    <p className="arthro-text">
      Shoulder arthroscopy is a minimally invasive surgery for rotator cuff tears, labral injuries, and joint instability. At Parhar Hospital, surgeons use small incisions and precise instruments to repair tissues, reduce pain, and restore shoulder function.
    </p>
  </div>
</div>

<div className="arthro-flex-block" data-aos="fade-up" data-aos-delay="300">
  <div className="arthro-flex-text">
    <p className="arthro-subheading">Hip Arthroscopy Surgery</p>
    <p className="arthro-text">
      Hip arthroscopy treats labral tears, cartilage injuries, femoroacetabular impingement, and loose fragments. Surgeons carefully repair damaged tissues while preserving healthy structures, reducing pain and scarring.
    </p>
  </div>
  <div className="arthro-flex-image">
    <img src="/images/hip_arthro.png" alt="Hip Arthroscopy" loading="lazy" />
  </div>
</div>

<div className="arthro-flex-block reverse" data-aos="fade-up" data-aos-delay="350">
  <div className="arthro-flex-image">
    <img src="/images/ankle_arthro.png" alt="Ankle Arthroscopy" loading="lazy" />
  </div>
  <div className="arthro-flex-text">
    <p className="arthro-subheading">Ankle & Other Joint Arthroscopy</p>
    <p className="arthro-text">
      Arthroscopy for the ankle, wrist, and elbow treats ligament injuries, cartilage damage, and joint instability. Small incisions and precise instruments allow faster recovery with minimal pain.
    </p>
  </div>
</div>




              {/* Symptoms */}
              <div className="arthro-block" data-aos="fade-up" data-aos-delay="350">
                <p className="arthro-subheading">Benefits of Arthroscopy</p>
                <ul className="arthro-tick-list">
              <li>Minimally invasive, small incisions</li>
                    <li>Reduced pain and faster recovery</li>
                    <li>Lower risk of infection</li>
                    <li>Shorter hospital stay</li>
                    <li>Quick return to daily activities or sports</li>
                </ul>
              </div>

           

              {/* Conclusion */}
              <div className="arthro-conclusion-box" data-aos="fade-up" data-aos-delay="500">
                <h4>Conclusion</h4>
              <p>
    Arthroscopy at Parhar Hospital, Phagwara provides advanced, minimally invasive joint care for patients of all ages. Our skilled surgeons ensure precise diagnosis and effective treatment, allowing faster recovery, reduced pain, and long-term joint health. Whether for knee, shoulder, hip, ankle, or other joints, arthroscopy helps patients regain mobility, return to daily activities, and improve overall quality of life.
  </p>
              </div>
            </main>

            {/* SIDEBAR */}
            <aside className="arthro-sidebar">

              <div className="arthro-widget arthro-search">
                <input
                  type="search"
                  className="arthro-search-input"
                  placeholder="Search..."
                  value={sideSearch}
                  onChange={(e) => setSideSearch(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSideSearch()}
                />
                <button className="arthro-search-btn" onClick={handleSideSearch}>
                  Search
                </button>
              </div>

              <ServiceEnquiryForm serviceName="Arthroscopy" />

              <div className="arthro-widget arthro-services" data-aos="fade-up" data-aos-delay="250">
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
      <Link to="/services/robotic-surgery">Robotic Surgery</Link>
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

export default Arthroscopy;