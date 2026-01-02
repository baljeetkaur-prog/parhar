import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Arthroplasty.css";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import ServiceEnquiryForm from "./ServiceEnquiryForm";

const Arthroplasty = () => {
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
        <title>Best orthopaedic arthroplasty surgeon in Phagwara</title>
        <meta
          name="description"
          content="Best Arthroplasty surgeon in Phagwara for shoulder replacement. Trusted orthopaedic surgeon and specialist at Parhar Hospital."
        />
        <meta
          name="keywords"
          content="arthroplasty surgery, hip arthroplasty surgery, knee arthroplasty surgery, best joint arthroplasty surgery, arthroscopy surgery near me, best arthroscopy doctor"
        />
      </Helmet>

      {/* HERO SECTION */}
      <section
        className="ap-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(242,246,246,0.7), rgba(242,246,246,0.7)), url('/images/arthroplasty_banner_img.png')`,
        }}
      >
        <div className="ap-hero-overlay" data-aos="fade-up">
          <h1 className="ap-title">Arthroplasty surgery hospital</h1>
          <div className="ap-breadcrumb">
           <Link to="/"><span className="ap-bc-home">Home</span></Link>
            <span className="ap-bc-sep">››</span>
            <span className="ap-bc-current">Arthroplasty</span>
          </div>
        </div>
      </section>

      {/* MAIN SECTION */}
      <section className="ap-section">
        <div className="ap-container">
          <div className="ap-grid">

            {/* LEFT CONTENT */}
            <main className="ap-main">

              {/* Top Block */}
              <div className="ap-top" data-aos="fade-up">
                <div className="ap-top-image">
                  <img
                    src="/images/arthroplasty_main_img.png"
                    alt="Arthroplasty Overview"
                    loading="lazy"
                  />
                </div>
                <div className="ap-top-paras">
                  <p>
                    Arthroplasty, also known as joint replacement surgery, is a modern orthopedic procedure designed to replace damaged or worn-out joints with artificial implants. This procedure is highly effective for restoring mobility, reducing pain, and improving overall quality of life for patients suffering from chronic joint conditions.  
                  </p>
                  <p>
                    At Parhar Hospital, Phagwara, we specialize in both <strong>hip arthroplasty surgery</strong> and <strong>knee arthroplasty surgery</strong> using advanced techniques to ensure minimal discomfort, faster recovery, and long-lasting results. Our highly skilled surgeons carefully evaluate each case to recommend the most suitable type of joint replacement tailored to the patient’s needs.
                  </p>
                  <p>
                    Arthroplasty surgery is ideal for patients with joint pain that limits daily activities, swelling, deformities, or chronic conditions such as osteoarthritis and rheumatoid arthritis. With our modern facilities, we provide comprehensive care from pre-operative assessment to post-surgery physiotherapy and long-term follow-up.
                  </p>
                </div>
              </div>

              {/* Causes / Need for Surgery */}
              <div className="ap-block" data-aos="fade-up" data-aos-delay="100">
                <h2 className="ap-heading">Why Arthroplasty is Needed</h2>
                <div className="ap-row">
                  <div className="ap-flex-two-text">
               <p className="ap-smallheading">Severe Arthritis</p>
<p>
  Arthritis is one of the most common reasons for arthroplasty surgery. 
  Osteoarthritis, rheumatoid arthritis, or post-traumatic arthritis can severely 
  damage the joint cartilage, causing intense pain, stiffness, and loss of function. 
  In many cases, medications and physiotherapy alone are insufficient, and joint 
  replacement becomes the most effective solution to restore mobility and relieve 
  chronic discomfort.
