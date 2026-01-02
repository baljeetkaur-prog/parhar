import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Gynaecology.css";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import ServiceEnquiryForm from "./ServiceEnquiryForm";

const Gynaecology = () => {
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
        <title>Best obstetrics and gynaecology hospital in Phagwara- Punjab</title>
        <meta
          name="description"
          content="Best obstetrics and gynaecology hospital in Phagwara, Punjab. Expert Obstetrics and gynaecology care, maternity services, women’s health, and affordable hospital care."
        />
        <meta
          name="keywords"
          content="Gynaecology, Obstetrics, Pregnancy Care, Infertility Treatment, Women Health, Parhar Hospital Phagwara"
        />
      </Helmet>

      {/* === HERO SECTION === */}
      <section
        className="gyn-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(242,246,246,0.7), rgba(242,246,246,0.7)), url('/images/gynaecology_banner_img.png')`,
        }}
      >
        <div className="gyn-hero-overlay" data-aos="fade-up">
          <h1 className="gyn-title">Obstetrics & Gynaecology Hospital</h1>

          <div className="gyn-breadcrumb" data-aos="fade-up">
            <Link to="/"><span className="gyn-bc-home">Home</span></Link>
            <span className="gyn-bc-sep">››</span>
            <span className="gyn-bc-current">Obstetrics & Gynaecology</span>
          </div>
        </div>
      </section>

      {/* === MAIN CONTENT === */}
      <section className="gyn-section" data-aos="fade-up">
        <div className="gyn-container">
          <div className="gyn-grid">
            <main className="gyn-main">

              {/* Top Image + Intro */}
              <div className="gyn-top" data-aos="fade-up">
                <div className="gyn-top-image" data-aos="fade-up">
                  <img
                    src="/images/gynaecology_top_image.png"
                    alt="Gynaecology care"
                    loading="lazy"
                  />
                </div>

                <div className="gyn-top-paras" data-aos="fade-up">
                <p>
  Parhar Hospital is recognised as one of the <strong>best obstetrics & gynaecology
  hospitals in Phagwara</strong>, offering comprehensive care for women at every stage
  of life. From adolescent health to pregnancy, childbirth, fertility support, and
  menopause management, our department is equipped with advanced facilities and led by
  highly experienced specialists. Our commitment to safety, compassion, and excellence
  has made us the preferred choice for families seeking a <strong>top maternity hospital
  in Phagwara</strong>.
</p>
<p>
  As a <strong>best women’s hospital in Phagwara</strong>, we provide world-class
  services including antenatal care, routine gynaecology, emergency obstetric care,
  laparoscopic surgeries, hormonal disorder treatment, and reproductive health support.
  Whether you are expecting a baby, dealing with menstrual concerns, planning a
  family, or seeking long-term women’s wellness support, Parhar Hospital ensures
  personalised treatment tailored to your needs.
</p>

                </div>
              </div>

              {/* Services */}
              <div className="gyn-block" data-aos="fade-up">
               <h2 className="gyn-subheading">Comprehensive Women’s Health & Maternity Services</h2>

     <ul className="gyn-tick-list" data-aos="fade-up">
  <li>Advanced Pregnancy Care & Regular Antenatal Check-ups</li>
  <li>Normal Delivery, Painless Delivery & Caesarean Section</li>
  <li>High-Risk Pregnancy & Critical Obstetric Management</li>
  <li>Infertility Evaluation, Hormonal Support & Pre-Conception Counselling</li>
  <li>PCOS, PCOD & Menstrual Disorder Treatment</li>
  <li>Management of Fibroids, Cysts, Endometriosis & Uterine Problems</li>
  <li>Laparoscopic & Minimally Invasive Gynaecologic Surgery</li>
  <li>Menopause, Post-Menopause & Bone Health Care</li>
</ul>
              </div>

              {/* Diagnosis Section */}
              <div className="gyn-block" data-aos="fade-up">
                <div className="gyn-grid">
                  <div className="gyn-main" data-aos="fade-up">
                    <h2 className="gyn-subheading">Diagnosis & Gynaecological Screening in Phagwara</h2>

                    <div className="gyn-top-paras" data-aos="fade-up">
                  <p>
  Early detection plays a crucial role in maintaining long-term women’s health.
  At Parhar Hospital, we offer advanced diagnostic facilities including pelvic
  ultrasound, uterine assessments, Pap smears, colposcopy, hormonal profiling,
  breast screening, pregnancy scans, and fertility evaluation. Our focus on
  accurate diagnosis and timely intervention makes us a trusted
  <strong> gynaecologic screening centre</strong> and a leading
  <strong> gynecology hospital in Phagwara</strong>.
