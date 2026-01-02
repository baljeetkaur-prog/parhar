import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Orthopaedic.css";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import ServiceEnquiryForm from "./ServiceEnquiryForm";

const Orthopaedic = () => {
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
        <title>Best Orthopaedics Hospitals in Phagwara|Best Surgery Hospital  </title>
        <meta
          name="description"
          content="Best hospital phagwara offering orthopaedics surgery specialists and comprehensive care. Discover the Best orthopaedics hospital in Phagwara for trusted, cutting-edge treatment."
        />
        <meta
          name="keywords"
          content="Orthopaedic,Orthopaedics hospital Phagwara, Bone Specialist, Joint Pain, Knee Treatment, Hip Treatment, Parhar Hospital"
        />
      </Helmet>

      {/* HERO */}
      <section
        className="ors-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(242,246,246,0.7), rgba(242,246,246,0.7)), url('/images/orthopaedic_banner_img.png')`,
        }}
      >
        <div className="ors-hero-overlay" data-aos="fade-up">
          <h1 className="ors-title" data-aos="fade-up">Orthopaedics Hospitals</h1>

          <div className="ors-breadcrumb">
            <Link to="/"><span className="ors-bc-home">Home</span></Link>
            <span className="ors-bc-sep">››</span>
            <span className="ors-bc-current">Orthopaedics</span>
          </div>
        </div>
      </section>

      {/* MAIN */}
      <section className="ors-section" data-aos="fade-up">
        <div className="ors-container">
          <div className="ors-grid">

            {/* MAIN CONTENT */}
            <main className="ors-main">

              {/* TOP IMAGE + PARAGRAPH */}
              <div className="ors-top">
                <div className="ors-top-image">
                  <img src="/images/orthopaedic_surgery.png" alt="Orthopaedic Treatments" />
                </div>

                <div className="ors-top-paras">
            <p>
  The Orthopaedic Department at <strong>Parhar Hospital, Phagwara</strong> is known for
  delivering world-class care for all bone, joint, muscle, and spine-related problems.
  With highly experienced surgeons, advanced diagnostic facilities, and modern treatment
  techniques, we have earned a reputation as one of the
  <strong> best orthopaedics hospitals</strong> in Punjab.
</p>
<p>
  Our team includes some of the <strong>best orthopaedics doctors in Phagwara</strong>,
  specialising in joint replacement, fracture care, sports injuries, arthritis
  management, spine disorders, and trauma surgery. We focus not only on treating the
  condition but also on restoring long-term mobility, reducing pain, and improving
  overall quality of life through personalised rehabilitation programs.
</p>
                </div>
              </div>

              {/* BLOCK 1 */}
              <div className="ors-block">
                <h2 className="ors-subheading">Best Orthopaedics Surgery Specialists</h2>

         <p>
  Parhar Hospital provides a complete spectrum of orthopaedic services for patients of
  all age groups — from children to senior citizens. Whether it’s a sudden injury,
  chronic pain, or a long-standing joint problem, our specialists ensure accurate
  diagnosis and evidence-based treatment. Our advanced imaging systems, minimally
  invasive surgery options, and state-of-the-art operating theatres contribute to
  making us the preferred destination for comprehensive bone and joint care.
</p>
              </div>

              {/* FLEX BLOCK 1 */}
              <div className="ors-flex-block">
                <div className="ors-flex-text">
                  <h3 className="ors-subheading">Joint Replacement</h3>
              <p>
  Our hospital is widely recognised for offering advanced joint replacement treatments,
  making us a trusted centre for knee, hip, and shoulder replacement surgeries. With
  cutting-edge implants, precision surgical techniques, and rapid recovery protocols,
  we ensure exceptional outcomes for patients suffering from severe arthritis, joint
  damage, or mobility limitations. Our goal is to help patients return to pain-free
  movement and lead an active, independent life.
