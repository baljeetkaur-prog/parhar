import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./ComplexTrauma.css";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import ServiceEnquiryForm from "./ServiceEnquiryForm";

const ComplexTrauma = () => {
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
        <title>Best Trauma Hospitals in Phagwara |Best Trauma Specialist Near Me</title>
        <meta
          name="description"
          content="Best trauma hospital and center in Phagwara with orthopedic surgeons. Find the best trauma specialist near me. Contact us. 90563-32253"
        />
        <meta
          name="keywords"
          content="Trauma Hospital in Phagwara, Best Trauma Center in Phagwara, Advanced Trauma Care Centres in Phagwara, Emergency Trauma Hospital, Level 1 Trauma Center in Punjab, Trauma Surgeons in Phagwara"
        />
      </Helmet>

      {/* HERO */}
      <section
        className="ct-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(242,246,246,0.7), rgba(242,246,246,0.7)), url('/images/trauma_banner_img.png')`,
        }}
      >
        <div className="ct-hero-overlay" data-aos="fade-up">
          <h1 className="ct-title" data-aos="fade-up">Best Trauma Hospitals</h1>

          <div className="ct-breadcrumb">
            <Link to="/"><span className="ct-bc-home">Home</span></Link>
            <span className="ct-bc-sep">››</span>
            <span className="ct-bc-current">Complex Trauma</span>
          </div>
        </div>
      </section>

      {/* MAIN */}
      <section className="ct-section" data-aos="fade-up">
        <div className="ct-container">
          <div className="ct-grid">

            {/* MAIN CONTENT */}
            <main className="ct-main">

              {/* TOP IMAGE + PARAGRAPH */}
              <div className="ct-top">
                <div className="ct-top-image">
                  <img src="/images/complex_trauma_main_img.png" alt="Complex Trauma Treatments" />
                </div>

                <div className="ct-top-paras">
                  <p>
                    Recognised as one of the Best Trauma Hospitals in Phagwara, the Complex Trauma Unit at Parhar Hospital provides rapid, specialised, and life-saving care for severe injuries. Our expert trauma surgeons are highly experienced in managing polytrauma, multi-fracture cases, crush injuries, limb-salvage procedures, and post-traumatic deformity correction. Supported by advanced imaging, modern surgical systems, and 24×7 emergency readiness, we ensure timely intervention, faster healing, and long-term functional recovery for every patient.
                  </p>
                </div>
              </div>

              {/* BLOCK 1 */}
              <div className="ct-block">
                <h3 className="ct-subheading">Why Parhar Hospital Leads in Trauma Specialties: Expert Care & Treatments Explained</h3>

                <p>
                  As one of the leading Advanced Trauma Care Centres in Phagwara, we manage high-energy accident injuries including polytrauma, open fractures, complex joint injuries, and soft-tissue trauma. Our multidisciplinary approach ensures accurate diagnosis, quick stabilisation, advanced surgical care, and structured rehabilitation, delivering outstanding clinical outcomes and restoring patient mobility as early as possible.
                </p>
              </div>

              {/* FLEX BLOCK 1 */}
              <div className="ct-flex-block">
                <div className="ct-flex-text">
                  <p className="ct-heading">Limb Salvage</p>
                  <p>
                    For injuries that put limb viability at risk, our trauma experts perform advanced limb-salvage procedures including bone grafting, deformity correction, external fixation, microvascular reconstruction, and soft-tissue coverage. With one of the Best Trauma Specialist teams in Phagwara, our priority is to preserve natural limb function while ensuring stable healing and long-term mobility.
                  </p>
                </div>

                <div className="ct-flex-image">
                  <img src="/images/complex1.png" alt="Limb Salvage" className="ct-content-img" />
                </div>
              </div>

              {/* FLEX BLOCK 2 */}
              <div className="ct-method">
                <div className="ct-method-left">
                 <img src="/images/complex2.png" alt="Multi-Fracture Management" className="ct-content-img" style={{height:"250px"}} />
                </div>

                <div className="ct-method-right">
                  <p className="ct-heading">Multi-Fracture Management</p>
                  <p>
                    High-impact accidents often involve multiple fractures requiring immediate and coordinated care. Our surgeons use minimally invasive techniques, plating, nailing, and hybrid fixation to restore stability and alignment. As the Best Trauma Center in Phagwara, we develop personalised treatment plans that ensure rapid healing, early mobility, and the best functional outcomes.
                  </p>
                </div>
              </div>

              {/* FLEX BLOCK 3 */}
              <div className="ct-method ct-method-reverse">
                <div className="ct-method-left-text">
                  <p className="ct-heading">Soft Tissue Reconstruction</p>
                  <p>
                    Many complex trauma cases involve severe damage to soft tissues, requiring advanced reconstructive techniques. Our specialists perform skin grafting, flap coverage, microvascular reconstruction, and targeted wound management to restore tissue health and support bone healing. These techniques help prevent infection, improve recovery time, and reduce long-term complications.
                  </p>
                </div>

                <div className="ct-method-right-img">
                 <img src="/images/complex3.png" alt="Soft Tissue Reconstruction" className="ct-content-img" />
                </div>
              </div>

              {/* FLEX BLOCK 4 */}
              <div className="ct-method">
                <div className="ct-method-left">
                <img src="/images/complex4.png" alt="Rehabilitation" className="ct-content-img" />
                </div>

                <div className="ct-method-right">
                  <p className="ct-heading">Rehabilitation</p>
                  <p>
                    Rehabilitation plays a vital role in restoring strength, mobility, and confidence after major trauma. Our physiotherapy and rehabilitation team creates personalised plans based on the patient’s injury, surgical procedures, and recovery goals. With guided exercises, mobility training, and regular progress tracking, we help patients regain independence and return to daily activities safely and confidently.
                  </p>
                </div>
              </div>
              <div className="ct-block">
  <h2 className="ct-subheading">Why Choose Parhar Hospital for Complex Trauma Care?</h2>

  <p>
    Parhar Hospital is widely known as one of the Best Trauma Hospitals in Phagwara due to our advanced facilities, rapid emergency response, and highly experienced trauma specialists. Every patient receives personalised care supported by modern diagnostic tools, evidence-based treatment protocols, and 24×7 emergency readiness.
  </p>

  <ul className="ct-pointer-list">
    <li>24×7 Emergency Trauma Team</li>
    <li>Advanced imaging including X-ray, CT, and Ultrasound</li>
    <li>Specialised surgeons for polytrauma and critical fractures</li>
    <li>Microvascular and limb salvage expertise</li>
    <li>Minimally invasive fracture fixation techniques</li>
    <li>Dedicated post-trauma physiotherapy and rehabilitation</li>
    <li>Personalised treatment plans for faster and safer recovery</li>
  </ul>
