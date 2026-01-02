import React, { useState, useEffect } from "react";
import { FiMapPin, FiPhone } from "react-icons/fi";
import { FaRegEnvelope } from "react-icons/fa";
import ReCAPTCHA from "react-google-recaptcha";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";
import "./Contact.css";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const API = process.env.REACT_APP_APIURL || "http://localhost:9000";

const Contact = () => {
  const [captchaValue, setCaptchaValue] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const submitContactToFormspree = async (payload) => {
    try {
      await axios.post(
        "https://formspree.io/f/mqezzglj", // Formspree endpoint
        payload,
        { headers: { Accept: "application/json" } }
      );
      return true;
    } catch (error) {
      console.error("Formspree contact failed:", error);
      return false;
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaValue) {
      toast.error("Please verify the captcha!");
      return;
    }

    setIsSubmitting(true);

    const payload = {
      ...formData,
      source: "Contact Page - Parhar Hospital",
    };

    // 1️⃣ Submit to Formspree first (awaited)
    const formspreeSuccess = await submitContactToFormspree(payload);

    // 2️⃣ Send to backend asynchronously (do NOT await)
    axios.post(`${API}/api/contact`, payload)
      .then(() => console.log("Backend contact saved"))
      .catch((err) => console.error("Backend contact failed:", err));

    // 3️⃣ Show feedback to user
    if (formspreeSuccess) {
      toast.success("Thank you for contacting us!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setCaptchaValue(null);
    } else {
      toast.error("Submission failed. Please try again later.");
    }

    setIsSubmitting(false);
  };

  return (
    <>
      <Helmet>
        <title>Contact Parhar Hospital Phagwara – Get in Touch with Our Team</title>
        <meta
          name="description"
          content="Contact Parhar Hospital in Phagwara for appointments, inquiries, or any questions regarding orthopedic care. Call, email, or visit us today."
        />
      </Helmet>

      {/* HERO SECTION */}
      <section
        className="contact-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(242,246,246,0.7), rgba(242,246,246,0.7)), url('/images/contact_banner.png')`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="contact-overlay" data-aos="fade-up" data-aos-delay="100">
          <h1 className="contact-title">Contact</h1>
          <div className="contact-breadcrumb">
            <Link to="/"><span className="contact-breadcrumb-home">Home</span></Link>
            <span className="contact-breadcrumb-separator">››</span>
            <span className="contact-breadcrumb-current">Contact</span>
          </div>
        </div>
      </section>

      {/* CONTACT FORM SECTION */}
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-grid">
            <div className="contact-left" data-aos="fade-up" data-aos-delay="150">
              <p className="contact-small-heading">We’re Here to Help!</p>
              <h2 className="contact-main-heading">Reach Out to Parhar Hospital</h2>

              <div className="contact-info-box">
                <FiMapPin className="contact-info-icon" />
                <div className="contact-info-text">
                  <p className="contact-info-title">Address</p>
                  <p className="contact-info-desc">371, Guru Hargobind Nagar, Phagwara (Punjab)</p>
                </div>
              </div>

              <div className="contact-info-box">
                <FiPhone className="contact-info-icon" />
                <div className="contact-info-text">
                  <p className="contact-info-title">Phone</p>
                  <p className="contact-info-desc">90563-32253, 98555-63464</p>
                </div>
              </div>

              <div className="contact-info-box">
                <FaRegEnvelope className="contact-info-icon" />
                <div className="contact-info-text">
                  <p className="contact-info-title">Email Address</p>
                  <p className="contact-info-desc">parharhospital201@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="contact-right" data-aos="fade-up" data-aos-delay="250">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form-row">
                  <div className="contact-form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                    />
                  </div>

                  <div className="contact-form-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>

                <div className="contact-form-row">
                  <div className="contact-form-group">
                    <label>Phone Number</label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your Phone"
                      required
                    />
                  </div>

                  <div className="contact-form-group">
                    <label>Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject"
                      required
                    />
                  </div>
                </div>

                <div className="contact-form-group">
                  <label>Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    required
                  />
                </div>

                <div className="contact-form-captcha">
                  <ReCAPTCHA
                    sitekey="6Lc8gRAsAAAAAOXfkuoJ7mVGKDRV1PuYfZtSQ8oP"
                    onChange={(value) => setCaptchaValue(value)}
                  />
                </div>

                <button type="submit" className="contact-btn" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* GOOGLE MAP */}
      <section className="contact-map" data-aos-delay="300">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3412.21842970045!2d75.77318247543836!3d31.214677274355445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391af4c3979a1f65%3A0xc1dc956b01135b45!2sParhar%20Hospital!5e0!3m2!1sen!2sin!4v1763451975875!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
};

export default Contact;
