import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiClock } from "react-icons/fi";
import "./BlogDetail.css";
import Blogsdata from "./Blogsdata";
import { Helmet } from "react-helmet";
import BlogContactForm from "./BlogContactForm";

const BlogDetail = () => {
  const { slug } = useParams();
  const blog = Blogsdata.find((b) => b.slug === slug) || Blogsdata[0];
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = () => {
    if (!searchInput.trim()) return;
    navigate(`/blogs?search=${encodeURIComponent(searchInput.trim())}`);
  };

  useEffect(() => {
    // Initialize animations
    AOS.init({ duration: 800, easing: "ease-out", once: true });

    // Dynamically set page title and meta
    document.title = `${blog.title} - Read more on Parhar Hospital, Phagwara`;

    const metaDescription = document.querySelector('meta[name="description"]');
    const descContent = `Read about "${blog.title}" authored by ${blog.author} on Parhar Hospital, Phagwara. Learn more about health tips, services, and updates.`;
    if (metaDescription) {
      metaDescription.setAttribute("content", descContent);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = descContent;
      document.head.appendChild(meta);
    }
  }, [blog]);

  const latestBlogs = Blogsdata.slice(-3).reverse();
  const categoriesList = [
    { name: "Health Tips", key: "health-tips" },
    { name: "Services", key: "services" },
  ];

const formatDate = (date) => {
  if (!date) return "";

  const d = new Date(date);

  return d.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

  return (
    <>
      <Helmet>
        <title>{blog.title} - Parhar Hospital, Phagwara</title>
        <meta name="description" content={`Read about "${blog.title}" by ${blog.author}.`} />
      </Helmet>

      {/* HERO */}
      <section
        className="bldetail-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(242,246,246,0.7), rgba(242,246,246,0.7)), url('/images/blogdetail_banner.png')`,
        }}
      >
        <div className="bldetail-hero-overlay" data-aos="fade-up">
          <div className="bldetail-title">{blog.title}</div>
          <div className="bldetail-breadcrumb">
            <Link to="/"><span className="bldetail-bc-home">Home</span></Link>
            <span className="bldetail-bc-sep">››</span>
            <span className="bldetail-bc-current">{blog.title}</span>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="bldetail-section">
        <div className="bldetail-container">
          <div className="bldetail-grid">
            {/* LEFT MAIN */}
            <main className="bldetail-main">
              <div className="bldetail-top" data-aos="fade-up">
                {/* Meta */}
                <div className="bldetail-meta">
                  <div className="bldetail-doctor">
                    <img
                      src="/images/small_logo.png"
                      alt="Doctor Logo"
                      className="bldetail-doctor-logo"
                    />
                    <span className="bldetail-author">{blog.author}</span>
                  </div>
                 <span className="bldetail-date">
  <FiClock /> {formatDate(blog.date)}
</span>
                </div>

                {/* Main Image */}
                {blog.img && (
                  <div className="bldetail-top-image">
                    <img
                      src={blog.img.startsWith("/") ? blog.img : `/images/${blog.img}`}
                      alt={blog.title}
                    />
                  </div>
                )}

                {/* Intro Paragraph */}
                {blog.content.length > 0 && blog.content[0].type === "paragraph" && (
                <div
  className="bd-paragraph bldetail-top-paragraph"
  dangerouslySetInnerHTML={{ __html: blog.content[0].text }}
/>
                )}
              </div>

              {/* FULL CONTENT */}
              <div className="bldetail-content">
                {blog.content.map((item, idx) => {
                  if (idx === 0 && item.type === "paragraph") return null;

                  switch (item.type) {
                 case "heading": {
  const level = item.level || 2; // default fallback = h2

  const HeadingTag =
    level === 1 ? "h1" :
    level === 2 ? "h2" :
    level === 3 ? "h3" :
    level === 4 ? "h4" :
    level === 5 ? "h5" :
    level === 6 ? "h6" :
    "h2";

  return (
    <div key={idx} className="bd-block">
      <HeadingTag className="bd-heading">
        {item.text}
      </HeadingTag>
    </div>
  );
}
              case "paragraph":
  return (
    <p
      key={idx}
      className="bd-paragraph"
      dangerouslySetInnerHTML={{ __html: item.text }}
    />
  );
                    case "list":
                      return (
                        <ul key={idx} className="bd-list">
                          {item.items.map((li, i) => (
                          <li
  key={i}
  dangerouslySetInnerHTML={{ __html: li }}
/>
                          ))}
                        </ul>
                      );
                    case "tick-list":
                      return (
                        <ul key={idx} className="bd-tick-list">
                          {item.items.map((li, i) => (
                            <li key={i}>{li}</li>
                          ))}
                        </ul>
                      );
                    case "conclusion":
                      return (
                        <div key={idx} className="bd-conclusion-box">
                          <h4>{item.heading}</h4>
                          <p>{item.text}</p>
                        </div>
                      );
                    case "image":
                      return (
                        <img
                          key={idx}
                          src={item.text.startsWith("/") ? item.text : `/images/${item.text}`}
                          alt={`blog-${idx}`}
                          className="bldetail-img"
                        />
                      );
                    default:
                      return null;
                  }
                })}
              </div>
            </main>

            {/* SIDEBAR */}
            <aside className="bldetail-sidebar">
              {/* Search Box */}
              <div className="bldetail-widget bldetail-search" data-aos="fade-up">
                <input
                  type="search"
                  placeholder="Search..."
                  className="bldetail-search-input"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                />
                <button className="bldetail-search-btn" onClick={handleSearch}>
                  Search
                </button>
              </div>

              {/* Contact Form */}
              <BlogContactForm heading="Have Any Query?" />

              {/* Latest Blogs */}
              <div className="bldetail-widget bldetail-latest-blogs" data-aos="fade-up">
                <div className="bldetail-widget-header">Latest Blogs</div>
                {latestBlogs.map((b) => (
                  <Link key={b.id} to={`/blogs/${b.slug}`} className="bldetail-latest-blog-link">
                    <div className="bldetail-latest-blog">
                      <img src={b.img} alt={b.title} className="bldetail-lb-image" />
                      <div className="bldetail-lb-info">
                        <div className="bldetail-lb-title">{b.title}</div>
                      <div className="bldetail-lb-date">
  {formatDate(b.date)}
</div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Categories */}
              <div className="bldetail-widget bldetail-categories" data-aos="fade-up">
                <div className="bldetail-widget-header">Blog Categories</div>
                <ul className="bldetail-categories-list">
                  <li>
                    <Link to={`/blogs?category=All`}>All</Link>
                  </li>
                  {categoriesList.map((cat, idx) => (
                    <li key={idx}>
                      <Link to={`/blogs?category=${cat.key}`}>{cat.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetail;
