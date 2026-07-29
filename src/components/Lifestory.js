import { useRef, useState } from "react";
import "./Lifestory.css";
import { FaPlay, FaPause } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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

const Lifestory = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
      videoRef.current.muted = false;
      videoRef.current.volume = 1;
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="lifestory-section">
      <div className="lifestory-container">
        <div
          className="lifestory-content"
          style={{ backgroundImage: `url("/images/bg new.png")` }}
        >
          {/* Only animate the text */}
          <SlideUpOnScroll>
            <div className="lifestory-text">
              <span className="vision-head">From Vision to Victory</span><br/>
              <span className="journey-main-heading">Journey of Dr. Rohan Singh Parhar</span>
              <p>
                Step into the remarkable journey of Dr. Rohan Singh Parhar, a
                visionary orthopaedic surgeon whose relentless pursuit of
                excellence has redefined advanced healthcare in Phagwara and
                beyond. As the leading force behind Parhar Hospital, Dr. Parhar
                has built one of Punjab’s most trusted orthopaedic and trauma
                care centres, equipped with world-class infrastructure and
                cutting-edge robotic technology. His expertise spans joint
                replacement, sports injuries, and complex trauma surgeries
                performed with unmatched precision and compassion. Over the
                years, his unwavering dedication to patient care has earned him
                immense respect and countless success stories of renewed
                mobility and restored confidence.
              </p>
            </div>
          </SlideUpOnScroll>

          {/* Video remains untouched */}
          <div className="lifestory-video" onClick={togglePlay}>
            {!isPlaying && (
              <img
                src="/images/video_thumbnail.png"
                alt="Video thumbnail"
                className="video-thumbnail"
              />
            )}
            <video
              ref={videoRef}
              src="/images/video1.mp4"
              className={`video-element ${isPlaying ? "show-video" : "hide-video"}`}
              preload="metadata"
              playsInline
            />
            {!isPlaying ? (
              <div className="play-overlay-centered">
                <div className="outer-glow"></div>
                <div className="inner-glow"></div>
                <div className="play-circle">
                  <FaPlay className="play-icon-centered" />
                </div>
              </div>
            ) : (
              <div className="pause-overlay">
                <div className="outer-glow"></div>
                <div className="inner-glow"></div>
                <div className="play-circle">
                  <FaPause className="play-icon-centered" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lifestory;
