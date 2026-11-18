import React, { useState, useRef } from "react";
import axios from "axios";
import "./AdminBlogUpload.css";

const AdminBlogUpload = () => {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [category, setCategory] = useState("services");
  const [content, setContent] = useState("");
  const [format, setFormat] = useState("p");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const textareaRef = useRef();
  const API=process.env.REACT_APP_APIURL; 

  // Function to wrap selection with tags
  const wrapSelection = (before, after = "") => {
    const textarea = textareaRef.current;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selected = content.substring(start, end);
    const newText =
      content.slice(0, start) + before + selected + after + content.slice(end);
    setContent(newText);
  };

  // Apply heading or paragraph
  const applyFormat = () => {
    wrapSelection(`<${format}>`, `</${format}>`);
  };

  // Add link
  const addLink = () => {
    const url = prompt("Enter URL (internal or external):");
    if (url) {
      wrapSelection(`<a href="${url}" target="_blank">`, "</a>");
    }
  };

  // Handle form submission
  const handlePublish = async (e) => {
    e.preventDefault();

    if (!title || !slug || !category || !content) {
      setMessage("All fields are required.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await axios.post(`${API}/api/admin/blogs`, {
        title,
        slug,
        category,
        content,
      });

      if (response.status === 201) {
        setMessage("Blog published successfully!");
        setTitle("");
        setSlug("");
        setCategory("services");
        setContent("");
      }
    } catch (error) {
      console.error(error);
      setMessage(
        error.response?.data?.message || "Error publishing blog. Try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-blog-upload">
      <h2>Upload New Blog</h2>
      {message && <p className="message">{message}</p>}
      <form onSubmit={handlePublish}>
        <label>
          Title
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>

        <label>
          Slug
          <input
            type="text"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            required
          />
        </label>

        <label>
          Category
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="services">Services</option>
            <option value="health-tips">Health Tips</option>
          </select>
        </label>

        <label>
          Content
          <div className="toolbar">
            <select value={format} onChange={(e) => setFormat(e.target.value)}>
              <option value="p">Paragraph</option>
              <option value="h1">H1</option>
              <option value="h2">H2</option>
              <option value="h3">H3</option>
              <option value="h4">H4</option>
              <option value="h5">H5</option>
              <option value="h6">H6</option>
            </select>
            <button type="button" onClick={applyFormat}>Apply</button>
            <button type="button" onClick={() => wrapSelection("<b>", "</b>")}>Bold</button>
            <button type="button" onClick={() => wrapSelection("<i>", "</i>")}>Italic</button>
            <button type="button" onClick={() => wrapSelection("<u>", "</u>")}>Underline</button>
            <button type="button" onClick={addLink}>Link</button>
          </div>
          <textarea
            ref={textareaRef}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={10}
          />
        </label>

        <button type="submit" disabled={loading}>
          {loading ? "Publishing..." : "Publish"}
        </button>
      </form>
    </div>
  );
};

export default AdminBlogUpload;
