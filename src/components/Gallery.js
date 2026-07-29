import React, { useState, useEffect, useRef } from "react";
import "./Gallery.css";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [fadeOut, setFadeOut] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [images, setImages] = useState([]);
  const wrapperRef = useRef(null);

  // Initialize AOS once
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-out",
      once: true,
      offset: 0, // Trigger as soon as element enters viewport
    });
  }, []);

  // Refresh AOS whenever images change
  useEffect(() => {
    AOS.refresh();
  }, [images]);

  // Adjust wrapper height on images update
  useEffect(() => {
    if (wrapperRef.current) {
      wrapperRef.current.style.height = `${wrapperRef.current.scrollHeight}px`;
    }
  }, [images]);

  const shuffleArray = (array) => {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  const awards = [
    "/images/award1.jpg", "/images/award2.jpg", "/images/award3.jpg", "/images/award4.jpg",
    "/images/award5.jpg", "/images/award6.jpg", "/images/award7.jpg", "/images/award8.jpg",
    "/images/award9.jpg", "/images/award10.jpg", "/images/img1.jpg", "/images/gallery1.jpeg",
    "/images/gallery2.jpeg", "/images/gallery3.jpeg", "/images/gallery4.jpeg", "/images/gallery5.png",
    "/images/gallery11.jpeg", "/images/gallery12.jpeg", "/images/gallery13.mp4", "/images/gallery14.jpeg",
    "/images/gallery15.jpeg", "/images/gallery16.jpeg", "/images/gallery17.jpeg", "/images/gallery18.jpeg",
    "/images/gallery19.jpeg", "/images/gallery20.jpeg", "/images/gallery21.jpeg", "/images/gallery22.jpeg",
    "/images/gallery23.jpeg", "/images/gallery24.jpeg", "/images/gallery25.jpeg", "/images/gallery26.mp4",
    "/images/gallery27.jpeg", "/images/gallery01.jpeg", "/images/gallery02.jpeg", "/images/gallery03.jpeg", "/images/gallery04.jpeg", 
    "/images/gallery05.jpeg", "/images/gallery06.jpeg", "/images/gallery07.jpeg", "/images/gallery08.jpeg", "/images/gallery09.mp4",
    "/images/gallery010.mp4", "/images/gallery011.jpeg", "/images/gallery012.jpeg", "/images/gallery013.jpeg", "/images/gallery014.jpeg" 

  ];
  const news = Array.from({ length: 8 }, (_, i) => `/images/news${i + 1}.jpg`);
  const reviews = Array.from({ length: 9 }, (_, i) => `/images/review${i + 1}gallery.png`);
  const allImages = [...awards, ...news, ...reviews];

  useEffect(() => {
    let tabImages = [];
    if (activeTab === "awards") tabImages = awards;
    else if (activeTab === "news") tabImages = news;
    else if (activeTab === "reviews") tabImages = reviews;
    else tabImages = allImages;

    setImages(shuffleArray(tabImages));
  }, [activeTab]);

  const handleTabChange = (tab) => {
    if (!wrapperRef.current) return;
    const currentHeight = wrapperRef.current.offsetHeight;
    wrapperRef.current.style.height = `${currentHeight}px`;
    setFadeOut(true);

    setTimeout(() => {
      setActiveTab(tab);

      setTimeout(() => {
        if (wrapperRef.current) {
          const newHeight = wrapperRef.current.scrollHeight;
          wrapperRef.current.style.height = `${newHeight}px`;
          setTimeout(() => {
            if (wrapperRef.current) wrapperRef.current.style.height = "auto";
          }, 500);
        }
        setFadeOut(false);
      }, 50);
    }, 200);
  };

  return (
    <>
      <Helmet>
        <title>Explore the Gallery of Parhar Hospital, Phagwara, Punjab</title>
        <meta
          name="description"
          content="Explore the gallery of Parhar Hospital, Phagwara, Punjab showcasing awards, news, patient reviews, and advanced orthopaedic procedures by Dr. Rohan Singh Parhar."
        />
        <meta
          name="keywords"
          content="Parhar Hospital, Gallery, Phagwara, Punjab, Orthopaedic, Robotic Surgery, Patient Reviews, Awards, News"
        />
      </Helmet>

      {/* HERO SECTION */}
      <section
        className="ga-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(242,246,246,0.7), rgba(242,246,246,0.7)), url('/images/bg_image_parhar.jpg')`,
        }}
      >
        <div className="ga-hero-overlay" data-aos="fade-up">
          <h1 className="ga-title">Gallery</h1>
          <div className="ga-breadcrumb">
            <Link to="/"><span className="ga-bc-home">Home</span></Link>
            <span className="ga-bc-sep">››</span>
            <span className="ga-bc-current">Gallery</span>
          </div>
        </div>
      </section>

      {/* TOPBAR TABS */}
      <div className="main_gallery-tabs-wrapper">
        <div className="gallery-topbar" data-aos="fade-up" data-aos-delay="100">
          <div className="gallery-container">
            <div className="gallery-tabs">
              <button
                className={activeTab === "all" ? "tab active" : "tab"}
                onClick={() => handleTabChange("all")}
              >
                <span>All</span>
              </button>
              <button
                className={activeTab === "awards" ? "tab active" : "tab"}
                onClick={() => handleTabChange("awards")}
              >
                <span>Achievements</span>
              </button>
              <button
                className={activeTab === "news" ? "tab active" : "tab"}
                onClick={() => handleTabChange("news")}
              >
                <span>Media Coverage</span>
              </button>
              <button
                className={activeTab === "reviews" ? "tab active" : "tab"}
                onClick={() => handleTabChange("reviews")}
              >
                <span>Patient Testimonials</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* IMAGE GRID */}
      <section className="main_gallery-section">
        <div className="main_gallery-container">
          <div
            ref={wrapperRef}
            className={`main_gallery-grid-wrapper ${fadeOut ? "fade-out" : ""}`}
          >
            <div className="main_gallery-grid">
             {images.map((img, idx) => (
  <div
    className="main_gallery-box"
    key={idx}
    onClick={() => setModalImage(img)}
  >
    {img.endsWith(".mp4") ? (
      <div className="video-wrapper">
        <video src={img} muted />
        <div className="play-icon">▶</div>
      </div>
    ) : (
      <img src={img} alt="gallery" loading="lazy" />
    )}
  </div>
))}

            </div>
          </div>
        </div>
      </section>

      {/* IMAGE MODAL */}
      {modalImage && (
        <div className="image-modal" onClick={() => setModalImage(null)}>
          {modalImage.endsWith(".mp4") ? (
            <video src={modalImage} controls autoPlay />
          ) : (
            <img src={modalImage} alt="Modal" />
          )}
          <span className="modal-close" onClick={() => setModalImage(null)}>
            ×
          </span>
        </div>
      )}
    </>
  );
};

export default Gallery;
