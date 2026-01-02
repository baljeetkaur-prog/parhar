import { useRef, useState, useEffect } from "react";
import "./Appointmentform.css";
import ReCAPTCHA from "react-google-recaptcha";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { toast } from "react-toastify";

const Appointmentform = () => {
  const formRef = useRef(null);
  const [captchaValue, setCaptchaValue] = useState(null);
  const API = process.env.REACT_APP_APIURL;
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    AOS.init({ duration: 600, easing: "ease-out", once: false });
  }, []);

  const clinicalServices = [
    "Robotic Joint Replacement",
    "Robotic Surgery",
    "Complex Trauma",
    "Anesthesiology",
    "Obstetrics & Gynaecology",
    "In Vitro Fertilization (IVF)", 
    "Orthopaedic Surgery",
    "Arthroscopy Orthopaedic Surgery",
    "Arthroplasty Orthopaedic Surgery",
    "Sports Medicine",
    "Paediatric Orthopedics",
    "Plastic & Reconstructive Surgery"
  ];

  const diagnosticServices = [
    "2D Echo",
    "Color Doppler",
    "CT Scan",
    "ECG",
    "Ultrasound",
    "X-Ray"
  ];

  const supportServices = ["Physiotherapy"];
  const submitAppointmentToFormspree = async (payload) => {
  try {
    await axios.post(
      "https://formspree.io/f/mqezzglj", // same or separate Formspree ID
      payload,
      {
        headers: { Accept: "application/json" },
      }
    );
    return true;
  } catch (error) {
    console.error("Formspree appointment failed:", error);
    return false;
  }
};


const handleSubmit = async (e) => {
  e.preventDefault();

  if (!captchaValue) {
    toast.error("Please verify the captcha!");
    return;
  }

  setIsSubmitting(true);

  const form = formRef.current;

const payload = {
  fullName: form["fullName"].value,
  email: form["email"].value,
  phone: form["phone"].value,
  category: form["category"].value,
  service: form["service"].value,
  city: form["city"].value,
  message: form["message"].value,

  appointmentDate: form["appointmentDate"].value, // ✅ added
  appointmentTime: form["appointmentTime"].value, // ✅ added

  source: "Homepage Appointment Form - Parhar Hospital",
};

  // 1️⃣ Formspree FIRST (awaited, guaranteed)
  const formspreeSuccess = await submitAppointmentToFormspree(payload);

  // 2️⃣ Backend fired asynchronously (NEVER await)
  axios
    .post(`${API}/api/appointments`, payload, { timeout: 3000 })
    .then(() => console.log("Backend appointment saved"))
    .catch((err) => console.error("Backend appointment failed:", err));

  // 3️⃣ UI feedback depends ONLY on Formspree
  if (formspreeSuccess) {
    toast.success("Appointment submitted successfully!");
    form.reset();
    setSelectedCategory("");
    setCaptchaValue(null);
  } else {
    toast.error("Submission failed. Please try again.");
  }

  setIsSubmitting(false);
};




  return (
    <section id="appointment" className="appointment-section">
      <div className="appointment-container">
<div
  className="appointment-content"
  style={{
    backgroundImage: "url('/images/bg_new.png')",
    backgroundColor: "#393185",
    backgroundSize: "95%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 100%", // moved slightly down
  }}
>
          <div className="appointment-text">
            <p className="appointment-title" data-aos="fade-up">
              Make an Appointment
            </p>

            <form
              className="appointment-form"
              ref={formRef}
              onSubmit={handleSubmit}
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div className="form-group">
                <input type="text" name="fullName" placeholder="Full Name" required />
                <input type="email" name="email" placeholder="Email" required />
              </div>

              <div className="form-group">
                <input type="text" name="phone" placeholder="Phone Number" required />
              </div>
              <div className="form-group">
  <input
    type="date"
    name="appointmentDate"
    required
  />

  <input
    type="time"
    name="appointmentTime"
    required
  />
</div>

              <div className="form-group">
                
                {/* CATEGORY */}
                <select
                  name="category"
                  required
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="">Select Category</option>
                  <option value="clinical">Clinical Services</option>
                  <option value="diagnostic">Diagnostic Services</option>
                  <option value="support">Support Services</option>
                </select>

                {/* SERVICES */}
                <select name="service" required disabled={!selectedCategory}>
                  <option value="">Select Service</option>

                  {selectedCategory === "clinical" &&
                    clinicalServices.map((s, i) => (
                      <option key={i} value={s}>{s}</option>
                    ))}

                  {selectedCategory === "diagnostic" &&
                    diagnosticServices.map((s, i) => (
                      <option key={i} value={s}>{s}</option>
                    ))}

                  {selectedCategory === "support" &&
                    supportServices.map((s, i) => (
                      <option key={i} value={s}>{s}</option>
                    ))}
                </select>

                {/* CITY */}
                <input type="text" name="city" placeholder="City" required />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Message"
                  rows="4"
                  required
                ></textarea>
              </div>

              <div className="form-group">
                <ReCAPTCHA
                  sitekey="6Lc8gRAsAAAAAOXfkuoJ7mVGKDRV1PuYfZtSQ8oP"
                  onChange={(value) => setCaptchaValue(value)}
                />
              </div>

            <button
  type="submit"
  className="submit-btn"
  disabled={isSubmitting}
>
  {isSubmitting ? "Submitting..." : "Submit"}
</button>
            </form>
          </div>

          {/* Doctor Floating Card */}
          <div
            className="doctor-card"
          >
            <img src="/images/Dr.png" alt="Dr. Rohan Singh Parhar" />
            <div className="doctor-info">
              <span className="float-name">Dr. Rohan Singh Parhar</span>
              <p>
                Advanced Robotic Joint Replacement <br /> & Complex Trauma Surgeon
              </p>
            </div>
          </div>

          {/* Phone Floating Card */}
          <div
            className="phone-card"
          >
            <div className="phone-icon">
              <div className="outer-circle">
                <div className="inner-circle"></div>
              </div>
            </div>
            <span className="phone-number">90563-32253</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointmentform;
