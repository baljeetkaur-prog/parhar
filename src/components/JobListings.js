import "./JobListings.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaArrowRight, FaFileAlt, FaPaperPlane, FaPenNib } from "react-icons/fa";

const JOBS = [
  {
    id: 1,
    designation: "Staff Nurse",
    department: "Nursing",
    qualification: "B.Sc. Nursing / GNM",
    skills: "Patient care, Monitoring vitals, Administering medications",
  },
  {
    id: 2,
    designation: "Junior Consultant",
    department: "Orthopaedics",
    qualification: "DNB / MS Orthopaedic",
    skills: "Diagnosis, Surgery assistance, Patient consultation",
  },
  {
    id: 3,
    designation: "Fellow",
    department: "Orthopaedics",
    qualification: "DNB / MS Orthopaedic",
    skills: "Advanced surgical skills, Research, Patient care",
  },
  {
    id: 4,
    designation: "OT Technician",
    department: "Operation Theatre",
    qualification: "Diploma / Certification in OT Technology",
    skills: "Assisting in surgeries, Sterilization, Equipment handling",
  },
  {
    id: 5,
    designation: "X-Ray Technician",
    department: "Radiology",
    qualification: "Diploma / Certification in Radiography",
    skills: "X-Ray imaging, Equipment maintenance, Patient handling",
  },
  {
    id: 6,
    designation: "CT / MRI Technician",
    department: "Radiology",
    qualification: "Diploma / Certification in CT/MRI Technology",
    skills: "CT/MRI imaging, Equipment calibration, Safety protocols",
  },
  {
    id: 7,
    designation: "Lab Technician",
    department: "Laboratory",
    qualification: "B.Sc. / Diploma in Medical Lab Technology",
    skills: "Sample collection, Lab tests, Reporting results",
  },
  {
    id: 8,
    designation: "Administrator",
    department: "Administration",
    qualification: "Graduate / MBA in Healthcare Management",
    skills: "Office management, Coordination, Record keeping",
  },
{
  id: 9,
  designation: "Medical Officer",
  department: "Orthopaedics / Emergency Care",
  qualification: "MBBS",
  skills: "Patient assessment, Emergency handling, Post-operative care",
},
{
  id: 10,
  designation: "Physiotherapist",
  department: "Physiotherapy",
  qualification: "BPT / MPT",
  skills:
    "Rehabilitation therapy, Post-surgical recovery, Pain management, Exercise planning, Patient mobility training",
},
{
  id: 11,
  designation: "General Job Application",
  department: "All Departments",
  qualification: "As per applicable role",
  skills:
    "Submit your profile for future opportunities at Parhar Hospital. Our HR team will contact you when a suitable position becomes available.",
  applyLink: "/careers/apply/general",
}
];
const slugify = (text) => {
  return text
    .toLowerCase()
    .replace(/[\s/]+/g, "-")      // replace spaces or slashes with single hyphen
    .replace(/[^\w-]+/g, "")      // remove other special characters
    .replace(/-+/g, "-")          // replace multiple hyphens with one
    .replace(/^-+|-+$/g, "");     // remove starting or ending hyphen
};

const JobListings = () => {
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
        <title>Current Job Openings - Parhar Hospital, Phagwara</title>
        <meta
          name="description"
          content="Check all current job openings at Parhar Hospital, Phagwara. Apply for doctors, nurses, and healthcare positions."
        />
      </Helmet>

      {/* HERO SECTION */}
  <section
  className="jobs-hero"
  style={{
    backgroundImage: `linear-gradient(rgba(242, 246, 246, 0.7), rgba(242, 246, 246, 0.7)), url('/images/careers_main.png')`,
  }}
>
  <div className="jobs-hero-overlay" data-aos="fade-up" data-aos-delay="0">
    <h1 className="jobs-hero-title">Current Openings</h1>
    <div className="jobs-breadcrumb" data-aos="fade-up" data-aos-delay="100">
      <Link to="/" className="jobs-breadcrumb-home">Home</Link>
      <span className="jobs-breadcrumb-separator">››</span>

      <Link to="/careers" className="jobs-breadcrumb-home">Careers</Link>
      <span className="jobs-breadcrumb-separator">››</span>

      <span className="jobs-breadcrumb-current">Current Openings</span>
    </div>
  </div>
</section>


      {/* SECTION HEADING & DESCRIPTION */}
      <section className="jobs-section">
        <div className="jobs-container">
<div className="jobs-intro" data-aos="fade-up" data-aos-delay="0">
  <h2 className="jobs-heading" data-aos="fade-up" data-aos-delay="100">
    Current Openings at Parhar Hospital, Phagwara
  </h2>
  <p className="jobs-description" data-aos="fade-up" data-aos-delay="200">
    Explore the latest job openings across our departments. Join our
    team of dedicated healthcare professionals and help us deliver
    exceptional patient care.
  </p>
</div>


          {/* JOB CARDS */}
       <div className="jobs-grid">
  {JOBS.map((job, index) => (
    <div
      key={job.id}
      className={`job-card ${job.id === 11 ? "job-card-highlight" : ""}`}
      data-aos="fade-up"
      data-aos-delay={index * 50} // sequential delay per card
    >
      <div className="job-card-content">
        <h3 className="job-title">{job.designation}</h3>

        {job.department && (
          <p>
            <strong>Department:</strong> {job.department}
          </p>
        )}

        {job.qualification && (
          <p>
            <strong>Qualification:</strong> {job.qualification}
          </p>
        )}

        {/* Only show skills if not the last card */}
        {job.skills && job.id !== 11 && (
          <p>
            <strong>Skills:</strong> {job.skills}
          </p>
        )}

        {/* For last card, show skills as normal text without strong */}
        {job.skills && job.id === 11 && <p>{job.skills}</p>}
      </div>

      <div className="job-apply">
        <Link
          to={
            job.id === 11
              ? "/careers/apply/general"
              : `/careers/apply/${slugify(job.designation)}`
          }
          className="job-pencil-btn"
        >
          <span className="job-pencil-inner">
            <FaPaperPlane className="job-pencil-icon" />
            Apply Now
          </span>
        </Link>
      </div>
    </div>
  ))}
</div>

        </div>
      </section>
    </>
  );
};

export default JobListings;
