import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const API = process.env.REACT_APP_APIURL || "http://localhost:9000";

const BlogContactForm = ({ heading = "Contact Us" }) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      formType: heading, // optional field to know which form submitted
    };

    try {
      await axios.post(`${API}/api/service-enquiry`, payload); // reuse same endpoint
      toast.success("Your enquiry has been submitted!");
      e.target.reset();
    } catch (err) {
      console.error(err);
      toast.error("Error submitting enquiry. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="blmain-widget blmain-enquiry" data-aos="fade-up">
     

      <div className="blmain-widget-header">{heading}</div>
      <form className="blmain-enquiry-form" onSubmit={handleSubmit}>
        <label className="blmain-label">
          Name
          <input type="text" name="name" required className="blmain-input" />
        </label>
        <label className="blmain-label">
          Email
          <input type="email" name="email" required className="blmain-input" />
        </label>
        <label className="blmain-label">
          Phone
          <input type="tel" name="phone" required className="blmain-input" />
        </label>
        <button
          type="submit"
          className="blmain-submit-btn"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default BlogContactForm;
