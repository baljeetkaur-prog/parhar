import "./Mediapresence.css";
import { FaGlobe } from "react-icons/fa";

const Mediapresence = () => {
  const mediaLinks = [
    {
      name: "Instagram",
      img: "/images/instagram.png",
      border:
        "linear-gradient(90deg, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5)",
      bg: "rgba(253, 234, 255, 0.25)",
      btnBg:
        "linear-gradient(90deg, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5)",
      link: "https://www.instagram.com/official_parhar_hospital/?hl=en",
    },
    {
      name: "Facebook",
      img: "/images/facebook.png",
      border: "linear-gradient(90deg, #3B5998, #3B5998)",
      bg: "rgba(59, 89, 152, 0.15)",
      btnBg: "linear-gradient(90deg, #3B5998, #3B5998)",
      link: "https://www.facebook.com/ParharHospital/",
    },
    {
      name: "YouTube",
      img: "/images/youtube.png",
      border: "linear-gradient(90deg, #FF0000, #FF0000)",
      bg: "rgba(255, 0, 0, 0.12)",
      btnBg: "linear-gradient(90deg, #FF0000, #FF0000)",
      link: "https://www.youtube.com/@ParharHospital-yz3kw",
    },
  ];

  return (
    <section className="media-section">
      <div className="media-container">
       <p className="mediapresence-heading">
  Media Presence
  <span className="heading-icon">
    <FaGlobe />
  </span>
</p>

        <div className="scroll-wrapper">
          <div className="media-cards scroll-track">
            {[...mediaLinks, ...mediaLinks].map((item, index) => (
              <div
                key={index}
                className="media-card"
                style={{
                  background: item.bg,
                  borderImage: `${item.border} 1`,
                }}
              >
                <div className="media-info">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="media-icon-img"
                  />
                  <span className="media-name">{item.name}</span>
                </div>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-btn"
                  style={{
                    background: item.btnBg,
                    color: "#fff",
                  }}
                >
                  View
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mediapresence;
