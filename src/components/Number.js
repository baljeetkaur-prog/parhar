import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import SlideUpOnScroll from "./SlideUpOnScroll";
import { FaStar } from "react-icons/fa";
import "./Numbers.css";

// Helper to format numbers like 50000 -> 50K, 150000 -> 1.5L
const formatNumber = (num) => {
  if (num >= 100000) return (num / 100000).toFixed(1) + "L+";
  if (num >= 1000) return (num / 1000).toFixed(0) + "K+";
  return num + "+";
};

const NumberCard = ({ end, label, delay = 0, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (inView && !hasAnimated) {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          setHasAnimated(true);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [inView, hasAnimated, end, duration]);

  return (
    <div ref={ref} className="number-card">
      <SlideUpOnScroll delay={delay}>
        <p className="number-heading">{label}</p>
        <p className="number-count">{formatNumber(count)}</p>
      </SlideUpOnScroll>
    </div>
  );
};

const Number = () => {
  const data = [
    { end: 50000, label: "Orthopaedic Surgeries", delay: 0.1 },
    { end: 150000, label: "Walk-in Patients", delay: 0.2 },
    { end: 1000, label: "Robotic Surgeries", delay: 0.3 },
    { end: 47, label: "Years of Excellence", delay: 0.4 },
  ];

  return (
    <section className="numbers-section">
      <div className="numbers-container">
        <SlideUpOnScroll>
          <p className="numbers-heading">
            <span className="heading-text">Our Achievements</span>
            <span className="heading-icon">
              <FaStar />
            </span>
          </p>
        </SlideUpOnScroll>

        <div className="numbers-grid">
          {data.map((item, index) => (
            <NumberCard
              key={index}
              end={item.end}
              label={item.label}
              delay={item.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Number;
