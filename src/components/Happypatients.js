import { useState } from "react";
import "./Happypatients.css";
import { FaSmile } from "react-icons/fa";

const Happypatients = () => {
  const reviews = [
    "/images/review1.png",
    "/images/review2.png",
    "/images/review3.png",
    "/images/review4.png",
    "/images/review5.png",
    "/images/review6.png",
    "/images/review7.png",
    "/images/review8.png",
    "/images/review9.png",
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="happy-section">
      <div className="happy-container">
        <p  className="blogsection-heading" style={{ textAlign: "center", marginBottom: "40px" }}>
          Happy Patients <FaSmile style={{ color: "#ce1e3b" }} />
        </p>

        <div className="scroll-wrapper">
          <div className="review-track">
            {[...reviews, ...reviews].map((img, index) => (
              <div
                className="review-card"
                key={index}
                onClick={() => setSelectedImage(img)}
              >
                <img src={img} alt={`review-${index}`} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={() => setSelectedImage(null)}>
              &times;
            </span>
            <img src={selectedImage} alt="review enlarged" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Happypatients;
