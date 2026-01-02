import React, { useState, useEffect, useRef } from "react";
import "./Appointment.css";
import { FaPaperPlane } from "react-icons/fa";
import ReCAPTCHA from "react-google-recaptcha";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Appointment = () => {
  const [captchaValue, setCaptchaValue] = useState(null);
  const formRef = useRef(null);
  const API = process.env.REACT_APP_APIURL;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const clinicalServices = [
  "Robotic Joint Replacement",
  "Robotic Surgery",
  "Complex Trauma",
  "Anesthesiology",
  "Obstetrics & Gynaecology",
  "In Vitro Fertilization (IVF)", 
  "Orthopaedic Surgery",
  "Arthroscopy Orthopaedic Surgery",
  "Arthroplasty Orthopaedic Surgery",
  "Sports Medicine",
  "Paediatric Orthopedics",
  "Plastic & Reconstructive Surgery"
];

const diagnosticServices = [
  "2D Echo",
  "Color Doppler",
  "CT Scan",
  "ECG",
  "Ultrasound",
  "X-Ray"
];

const supportServices = [
  "Physiotherapy",
];
const submitToFormspree = async (payload) => {
  try {
    await axios.post(
      "https://formspree.io/f/mqezzglj",
      payload,
      {
        headers: {
          "Accept": "application/json"
        }
      }
    );
    return true;
  } catch (error) {
    console.error("Formspree failed:", error);
    return false;
  }
};



  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!captchaValue) {
    toast.error("Please verify the captcha!");
    return;
  }

  setIsSubmitting(true);

  const form = formRef.current;

const payload = {
  fullName: form["name"].value,
  email: form["email"].value,
  phone: form["phone"].value,
  appointmentDate: form["appointmentDate"].value,
  appointmentTime: form["appointmentTime"].value,
  category: selectedCategory,
  service: form["service"].value,
  city: form["city"].value,
  message: form["message"].value,
  source: "Appointment Page - Parhar Hospital"
};


  // 1️⃣ Submit Formspree (await to confirm email sent)
  const formspreeSuccess = await submitToFormspree(payload);

  // 2️⃣ Fire backend asynchronously (do NOT await)
  axios.post(`${API}/api/appointments`, payload)
    .then(() => console.log("Backend saved successfully"))
    .catch(err => console.error("Backend failed:", err));

  // 3️⃣ Show success to user immediately
  if (formspreeSuccess) {
    toast.success("Appointment submitted successfully!");
    form.reset();
    setSelectedCategory("");
    setCaptchaValue(null);
  } else {
    toast.error("Submission failed. Please try again later.");
  }

  setIsSubmitting(false);
};




  

  return (
    <>
      <Helmet>
        <title>Book an Appointment at Parhar Hospital Phagwara</title>
        <meta
          name="description"
          content="Schedule your appointment at Parhar Hospital, Phagwara. Consult our orthopedic and physiotherapy experts. Fill the form to get in touch with us."
        />
      </Helmet>

      {/* === HERO SECTION === */}
      <section
        className="mainappointment-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(242,246,246,0.7), rgba(242,246,246,0.7)), url('/images/appointment_banner.png')`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="mainappointment-overlay"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h1 className="mainappointment-title">Appointment</h1>
          <div className="mainappointment-breadcrumb">
           <Link to="/"><span className="mainappointment-breadcrumb-home">Home</span></Link>
            <span className="mainappointment-breadcrumb-separator">››</span>
            <span className="mainappointment-breadcrumb-current">
              Appointment
            </span>
          </div>
        </div>
      </section>

      {/* === APPOINTMENT FORM SECTION === */}
      <section className="mainappointment-form-section">
        <div
          className="mainappointment-form-heading-wrapper"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <h2 className="mainappointment-form-heading">
            Schedule Your Visit Today
          </h2>
          <img
            src="/images/plus.png"
            alt="Plus Icon"
            className="form-heading-icon"
          />
        </div>

        <div
          className="mainappointment-form-container"
          data-aos="fade-up"
          data-aos-delay="250"
        >
          <form className="mainappointment-form" ref={formRef} onSubmit={handleSubmit}>
            {/* Name and Email */}
            <div className="mainappointment-input-row">
              <div className="mainappointment-input-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Your Name" required />
              </div>

              <div className="mainappointment-input-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Your Email" required />
              </div>
            </div>

            {/* Phone */}
            <div className="mainappointment-input-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" placeholder="Your Phone Number" required />
            </div>
            <div className="mainappointment-input-row">
  <div className="mainappointment-input-group">
    <label htmlFor="appointmentDate">Preferred Appointment Date</label>
<input
  type="date"
  id="appointmentDate"
  name="appointmentDate"
  min={new Date().toISOString().split("T")[0]}
  required
/>  
  </div>

  <div className="mainappointment-input-group">
    <label htmlFor="appointmentTime">Preferred Appointment Time</label>
    <input
      type="time"
      id="appointmentTime"
      name="appointmentTime"
      required
    />
  </div>
</div>

            {/* Select boxes */}
            <div className="mainappointment-input-row">

  {/* CATEGORY SELECT */}
  <div className="mainappointment-input-group">
    <label htmlFor="category">Select Category</label>
    <select
      id="category"
      value={selectedCategory}
      required
      onChange={(e) => setSelectedCategory(e.target.value)}
    >
      <option value="">Choose Category</option>
      <option value="clinical">Clinical Services</option>
      <option value="diagnostic">Diagnostic Services</option>
      <option value="support">Support Services</option>
    </select>
  </div>

  {/* SERVICE SELECT */}
  <div className="mainappointment-input-group">
    <label htmlFor="service">Select Service</label>
    <select
      id="service"
      name="service"
      required
      disabled={!selectedCategory}
    >
      <option value="">Choose Service</option>

      {selectedCategory === "clinical" &&
        clinicalServices.map((s, i) => (
          <option key={i} value={s}>{s}</option>
        ))}

      {selectedCategory === "diagnostic" &&
        diagnosticServices.map((s, i) => (
          <option key={i} value={s}>{s}</option>
        ))}

      {selectedCategory === "support" &&
        supportServices.map((s, i) => (
          <option key={i} value={s}>{s}</option>
        ))}
    </select>
  </div>


              <div className="mainappointment-input-group">
                <label htmlFor="city">Select City</label>
            <select id="city" name="city" required>
  <option value="">Choose City</option>
  <option value="Phagwara">Phagwara</option>
  <option value="Jalandhar">Jalandhar</option>
  <option value="Ludhiana">Ludhiana</option>
  <option value="Hoshiarpur">Hoshiarpur</option>
   <option value="Kapurthala">Kapurthala</option>
  <option value="Other">Other</option>
</select>

              </div>
            </div>

            {/* Message */}
            <div className="mainappointment-input-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                rows="5"
                required
              ></textarea>
            </div>

            {/* CAPTCHA */}
            <div className="mainappointment-input-group">
              <ReCAPTCHA
                sitekey="6Lc8gRAsAAAAAOXfkuoJ7mVGKDRV1PuYfZtSQ8oP"
                onChange={(value) => setCaptchaValue(value)}
              />
            </div>

            {/* Submit button */}
       <button
  type="submit"
  className="mainappointment-submit-btn"
  disabled={isSubmitting}
>
  {isSubmitting ? "Submitting..." : (
    <>
      <FaPaperPlane style={{ marginRight: "8px" }} />
      Submit
    </>
  )}
</button>

          </form>
        </div>
      </section>
    </>
  );
};

export default Appointment;