</div>

              {/* CONCLUSION */}
              <div className="ct-conclusion-box">
                <h4>Conclusion</h4>
                <p>
                  Parhar Hospital stands as a trusted Emergency Trauma Hospital in Phagwara, offering world-class trauma care, advanced surgical expertise, and 24×7 emergency support. From stabilisation and surgical management to rehabilitation and long-term recovery planning, our focus is on restoring mobility, reducing complications, and helping patients return to an active, fulfilling life. When every second matters, our Level-1-equivalent trauma team ensures the highest standards of care.
                </p>
              </div>
            </main>

            {/* SIDEBAR */}
            <aside className="ct-sidebar">

              {/* Search */}
              <div className="ct-widget ct-search">
                <input
                  type="search"
                  className="ct-search-input"
                  placeholder="Search..."
                  value={sideSearch}
                  onChange={(e) => setSideSearch(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSideSearch()}
                />
                <button className="ct-search-btn" onClick={handleSideSearch}>Search</button>
              </div>

              {/* Enquiry Form */}
              <ServiceEnquiryForm serviceName="Complex Trauma" />

              {/* Services List */}
              <div className="ct-widget ct-services">
                 <div className="rk-widget-header">Explore Other Sevices</div>

                <ul className="rk-services-list">
    <li>
      <Link to="/services/robotic-joint-replacement">Robotic Joint Replacement</Link>
    </li>
    <li>
      <Link to="/services/robotic-surgery">Robotic Surgery</Link>
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

export default ComplexTrauma;