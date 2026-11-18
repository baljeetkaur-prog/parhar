import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { FaChevronLeft, FaChevronRight, FaTrophy } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import "./Youtubesection.css";


gsap.registerPlugin(ScrollToPlugin);

const Youtubesection = () => {
  const [videos, setVideos] = useState([]);
  const [mainVideo, setMainVideo] = useState(null);

  const sliderRef = useRef(null);

  const API_KEY = "AIzaSyCyYTjdiQXMvZwBkf_AwAboS92SA88KBFQ";
  const CHANNEL_ID = "UCIFkEACgAsM6bgwEJ_-E0Dw";
  const MAX_VIDEOS = 150;

  const fetchVideos = async () => {
    try {
      // Get uploads playlist
      const resChannel = await axios.get(
        "https://www.googleapis.com/youtube/v3/channels",
        {
          params: {
            part: "contentDetails",
            id: CHANNEL_ID,
            key: API_KEY,
          },
        }
      );

      const uploadsPlaylist =
        resChannel.data.items[0]?.contentDetails?.relatedPlaylists?.uploads;

      if (!uploadsPlaylist) return;

      let allVideos = [];
      let nextPageToken = "";

      while (allVideos.length < MAX_VIDEOS) {
        const resPlaylist = await axios.get(
          "https://www.googleapis.com/youtube/v3/playlistItems",
          {
            params: {
              part: "snippet",
              playlistId: uploadsPlaylist,
              maxResults: 50,
              pageToken: nextPageToken,
              key: API_KEY,
            },
          }
        );

        const newVideos = resPlaylist.data.items
          .filter((item) => item.snippet?.resourceId?.videoId)
          .map((item) => ({
            id: item.snippet.resourceId.videoId,
            title: item.snippet.title,
            thumbnail:
              item.snippet.thumbnails.medium?.url ||
              item.snippet.thumbnails.default?.url,
          }));

        allVideos = [...allVideos, ...newVideos];
        nextPageToken = resPlaylist.data.nextPageToken;
        if (!nextPageToken) break;
      }

      allVideos = allVideos.slice(0, MAX_VIDEOS);

      setVideos(allVideos);
      if (allVideos.length > 0) setMainVideo(allVideos[0]);
    } catch (err) {
      console.error("Error fetching videos:", err);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const playVideo = (video) => setMainVideo(video);

  const scrollThumbnails = (direction) => {
    if (!sliderRef.current) return;
    const scrollAmount = 300; // adjust per scroll

    gsap.to(sliderRef.current, {
      duration: 0.7,
      scrollTo: { x: sliderRef.current.scrollLeft + (direction === "left" ? -scrollAmount : scrollAmount) },
      ease: "power2.inOut",
    });
  };

  if (!mainVideo)
    return <div className="loading">Loading Success Stories...</div>;

  const others = videos.filter((v) => v.id !== mainVideo.id);

  return (
    <section className="youtube-section">
      <p style={{ textAlign: "center" }} className="youtube-section-heading">
        Success Stories <FaTrophy style={{ color: "#ce1e3b" }} />
      </p>

      {/* Main Video */}
 <div className="main-video">
  <iframe
    src={`https://www.youtube.com/embed/${mainVideo.id}`}
    title={mainVideo.title}
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>

  {/* Overlay only on main video */}
  <div className="video-overlay">
    <img src="/images/smiling-icon.jpg" alt="Happy" />
    <div className="overlay-text">
      <span>100+</span>
      <span>Happy Clients</span>
    </div>
  </div>
</div>


      {/* Thumbnails Row */}
      <div className="slider-container">
      <button className="services-slider-btn left-btn" onClick={() => scrollThumbnails("left")}>
  <FaChevronLeft />
</button>


        <div className="more-videos" ref={sliderRef}>
          {others.map((video) => (
            <div
              key={video.id}
              className="thumb"
              onClick={() => playVideo(video)}
            >
              <div className="thumb-image-container">
                <img src={video.thumbnail} alt={video.title} />
                <div className="play"></div>
              </div>
              <div className="thumb-title">{video.title}</div>
            </div>
          ))}
        </div>

        <button className="services-slider-btn" onClick={() => scrollThumbnails("right")}>
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Youtubesection;
