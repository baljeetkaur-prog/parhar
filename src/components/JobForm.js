import "./JobForm.css";
import { useParams, Link } from "react-router-dom";
import { FaPaperPlane, FaUserTie } from "react-icons/fa";
import React, { useState, useEffect, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";

const JobForm = () => {
  const { designationSlug } = useParams();

  const jobDesignation =
    designationSlug === "general"
      ? "General Job Application"
      : designationSlug
          .replace(/-/g, " ")
          .replace(/\b\w/g, (l) => l.toUpperCase());

  const [captchaValue, setCaptchaValue] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);
  const API = process.env.REACT_APP_APIURL; // backend URL

  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const submitToFormspree = async (payload) => {
    try {
      await axios.post(
        "https://formspree.io/f/mqezzglj",
        payload,
        { headers: { "Accept": "application/json" } }
      );
      return true;
    } catch (error) {
      console.error("Formspree failed:", error);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaValue) {
      toast.error("Please verify the captcha!");
      return;
    }

    setIsSubmitting(true);
    const form = formRef.current;
    const applicationNumber = `PARHAR-${uuidv4().split('-')[0]}`;

    const payload = {
      applicationNumber,
      designation:
        designationSlug === "general" ? "General Application" : jobDesignation,
      name: form["name"].value,
      email: form["email"].value,
      phone: form["phone"].value,
      dob: form["dob"].value,
      gender: form["gender"].value,
      maritalStatus: form["maritalStatus"].value,
      qualification: form["qualification"].value,
      passingYear: form["passingYear"].value,
      specialization: form["specialization"].value,
      certifications: form["certifications"].value,
      religion: form["religion"].value,
      city: form["city"].value,
      address: form["address"].value,
      altContact: form["altContact"].value,
      experience: form["experience"].value,
      cvLink: form["cvLink"].value,
      profileLink: form["profileLink"].value,
      source: `Job Application - ${jobDesignation}`,
      _subject: `New Job Application - ${jobDesignation}`,
    };

    const formspreeSuccess = await submitToFormspree(payload);

    axios.post(`${API}/api/jobs/apply`, payload)
      .then(() => console.log("Backend saved successfully"))
      .catch(err => console.error("Backend failed:", err));

    if (formspreeSuccess) {
      toast.success("Application submitted successfully!");
      form.reset();
      setCaptchaValue(null);
    } else {
      toast.error("Submission failed. Please try again later.");
    }

    setIsSubmitting(false);
  };

  return (
    <>
      <Helmet>
        <title>Apply for {jobDesignation} - Parhar Hospital Careers</title>
        <meta
          name="description"
          content={`Apply online for the position of ${jobDesignation} at Parhar Hospital. Submit your application and CV to join our healthcare team.`}
        />
        <meta
          name="keywords"
          content={`Parhar Hospital, ${jobDesignation}, Careers, Job Application, Healthcare Jobs, Nursing, Medical Staff`}
        />
      </Helmet>

      {/* HERO SECTION */}
      <section
        className="jobform-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(242,246,246,0.7), rgba(242,246,246,0.7)), url('/images/careers_main.png')`,
        }}
      >
        <div
          className="jobform-hero-overlay"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h1 className="jobform-heading">
            {designationSlug === "general"
              ? "Apply for General Position"
              : `Apply for - ${jobDesignation}`}
          </h1>
          <div className="jobform-breadcrumb">
            <Link to="/" className="jobform-breadcrumb-home">Home</Link>
            <span className="jobform-breadcrumb-separator">››</span>

            <Link to="/careers/current-openings" className="jobform-breadcrumb-home">
              Careers
            </Link>
            <span className="jobform-breadcrumb-separator">››</span>

            <span className="jobform-breadcrumb-current">Apply</span>
          </div>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="jobform-section">
        <div
          className="jobform-heading-wrapper"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <h2 className="jobform-heading">Apply for - {jobDesignation}</h2>
          <FaUserTie className="jobform-heading-icon" style={{ color: "#ce1e3b" }} />
        </div>

        <div
          className="jobform-container"
          data-aos="fade-up"
          data-aos-delay="250"
        >
          <form className="jobform-form" ref={formRef} onSubmit={handleSubmit}>
            {/* Name & Email */}
            <div className="jobform-input-row">
              <div className="jobform-input-group">
                <label htmlFor="name">Name <span className="required-star">*</span></label>
                <input type="text" id="name" name="name" placeholder="Your Name" required />
              </div>
              <div className="jobform-input-group">
                <label htmlFor="email">Email <span className="required-star">*</span></label>
                <input type="email" id="email" name="email" placeholder="Your Email" required />
              </div>
            </div>

            {/* Phone & DOB */}
            <div className="jobform-input-row">
              <div className="jobform-input-group">
                <label htmlFor="phone">Phone Number <span className="required-star">*</span></label>
                <input type="tel" id="phone" name="phone" placeholder="Your Phone Number" required />
              </div>
              <div className="jobform-input-group">
                <label htmlFor="dob">Date of Birth <span className="required-star">*</span></label>
                <input type="date" id="dob" name="dob" required />
              </div>
            </div>

            {/* Gender & Marital Status */}
            <div className="jobform-input-row">
              <div className="jobform-input-group">
                <label>Gender <span className="required-star">*</span></label>
                <div className="jobform-radio-group">
                  <label><input type="radio" name="gender" value="Male" required /> Male</label>
                  <label><input type="radio" name="gender" value="Female" /> Female</label>
                  <label><input type="radio" name="gender" value="Other" /> Other</label>
                </div>
              </div>
              <div className="jobform-input-group">
                <label>Marital Status <span className="required-star">*</span></label>
                <div className="jobform-radio-group">
                  <label><input type="radio" name="maritalStatus" value="Single" required /> Single</label>
                  <label><input type="radio" name="maritalStatus" value="Married" /> Married</label>
                  <label><input type="radio" name="maritalStatus" value="Other" /> Other</label>
                </div>
              </div>
            </div>

            {/* Qualification & Passing Year */}
            <div className="jobform-input-row">
              <div className="jobform-input-group">
                <label htmlFor="qualification">Highest Qualification <span className="required-star">*</span></label>
                <input type="text" id="qualification" name="qualification" required />
              </div>
              <div className="jobform-input-group">
                <label htmlFor="passingYear">Year of Passing <span className="required-star">*</span></label>
                <input type="text" id="passingYear" name="passingYear" placeholder="YYYY" required />
              </div>
            </div>

            {/* Specialization & Certifications */}
            <div className="jobform-input-row">
              <div className="jobform-input-group">
                <label htmlFor="specialization">Specialization / Department <span className="required-star">*</span></label>
                <input type="text" id="specialization" name="specialization" required />
              </div>
              <div className="jobform-input-group">
                <label htmlFor="certifications">Additional Certifications / Trainings</label>
                <input type="text" id="certifications" name="certifications"/>
              </div>
            </div>

            {/* Religion & City */}
            <div className="jobform-input-row">
              <div className="jobform-input-group">
                <label htmlFor="religion">Religion</label>
                <input type="text" id="religion" name="religion" />
              </div>
              <div className="jobform-input-group">
                <label htmlFor="city">Current City <span className="required-star">*</span></label>
                <input type="text" id="city" name="city" required />
              </div>
            </div>

            {/* Address & Alternate Contact */}
            <div className="jobform-input-row">
              <div className="jobform-input-group">
                <label htmlFor="address">Permanent Address <span className="required-star">*</span></label>
                <textarea id="address" name="address" rows="5" required />
              </div>
              <div className="jobform-input-group">
                <label htmlFor="altContact">Alternate / Emergency Contact <span className="required-star">*</span></label>
                <input type="tel" id="altContact" name="altContact" required />
              </div>
            </div>

            {/* Experience */}
            <div className="jobform-input-group">
              <label htmlFor="experience">Years of Experience <span className="required-star">*</span></label>
              <select id="experience" name="experience" required>
                <option value="">Select Experience</option>
                <option value="Fresher">Fresher</option>
                <option value="0-1">0-1 year</option>
                <option value="1-3">1-3 years</option>
                <option value="3-5">3-5 years</option>
                <option value="5+">5+ years</option>
              </select>
            </div>

            {/* CV Link */}
            <div className="jobform-input-group">
              <label htmlFor="cvLink">CV Link <span className="required-star">*</span></label>
              <input type="url" id="cvLink" name="cvLink" required />
            </div>

            {/* Portfolio Link */}
            <div className="jobform-input-group">
              <label htmlFor="profileLink">Portfolio Link</label>
              <input type="url" id="profileLink" name="profileLink" />
            </div>

            {/* CAPTCHA */}
            <div className="jobform-input-group">
              <ReCAPTCHA
                sitekey="6Lc8gRAsAAAAAOXfkuoJ7mVGKDRV1PuYfZtSQ8oP"
                onChange={(value) => setCaptchaValue(value)}
              />
            </div>

            {/* Submit */}
  <button type="submit" className="jobform-submit-btn" disabled={isSubmitting}>
  <FaPaperPlane style={{ marginRight: "8px" }} />
  {isSubmitting ? "Submitting..." : "Submit Application"}
</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default JobForm;
