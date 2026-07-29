import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./BoneInfection.css";
import { Helmet } from "react-helmet";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ServiceEnquiryForm from "./ServiceEnquiryForm";

const BoneInfection = () => {
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
        <title>Bone Infections: Causes, Symptoms & Treatment at Parhar Hospital, Phagwara</title>
        <meta
          name="description"
          content="Learn about bone infections (osteomyelitis), their causes, symptoms, diagnosis, and expert treatment options at Parhar Hospital, Phagwara. Get proper orthopedic care for fast recovery."
        />
        <meta
          name="keywords"
          content="Bone Infection, Osteomyelitis, Bone Infection Treatment, Parhar Hospital Phagwara, Orthopedic Care"
        />
      </Helmet>
      {/* === HERO SECTION === */}
      <section
        className="bi-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(242,246,246,0.7), rgba(242,246,246,0.7)), url('/images/bone_infections.png')`,
        }}
      >
        <div className="bi-hero-overlay" data-aos="fade-up">
          <h1 className="bi-title">Bone Infections</h1>

          <div className="bi-breadcrumb">
            <span className="bi-bc-home">Home</span>
            <span className="bi-bc-sep">››</span>
            <span className="bi-bc-current">Bone Infections</span>
          </div>
        </div>
      </section>

      {/* === MAIN SECTION === */}
      <section className="bi-section">
        <div className="bi-container">
          <div className="bi-grid">

            {/* LEFT CONTENT */}
            <main className="bi-main">

              {/* Top Block */}
              <div className="bi-top" data-aos="fade-up">
                <div className="bi-top-image">
                  <img
                    src="/images/bone_infection_second.png"
                    alt="Bone Infection Overview"
                    loading="lazy"
                  />
                </div>

                <div className="bi-top-paras">
                  <p>
                    Bone Infections, also known as osteomyelitis, is common among people.
                    It is vital to diagnose it early for proper treatment. Bone infection
                    treatment in India helps you recover quickly. Here are the causes and
                    symptoms of bone infection.
                  </p>
                </div>
              </div>

              {/* Causes Block */}
              <div className="bi-block" data-aos="fade-up" data-aos-delay="100">
                <h3 className="bi-heading">Causes of Bone Infection</h3>

                <div className="bi-row">
                  <div className="bi-left">
                    <p>
                      <p className="bi-smallheading">Infections caused by bacteria or fungi</p>
                      Most bone infections are brought on by bacteria like
                      <em> Staphylococcus aureus</em>. Fungal infections can also occur,
                      especially in people with weakened immune systems.
                    </p>
                  </div>

                  <div className="bi-right">
                    <img
                      src="/images/bone_infection_1.png"
                      alt="Causes"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              {/* Block 2 */}
              <div className="bi-flex-block-two" data-aos="fade-up" data-aos-delay="150">
                <div className="bi-flex-two-image">
                  <img
                    src="/images/bone_infection_2.png"
                    alt="Open Wound"
                    loading="lazy"
                  />
                </div>

                <div className="bi-flex-two-text">
                  <p className="bi-smallheading">Open Wounds or Injuries</p>
                  <p>
                    Open fractures, surgical wounds, or trauma can expose the bone,
                    allowing bacteria or fungi to enter and infect it.
                  </p>
                </div>
              </div>

              {/* Block 3 */}
              <div className="bi-flex-block-three" data-aos="fade-up" data-aos-delay="200">
                <div className="bi-flex-three-text">
                  <p className="bi-smallheading">Bloodstream Infection</p>
                  <p>
                    Infection elsewhere in the body can spread to the bone through the bloodstream.
                  </p>
                </div>

                <div className="bi-flex-three-image">
                  <img
                    src="/images/bone_infection_3.png"
                    alt="Bloodstream Infection"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Block 4 */}
              <div className="bi-flex-block-four" data-aos="fade-up" data-aos-delay="250">
                <div className="bi-flex-four-image">
                  <img
                    src="/images/bone_infection_4.png"
                    alt="Chronic Disease"
                    loading="lazy"
                  />
                </div>

                <div className="bi-flex-four-text">
                  <p className="bi-smallheading">Chronic Diseases</p>
                  <p>
                    Diabetes, peripheral artery disease, and other chronic conditions
                    increase the risk of bone infection.
                  </p>
                </div>
              </div>

              {/* Block 5 */}
              <div className="bi-flex-block-five" data-aos="fade-up" data-aos-delay="300">
                <div className="bi-flex-five-text">
                  <p className="bi-smallheading">Prosthetic</p>
                  <p>
                    Infections can develop in artificial joints if bacteria enter
                    during surgery or spread from another part of the body.
                  </p>
                </div>

                <div className="bi-flex-five-image">
                  <img
                    src="/images/bone_infection_5.png"
                    alt="Prosthetic Infection"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Symptoms */}
              <div className="bi-block" data-aos="fade-up" data-aos-delay="350">
                <h3 className="bi-heading">Symptoms of Bone Infections</h3>

                <p className="bi-symptoms-intro">
                  Symptoms vary depending on severity and location:
                </p>

                <ul className="bi-tick-list">
                  <li>Intense pain in the area</li>
                  <li>Swelling, warmth & redness</li>
                  <li>Limited movement</li>
                  <li>Fever & chills</li>
                  <li>Pus or drainage</li>
                  <li>Difficulty walking or weight-bearing</li>
                  <li>Identifying a Bone Infection</li>
                </ul>
              </div>

              {/* Diagnosis */}
              <div className="bi-block" data-aos="fade-up" data-aos-delay="400">
                <h3 className="bi-heading">Diagnosis of Bone Infection</h3>

                <p className="bi-symptoms-intro">
                  Doctors use the following tests:
                </p>

                <ul className="bi-tick-list">
                  <li>X-rays, bone scans, CT or MRI</li>
                  <li>Blood tests & cultures</li>
                  <li>Bone biopsy</li>
                </ul>
              </div>

              {/* Treatment */}
              <div className="bi-block" data-aos="fade-up" data-aos-delay="450">
                <h3 className="bi-heading">Treatment Options for Bone Infection</h3>

                <p className="bi-symptoms-intro">
                  Treatment may include:
                </p>

                <ul className="bi-tick-list">
                  <li>Antibiotics (oral, IV, or direct)</li>
                  <li>Surgery to remove infected tissue</li>
                  <li>Pain management, wound care & physiotherapy</li>
                  <li>Joint revision for infected prosthetics</li>
                </ul>
              </div>

              {/* Conclusion */}
              <div className="bi-conclusion-box" data-aos="fade-up" data-aos-delay="500">
                <h4>Conclusion</h4>
                <p>
                  If untreated, bone infections can cause serious complications.
                  Early diagnosis by Dr. Avtar Singh ensures fast and effective recovery.
                </p>
              </div>

            </main>

            {/* === SIDEBAR === */}
            <aside className="bi-sidebar">

          <div className="bi-widget bi-search">
  <input
    type="search"
    className="bi-search-input"
    placeholder="Search..."
    value={sideSearch}
    onChange={(e) => setSideSearch(e.target.value)}
    onKeyDown={(e) => e.key === "Enter" && handleSideSearch()}
  />
  <button className="bi-search-btn" onClick={handleSideSearch}>
    Search
  </button>
</div>

            <ServiceEnquiryForm serviceName="Bone Infection" />

              <div className="bi-widget bi-services" data-aos="fade-up" data-aos-delay="250">
                <div className="bi-widget-header">Our Services</div>
                <ul className="bi-services-list">
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

export default BoneInfection;
