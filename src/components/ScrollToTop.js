import React, { useState, useEffect } from "react";
import { FaArrowUp, FaLongArrowAltUp } from "react-icons/fa";
import "./ScrollToTop.css";

const ScrollToTop = () => {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollPercent((scrollTop / scrollHeight) * 100);
      setVisible(scrollTop > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return visible ? (
    <button
      className="scroll-to-top-btn"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      style={{
        background: `conic-gradient(#ce1e3b ${scrollPercent}%, rgba(0,0,0,0.1) ${scrollPercent}%)`,
      }}
    >
    <FaLongArrowAltUp size={25} />
    </button>
  ) : null;
};

export default ScrollToTop;
