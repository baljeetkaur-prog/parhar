import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Paediatric.css";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import ServiceEnquiryForm from "./ServiceEnquiryForm";

const Paediatric = () => {
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
        <title>Best Paediatric orthopaedics surgeon in Phagwara</title>
        <meta
          name="description"
          content="Discover the best Paediatric Orthopaedics surgeon in Phagwara. Trusted doctor at a top hospital, delivering expert care for children’s bone and joint needs."
        />
        <meta
          name="keywords"
          content="Paediatric orthopaedics, Paediatric orthopaedics near me, Best Pediatric orthopedic doctor in Phagwara, surgeon, Pediatric fracture specialist"
        />
      </Helmet>

      {/* === HERO SECTION === */}
 <section
  className="pa-hero"
  style={{
    backgroundImage: `linear-gradient(rgba(242,246,246,0.7), rgba(242,246,246,0.7)), url('/images/paediatric_banner_img.png')`,
  }}
>
  <div className="pa-hero-overlay" data-aos="fade-up">
    <h1 className="pa-title">Paediatric Orthopedics surgeon</h1>

    <div className="pa-breadcrumb">
      <Link to="/"><span className="pa-bc-home">Home</span></Link>
      <span className="pa-bc-sep">››</span>
      <span className="pa-bc-current">Paediatric Orthopedics</span>
    </div>
  </div>
</section>

      {/* === MAIN CONTENT AREA === */}
      <section className="pa-section">
        <div className="pa-container">
          <div className="pa-grid">
            {/* LEFT: MAIN CONTENT */}
            <main className="pa-main">
              {/* Top image + paragraphs */}
              <div className="pa-top">
                <div className="pa-top-image" data-aos="fade-up">
                  <img
                    src="/images/paediatric_main_img.png"
                    alt="Paediatric Orthopaedics Overview"
                    loading="lazy"
                  />
                </div>

                <div className="pa-top-paras" data-aos="fade-up">
                  <p>
                    Paediatric Orthopaedics is dedicated to diagnosing, treating, and managing bone, joint, and growth disorders in children. At Parhar Hospital, our team of specialists provides compassionate care tailored to each child, ensuring safety, comfort, and effective recovery.
                  </p>

                  <p>
                    From congenital deformities to fractures, scoliosis, limb length differences, and sports injuries, our pediatric fracture specialists handle all musculoskeletal issues with precision. We ensure the best outcomes with minimally invasive and child-friendly procedures.
                  </p>

                  <p>
                    Using advanced diagnostics, personalized treatment plans, and specialized rehabilitation programs, we focus on promoting healthy growth, mobility, and long-term bone health for every child.
                  </p>
                </div>
              </div>

              {/* Benefits */}
              <div className="pa-block" data-aos="fade-up">
                <h2 className="pa-subheading">Why Choose Parhar Hospital for Paediatric Orthopaedics?</h2>
                <ul className="pa-tick-list">
                  <li>Early detection and treatment of bone and growth abnormalities</li>
                  <li>Child-friendly and minimally invasive procedures</li>
                  <li>Expert pediatric fracture specialists</li>
                  <li>Comprehensive physiotherapy and recovery programs</li>
                  <li>Support for congenital and acquired musculoskeletal conditions</li>
                  <li>Guidance and care for parents and families</li>
                </ul>
              </div>

              {/* Example two-column section */}
              <div className="pa-block" data-aos="fade-up">
                <h3 className="pa-subheading">Common Conditions We Treat</h3>
                <div className="pa-two-col">
                  <div className="pa-two-left" data-aos="fade-up">
                    <h4 className="pa-mini-title">Congenital & Growth Disorders</h4>
                    <div className="pa-top-paras">
                      <p>
                        Our experts manage clubfoot, hip dysplasia, scoliosis, limb length discrepancies, and other congenital deformities. Timely intervention ensures proper growth, mobility, and long-term musculoskeletal health.
                      </p>
                    </div>
                  </div>

                  <div className="pa-two-right" data-aos="fade-up">
                    <img
                      src="/images/pae1.jpeg"
                      alt="Child Orthopaedic Conditions"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              {/* Advanced care / robotic etc. */}
              <div className="pa-block">
                <div className="pa-two-col pa-special-layout">
                  <div className="pa-two-left pa-image-left" data-aos="fade-up">
                    <img
                      src="/images/pae2.png"
                      alt="Advanced Paediatric Treatments"
                      loading="lazy"
                    />
                  </div>

                  <div className="pa-two-right pa-text-right" data-aos="fade-up">
                    <h4 className="pa-mini-title">Advanced Pediatric Treatments</h4>
                    <div className="pa-top-paras">
                      <p>
                        We offer cutting-edge treatments including minimally invasive surgeries, guided correction of deformities, and modern implant technologies. Our goal is to restore function and mobility quickly, ensuring children can enjoy a healthy, active lifestyle.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Conclusion box */}
              <div className="pa-conclusion-box" data-aos="fade-up">
                <h4>Conclusion</h4>
            <p>
  Parhar Hospital is your trusted destination for comprehensive paediatric orthopaedic care. 
  From newborns to adolescents, our team provides precise diagnosis, advanced treatments, and 
  child-focused rehabilitation aimed at restoring full mobility and confidence. Whether your 
  child is recovering from a fracture, managing a congenital condition, or requires long-term 
  orthopaedic support, our specialists ensure personalized care tailored to their age, growth 
  needs, and comfort. 
  <br />
  At Parhar Hospital, we remain committed to helping every child grow healthier, move freely, 
  and enjoy an active, independent life. Your child’s well-being is our highest priority, and 
  we strive to deliver the best paediatric orthopaedic care with compassion, safety, and 
  excellence.
</p>
              </div>
            </main>

            {/* RIGHT: SIDEBAR */}
            <aside className="pa-sidebar">
              {/* Search */}
              <div className="pa-widget pa-search" data-aos="fade-up">
                <input
                  type="search"
                  className="pa-search-input"
                  placeholder="Search..."
                  value={sideSearch}
                  onChange={(e) => setSideSearch(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSideSearch()}
                />

                <button className="pa-search-btn" onClick={handleSideSearch}>
                  Search
                </button>
              </div>

              {/* Enquiry form */}
              <ServiceEnquiryForm serviceName="Paediatric Orthopaedics" />

              {/* Services box */}
              <div className="pa-widget pa-services" data-aos="fade-up">
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
      <Link to="/services/robotic-surgery">Robotic Surgery</Link>
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

export default Paediatric;