</p>
                </div>

                <div className="ors-flex-image">
                  <img src="/images/ortho1.png" alt="Joint Replacement" />
                </div>
              </div>

              {/* FLEX BLOCK 2 */}
            <div className="ors-method fracture-block">
  <div className="ors-method-left">
    <img src="/images/ortho2.png" alt="Fracture Treatment" />
  </div>
  <div className="ors-method-right">
    <h3 className="ors-subheading">Fracture & Trauma Care</h3>
              <p>
  As a leading emergency and trauma-care facility, our orthopaedic team manages
  everything from simple fractures to complex polytrauma cases with high accuracy.
  We provide immediate stabilisation, computer-assisted alignment, and modern fixation
  techniques using plates, rods, and screws. With round-the-clock availability of
  orthopaedic specialists, Parhar Hospital stands as one of the
  <strong> best orthopaedics hospitals</strong> for emergency bone and joint injuries.
</p>
                </div>
              </div>

              {/* FLEX BLOCK 3 */}
              <div className="ors-method ors-method-reverse">
                <div className="ors-method-left-text">
                  <h3 className="ors-subheading">Arthritis Management</h3>
              <p>
  Arthritis can severely impact daily life, causing pain, stiffness, swelling, and
  reduced mobility. Our specialists provide complete arthritis management that includes
  medication, physiotherapy, joint injections, lifestyle counselling, and when needed
  surgical intervention. We design personalised treatment plans to slow disease
  progression, protect joint function, and improve long-term comfort.
</p>
                </div>

                <div className="ors-method-right-img">
                  <img src="/images/ortho3.png" alt="Arthritis" />
                </div>
              </div>

              {/* FLEX BLOCK 4 */}
         <div className="ors-method sports-block">
  <div className="ors-method-left">
    <img src="/images/ortho4.png" alt="Sports Injury" />
  </div>
  <div className="ors-method-right">
                  <h3 className="ors-subheading">Sports & Ligament Injuries</h3>
                <p>
  Parhar Hospital is a trusted centre for sports medicine and ligament injury treatment.
  Our orthopaedic experts specialise in ACL/PCL reconstruction, ligament repairs,
  meniscus treatment, rotator cuff injuries, shoulder instability, and tendon tears.
  With minimally invasive arthroscopic techniques and customised rehabilitation
  programs, we help athletes and active individuals return to peak performance safely
  and quickly.
</p>
                </div>
              </div>

              {/* FLEX BLOCK 5 */}
              <div className="ors-method ors-method-reverse">
                <div className="ors-method-left-text">
                  <h3 className="ors-subheading">Bone Infections</h3>
                <p>
  Chronic or severe bone infections require expert evaluation and careful management.
  Our orthopaedic team provides precise diagnosis, surgical cleaning (debridement),
  targeted antibiotic therapy, and long-term monitoring to ensure complete recovery.
  Every patient receives an individualised treatment plan to restore mobility and
  prevent recurrence.
</p>
                </div>

                <div className="ors-method-right-img">
                  <img src="/images/ortho5.png" alt="Bone Infection" />
                </div>
              </div>

              {/* CONCLUSION */}
              <div className="ors-conclusion-box">
                <h4>Conclusion</h4>
              <p>
  Parhar Hospital, Phagwara is committed to delivering exceptional bone and joint care
  through the expertise of some of the <strong>best orthopaedics doctors</strong> in the
  region. From advanced joint replacement and trauma surgery to sports injuries,
  arthritis care, and specialised rehabilitation, we ensure safe, effective, and
  patient-focused treatment for every individual.
</p>
<p>
  If you are looking for the <strong>best orthopaedics doctor in Phagwara</strong> or a
  trusted <strong>best orthopaedics hospital</strong> for long-term bone and joint
  wellness, Parhar Hospital stands as the most reliable destination for expert and
  compassionate care.
</p>
              </div>
            </main>

            {/* SIDEBAR */}
            <aside className="ors-sidebar">

              {/* Search */}
              <div className="ors-widget ors-search">
                <input
                  type="search"
                  className="ors-search-input"
                  placeholder="Search..."
                  value={sideSearch}
                  onChange={(e) => setSideSearch(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSideSearch()}
                />
                <button className="ors-search-btn" onClick={handleSideSearch}>Search</button>
              </div>

              {/* Enquiry Form */}
              <ServiceEnquiryForm serviceName="Orthopaedics" />

              {/* Services List */}
              <div className="ors-widget ors-services">
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
      <Link to="/services/robotic-surgery">Robotic Surgery</Link>
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

export default Orthopaedic;