</p>
                  </div>
                  <div className="ap-right">
                    <img
                      src="/images/arthroplasty1.png"
                      alt="Arthritis"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              {/* Block 2 */}
              <div className="ap-flex-block-two" data-aos="fade-up" data-aos-delay="150">
                <div className="ap-flex-two-image">
                  <img
                    src="/images/arthroplasty3.jpeg"
                    alt="Joint Injury"
                    loading="lazy"
                  />
                </div>
                <div className="ap-flex-two-text">
                  <p className="ap-smallheading">Joint Injury or Trauma</p>
                  <p>
                    Traumatic injuries such as fractures, ligament tears, or sports-related accidents can damage joint surfaces permanently. In cases where the joint cannot heal naturally or continues to cause pain, <strong>arthroplasty surgery</strong> is recommended. Hip and knee replacements help patients regain function and return to daily activities without discomfort.
                  </p>
                  <p>
                    Modern techniques like minimally invasive arthroplasty reduce incision size, limit tissue damage, and speed up recovery, allowing patients to resume mobility faster compared to traditional surgeries.
                  </p>
                </div>
              </div>

              {/* Block 3 */}
              <div className="ap-flex-block-three" data-aos="fade-up" data-aos-delay="200">
                <div className="ap-flex-three-text">
                  <p className="ap-smallheading">Joint Deformities</p>
                  <p>
                    Congenital or acquired deformities in the joint can lead to pain, instability, and abnormal gait. In severe cases, <strong>joint replacement surgery</strong> is required to correct alignment and restore proper function. Arthroplasty helps achieve anatomical correction and long-term improvement in mobility.
                  </p>
                  <p>
                    Patients with deformities often benefit from specialized implants and customized surgical planning, ensuring that the replacement joint matches their anatomy as closely as possible.
                  </p>
                </div>
                <div className="ap-flex-three-image">
                  <img
                    src="/images/arthroplasty2.png"
                    alt="Deformities"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Symptoms */}
              <div className="ap-block" data-aos="fade-up" data-aos-delay="250">
                <h3 className="ap-heading">Symptoms Indicating Need for Arthroplasty</h3>
                <ul className="ap-tick-list">
                  <li>Persistent pain and stiffness in the joint</li>
                  <li>Difficulty performing daily activities such as walking or climbing stairs</li>
                  <li>Visible swelling or inflammation around the joint</li>
                  <li>Reduced range of motion or joint instability</li>
                  <li>Pain not relieved by medications, injections, or physiotherapy</li>
                </ul>
                <p>
                  Early detection and timely consultation with an orthopedic specialist can prevent further joint deterioration and improve post-surgery outcomes. Our team at Parhar Hospital provides thorough assessment and personalized treatment plans for each patient.
                </p>
              </div>

              {/* Diagnosis */}
              <div className="ap-block" data-aos="fade-up" data-aos-delay="300">
                <h3 className="ap-heading">Diagnosis Before Arthroplasty</h3>
                <ul className="ap-tick-list">
                  <li>Detailed physical examination and medical history</li>
                  <li>Imaging studies including X-rays, CT scans, or MRI</li>
                  <li>Blood tests to check for infection or underlying health conditions</li>
                  <li>Assessment of joint alignment, stability, and muscle strength</li>
                </ul>
                <p>
                  Proper pre-operative diagnosis ensures that the correct type of joint replacement is selected, whether it is a <strong>hip arthroplasty surgery</strong>, <strong>knee arthroplasty surgery</strong>, or another procedure. Advanced planning and evaluation improve surgical precision and patient outcomes.
                </p>
              </div>

              {/* Treatment */}
              <div className="ap-block" data-aos="fade-up" data-aos-delay="350">
                <h3 className="ap-heading">Arthroplasty Procedure & Treatment</h3>
                <ul className="ap-tick-list">
                  <li>Partial or total joint replacement with state-of-the-art prosthetic implants</li>
                  <li>Minimally invasive surgical techniques for faster recovery and reduced pain</li>
                  <li>Post-surgery physiotherapy and rehabilitation for optimal joint function</li>
                  <li>Pain management strategies and joint care guidance</li>
                  <li>Long-term follow-up to monitor implant performance and mobility</li>
                </ul>
                <p>
                  Our expert orthopedic surgeons ensure that each arthroplasty procedure is customized for the patient’s specific condition. With modern surgical technology and experienced care teams, Parhar Hospital is recognized for providing the <strong>best joint arthroplasty surgery</strong> in Phagwara.
                </p>
              </div>

              {/* Conclusion */}
              <div className="ap-conclusion-box" data-aos="fade-up" data-aos-delay="400">
                <h4>Conclusion</h4>
                <p>
                  Arthroplasty surgery at Parhar Hospital is a safe and highly effective solution for joint pain, arthritis, trauma, and deformities. Our skilled surgeons perform <strong>hip and knee arthroplasty surgery</strong> using advanced techniques to ensure minimal pain, faster recovery, and long-lasting joint function.  
                </p>
                <p>
                  Patients looking for <strong>arthroscopy surgery near me</strong> or the <strong>best arthroscopy doctor</strong> in Phagwara can trust Parhar Hospital for personalized care, detailed consultation, and excellent surgical outcomes. Early intervention and proper rehabilitation are key to regaining mobility and improving overall quality of life.
                </p>
              </div>

            </main>

            {/* SIDEBAR */}
            <aside className="ap-sidebar">

              <div className="ap-widget ap-search">
                <input
                  type="search"
                  className="ap-search-input"
                  placeholder="Search..."
                  value={sideSearch}
                  onChange={(e) => setSideSearch(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSideSearch()}
                />
                <button className="ap-search-btn" onClick={handleSideSearch}>
                  Search
                </button>
              </div>

              <ServiceEnquiryForm serviceName="Arthroplasty" />

              <div className="ap-widget ap-services" data-aos="fade-up" data-aos-delay="250">
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
      <Link to="/services/robotic-surgery">Robotic Surgery</Link>
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

export default Arthroplasty;