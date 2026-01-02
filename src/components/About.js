import "./About.css";
import { FaPhoneAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const About = () => {

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
        <title>Parhar Hospital Phagwara, Punjab, INDIA</title>
        <meta
          name="description"
          content="Learn about Dr. Rohan Singh Parhar and the exceptional orthopaedic care at Parhar Hospital Punjab. Over 40 years of experience in joint replacement, robotic knee surgeries, and advanced treatments."
        />
      </Helmet>
      {/* === HERO SECTION === */}
      <section
  className="about-hero"  
  style={{
    backgroundImage: `linear-gradient(rgba(242, 246, 246, 0.7), rgba(242, 246, 246, 0.7)), url('/images/about_bg_new.png')`,
    backgroundSize: "cover",
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
  }}
>
  <div className="mainabout-overlay" data-aos="fade-up">
    <h1 className="mainabout-title">Parhar Hospital</h1>
    <div className="mainabout-breadcrumb">
      <Link to="/"><span className="mainabout-breadcrumb-home">Home</span></Link>
      <span className="mainabout-breadcrumb-separator">››</span>
      <span className="mainabout-breadcrumb-current">About</span>
    </div>
  </div>
</section>

      {/* === MAIN ABOUT CONTENT === */}
      <section className="mainabout-section">
        <div className="mainabout-container">
          <div className="mainabout-grid" data-aos="fade-up">
            {/* LEFT SIDE - IMAGE GRID */}
            <div className="mainabout-images-grid">
              {/* Card 1 */}
              <div className="mainabout-imgbox" data-aos="fade-up">
                <img src="/images/aboutimg1.jpeg" alt="About 1" />
              </div>

              {/* Card 2 */}
              <div className="mainabout-imgbox">
                <img src="/images/parhar_hospital.jpeg" alt="About 2" />
              </div>

              {/* Card 3 */}
              <div className="mainabout-imgbox">
                <img src="/images/team2_new.png" alt="About 3" />
              </div>

              {/* Experience Card */}
<div className="mainabout-exp-card">
  <h2>
    <span>Over 47 Years</span>&nbsp; 
    <span>of Excellence in Orthopaedics</span>
  </h2>
</div>

            </div>

            {/* RIGHT SIDE - TEXT CONTENT */}
<div className="mainabout-content" data-aos="fade-up">
  <p className="mainabout-small-heading">About Parhar Hospital, Phagwara</p>
<h2 className="mainabout-main-heading">
  A Premier Centre for Robotic Joint Replacement & Complex Trauma Care
</h2>

<p className="about-para">
  Parhar Hospital, Phagwara, is a leading orthopaedic and trauma care centre
  in Punjab, known for its excellence in Robotic Joint Replacement, Complex
  Trauma Surgery, and advanced orthopaedic treatments. With modern
  infrastructure and state-of-the-art robotic systems, the hospital delivers
  world-class surgical precision and faster patient recovery.
</p>

<p className="about-para">
  As one of Punjab’s most advanced facilities for knee, hip, and joint
  replacement, Parhar Hospital offers fully active and automatic robotic
  technology, ensuring unmatched accuracy, minimal tissue damage, and long-lasting results. 
  The hospital is also a regional leader in handling high-complexity fractures, 
  accident trauma, deformity corrections, and revision joint surgeries.
</p>

<p className="about-para">
  Under the guidance of <strong> Dr. Rohan Singh Parhar</strong>, a nationally recognised
  robotic joint replacement and complex trauma surgeon, Parhar Hospital has
  become a trusted destination for patients across Punjab, Himachal Pradesh,
  Haryana, and neighboring states. The hospital blends cutting-edge surgical
  innovation with compassionate care, offering a safe, ethical, and patient-first
  approach to orthopaedic treatment.
</p>




              {/* Emergency Box */}
              <div className="mainabout-emergency-box">
                <div className="mainabout-emergency-icon">
                  <FaPhoneAlt />
                </div>
                <div className="mainabout-emergency-text">
                  <p className="mainabout-emergency-label">24/7 Emergency Support</p>
                  <p className="mainabout-emergency-number">+91-9056332253</p>
                </div>
              </div>
            </div>
          </div>
          {/* === TECHNOLOGY HIGHLIGHTS === */}
{/* === TECHNOLOGY HIGHLIGHTS === */}
<div className="tech-section" data-aos="fade-up">
  <h2 className="tech-title">
     Advanced Robotic & Navigation Joint Replacement Technologies at Parhar Hospital, Punjab
  </h2>

  <div className="tech-cards">
    {/* Card 1 */}
<Link to="/services/robotic-surgery" className="tech-card" data-aos="fade-up">
  <div className="tech-card-imgs">
    <img src="/images/robotic_about.png" alt="Robotic Surgery" />
  </div>
  <h3>Robotic Surgery</h3>
  <p>
    Our robotic-assisted joint replacement provides unmatched surgical precision, 
    smaller incisions, reduced pain, and faster recovery. 
    Using advanced robotic technology, each procedure is customized for accurate implant positioning 
    and improved long-term outcomes.
  </p>
</Link>

    {/* Card 2 */}
<Link to="/services/orthopaedic-surgery" className="tech-card" data-aos="fade-up">
  <div className="tech-card-imgs">
    <img src="/images/orthopae_about.png" alt="Orthopaedic Surgery" />
  </div>

  <h3>Orthopaedic Surgery</h3>
  <p>
    Parhar Hospital delivers comprehensive orthopaedic care, 
    including treatments for fractures, joint disorders, sports injuries, and spinal conditions. 
    With modern technology and expert surgical precision, we ensure safe procedures 
    and faster rehabilitation for patients of all ages.
  </p>
</Link>
  </div>
</div>
{/* === PARTNER SECTION === */}
{/* === PARTNER SECTION === */}
<div className="partner-section" >
  <div className="partner-cards">
    {/* LEFT SIDE - Text + Heading */}
    <div className="partner-card-left" data-aos="fade-up">
<h2 className="partner-title">Get in Touch with Parhar Hospital</h2>
<p>
  Have questions or need to schedule an appointment? Our team at Parhar Hospital, Phagwara, 
  is ready to assist you with expert guidance and personalized support.
</p>
      <Link to="/contact-us"><button className="partner-btn">Contact Us</button></Link>
    </div>

    {/* RIGHT SIDE - Image */}
    <div className="partner-card-right" data-aos="fade-up">
      <img src="/images/doctor_about.png" alt="Doctor" className="doctor-main" />
      <img src="/images/shape-07.png" alt="Shape 7" className="partner-shape partner-shape-07" />
      <img src="/images/shape-06.png" alt="Shape 6" className="partner-shape partner-shape-06" />
    </div>
  </div>
</div>




          
          
        </div>
        
        
      </section>
    </>
  );
};

export default About;