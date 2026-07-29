import React from "react";
import "./Insightsection.css";
import { FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Reusable slide-up-on-scroll wrapper
const SlideUpOnScroll = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
};

const InsightSection = () => {
  const videos = [
    "https://www.youtube.com/embed/zjZ-PkeZcdw?&modestbranding=1&color=white&theme=light",
    "https://www.youtube.com/embed/xMZouMhHvwk?&modestbranding=1&color=white&theme=light",
    "https://www.youtube.com/embed/cGMwIclN_4I?&modestbranding=1&color=white&theme=light",
  ];

  const bgImage = "/images/bg_image_parhar.jpg";

  return (
    <section
      className="insight-section"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay with centered text */}
      <div className="insight-overlay">
        <div className="insight-container">
          <SlideUpOnScroll>
            <div className="content-box">
              <span className="insights-heading">Insights From Dr. Rohan Singh Parhar</span>
              <p style={{ color: "#000", fontWeight: "500", fontStyle: "normal" }}>
                The valuable insights of Dr. Rohan Singh Parhar over various cases enhance
                the knowledge of aspiring doctors and motivate them to follow this
                path towards success.
              </p>
            </div>
          </SlideUpOnScroll>

          {/* Desktop videos remain untouched */}
          <div className="insight-videos desktop-only">
            {videos.map((url, index) => (
              <div key={index} className="video-card">
                <div className="youtube-icon"></div>
                <iframe
                  src={url}
                  title={`YouTube video ${index}`}
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile videos remain untouched */}
      <div className="mobile-only">
        <div className="video-slider">
          {videos.map((url, index) => (
            <div key={index} className="video-card">
              <div className="youtube-icon"></div>
              <iframe
                src={url}
                title={`YouTube video ${index}`}
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightSection;
