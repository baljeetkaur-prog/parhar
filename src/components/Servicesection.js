import "./Servicesection.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useRef, useEffect, useState } from "react";
import { RiServiceLine } from "react-icons/ri";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

const services = [
        {
    img: "/images/robotic_surgery.png",
    name: "Robotic Surgery",
    link: "/services/robotic-surgery",
  },
      {
    img: "/images/complex_trauma.png",
    name: "Complex Trauma",
    link: "/services/complex-trauma",
  },
    {
    img: "/images/joint_replacement.png",
    name: "Robotic Joint Replacement",
    link: "/services/robotic-joint-replacement",
  },
  {
    img: "/images/anesthesiology.png",
    name: "Anesthesiology",
    link: "/services/anesthesiology",
  },
  {
    img: "/images/gynaecology.png",
    name: "Obstetrics & Gynaecology",
    link: "/services/obstetrics-and-gynaecology",
  },
    {
    img: "/images/ivf.png",
    name: "In Vitro Fertilization (IVF)",
    link: "/services/in-vitro-fertilization",
  },
  {
    img: "/images/orthpaedic.png",
    name: "Orthopaedic Surgery",
    link: "/services/orthopaedic-surgery",
  },
  {
    img: "/images/aesthroscopy.png",
    name: "Arthroscopy",
    link: "/services/arthroscopy-orthopaedic-surgery",
  },
  {
    img: "/images/arthroplasty.png",
    name: "Arthroplasty",
    link: "/services/arthroplasty-orthopaedic-surgery",
  },
  {
    img: "/images/sports_medicine.png",
    name: "Sports Medicine",
    link: "/services/sports-medicine",
  },
  {
    img: "/images/paedtretic.png",
    name: "Paediatric Orthopedics",
    link: "/services/paediatric-orthopedics",
  },
    {
    img: "/images/plastic.png",
    name: "Plastic & Reconstructive Surgery",
    link: "/services/plastic-and-reconstructive-surgery",
  },
      {
    img: "/images/2decho.png",
    name: "2D Echo",
    link: "/services/2d-echo",
  },
      {
    img: "/images/color_doppler.png",
    name: "Color Doppler",
    link: "/services/color-doppler",
  },
      {
    img: "/images/ct_scan.png",
    name: "CT Scan",
    link: "/services/ct-scan",
  },
      {
    img: "/images/ecg.png",
    name: "ECG",
    link: "/services/ecg",
  },
      {
    img: "/images/ultrasound.png",
    name: "Ultrasound",
    link: "/services/ultrasound",
  },
      {
    img: "/images/xray.png",
    name: "X-Ray",
    link: "/services/x-ray",
  },
      {
    img: "/images/physiotherapy.png",
    name: "Physiotherapy",
    link: "/services/physiotherapy",
  },
];

const Servicesection = () => {
  const sliderRef = useRef(null);
  const cardRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);

  const infiniteServices = [...services, ...services, ...services];

  useEffect(() => {
    if (cardRef.current) {
      const card = cardRef.current;
      const style = window.getComputedStyle(card);
      const margin = parseInt(style.marginLeft) + parseInt(style.marginRight);
      setCardWidth(card.offsetWidth + margin);
    }
  }, []);

  const scroll = (direction) => {
    const slider = sliderRef.current;
    if (!slider || !cardWidth) return;

    const scrollAmount = direction === "left" ? -cardWidth * 2 : cardWidth * 2;
    const target = slider.scrollLeft + scrollAmount;

    gsap.to(slider, {
      scrollTo: { x: target, autoKill: false },
      duration: 0.8,
      ease: "power3.out",
    });
  };

  return (
    <section id="services" className="service-section">
      <div className="service-container">
        <div className="service-header">
          <p style={{ display: "flex", alignItems: "center", gap: "10px" }} className="services-heading">
            Services
            <RiServiceLine color="#ce1e3b" />
          </p>
          <div className="services-slider-controls">
            <button className="services-slider-btn" onClick={() => scroll("left")}>
              <FaChevronLeft />
            </button>
            <button className="services-slider-btn" onClick={() => scroll("right")}>
              <FaChevronRight />
            </button>
          </div>
        </div>

        <div className="service-slider" ref={sliderRef}>
          {infiniteServices.map((service, index) => (
            <div
              className="service-card"
              key={index}
              ref={index === 0 ? cardRef : null}
              style={{ position: "relative" }} // needed for overlay
            >
              {/* CLICKABLE OVERLAY — DOES NOT CHANGE LAYOUT */}
              <Link
                to={service.link}
                style={{
                  position: "absolute",
                  inset: 0,
                  zIndex: 2,
                }}
              />

              <div className="service-image">
                <img src={service.img} alt={service.name} />
              </div>
              <p>{service.name}</p>
            </div>
          ))}
        </div>

        <div className="service-button-wrapper">
          <Link to="/services">
            <button className="all-services-btn">
              <span>See All Services</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Servicesection;
