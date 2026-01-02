// SlideUpOnScroll.jsx
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SlideUpOnScroll = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // animate only once
    threshold: 0.2,    // element is visible when 20% is in view
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}       // start below and invisible
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      style={{ willChange: "transform, opacity" }} // optimize performance
    >
      {children}
    </motion.div>
  );
};

export default SlideUpOnScroll;
