import "./Careers.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState, useRef } from "react";
import { FaArrowRight, FaPaperPlane, FaRegQuestionCircle, FaUserCheck } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import { toast } from "react-toastify";

const Careers = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out",
      once: true,
      offset: 40,
    });
  }, []);

  const formRef = useRef(null);
  const [captchaValue, setCaptchaValue] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const API = process.env.REACT_APP_APIURL; // backend URL

  // Formspree submission
  const submitToFormspree = async (payload) => {
    try {
      await axios.post(
        "https://formspree.io/f/mqezzglj", // replace with your Formspree ID
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

    const payload = {
      name: form["name"].value,
      email: form["email"].value,
      phone: form["phone"].value,
      appliedFor: form["appliedFor"].value,
      source: "Application Track Form",
      _subject: "New Application Track Submission",
    };

    // 1️⃣ Submit Formspree
    const formspreeSuccess = await submitToFormspree(payload);

    // 2️⃣ Fire backend asynchronously
    axios.post(`${API}/api/careers/track`, payload)
      .then(() => console.log("Backend saved successfully"))
      .catch(err => console.error("Backend failed:", err));

    // 3️⃣ Show success
    if (formspreeSuccess) {
      toast.success("Application tracking request submitted successfully!");
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
        <title>Careers at Parhar Hospital | Join Our Medical Team</title>
        <meta
          name="description"
          content="Explore career opportunities at Parhar Hospital, Phagwara. Track your application or submit your details to join our healthcare team."
        />
      </Helmet>

      {/* === CAREERS HERO SECTION === */}
<section
  className="careers-hero"
  style={{
    backgroundImage: `linear-gradient(rgba(242, 246, 246, 0.7), rgba(242, 246, 246, 0.7)), url('/images/careers_main.png')`,
    backgroundSize: "cover",
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
  }}
>
  <div className="maincareers-overlay" data-aos="fade-up" data-aos-delay="0">
    <h1 className="maincareers-title">Careers</h1>
    <div className="maincareers-breadcrumb">
      <Link to="/"><span className="maincareers-breadcrumb-home">Home</span></Link>
      <span className="maincareers-breadcrumb-separator">››</span>
      <span className="maincareers-breadcrumb-current">Careers</span>
    </div>
  </div>
</section>

      <section className="careers-section">
        <div className="careers-container">
          <div className="careers-grid" data-aos="fade-up">

            {/* LEFT CONTENT */}
          {/* LEFT CONTENT */}
<div className="careers-main">
  <div className="careers-top-image" data-aos="fade-up" data-aos-delay="0">
    <img src="/images/careers_bg_two.png" alt="Careers at Parhar Hospital" loading="lazy" />
  </div>
  <div className="careers-top-content">
    <p data-aos="fade-up" data-aos-delay="100">
      At <strong>Parhar Hospital, Phagwara</strong>, we believe that exceptional
      healthcare begins with dedicated professionals.
    </p>
    <p data-aos="fade-up" data-aos-delay="200">
      We offer a supportive and growth-oriented work environment for doctors,
      nurses, paramedical staff, and administrative professionals.
    </p>
    <p data-aos="fade-up" data-aos-delay="300">
      Whether you are experienced or starting your journey in healthcare, we welcome passionate individuals.
    </p>
    <div className="careers-action" data-aos="fade-up" data-aos-delay="400">
      <Link to="/careers/current-openings" className="careers-openings-btn">
        View Job Openings
        <FaArrowRight className="careers-openings-arrow" />
      </Link>
    </div>
  </div>
</div>


            {/* RIGHT FORM */}
          {/* RIGHT FORM */}
<aside className="careers-sidebar">
  <div className="careers-track-form" data-aos="fade-up" data-aos-delay="0">
    <div className="careers-form-icon">
      <FaUserCheck />
    </div>
    <h3 className="careers-form-title" data-aos="fade-up" data-aos-delay="100">Track Your Application</h3>
    <form className="careers-form" ref={formRef} onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Full Name" required data-aos="fade-up" data-aos-delay="200" />
      <input type="email" name="email" placeholder="Email Address" required data-aos="fade-up" data-aos-delay="300" />
      <input type="tel" name="phone" placeholder="Phone Number" required data-aos="fade-up" data-aos-delay="400" />
      <input type="text" name="appliedFor" placeholder="Applied For" required data-aos="fade-up" data-aos-delay="500" />

      {/* CAPTCHA */}
      <div className="careers-captcha" data-aos="fade-up" data-aos-delay="600">
        <ReCAPTCHA
          sitekey="6Lc8gRAsAAAAAOXfkuoJ7mVGKDRV1PuYfZtSQ8oP"
          onChange={(value) => setCaptchaValue(value)}
        />
      </div>

      <button type="submit" className="careers-submit-btn" disabled={isSubmitting} data-aos="fade-up" data-aos-delay="700">
        <FaPaperPlane className="careers-submit-icon" />
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  </div>
</aside>


          </div>
        </div>
      </section>
{/* CONTACT BOX */}
<section className="careers-contact-box">
  <div className="careers-contact-container">
    <div className="careers-contact-left" data-aos="fade-up" data-aos-delay="0">
      <h2 className="careers-contact-heading" data-aos="fade-up" data-aos-delay="100">
        <FaRegQuestionCircle className="careers-contact-heading-icon" />
        Need Help with Appointments?
      </h2>

      <p className="careers-contact-desc" data-aos="fade-up" data-aos-delay="200">
        For any appointment queries, feel free to reach out to us via phone or email. Our team is always ready to assist you.
      </p>

      <p className="careers-contact-info" data-aos="fade-up" data-aos-delay="300">
        <FiPhone className="careers-contact-icon" />
        <strong>Phone:</strong> +91-9056332253, +91-9855563464
      </p>

      <p className="careers-contact-info" data-aos="fade-up" data-aos-delay="400">
        <FiMail className="careers-contact-icon" />
        <strong>Email:</strong> parharhospital201@gmail.com
      </p>
    </div>

    <div className="careers-contact-right" data-aos="fade-up" data-aos-delay="500">
      <Link to="/book-an-appointment" className="careers-contact-btn">
        Request an Appointment
      </Link>
    </div>
  </div>
</section>


      
    </>
  );
};

export default Careers;
