import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./IVF.css";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import ServiceEnquiryForm from "./ServiceEnquiryForm";

const IVF = () => {
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
      easing: "ease-out",
      once: true,
      offset: 40,
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Best IVF Hospital in Phagwara|Best IVF Doctor in Phagwara</title>
        <meta
          name="description"
          content="Best IVF Hospital in Phagwara with Advanced fertility care from the Best IVF Doctor in Phagwara. Parhar Hospital Phagwara delivers trusted Female treatment and personalized care."
        />
        <meta
          name="keywords"
          content="Best IVF center in Phagwara, IVF hospital in Phagwara, Best IVF doctor in Phagwara, IVF Specialist in Phagwara, Fertility clinic in Phagwara, Advanced IVF treatment, Female infertility treatment, Male infertility treatment, IVF treatment for PCOS, IVF treatment for blocked fallopian tubes, IVF treatment for unexplained infertility, Safe IVF treatment, Advanced infertility treatment, IVF treatment cost, IVF success rate"
        />
      </Helmet>

      {/* HERO */}
      <section
        className="ivf-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(242,246,246,0.7), rgba(242,246,246,0.7)), url('/images/ivf_banner1.png')`,
        }}
      >
        <div className="ivf-hero-overlay" data-aos="fade-up">
          <h1 className="ivf-title">In Vitro Fertilization (IVF)</h1>
          <div className="ivf-breadcrumb">
            <Link to="/"><span className="ivf-bc-home">Home</span></Link>
            <span className="ivf-bc-sep">››</span>
            <span className="ivf-bc-current">In Vitro Fertilization (IVF)</span>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="ivf-section">
        <div className="ivf-container">
          <div className="ivf-grid">

            {/* MAIN */}
            <main className="ivf-main">
              <div className="ivf-top">
                <div className="ivf-top-image" data-aos="fade-up" data-aos-delay="0">
                  <img src="/images/ivf_banner2.png" alt="IVF Treatment" loading="lazy" />
                </div>

                <div className="ivf-top-paras">
                  <p data-aos="fade-up" data-aos-delay="100">
                    Parhar Hospital, Phagwara is recognized as the <strong>best IVF center in Phagwara</strong>, offering comprehensive advanced IVF treatment and infertility care. Our fertility hospital/clinic in Phagwara is dedicated to helping couples achieve parenthood through safe and effective solutions for both female infertility treatment and male infertility treatment.
                  </p>

                  <p data-aos="fade-up" data-aos-delay="200">
                    IVF is a specialized procedure in which eggs and sperm are combined outside the body, and the resulting embryo is transferred into the uterus. At Parhar Hospital, our IVF specialist in Phagwara designs personalized treatment plans for conditions like PCOS, blocked fallopian tubes, and unexplained infertility, ensuring high precision and optimized IVF success rates.
                  </p>

                  <p data-aos="fade-up" data-aos-delay="300">
                    With experienced best IVF doctors in Phagwara, state-of-the-art labs, and compassionate care, Parhar Hospital ensures safe, ethical, and effective advanced infertility treatment for every patient. We also provide transparent guidance about IVF treatment cost and expected outcomes.
                  </p>
                </div>
              </div>

              {/* BENEFITS */}
              <div className="ivf-block" data-aos="fade-up" data-aos-delay="400">
                <h2 className="ivf-subheading">Why Choose Parhar IVF Hospital in Phagwara </h2>
                <ul className="ivf-tick-list">
                  <li data-aos="fade-up" data-aos-delay="450">Individualized IVF cycles tailored by top IVF specialists in Phagwara</li>
                  <li data-aos="fade-up" data-aos-delay="500">Modern fertility laboratory with advanced reproductive technology</li>
                  <li data-aos="fade-up" data-aos-delay="550">Expert IVF doctors in Phagwara and embryologists</li>
                  <li data-aos="fade-up" data-aos-delay="600">Safe and ethical IVF treatment following international standards</li>
                  <li data-aos="fade-up" data-aos-delay="650">Supportive counselling for female and male infertility treatment</li>
                  <li data-aos="fade-up" data-aos-delay="700">Clear guidance on IVF treatment cost and monitoring of IVF success rate</li>
                </ul>
              </div>

              {/* DIFFERENCE */}
              <div className="ivf-block" data-aos="fade-up" data-aos-delay="750">
                <h3 className="ivf-subheading">
                  Conventional Fertility Treatments and Advanced IVF Care
                </h3>

                <div className="ivf-two-col">
                  <div className="ivf-two-left" data-aos="fade-up" data-aos-delay="800">
                    <h4 className="ivf-mini-title">Conventional Fertility Approaches</h4>
                    <p>
                      Conventional fertility treatments include medications, lifestyle changes, hormonal therapy, and procedures like IUI. These may help mild infertility but are less effective for conditions like blocked fallopian tubes, low sperm count, PCOS, advanced maternal age, or unexplained infertility.
                    </p>
                    <p>
                      While these are usually first-line treatments, outcomes can be uncertain and may require repeated cycles, leading to emotional stress and delays in achieving pregnancy.
                    </p>
                  </div>

                  <div className="ivf-two-right" data-aos="fade-up" data-aos-delay="850">
                    <img src="/images/ivf_img1.png" alt="IVF comparison" />
                  </div>
                </div>
              </div>

              {/* IVF TECHNOLOGY */}
              <div className="ivf-block">
                <div className="ivf-two-col ivf-special-layout">
                  <div className="ivf-two-left ivf-image-left" data-aos="fade-up" data-aos-delay="900">
                    <img src="/images/ivf_img2.png" alt="IVF Laboratory" />
                  </div>

                  <div className="ivf-two-right ivf-text-right" data-aos="fade-up" data-aos-delay="950">
                    <h4 className="ivf-mini-title">Advanced IVF Technology</h4>
                    <p>
                      Our <strong>IVF hospital in Phagwara</strong> uses scientifically advanced techniques for precise and effective <strong>advanced IVF treatment</strong>. The process includes controlled ovarian stimulation, egg retrieval, fertilization in the lab, and careful embryo transfer.
                    </p>
                    <p>
                      Parhar Hospital ensures strict quality protocols and monitoring at every step. Each IVF procedure is performed with accuracy to maximize embryo viability and improve the IVF success rate.
                    </p>
                  </div>
                </div>
              </div>

              {/* WHY PARHAR */}
              <div className="ivf-block">
                <div className="ivf-two-col">
                  <div className="ivf-two-left" data-aos="fade-up" data-aos-delay="1000">
                    <h4 className="ivf-mini-title">IVF Care at Parhar Hospital, Phagwara</h4>
                    <p>
                      From initial evaluation to post-treatment follow-up, our fertility hospital/clinic in Phagwara offers personalized guidance. Emotional counselling and supportive care are provided for both female infertility treatment and male infertility treatment, helping patients navigate the IVF journey with confidence.
                    </p>
                  </div>

                  <div className="ivf-two-right" data-aos="fade-up" data-aos-delay="1050">
                    <img src="/images/ivf_img3.jpg" alt="IVF care" />
                  </div>
                </div>
              </div>

              {/* CONCLUSION */}
              <div className="ivf-conclusion-box" data-aos="fade-up" data-aos-delay="1100">
                <h4>Conclusion</h4>
                <p>
                  IVF at <strong>Parhar Hospital, Phagwara</strong> represents comprehensive, safe, and effective fertility care. Our program addresses <strong>female infertility treatment</strong>, <strong>male infertility treatment</strong>, PCOS, <strong>blocked fallopian tubes</strong>, and <strong>unexplained infertility</strong> with advanced techniques and personalized care.
                </p>
                <p>
                  With top <strong>IVF doctors in Phagwara</strong>, modern laboratories, and compassionate support, Parhar Hospital is a trusted choice for <strong>advanced IVF treatment</strong>. Patients are guided clearly about <strong>IVF treatment cost</strong> and supported to achieve optimal <strong>IVF success rates</strong> while maintaining safety and ethical standards.
                </p>
              </div>
            </main>

            {/* SIDEBAR */}
            <aside className="ivf-sidebar" data-aos="fade-up" data-aos-delay="1150">

              {/* SEARCH */}
              <div className="ivf-widget ivf-search" data-aos="fade-up" data-aos-delay="1200">
                <input
                  type="search"
                  placeholder="Search..."
                  value={sideSearch}
                  onChange={(e) => setSideSearch(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSideSearch()}
                />
                <button onClick={handleSideSearch}>Search</button>
              </div>

              {/* ENQUIRY */}
              <ServiceEnquiryForm serviceName="IVF Treatment" />

              {/* SERVICES */}
              <div className="ivf-widget ivf-services" data-aos="fade-up" data-aos-delay="1250">
                <div className="ivf-widget-header">Explore Other Services</div>
                <ul className="ivf-services-list">
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
                    <Link to="/services/robotic-surgery">Robotic Surgery</Link>
                  </li>
                  <li>
                    <Link to="/services/obstetrics-and-gynaecology">Obstetrics & Gynecology</Link>
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

export default IVF;