import React, { useEffect } from "react";
import { FaChalkboardTeacher, FaHandsHelping, FaLightbulb, FaUsers } from "react-icons/fa";
import "./Gallerysection.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Gallerysection = () => {
useEffect(() => {
  AOS.init({ duration: 600, easing: "ease-out", once: false });

  window.addEventListener("load", () => AOS.refresh());

  return () => window.removeEventListener("load", () => AOS.refresh());
}, []);

  return (
    <section id="gallery" className="gallery-section">
      <div className="gallery-container">
        {/* Heading */}
        <p
          className="gallery-heading"
          data-aos="fade-up"
          data-aos-delay="0"
        >
          Learning, Leading & Contributing{" "}
          <FaLightbulb color="#ce1e3b" size={30} style={{ marginLeft: "8px" }} />
        </p>

        <div className="gallery-grid">
          {/* Left Full Image */}
          <div className="gallery-left overlay-box" data-aos="fade-up" data-aos-delay="100">
            <img src="/images/img2.jpg" alt="Gallery 1" />
          </div>

          {/* Right Side */}
          <div className="gallery-right">
            <div className="gallery-row">
              <div className="overlay-box" data-aos="fade-up" data-aos-delay="200">
                <img src="/images/img1.jpg" alt="Gallery 2" />
              </div>
              <div className="overlay-box" data-aos="fade-up" data-aos-delay="300">
                <img src="/images/gallery2.jpeg" alt="Gallery 3" />
              </div>
              <div className="overlay-box" data-aos="fade-up" data-aos-delay="400">
                <img src="/images/gallery3.jpeg" alt="Gallery 4" />
              </div>
            </div>

            <div className="gallery-row">
              <div className="overlay-box" data-aos="fade-up" data-aos-delay="500">
                <img src="/images/gallery4.jpeg" alt="Gallery 5" />
              </div>
              <div className="overlay-box" data-aos="fade-up" data-aos-delay="600">
                <img src="/images/gallery5.png" alt="Gallery 6" />
              </div>
              <div className="overlay-box" data-aos="fade-up" data-aos-delay="700">
                <img src="/images/gallery6.jpeg" alt="Gallery 7" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallerysection;
