import React, { useState } from "react";
import axios from "axios";
import "./ServiceEnquiryForm.css";
import { toast } from "react-toastify";


const API = process.env.REACT_APP_APIURL || "http://localhost:9000";

const ServiceEnquiryForm = ({ serviceName }) => {
  const [loading, setLoading] = useState(false);
  const submitServiceToFormspree = async (payload) => {
  try {
    await axios.post(
      "https://formspree.io/f/mqezzglj", // 🔁 use same or new Formspree ID
      payload,
      { headers: { Accept: "application/json" } }
    );
    return true;
  } catch (err) {
    console.error("Formspree service enquiry failed:", err);
    return false;
  }
};


const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  const formData = new FormData(e.target);

  const payload = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    serviceName,
    source: "Service Page Enquiry",
  };

  // 1️⃣ Formspree FIRST (awaited)
  const formspreeSuccess = await submitServiceToFormspree(payload);

  // 2️⃣ Backend fired asynchronously (NEVER await)
  axios
    .post(`${API}/api/service-enquiry`, payload, { timeout: 3000 })
    .then(() => console.log("Backend service enquiry saved"))
    .catch((err) =>
      console.error("Backend service enquiry failed:", err)
    );

  // 3️⃣ UI depends ONLY on Formspree
  if (formspreeSuccess) {
    toast.success("Enquiry submitted successfully!");
    e.target.reset();
  } else {
    toast.error("Error submitting enquiry. Please try again.");
  }

  setLoading(false);
};



  return (
    <div className="sef-widget sef-enquiry">


      <div className="sef-widget-header">Enquire about this service</div>
      <form className="sef-form" onSubmit={handleSubmit}>
        <label className="sef-label">
          Name
          <input type="text" name="name" required className="sef-input" />
        </label>

        <label className="sef-label">
          Email
          <input type="email" name="email" required className="sef-input" />
        </label>

        <label className="sef-label">
          Phone
          <input type="tel" name="phone" required className="sef-input" />
        </label>

        <button type="submit" className="sef-submit-btn" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default ServiceEnquiryForm;