</p>
                    </div>
                  </div>

                  <div className="gyn-top-image diagnosis" data-aos="fade-up">
                    <img
                      src="/images/gynaecology_img.png"
                      alt="Gynaecology diagnosis"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              {/* Treatment Section */}
              <div className="gyn-block" data-aos="fade-up">
                <h3 className="gyn-subheading">Gynaecology & Obstetrics Treatments</h3>

                <div className="gyn-treatment-grid">

                  <div className="gyn-treatment-box" style={{ backgroundColor: "#F2F6F6" }} data-aos="fade-up">
                  <h4>Personalised Women’s Healthcare</h4>
                  <p>
  We understand that every woman’s health needs are unique. Our specialists create
  personalised care plans based on age, lifestyle, medical history, pregnancy stage,
  and hormonal health. Whether it’s pregnancy support, menstrual concerns,
  fertility challenges or menopausal symptoms, our team ensures compassionate,
  dedicated and holistic care.
</p>
                  </div>

                  <div className="gyn-treatment-box" style={{ backgroundColor: "#fff" }} data-aos="fade-up">
                    <h4>Advanced Gynaecologic Surgery</h4>
                  <p>
  As a leading <strong>gynecologic surgery hospital in Phagwara</strong>, Parhar Hospital
  specialises in minimally invasive laparoscopic procedures for fibroids, ovarian
  cysts, endometriosis, ectopic pregnancy, infertility-related issues, and
  hysterectomy. Our modern operation theatres ensure precision, reduced pain,
  short hospital stay and faster recovery.
</p>

                  </div>

                  <div className="gyn-treatment-box" style={{ backgroundColor: "#F2F6F6" }} data-aos="fade-up">
                <h4>Pregnancy, Labour & Delivery Care</h4>
<p>
  Parhar Hospital is widely regarded as the <strong>best pregnancy care hospital
  in Phagwara</strong> and a trusted choice for expectant mothers. Our team manages
  normal, high-risk and complicated pregnancies with advanced fetal monitoring,
  24x7 emergency labour care, and safe delivery options. We ensure mother-centric
  care with constant monitoring, emotional support, and immediate newborn care.
</p>
                  </div>

                  <div className="gyn-treatment-box" style={{ backgroundColor: "#fff" }} data-aos="fade-up">
                <h4>Fertility & Reproductive Support</h4>
<p>
  We provide complete fertility evaluation, ovulation tracking, hormonal optimisation,
  lifestyle counselling, and preparation for assisted conception techniques.
  Our goal is to help couples achieve parenthood with safe, reliable and
  evidence-based care.
</p>
                  </div>

                  <div className="gyn-treatment-box" style={{ backgroundColor: "#F2F6F6" }} data-aos="fade-up">
                 <h4>Complete Wellness for Women</h4>
<p>
  From adolescent gynaecology to menopause management, we support women through
  every stage of life. Our services include menstrual health treatment, breast
  examinations, bone health guidance, hormonal therapy and preventive screenings,
  making Parhar Hospital one of the <strong>best women’s hospitals in Phagwara</strong>.
</p>
                  </div>

                </div>
              </div>

              {/* Conclusion */}
              <div className="gyn-conclusion-box" data-aos="fade-up">
                <h4>Conclusion</h4>
          <p>
  Parhar Hospital stands as one of the <strong>best obstetrics & gynaecology hospitals
  in Phagwara</strong>, providing safe, affordable and advanced care for women of all
  ages. With highly experienced obstetricians, gynaecologists and maternity care
  specialists, we ensure the highest standards in pregnancy management, childbirth,
  surgical procedures and lifelong women’s wellness.
</p>
<p>
  Whether you are looking for the <strong>best gyne doctor in Phagwara</strong>, an
  <strong> affordable maternity hospital</strong>, or 24x7 <strong>emergency obstetric
  care in Phagwara</strong>, Parhar Hospital remains the most trusted destination for
  comprehensive and compassionate women’s healthcare.
</p>

              </div>

            </main>

            {/* SIDEBAR */}
            <aside className="gyn-sidebar" data-aos="fade-up">

              <div className="gyn-widget gyn-search">
                <input
                  type="search"
                  className="gyn-search-input"
                  placeholder="Search..."
                  value={sideSearch}
                  onChange={(e) => setSideSearch(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSideSearch()}
                />
                <button className="gyn-search-btn" onClick={handleSideSearch}>
                  Search
                </button>
              </div>

              <ServiceEnquiryForm serviceName="Gynaecology" />

              <div className="gyn-widget gyn-services" data-aos="fade-up">
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
      <Link to="/services/robotic-surgery">Robotic Surgery</Link>
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

export default Gynaecology;