import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./FloatingWhatsapp.css";

const FloatingWhatsapp = () => {
  const phoneNumber = "9056332253";
const message = "Hi there! Can you help me with some information about your services?";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp-btn"
    >
      <FaWhatsapp size={22} style={{ marginRight: "6px" }} />
      Chat with us
    </a>
  );
};

export default FloatingWhatsapp;
