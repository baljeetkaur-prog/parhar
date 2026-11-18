import { Link } from "react-router-dom";
import "./Servicesmain.css";
import { Helmet } from "react-helmet";

// ✅ AOS Imports
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Servicesmain = () => {

  // ✅ Initialize AOS only once when this page loads
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true, // important: run only on first scroll
    });
    AOS.refresh();
  }, []);

  const services = [
        {
      img: "/images/robotic_surgery.png",
      title: "Robotic Surgery",
      desc: "Cutting-edge robotic-assisted procedures offering higher precision, smaller incisions, reduced pain, and faster recovery for a wide range of surgical treatments.",
      link: "/services/robotic-surgery"
    },
        {
      img: "/images/joint_replacement.png",
      title: "Robotic Joint Replacement",
      desc: "Advanced knee, hip, and shoulder replacement procedures performed with precision to relieve chronic pain, improve mobility, and enhance long-term joint function.",
      link: "/services/robotic-joint-replacement"
    },
            {
 img: "/images/complex_trauma.png",
title: "Complex Trauma",
desc: "Expert management of severe and complicated injuries, including fractures, multiple traumas, and limb reconstruction, using advanced surgical techniques to restore function and promote faster recovery.",
link: "/services/complex-trauma"
    },
    {
      img: "/images/anesthesiology.png",
      title: "Anesthesiology",
      desc: "Ensuring patient safety and comfort during all surgical procedures through advanced anesthesia techniques, continuous monitoring, and expert pain management at Parhar Hospital.",
      link: "/services/anesthesiology"
    },
    {
      img: "/images/gynaecology.png",
      title: "Obstetrics & Gynaecology",
      desc: "Comprehensive women’s healthcare including pregnancy care, deliveries, infertility evaluation, menstrual disorders, and advanced gynecological treatments with compassionate expertise.",
      link: "/services/obstetrics-and-gynaecology"
    },
        {
   img: "/images/ivf.png",
  title: "In Vitro Fertilization (IVF)",
  desc: "Advanced In Vitro Fertilization (IVF) treatment offering personalized fertility care, modern assisted reproductive techniques, and expert support to help couples achieve a successful pregnancy.",
  link: "/services/in-vitro-fertilization"
    },
    {
      img: "/images/orthpaedic.png",
      title: "Orthopaedic Surgery",
      desc: "Specialized treatment for bone, joint, and spine disorders using modern surgical and non-surgical methods to restore mobility and improve musculoskeletal health.",
      link: "/services/orthopaedic-surgery"
    },


    {
      img: "/images/aesthroscopy.png",
      title: "Arthroscopy Orthopaedic Surgery",
      desc: "Minimally invasive keyhole procedures for shoulder, knee, and other joints, allowing faster recovery, less pain, and accurate treatment of ligament, tendon, and cartilage injuries.",
      link: "/services/arthroscopy-orthopaedic-surgery"
    },
    {
      img: "/images/arthroplasty.png",
      title: "Arthroplasty Orthopaedic Surgery",
      desc: "Expert reconstruction and replacement of damaged joints using modern implants and techniques to improve stability, reduce pain, and restore everyday movement.",
      link: "/services/arthroplasty-orthopaedic-surgery"
    },
    {
      img: "/images/sports_medicine.png",
      title: "Sports Medicine",
      desc: "Comprehensive care for sports injuries, ligament tears, fractures, and muscle strains with advanced diagnostics, targeted treatment, and structured rehabilitation programs.",
      link: "/services/sports-medicine"
    },
    {
      img: "/images/paedtretic.png",
      title: "Paediatric Orthopedics",
      desc: "Specialized care for infants, children, and teens dealing with fractures, congenital deformities, growth-related issues, and joint problems provided with gentle and precise expertise.",
      link: "/services/paediatric-orthopedics"
    },
    {
      img: "/images/plastic.png",
      title: "Plastic & Reconstructive Surgery",
      desc: "Reconstructive and cosmetic procedures including trauma repair, skin grafting, scar revision, and correction of deformities to restore function and enhance appearance.",
      link: "/services/plastic-and-reconstructive-surgery"
    },
    {
      img: "/images/2decho.png",
      title: "2D Echo",
      desc: "A non-invasive ultrasound test to evaluate heart function, valve health, and blood flow, aiding in early diagnosis and monitoring of cardiovascular conditions.",
      link: "/services/2d-echo"
    },
    {
      img: "/images/color_doppler.png",
      title: "Color Doppler",
      desc: "Advanced imaging to assess blood flow in veins and arteries, helping detect blockages, clots, varicose veins, and circulatory issues with high accuracy.",
      link: "/services/color-doppler"
    },
    {
      img: "/images/ct_scan.png",
      title: "CT Scan",
      desc: "High-resolution imaging to diagnose internal injuries, tumors, fractures, and infections, enabling faster and more accurate treatment planning.",
      link: "/services/ct-scan"
    },
    {
      img: "/images/ecg.png",
      title: "ECG",
      desc: "A quick and essential test to evaluate heart rhythm, electrical activity, and identify conditions such as arrhythmias, cardiac stress, and heart abnormalities.",
      link: "/services/ecg"
    },
    {
      img: "/images/ultrasound.png",
      title: "Ultrasound",
      desc: "Safe and reliable imaging to examine internal organs, pregnancy, soft tissues, and abnormalities, providing real-time insights for quick diagnosis.",
      link: "/services/ultrasound"
    },
    {
      img: "/images/xray.png",
      title: "X-Ray",
      desc: "Fast and effective imaging to detect fractures, infections, joint issues, and chest or abdominal abnormalities with clear radiographic insights.",
      link: "/services/x-ray"
    },
    {
      img: "/images/physiotherapy.png",
      title: "Physiotherapy",
      desc: "Restorative therapy offering pain relief, rehabilitation, post-surgery recovery, and mobility improvement through personalized physical exercises and modern treatment techniques.",
      link: "/services/physiotherapy"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Orthopaedic & Robotic Surgery Services in Punjab | Parhar Hospital</title>
        <meta
          name="description"
          content="Explore advanced orthopaedic treatments at Parhar Hospital, Phagwara, Punjab. Services include robotic joint replacement, arthroplasty, arthroscopy, complex trauma care, fractures, and bone infection management."
        />
        <meta
          name="keywords"
          content="Parhar Hospital, Punjab, Orthopaedic, Robotic Joint Replacement, Arthroplasty, Arthroscopy, Trauma Surgery, Bone Health"
        />
      </Helmet>

      {/* HERO SECTION */}
      <section
        className="mainservices-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(242, 246, 246, 0.7), rgba(242, 246, 246, 0.7)), url('/images/services_banner.png')`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="mainservices-overlay">
          <h1 className="mainservices-title" data-aos="fade-up">
            Our Services
          </h1>

          <div
            className="mainservices-breadcrumb"
            data-aos="fade-up"
            data-aos-delay="150"
          >
           <Link to="/"><span className="mainservices-breadcrumb-home">Home</span></Link>
            <span className="mainservices-breadcrumb-separator">››</span>
            <span className="mainservices-breadcrumb-current">Services</span>
          </div>
        </div>
      </section>


  {/* SERVICES GRID */}
<section className="mainservices-section">
  <div className="mainservices-container">
    <div className="mainservices-grid">
      {services.map((service, index) => {
        
        // ⭐ 3 cards per row → same delay for each row
        const delay = Math.floor(index / 3) * 150;  

        return (
          <div
            className="mainservices-card"
            key={index}
            data-aos="fade-up"
            data-aos-delay={delay} // ⭐ updated
          >
            <div className="mainservices-icon">
              <img src={service.img} alt={service.title} />
            </div>

            <Link to={service.link} className="mainservices-title-link">
              <h3 className="mainservices-title-sm">{service.title}</h3>
            </Link>

            <p className="mainservices-desc">{service.desc}</p>

            <Link to={service.link}>
              <button className="mainservices-btn">View More</button>
            </Link>
          </div>
        );
      })}
    </div>
  </div>
</section>

    </>
  );
};

export default Servicesmain;
