import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./DoctorProfile.css"; // drprofile CSS

const DoctorProfile = ({ doctorData }) => {
  const { name } = useParams();

  // Convert URL slug to lowercase and spaces for comparison
const formattedName = name.toLowerCase(); // slug from URL

const doctor = doctorData.find((d) =>
  d.name
    .toLowerCase()
    .replace(/\./g, '')         // remove dots
    .replace(/\s+/g, '-')       // replace spaces with hyphens
    === formattedName
);

  // ✅ useEffect must be called unconditionally
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out",
      once: true,
    });
  }, []);

  const services = [
    "Joint Replacement Surgery",
    "Arthroscopy",
    "Fracture Treatment",
    "Spine Surgery",
    "Bone Infection Treatment",

  ];

  const handleEnquiry = (e) => {
    e.preventDefault();
    alert("Enquiry submitted (demo). Connect backend here.");
  };

  return (
    <>
      {!doctor ? (
        <p style={{ textAlign: "center", marginTop: "50px" }}>Doctor not found.</p>
      ) : (
        <>
          <Helmet>
            <title>{doctor.name} - Profile | Parhar Hospital Phagwara</title>
            <meta
              name="description"
              content={`Know more about ${doctor.name}, ${doctor.description} at Parhar Hospital, Phagwara.`}
            />
          </Helmet>

          {/* HERO */}
          <section
            className="drprofile-hero"
            style={{
              backgroundImage: `linear-gradient(rgba(242,246,246,0.7), rgba(242,246,246,0.7)), url('${doctor.banner}')`,
            }}
          >
            <div className="drprofile-hero-overlay" data-aos="fade-up">
              <h1 className="drprofile-hero-title">{doctor.name}</h1>
              <div className="drprofile-hero-breadcrumb">
                <Link to="/"><span className="drprofile-breadcrumb-home">Home</span></Link>
                <span className="drprofile-breadcrumb-separator">››</span>
                <span className="drprofile-breadcrumb-current">Doctor Profile</span>
              </div>
            </div>
          </section>

          {/* MAIN CONTENT */}
          <section className="drprofile-section">
            <div className="drprofile-container">
              <div className="drprofile-grid">
                
                {/* LEFT: Doctor Content */}
              <div className="drprofile-left" data-aos="fade-up">
  <h3 className="drprofile-small-heading">About the Doctor</h3>
  <h2 className="drprofile-main-heading">{doctor.name}</h2>
  <p className="drprofile-para">{doctor.designation}</p>

  {/* Paragraphs */}
  {doctor.leftContent.paragraphs.map((para, idx) => (
    <p key={idx} className="drprofile-para">{para}</p>
  ))}

  {/* Points / Tick List */}
  <ul className="drprofile-tick-list">
    {doctor.leftContent.points.map((point, idx) => (
      <li key={idx}>{point}</li>
    ))}
  </ul>

  {/* Extra Paragraph */}
  <p className="drprofile-para">{doctor.leftContent.extraParagraph}</p>

  {/* Experience Card */}
  <div className="drprofile-exp-card">
    <h2>{doctor.experience} Years of Experience</h2>
    <p>{doctor.designation}</p>
  </div>
</div>

                {/* RIGHT: Services + Enquiry */}
<aside className="drprofile-right" data-aos="fade-up">
  {/* Doctor Image */}
  <div
    style={{
      backgroundColor: "#f3f4f6", // light grey
      padding: "0px 0",

      textAlign: "center",
      borderRadius: "4px"

    }}
  >
    <img
      src={
        doctor.name.toLowerCase().includes("rohan")
          ? "/images/parhar-doctor.png"
          : doctor.name.toLowerCase().includes("parul")
          ? "/images/parul-parhar.png"
          : doctor.name.toLowerCase().includes("amrik")
          ? "/images/amrik-parhar.png"
          : "/images/default-doctor.png"
      }
      alt={doctor.name}
      style={{ width: "100%" }}
    />
  </div>
</aside>



              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default DoctorProfile;
