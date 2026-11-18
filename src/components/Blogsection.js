import React, { useEffect } from "react";
import "./Blogsection.css";
import { FaUser, FaCalendarAlt, FaRegCommentDots } from "react-icons/fa";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Blogsdata from "./Blogsdata";

const Blogsection = () => {
  useEffect(() => {
    AOS.init({ duration: 600, easing: "ease-out", once: false });
  }, []);
  const formatDate = () => {
  const d = new Date();
  return d.toISOString().split("T")[0]; // yyyy-mm-dd
};

  // Get latest 4 blogs sorted by date
  const latestBlogs = [...Blogsdata]
    .filter(blog => blog.img && blog.img.trim() !== "") // only blogs with image
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 4);

  return (
    <section id="blogs" className="blog-section">
      <div className="blog-container">
        <p
          style={{ textAlign: "center", marginBottom: "40px" }}
          data-aos="fade-up"
          className="blogsection-heading"
        >
          Latest Blogs <FaRegCommentDots color="#ce1e3b" size={30} />
        </p>

        <div className="blog-grid">
          {latestBlogs.map((blog, index) => (
            <div
              className="blog-card"
              key={blog.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {blog.img && (
                <div className="blog-image">
                  <img src={blog.img} alt={blog.title} />
                </div>
              )}

              <div className="blog-content">
                <div className="blog-meta">
                  <div className="blog-author">
                    <FaUser className="icon" /> {blog.author}
                  </div>

                  <div className="blog-date">
                    <FaCalendarAlt className="icon" /> {formatDate()}
                  </div>
                </div>

                <span className="blog-heading">{blog.title}</span>

                <p className="blog-desc">
                  {blog.content[0].text.slice(0, 100)}...
                </p>

                <Link
                  to={`/blogs/${blog.slug}`}
                  className="read-more"
                  style={{ textDecoration: "none" }}
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div
          className="see-all"
          data-aos="fade-up"
          data-aos-delay={latestBlogs.length * 100}
        >
          <Link
            to="/blogs"
            className="see-all-btn"
            style={{ textDecoration: "none" }}
          >
            <span>See All Blogs</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blogsection;
