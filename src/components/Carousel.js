import React, { useState, useEffect } from "react";
import "./Carousel.css";
import SlideUpOnScroll from "./SlideUpOnScroll";
import { Link } from "react-router-dom";
import { FiCalendar } from "react-icons/fi";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Carousel = () => {
const slides = [
{
  id: 0,
  bg: "/images/Untitled-4.png",
  title: "Punjab’s First Robotic Surgery",
  heading: "Parhar Hospital Phagwara",
  text: "50K+ orthopaedic surgeries completed, 1.5L+ walk-in patients, \n 1,000+ robotic surgeries done in just 18 months.",
  btnText: "Book Appointment",
  btnLink: "/book-an-appointment",
  showNabh: true
},
  {
    id: 1,
    bg: "/images/Untitled-6.png",
    title: "Advanced Robotic Surgery",
    heading: "Robotic Joint Replacement",
    text: "Precision robotic-assisted joint replacement for faster \n recovery and exceptional care at Parhar Hospital.",
    btnText: "Learn More →",
    btnLink: "/services/robotic-joint-replacement"
  },
  {
    id: 2,
    bg: "/images/Untitled-7.png",
    title: "NABH Accredited",
    heading: "Awarded NABH Accreditation",
    text: "Parhar Hospital sets the benchmark in patient care, safety, and clinical excellence \n in orthopaedics and spine surgery.",
    btnText: "Contact Us →",
    btnLink: "/contact-us"
  },
{
  id: 3,
  bg: "/images/Untitled-8.png",
  title: "Orthopedic Doctor in Phagwara",
  heading: "Dr. Rohan Singh\nParhar",
  text: "Expert orthopaedic surgeon with national and international fellowships, \n delivering world-class patient care.",
  btnText: "About Us →",
  btnLink: "/about-us",
  showProfile: true
} 
];


  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
const [touchEnd, setTouchEnd] = useState(0);
const handleTouchStart = (e) => {
  setTouchStart(e.touches[0].clientX);
};

const handleTouchMove = (e) => {
  setTouchEnd(e.touches[0].clientX);
};

const handleTouchEnd = () => {
  if (!touchStart || !touchEnd) return;

  const distance = touchStart - touchEnd;
  const minSwipeDistance = 50; // Minimum px distance to be considered a swipe

  if (distance > minSwipeDistance) {
    // Swiped left → next slide
    nextSlide();
  } else if (distance < -minSwipeDistance) {
    // Swiped right → previous slide
    prevSlide();
  }

  // Reset
  setTouchStart(0);
  setTouchEnd(0);
};

  // Auto-slide only on mobile screens
useEffect(() => {
  const interval = setInterval(() => {
    setFade(true); // trigger fade out
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length); // move to next slide
      setFade(false); // fade in new slide
    }, 300); // match fade transition duration
  }, 6000); // 6 seconds per slide

  return () => clearInterval(interval); // cleanup on unmount
}, [slides.length]);

  const nextSlide = () => {
    setFade(true);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
      setFade(false);
    }, 300);
  };

  const prevSlide = () => {
    setFade(true);
    setTimeout(() => {
      setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
      setFade(false);
    }, 300);
  };

  const slide = slides[current];

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out",
      once: true,
      offset: 40,
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [current]);
  

  return (
    
    <section
  className={`carousel ${
    slide.id === 0 ? "carousel-slide-0" :
    slide.id === 1 ? "carousel-slide-1" :
    slide.id === 2 ? "carousel-slide-2" :
    slide.id === 3 ? "carousel-slide-3" : ""
  }`}
  style={{ backgroundImage: `url(${slide.bg})` }}
  onTouchStart={handleTouchStart}
  onTouchMove={handleTouchMove}
  onTouchEnd={handleTouchEnd}
>
      <button className="carousel-arrow left" onClick={prevSlide}><FaChevronLeft /></button>
      <button className="carousel-arrow right" onClick={nextSlide}><FaChevronRight /></button>

      <div className={`carousel-container single-column ${fade ? "fade-out" : "fade-in"}`}>
        <div 
          className={`carousel-left overlay-text 
            ${slide.id === 0 ? "slide0-content" : ""} 
            ${slide.id === 1 ? "slide1-content" : ""} 
            ${slide.id === 2 ? "slide2-content" : ""} 
            ${slide.id === 3 ? "slide3-content" : ""}`}
          key={current}
        >
          {slide.showNabh && (
            <div className="nabh-logo">
              <img src="/images/NABH.png" alt="NABH Logo" />
            </div>
          )}

<SlideUpOnScroll>
  <p className="slide-title">
    <span className="title-border"></span>
    {slide.title}
  </p>
</SlideUpOnScroll>


<SlideUpOnScroll delay={0.2}>
  <p className="slide-heading">
    {slide.heading}
  </p>
</SlideUpOnScroll>


          <SlideUpOnScroll delay={0.3}>
            <p className="slide-text">
              {slide.text.split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>
          </SlideUpOnScroll>

          {/* Updated: Disable AOS on mobile for the button */}
      {/* About Us button for 4th slide */}
{slide.id === 3 ? (
  <SlideUpOnScroll delay={0.4} disableOnMobile={true}>
    <Link to={slide.btnLink}>
      <button className="header-enquiry-btn">
        {slide.btnText}
      </button>
    </Link>
  </SlideUpOnScroll>
) : (
  <SlideUpOnScroll delay={0.4}>
    <Link to={slide.btnLink}>
      <button className="header-enquiry-btn">
        {slide.id === 0 && <FiCalendar />}
        {slide.btnText}
      </button>
    </Link>
  </SlideUpOnScroll>
)}


          {slide.showProfile && (
            <div className="carousel-overlay-profile">
              <div className="tick-box">
                <div className="tick-circle">&#10003;</div>
                <span>OrthoExpert</span>
              </div>

              <div className="profile-box">
                <img src="/images/Dr.png" alt="Dr. Rohan Singh" className="profile-avatar"/>
                <p style={{color:"#333", fontWeight:"700", fontSize:"14px"}}>Dr. Rohan Singh Parhar</p>
                <p>M.B.B.S. DNB (Orthopedics)</p>
                <Link to="/book-an-appointment">
                  <button className="book-btn">Book Now</button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
      {slide.id === 0 && (
  <div className="carousel-right machine-image-box">
    <img
      src="/images/machine.webp"
      alt="Robotic Machine"
      className="robotic-machine"
    />
  </div>
)}
{slide.id === 1 && (
  <div className="carousel-right certificate-image-box">
    <img
      src="/images/gallery5.png"
      alt="Certificate"
      className="certificate-image"
    />
       <img
      src="/images/medal.png"
      alt="Medal"
      className="certificate-medal"
    />
  </div>
)}
{slide.id === 3 && (
  <div className="carousel-center-circle">
    <div className="outer-circle">
      <div className="inner-circle"></div>
    </div>
    <img
      src="/images/parhar-doctor.png"
      alt="Dr. Parhar"
      className="circle-overlay-image"
    />
  </div>
)}


      <div className="carousel-dots">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`dot ${current === index ? "active" : ""}`}
            onClick={() => setCurrent(index)}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Carousel;
