import "./FacultyPositions.css";
import { FaArrowRight, FaCalendarCheck, FaPhoneAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const FacultyPositions = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out",
      once: true,
      offset: 40,
    });
  }, []);

  const facultyPositions = [
    "National Faculty at DOACON in November 2022",
    "Robotics Workshop and Neck Femur Workshop and Symposium",
    "National Faculty IOACON in December 2022 (Amritsar)",
    "National Faculty ROBOCON in February 2023",
    "Faculty at POACON in February 2023",
    "National Faculty at MOACON in October 2023",
    "National Faculty at Solapur Trauma Meet 2024",
    "National Faculty at POACON in 2024 (Ludhiana)",
    "Faculty at NZOACON in Patiala 2024",
    "First Surgeon to perform Fully Active & Automatic Robotic Joint Replacement in Punjab",
    "National Faculty at 6th Annual Congress (Asia Pacific Orthopaedic Association) in April 2024",
    "Faculty at MASTERS’ COURSE DELHI CHAPTER 1, August 2024",
    "National Faculty at NAILSCON, September 2024",
    "National Faculty TRAUMACON 2024, Mumbai",
    "National Faculty at AMRITSAR TRAUMA CONCLAVE 9/10 NOV 2024",
    "National Faculty @ 1ST Revision Arthroplasty Conference, New Delhi 14/15 Dec 2024",
    "National Faculty at POACON in 2025, Mohali",
    "AO Faculty @ AO Basic Course of Fracture Management, Chandigarh",
    "Faculty at 7TH INTERNATIONAL CONFERENCE 'APOA-YSF', Coimbatore, Feb 2025",
    "Meril Academy Faculty, Subvastus approach without tourniquet for Robotic TKR",
    "National Faculty at 11th GOFCON, March 2025",
    "National Faculty @ 18th ISHKS, Mumbai, April 2025",
    "National Faculty @ 2nd PGI ARTHROPLASTY 2025, May 2025",
    "National Faculty @ Traumacon 2025, Mumbai",
    "National Faculty @ GenNext Arthroplasty Course 2025, Delhi",
    "National Faculty @ NAILSCON 2025, Coimbatore",
    "National Faculty @ AO TRAUMA National Conference OTTSCON 2025, Mangalore",
    "National Faculty @ CEZCON 2025, Siliguri",
    "National Faculty @ 2 PKHC (Punjab Knee & Hip Course) September 2025",
  ];

  const leftColumn = facultyPositions.slice(0, 15);
  const rightColumn = facultyPositions.slice(15);

  return (
    <>
<Helmet>
  <title>Faculty Positions - Parhar Hospital, Phagwara Punjab</title>
  <meta
    name="description"
    content="Explore the faculty positions and achievements of Dr. Rohan Singh Parhar and team at Parhar Hospital, Punjab. National and international recognition in orthopaedics."
  />
  <meta
    name="keywords"
    content="Dr. Rohan Singh Parhar, Parhar Hospital, Faculty Positions, Orthopaedics, Robotic Joint Replacement, Trauma Surgeon, Punjab, National Faculty, International Faculty"
  />
</Helmet>

      {/* HERO SECTION */}
      <section
        className="faculty-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(242,246,246,0.7), rgba(242,246,246,0.7)), url('/images/faculty_positions_banner.png')`,
        }}
      >
        <div className="faculty-hero-overlay" data-aos="fade-up">
          <h1 className="faculty-hero-title">Faculty Positions</h1>
          <div className="faculty-hero-breadcrumb">
            <Link to="/">
              <span className="faculty-breadcrumb-home">Home</span>
            </Link>
            <span className="faculty-breadcrumb-separator">››</span>
            <span className="faculty-breadcrumb-current">Faculty Positions</span>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="faculty-content-section">
        <div className="faculty-container">
          {/* LEFT CONTENT */}
       <div className="faculty-left">
  <h4 className="faculty-small-heading" data-aos="fade-up" data-aos-delay="0">
    Meet Our Expert
  </h4>

  <h2 className="faculty-main-heading" data-aos="fade-up" data-aos-delay="100">
    Dr. Rohan Singh Parhar
  </h2>

  <p className="faculty-para" data-aos="fade-up" data-aos-delay="200">
    Dr. Rohan Singh Parhar is a highly experienced Consultant Robotic Joint
    Replacement & Complex Trauma Surgeon with years of expertise in advanced
    orthopaedic procedures. He has pioneered cutting-edge surgical techniques
    in the region and is renowned for performing Punjab’s first fully automatic
    robotic total knee replacement. His exceptional precision and patient-focused
    approach ensure optimal outcomes and faster recovery for patients undergoing
    complex surgeries.
  </p>

  <p className="faculty-para" data-aos="fade-up" data-aos-delay="300">
    Dr. Parhar has served as faculty at numerous national and international
    conferences, workshops, and symposia, sharing his knowledge on robotic joint
    replacement, trauma management, and minimally invasive techniques. His
    contributions have significantly advanced orthopaedic education and surgical
    standards, making him a trusted name among peers and aspiring surgeons alike.
  </p>

  <p className="faculty-para" data-aos="fade-up" data-aos-delay="400">
    At Parhar Hospital, Dr. Parhar leads a multidisciplinary team dedicated to
    providing state-of-the-art orthopaedic care. The hospital is equipped with
    advanced robotic systems, modern operating theaters, and comprehensive
    rehabilitation facilities, ensuring that every patient receives personalized
    treatment in a safe, compassionate, and comfortable environment.
  </p>

  <Link to="/contact-us" data-aos="fade-up" data-aos-delay="500">
    <button className="faculty-btn">
      Contact Us <FaArrowRight style={{ marginLeft: "6px" }} />
    </button>
  </Link>
