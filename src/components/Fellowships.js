import "./Fellowships.css";
import { FaAward, FaCheckCircle } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const Fellowships = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,   // animation happens only once
    });
  }, []);
  
  return (
    
   <section className="fellowships-section">
    <div className="fellowships-container">
      <div className="fellowships-layout">

        {/* LEFT CONTENT */}
        <div className="fellowships-content" data-aos="fade-up">

          <p
            className="fellowships-heading"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Fellowships <FaAward className="fellowships-heading-icon" />
          </p>

          <p
            className="fellowships-para"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Dr. Rohan Singh Parhar has completed advanced national and international
            fellowships in joint replacement, arthroplasty, arthroscopy, and robotic
            surgery. These specialized training programs have equipped him with
            cutting-edge surgical techniques, global clinical exposure, and expertise in
            managing complex joint and trauma cases with precision and safety. His
            fellowship experience reflects a strong commitment to excellence, innovation,
            and continuously improving patient outcomes.
          </p>

          <ul className="fellowships-list">
            <li data-aos="fade-up" data-aos-delay="300">
              <FaCheckCircle /> Subvastus Knee Replacement (Mumbai)
            </li>
            <li data-aos="fade-up" data-aos-delay="400">
              <FaCheckCircle /> Arthroplasty & Arthroscopy – Dreifaltigkeits
              Hospital (Germany)
            </li>
            <li data-aos="fade-up" data-aos-delay="500">
              <FaCheckCircle /> Revision Hip & Knee – Galeazzi Institute
              (Milan, Italy)
            </li>
            <li data-aos="fade-up" data-aos-delay="600">
              <FaCheckCircle /> Robotic & Revision Joint Surgery (USA & South
              Korea)
            </li>
          </ul>
        </div>

        {/* RIGHT IMAGE */}
        <div
          className="fellowships-image"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <img
            src="/images/fellow_img.png"
            alt="Fellowships"
          />
        </div>

      </div>
    </div>
  </section>
  );
};

export default Fellowships;
