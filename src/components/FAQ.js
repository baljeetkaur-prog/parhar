import { useState, useRef, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet"; // import Helmet
import "./FAQ.css";
import { Link } from "react-router-dom";

const faqData = [
  { question: "What is orthopedic surgery?", answer: "Orthopedic surgery deals with conditions involving the musculoskeletal system, including bones, joints, ligaments, tendons, and muscles." },
  { question: "What conditions do you treat?", answer: "We treat fractures, joint replacements, ligament injuries, sports injuries, and other orthopedic conditions." },
  { question: "Do you offer robotic knee replacement?", answer: "Yes, we are equipped with advanced robotic technology for precise knee replacement surgeries." },
  { question: "What are the hospital's timing?", answer: "Our hospital operates 24 hours a day, 7 days a week" },
  { question: "How can I book an appointment?", answer: "You can book an appointment via our website or by calling the hospital directly." },
  { question: "Is physiotherapy available?", answer: "Yes, we provide comprehensive physiotherapy services for post-surgery recovery and injury management." },
  { question: "Do you handle pediatric cases?", answer: "Yes, we treat children with orthopedic issues including fractures and congenital disorders." },
  { question: "What is the success rate of joint replacement?", answer: "Our joint replacement procedures have a high success rate with excellent long-term outcomes." },
  { question: "Do you provide emergency services?", answer: "Yes, we provide 24/7 emergency orthopedic services for fractures and trauma cases." },
  { question: "How long is the recovery period after surgery?", answer: "Recovery varies by procedure, but most patients start walking within 24–48 hours for knee replacements." },
  { question: "Do you provide minimally invasive surgery?", answer: "Yes, we offer minimally invasive procedures whenever possible to reduce recovery time." },
  { question: "What payment methods are accepted?", answer: "We accept cash, credit/debit cards, and most insurance plans." },
  { question: "Can I get a second opinion?", answer: "Absolutely, we encourage second opinions for informed decision-making." },
  { question: "Is parking available at the hospital?", answer: "Yes, ample parking space is available for patients and visitors." },
  { question: "Do you offer online consultations?", answer: "Yes, teleconsultation is available for initial assessments and follow-ups." },
  { question: "What precautions are taken for COVID-19?", answer: "We follow strict sanitization, mask mandates, and social distancing to ensure patient safety." },
];

const FAQItem = ({ faq, isActive, onClick }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(isActive ? contentRef.current.scrollHeight : 0);
  }, [isActive]);

  return (
    <div className={`faq-item ${isActive ? "active" : ""}`} onClick={onClick}>
      <div className="faq-question">{faq.question}</div>
      <div
        className="faq-answer"
        ref={contentRef}
        style={{ height: height }}
      >
        <p>{faq.answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 600, easing: "ease-out", once: true });
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      {/* Helmet for SEO */}
      <Helmet>
        <title>Frequently Asked Questions about Orthopedic Care at Parhar Hospital Phagwara</title>
        <meta
          name="description"
          content="Find answers to common questions about orthopedic surgery, robotic knee replacement, clinic timings, appointments, and more at Parhar Hospital, Phagwara."
        />
      </Helmet>

      {/* HERO SECTION */}
      <section
        className="faq-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(242,246,246,0.7), rgba(242,246,246,0.7)), url('/images/faq_banner.png')`,
        }}
      >
        <div className="faq-overlay" data-aos="fade-up">
          <h1 className="faq-title">FAQ</h1>
          <div className="faq-breadcrumb">
            <Link to="/"><span className="faq-breadcrumb-home">Home</span></Link>
            <span className="faq-breadcrumb-separator">››</span>
            <span className="faq-breadcrumb-current">FAQ</span>
          </div>
        </div>
      </section>

      {/* FAQ CONTENT */}
      <section className="faq-section" data-aos="fade-up">
        <div className="faq-container">
          <div className="faq-column">
            {faqData.slice(0, 8).map((faq, index) => (
              <FAQItem
                key={index}
                faq={faq}
                isActive={activeIndex === index}
                onClick={() => toggleFAQ(index)}
              />
            ))}
          </div>

          <div className="faq-column">
            {faqData.slice(8, 16).map((faq, index) => (
              <FAQItem
                key={index + 8}
                faq={faq}
                isActive={activeIndex === index + 8}
                onClick={() => toggleFAQ(index + 8)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