</div>


          {/* RIGHT IMAGE */}
          <div className="faculty-right" data-aos="fade-up">
            <img
              src="/images/faculty_positions_img1.png"
              alt="Dr. Rohan Singh Parhar"
            />
          </div>
        </div>

        {/* FACULTY POSITIONS LIST */}
        <h2 className="faculty-positions-heading" data-aos="fade-up">
          Faculty Positions & Recognitions
        </h2>
      <div className="faculty-positions-grid">
  <ul className="faculty-column">
    {leftColumn.map((item, index) => (
      <li
        key={index}
        data-aos="fade-up"
        data-aos-delay={index * 50} // 50ms increment per item
      >
        <span
          style={{
            fontFamily: "'Brush Script MT', cursive",
            color: index % 2 === 0 ? "#393185" : "#ce1e3b",
            marginRight: "10px",
            fontSize: "17px",
            fontWeight: "bold",
            lineHeight: "1.6",
          }}
        >
          ✓
        </span>
        <span
          style={{
            fontSize: "17px",
            color: "#6B7280",
            fontFamily: "inherit",
            lineHeight: "1.6",
          }}
        >
          {item}
        </span>
      </li>
    ))}
  </ul>

  <ul className="faculty-column">
    {rightColumn.map((item, index) => (
      <li
        key={index}
        data-aos="fade-up"
        data-aos-delay={index * 50} // 50ms increment per item
      >
        <span
          style={{
            fontFamily: "'Brush Script MT', cursive",
            color: index % 2 === 0 ? "#393185" : "#ce1e3b",
            marginRight: "10px",
            fontSize: "17px",
            fontWeight: "bold",
            lineHeight: "1.6",
          }}
        >
          ✓
        </span>
        <span
          style={{
            fontSize: "17px",
            color: "#6B7280",
            fontFamily: "inherit",
            lineHeight: "1.6",
          }}
        >
          {item}
        </span>
      </li>
    ))}
  </ul>
</div>

      </section>

      {/* CTA SECTION AFTER FACULTY POSITIONS */}
      <section className="faculty-cta-section">
        <div className="faculty-cta-container" data-aos="fade-up">

          {/* LEFT IMAGE */}
          <div className="faculty-cta-left" data-aos="fade-up">
            <img
              src="/images/faculty_positions_img2.png"
              alt="Consult with Dr. Rohan Singh Parhar"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="faculty-cta-right" data-aos="fade-up">
            <h2 className="faculty-cta-heading">
              Robotic Orthopaedic Excellence
            </h2>

            <div className="faculty-cta-underline"></div>

          <p className="faculty-cta-para" data-aos="fade-up" data-aos-delay="100">
  With extensive national and international faculty experience, Dr. Rohan
  Singh Parhar brings together innovation, surgical precision, and
  compassionate care to deliver world-class robotic orthopaedic solutions.
  Specializing in robotic joint replacement and advanced trauma care, he
  ensures highly accurate procedures, faster recovery, and improved long-term
  outcomes.
</p>

<p className="faculty-cta-para" data-aos="fade-up" data-aos-delay="200">
  Each patient receives a personalized treatment plan supported by
  cutting-edge robotic technology, evidence-based practices, and a deep
  commitment to safety and comfort. From diagnosis to rehabilitation, the
  focus remains on restoring mobility, reducing pain, and helping patients
  return confidently to an active, healthy life.
</p>

            <div className="faculty-cta-buttons" data-aos="fade-up">
              <Link to="/contact-us">
                <button className="faculty-outline-btn">
                  Talk To Us <FaPhoneAlt className="btn-icon" />
                </button>
              </Link>

              <Link to="/book-an-appointment">
                <button className="faculty-outline-btn">
                  Book An Appointment <FaCalendarCheck className="btn-icon" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FacultyPositions;
