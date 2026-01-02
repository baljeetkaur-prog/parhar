import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Blogmain.css";
import { FiClock } from "react-icons/fi";
import Blogsdata from "./Blogsdata";
import { Helmet } from "react-helmet";
import BlogContactForm from "./BlogContactForm";

const Blogmain = () => {
  const location = useLocation();
  const [localSearch, setLocalSearch] = useState("");
const navigate = useNavigate();
const handleSidebarSearch = () => {
  if (!localSearch.trim()) return;

  navigate(`/blogs?search=${encodeURIComponent(localSearch.trim())}`);
};

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-out", once: true });
  }, []);

  const formatDate = () => {
    const d = new Date();
    return d.toISOString().split("T")[0]; // yyyy-mm-dd
  };

  const [currentPage, setCurrentPage] = useState(
    () => parseInt(sessionStorage.getItem("blogCurrentPage")) || 1
  );

  const blogsPerPage = 5;

  // Sidebar categories mapped to actual category keys
  const categories = [
    { name: "Health Tips", key: "health-tips" },
    { name: "Services", key: "services" },
  ];

  // Read category from query param
  const queryParams = new URLSearchParams(location.search);
  const categoryParam = queryParams.get("category") || "All";
  const searchParam = queryParams.get("search")?.toLowerCase() || "";
  const searchRaw = queryParams.get("search") || "";


  const [filterCategory, setFilterCategory] = useState(categoryParam);

  useEffect(() => {
    // Update filter if URL changes
    setFilterCategory(categoryParam);
    setCurrentPage(1);
  }, [categoryParam]);

  // Filter blogs based on selected category
const filteredBlogs = Blogsdata.filter((b) => {
  const matchCategory =
    filterCategory === "All" || b.category === filterCategory;

  const matchSearch =
    searchParam === "" ||
    b.title.toLowerCase().includes(searchParam) ||
    b.content[0].text.toLowerCase().includes(searchParam);

  return matchCategory && matchSearch;
});


  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    sessionStorage.setItem("blogCurrentPage", pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleEnquiry = (e) => {
    e.preventDefault();
    alert("Enquiry submitted (demo). Connect backend here.");
  };

  const latestBlogs = Blogsdata.slice(-3).reverse();

  return (
    <>
         <Helmet>
    <title>Read the Latest Blogs from Parhar Hospital, Phagwara</title>
        <meta name="description" content="Read the latest health tips and services blogs by Parhar Hospital, Phagwara." />
        <meta name="keywords" content="blogs, health tips, services, Parhar Hospital, Phagwara" />
      </Helmet>
      {/* HERO */}
      <section
        className="blmain-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(242,246,246,0.7), rgba(242,246,246,0.7)), url('/images/blog_banner.png')`,
        }}
      >
        <div className="blmain-hero-overlay" data-aos="fade-up">
        <h1 className="blmain-title">
  {searchRaw
    ? `Search results for: "${searchRaw}"`
    : "Blogs"}
</h1>
          <div className="blmain-breadcrumb">
            <Link to="/"><span className="blmain-bc-home">Home</span></Link>
            <span className="blmain-bc-sep">››</span>
            <span className="blmain-bc-current">
  {searchRaw ? `"${searchRaw}"` : "Blogs"}
</span>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="blmain-section">
        <div className="blmain-container">
          <div className="blmain-grid">

            {/* LEFT: BLOG CARDS */}
            <main className="blmain-main">
                {filteredBlogs.length === 0 && (
    <div className="no-blogs-message">
      No blogs found for your search.
    </div>
  )}
              {currentBlogs.map((blog, idx) => (
                <div
                  className="blmain-blog-card"
                  key={blog.id}
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                >
                  {blog.img && (
                    <div className="blmain-blog-image">
                      <img src={blog.img} alt={blog.title} />
                    </div>
                  )}
                  <div className="blmain-blog-content">
                    <div className="blmain-blog-meta-top">
                      <div className="blmain-doctor">
                        <img
                          src="/images/small_logo.png"
                          alt="Doctor Logo"
                          className="blmain-doctor-logo"
                        />
                        <span className="blmain-doctor-name">{blog.author}</span>
                      </div>
                      <div className="blmain-date">
                        <FiClock /> {formatDate()}
                      </div>
                    </div>

                    <h3 className="blmain-blog-heading">{blog.title}</h3>
                    <p className="blmain-blog-desc">
                      {blog.content[0].text.slice(0, 150)}...
                      <Link to={`/blogs/${blog.slug}`} className="blmain-read-more-inline">
                        Read More
                      </Link>
                    </p>
                  </div>
                </div>
              ))}

              {/* PAGINATION */}
              {totalPages > 1 && (
                <div className="blmain-pagination">
                  <button
                    className="blmain-pagination-arrow"
                    onClick={() =>
                      handlePageChange(currentPage > 1 ? currentPage - 1 : 1)
                    }
                    disabled={currentPage === 1}
                  >
                    ‹ Prev
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => (
                    <button
                      key={i}
                      className={`blmain-page-btn ${
                        currentPage === i + 1 ? "active" : ""
                      }`}
                      onClick={() => handlePageChange(i + 1)}
                    >
                      {i + 1}
                    </button>
                  ))}
                  <button
                    className="blmain-pagination-arrow"
                    onClick={() =>
                      handlePageChange(
                        currentPage < totalPages ? currentPage + 1 : totalPages
                      )
                    }
                    disabled={currentPage === totalPages}
                  >
                    Next ›
                  </button>
                </div>
              )}
            </main>

            {/* RIGHT SIDEBAR */}
            <aside className="blmain-sidebar">

              {/* Search Box */}
            <div className="blmain-widget blmain-search" data-aos="fade-up">
  <input
    type="search"
    placeholder="Search..."
    className="blmain-search-input"
    value={localSearch}
    onChange={(e) => setLocalSearch(e.target.value)}
    onKeyDown={(e) => e.key === "Enter" && handleSidebarSearch()}
  />
  <button className="blmain-search-btn" onClick={handleSidebarSearch}>
    Search
  </button>
</div>


              {/* Enquiry Form */}
            <BlogContactForm heading="Have Any Query?" />

              {/* Latest Blogs */}
              <div className="blmain-widget blmain-latest-blogs" data-aos="fade-up">
                <div className="blmain-widget-header">Latest Blogs</div>
                {latestBlogs.map((blog) => (
                  <Link key={blog.id} to={`/blogs/${blog.slug}`} className="blmain-latest-blog-link">
                    <div className="blmain-latest-blog">
                      <img src={blog.img} alt={blog.title} className="blmain-lb-image" />
                      <div className="blmain-lb-info">
                        <div className="blmain-lb-title">{blog.title}</div>
                        <div className="blmain-lb-date">{formatDate()}</div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Categories */}
              <div className="blmain-widget blmain-categories" data-aos="fade-up">
                <div className="blmain-widget-header">Blog Categories</div>
                <ul className="blmain-categories-list">
                  <li className={filterCategory === "All" ? "active" : ""}>
                    <Link to={`/blogs?category=All`}>All</Link>
                  </li>
                  {categories.map((cat, idx) => (
                    <li key={idx} className={filterCategory === cat.key ? "active" : ""}>
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

export default Blogmain;
