// React component with AOS + slide-from-bottom added
// Only AOS attributes and initialization added — nothing else changed.

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./BoneTumour.css";
import { Helmet } from "react-helmet";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ServiceEnquiryForm from "./ServiceEnquiryForm";

const BoneTumour = () => {
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

  const handleBoneTumourEnquiry = (e) => {
    e.preventDefault();
    alert("Enquiry submitted (demo). Connect this to backend.");
  };

  return (
    <>
       <Helmet>
        <title>Bone Tumour Treatment at Parhar Hospital, Phagwara</title>
        <meta
          name="description"
          content="Expert bone tumour diagnosis and treatment at Parhar Hospital, Phagwara. Advanced orthopaedic care with multidisciplinary approach."
        />
        <meta
          name="keywords"
          content="Bone Tumours, Orthopedic Tumor Treatment, Bone Cancer, Benign Bone Tumours, Malignant Bone Tumours, Parhar Hospital, Phagwara"
        />
      </Helmet>
      {/* === HERO SECTION === */}
      <section
        className="bt-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(242,246,246,0.7), rgba(242,246,246,0.7)), url('/images/bone_tumour.png')`,
        }}
      >
        <div className="bt-hero-overlay" data-aos="fade-up">
          <h1 className="bt-title">Bone Tumours</h1>

          <div className="bt-breadcrumb" data-aos="fade-up">
            <span className="bt-bc-home">Home</span>
            <span className="bt-bc-sep">››</span>
            <span className="bt-bc-current">Bone Tumours</span>
          </div>
        </div>
      </section>

      {/* === MAIN CONTENT AREA === */}
      <section className="bt-section" data-aos="fade-up">
        <div className="bt-container">
          <div className="bt-grid">
            <main className="bt-main">

              {/* Top Image + Intro Paragraph */}
              <div className="bt-top" data-aos="fade-up">
                <div className="bt-top-image" data-aos="fade-up">
                  <img src="/images/bone_tumour_banner2.png" alt="Bone Tumour overview" loading="lazy" />
                </div>

                <div className="bt-top-paras" data-aos="fade-up">
                  <p>
                    Getting diagnosed with a bone tumour can be excruciatingly painful, difficult and stressful.
                    It is treatable but with the right approach and early diagnosis. It is vital that you understand
                    everything about bone tumours to get the proper treatment. With a multidisciplinary approach,
                    state-of-the-art equipment, and a caring staff, we work to provide our patients with the best
                    orthopaedic treatment in India.
                  </p>
                </div>
              </div>

              {/* Types of Bone Tumours */}
              <div className="bt-block" data-aos="fade-up">
                <h3 className="bt-subheading">Types of Bone Tumours Treatment in India</h3>

                <ul className="bt-tick-list" data-aos="fade-up">
                  <li>Benign (non-cancerous) tumours</li>
                  <li>Malignant (cancerous) tumours</li>
                </ul>

                <div className="bt-top-paras" data-aos="fade-up">
                  <p>
                    The two primary types of bone tumours are Benign (non-cancerous) and Malignant (cancerous)
                    tumour, and both of these have further classifications too. Osteochondromas and osteoid osteomas
                    are frequent benign bone tumours, whereas osteosarcoma, Ewing sarcoma, and chondrosarcoma are
                    malignant bone tumours. We have a great deal of expertise in identifying and managing different
                    kinds of bone tumours.
                  </p>
                </div>
              </div>

              {/* Diagnosis Section */}
              <div className="bt-block" data-aos="fade-up">
                <div className="bt-grid">
                  <div className="bt-main" data-aos="fade-up">
                    <h3 className="bt-subheading">Diagnosis of Bone Tumour</h3>

                    <div className="bt-top-paras" data-aos="fade-up">
                      <p>
                        The creation of a successful Bone tumours treatment in India depends on an accurate diagnosis.
                        X-rays, CT scans, and MRI scans are some of the sophisticated imaging methods we use to assess
                        the tumour’s position, size, and features. In some circumstances, a biopsy may be required to
                        identify the tumour’s malignancy or benignity.
                      </p>
                    </div>
                  </div>

                  <div className="bt-top-image diagnosis" data-aos="fade-up">
                    <img src="/images/bonetumourimg.png" alt="Bone tumour diagnosis" loading="lazy" />
                  </div>
                </div>
              </div>

              {/* Treatment Section */}
              <div className="bt-block" data-aos="fade-up">
                <h3 className="bt-subheading">Treatment of Bone Tumours</h3>

                <div className="bt-treatment-grid">

                  <div className="bt-treatment-box" style={{ backgroundColor: "#F2F6F6" }} data-aos="fade-up">
                    <h4>Individualised Care</h4>
                    <p>We recognise that every patient has a unique scenario. Our strategy for treating bone tumours includes a thorough assessment of your situation, taking into account elements including the kind, location, size, and general health of the tumour. We create individualised treatment programmes that are catered to your particular needs, putting equal emphasis on maintaining limb function and achieving the best possible tumour management.</p>
                  </div>

                  <div className="bt-treatment-box" style={{ backgroundColor: "#fff" }} data-aos="fade-up">
                    <h4>Surgical Expertise</h4>
                    <p>Our orthopaedic doctors have advanced surgical skills and specialise in performing complex bone tumour procedures. In all of our procedures, including limb-sparing operations, joint reconstructions, bone transplants, and tumour resections, we work to get the most remarkable results while keeping as much healthy tissue as we can.</p>
                  </div>

                  <div className="bt-treatment-box" style={{ backgroundColor: "#F2F6F6" }} data-aos="fade-up">
                    <h4>Radiation Therapy and Chemotherapy</h4>
                    <p>We work closely with oncologists to develop thorough treatment programmes for malignant bone tumours. This may entail chemotherapy to treat any potential metastases or radiation therapy to target cancer directly. Your care will be comprehensive and well-coordinated throughout the medical process thanks to our cooperative strategy.</p>
                  </div>

                  <div className="bt-treatment-box" style={{ backgroundColor: "#fff" }} data-aos="fade-up">
                    <h4>Recovery and Support</h4>
                    <p>We understand that the journey doesn’t end with surgery or medical treatment. Following treatment for a bone tumour, our rehabilitation professionals are committed to assisting you in regaining function, mobility, and quality of life. We provide specialised rehabilitation plans that put an emphasis on pain relief, strengthening, and retrieving your capacity for daily tasks.</p>
                  </div>

                  <div className="bt-treatment-box" style={{ backgroundColor: "#F2F6F6" }} data-aos="fade-up">
                    <h4>Patient-Centric Care</h4>
                    <p>We place a high value on candid communication, sympathetic treatment, and patient participation in decision-making. By giving them thorough information about their disease, available treatments, and anticipated results, we aim to inspire our patients. At every step of the process, our staff is here to help you and your loved ones.</p>
                  </div>

                </div>
              </div>

              <div className="bt-conclusion-box" data-aos="fade-up">
                <h4>Conclusion</h4>
                <p>
                 Bone tumours can create a critical condition, and we are here to offer professional treatment, support, and direction throughout your path as an orthopaedic physician with a focus on bone tumours. Dr. Avtar Singh makes sure to provide the utmost care and specialised treatment to each patient.
                </p>
              </div>

            </main>

            {/* SIDEBAR */}
            <aside className="bt-sidebar" data-aos="fade-up">
        <div className="bt-widget bt-search">
  <input
    type="search"
    className="bt-search-input"
    placeholder="Search..."
    value={sideSearch}
    onChange={(e) => setSideSearch(e.target.value)}
    onKeyDown={(e) => e.key === "Enter" && handleSideSearch()}
  />
  <button className="bt-search-btn" onClick={handleSideSearch}>
    Search
  </button>
</div>

       <ServiceEnquiryForm serviceName="Bone Tumour" />

              <div className="bt-widget bt-services" data-aos="fade-up">
                <div className="bt-widget-header">Our Services</div>
                <ul className="bt-services-list">
                  <li>Robotic Knee Replacement</li>
                  <li>Arthritis</li>
                  <li>Joint Replacement</li>
                  <li>Hip Replacement</li>
                  <li>Bone Tumours</li>
                  <li>Sports and Ligament Injury</li>
                  <li>Fractures</li>
                  <li>Bone Infections</li>
                </ul>
              </div>
            </aside>

          </div>
        </div>
      </section>
    </>
  );
};

export default BoneTumour;
