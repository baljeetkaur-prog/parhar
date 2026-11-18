import "./Reviewsection.css";
import { MdStar } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

const reviews = [
  {
    name: "Gurpreet Kaur",
    feedback:
      "Dr. Rohan Singh Parhar was very professional and explained the procedure clearly. The staff were friendly and made me feel comfortable throughout my visit. I am very satisfied with the care I received.",
    rating: 5,
  },
  {
    name: "Amritpal Singh",
    feedback:
      "Excellent care, my knee replacement surgery went smoothly. The post-surgery guidance and follow-up were exceptional. Highly recommend this hospital for orthopaedic treatments.",
    rating: 5,
  },
  {
    name: "Simran Kaur",
    feedback:
      "Friendly staff and very supportive throughout the treatment. The hospital environment is clean and well-maintained. I felt confident in the medical care provided.",
    rating: 4,
  },
  {
    name: "Harpreet Singh",
    feedback:
      "Highly recommended for trauma and orthopaedic care. The doctors are experienced and attentive. My recovery went better than expected due to their expert guidance.",
    rating: 5,
  },
  {
    name: "Jasleen Kaur",
    feedback:
      "The hospital staff were very attentive and courteous. The facilities are modern and well-equipped. I am extremely happy with the overall experience.",
    rating: 5,
  },
  {
    name: "Manpreet Singh",
    feedback:
      "State-of-the-art facilities and excellent post-surgery follow-up. The medical team answered all my questions patiently. I felt safe and cared for at every step.",
    rating: 5,
  },
  {
    name: "Rajveer Singh",
    feedback:
      "Amazing experience, I felt safe and well cared for. The physiotherapy sessions were very effective. I am grateful for the professional and friendly approach of the staff.",
    rating: 5,
  },
  {
    name: "Navdeep Kaur",
    feedback:
      "Professional team with excellent knowledge. They explained all procedures in detail and ensured my comfort. Highly satisfied with my treatment.",
    rating: 5,
  },
  {
    name: "Baljeet Singh",
    feedback:
      "I highly recommend this hospital for orthopedic care. The doctors are skilled and the staff is attentive. My recovery was smooth and well-managed.",
    rating: 5,
  },
];

const Reviewsection = () => {
  const sliderRef = useRef(null);
  const cardRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);

  const infiniteReviews = [...reviews, ...reviews, ...reviews];

  useEffect(() => {
    if (cardRef.current) {
      const card = cardRef.current;
      const style = window.getComputedStyle(card);
      const margin = parseInt(style.marginLeft) + parseInt(style.marginRight);
      setCardWidth(card.offsetWidth + margin);
    }
  }, []);

  // useEffect(() => {
  //   const slider = sliderRef.current;
  //   if (!slider) return;

  //   const handleScroll = () => {
  //     const sectionLength = slider.scrollWidth / 3;
  //     if (slider.scrollLeft >= sectionLength * 2) {
  //       slider.scrollLeft -= sectionLength;
  //     } else if (slider.scrollLeft <= 0) {
  //       slider.scrollLeft += sectionLength;
  //     }
  //   };

  //   slider.addEventListener("scroll", handleScroll);
  //   return () => slider.removeEventListener("scroll", handleScroll);
  // }, []);

const scroll = (direction) => {
  const slider = sliderRef.current;
  if (!slider || !cardWidth) return;

  const scrollAmount = direction === "left" ? -cardWidth * 1.2 : cardWidth * 1.2;

  gsap.to(slider, {
    scrollTo: { x: slider.scrollLeft + scrollAmount, autoKill: false },
    duration: 0.8,
    ease: "power3.out",
  });
};

  // 🌟 Scroll Animation for Reviews
// 🌟 Scroll Animation for Reviews


  return (
    <section className="reviewfirst-section">
      <div className="reviewfirst-container">
        <h3 className="reviewfirst-heading">
          Why Choose Parhar Hospital <FaUserCircle />
        </h3>

        <div className="reviewfirst-slider" ref={sliderRef}>
          {infiniteReviews.map((review, index) => (
            <div
              className="reviewfirst-card"
              key={index}
              ref={index === 0 ? cardRef : null}
            >
              <div className="reviewfirst-top">
                <div className="reviewfirst-stars">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <MdStar key={i} color="#FFD700" size={24} />
                  ))}
                </div>
                <img src="/images/google-icon.png" alt="Google" />
              </div>
              <p className="reviewfirst-feedback">{review.feedback}</p>
              <p className="reviewfirst-name">{review.name}</p>
            </div>
          ))}
        </div>

        <div className="reviewfirst-arrows">
          <button onClick={() => scroll("left")}>&lt;</button>
          <button onClick={() => scroll("right")}>&gt;</button>
        </div>
      </div>
    </section>
  );
};

export default Reviewsection;
