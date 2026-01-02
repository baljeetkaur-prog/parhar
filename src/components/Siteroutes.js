import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import Home from "./Home";
import About from "./About";
import Roboticknee from "./RoboticKnee";
import Arthritis from "./Arthritis";
import JointReplacement from "./JointReplacement";
import HipReplacement from "./HipReplacement";
import BoneTumour from "./BoneTumour";
import SportsLigament from "./SportsLigament";
import Fracture from "./Fracture";
import BoneInfection from "./BoneInfection";
import Gallery from "./Gallery";
import FAQ from "./FAQ";
import Contact from "./Contact";
import Appointment from "./Appointment";
import Servicesmain from "./Servicesmain";
import FloatingWhatsapp from "./FloatingWhatsapp";
import Blogmain from "./Blogmain";
import BlogDetail from "./BlogDetail";
import AdminLogin from "./AdminLogin";
import AdminDashboard from "./AdminDashboard"
import DoctorProfile from "./DoctorProfile";
import { TeamMembers } from "./TeamMembers";
import NotFoundPage from "./NotFoundPage";
import ServiceHighlight from "./ServiceHighlight";
import Anesthesiology from "./Anesthesiology";
import Gynaecology from "./Gynaecology";
import Orthopaedic from "./Orthopaedic";
import Arthroscopy from "./Arthroscopy";
import Arthroplasty from "./Arthroplasty";
import Paediatric from "./Paediatric";
import Plastic from "./Plastic";
import Echo from "./Echo";
import ColorDoppler from "./ColorDoppler";
import CtScan from "./CtScan";
import ECG from "./ECG";
import Ultrasound from "./Ultrasound";
import Xray from "./Xray";
import Physiotherapy from "./Physiotherapy";
import ComplexTrauma from "./ComplexTrauma";
import IVF from "./IVF";
import FacultyPositions from "./FacultyPositions";
import ChangePassword from "./ChangePassword";
import Careers from "./Careers";
import JobListings from "./JobListings";
import JobForm from "./JobForm";

const Layout = ({ children }) => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdminRoute && <Header />}
      <ScrollToTop />
      {children}
      {!isAdminRoute && <Footer />}
      {!isAdminRoute && <FloatingWhatsapp />}
    </>
  );
};

const Siteroutes = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/services/robotic-surgery" element={<Roboticknee />} />
          <Route path="/services/arthritis" element={<Arthritis />} />
          <Route path="/services/robotic-joint-replacement" element={<JointReplacement />} />
          <Route path="/services/hip-replacement" element={<HipReplacement />} />
          <Route path="/services/bone-tumours" element={<BoneTumour />} />
          <Route path="/services/sports-medicine" element={<SportsLigament />} />
          <Route path="/services/fractures" element={<Fracture />} />
          <Route path="/services/bone-infections" element={<BoneInfection />} />
          <Route path="/services/anesthesiology" element={<Anesthesiology/>}/>
          <Route path="/services/obstetrics-and-gynaecology" element={<Gynaecology/>}/>
          <Route path="/services/orthopaedic-surgery" element={<Orthopaedic/>}/>
          <Route path="/services/arthroscopy-orthopaedic-surgery" element={<Arthroscopy/>}/>
          <Route path="/services/arthroplasty-orthopaedic-surgery" element={<Arthroplasty/>}/>
          <Route path="/services/paediatric-orthopedics" element={<Paediatric/>}/>
          <Route path="/services/plastic-and-reconstructive-surgery" element={<Plastic/>}/>
          <Route path="/services/2D-echo" element={<Echo/>}/>
          <Route path="/services/color-doppler" element={<ColorDoppler/>}/>
          <Route path="/services/ct-scan" element={<CtScan/>}/>
          <Route path="/services/ecg" element={<ECG/>}/>
          <Route path="/services/ultrasound" element={<Ultrasound/>}/>
          <Route path="/services/x-ray" element={<Xray/>}/>
          <Route path="/services/physiotherapy" element={<Physiotherapy/>}/>
          <Route path="/services/complex-trauma" element={<ComplexTrauma/>}/>
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/book-an-appointment" element={<Appointment />} />
          <Route path="/services" element={<Servicesmain />} />
          <Route path="/blogs" element={<Blogmain />} />
        <Route path="/blogs/:slug" element={<BlogDetail />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin-dashboard" element={<AdminDashboard/>}/>
          <Route path="/admin-change-password" element={<ChangePassword/>}/>
        <Route path="/doctor/:name" element={<DoctorProfile doctorData={TeamMembers} />} />
        <Route path="/service-highlight" element={<ServiceHighlight/>}/>
        <Route path="/services/in-vitro-fertilization" element={<IVF/>}/>
        <Route path="/faculty-positions" element={<FacultyPositions/>}/>
        <Route path="/careers" element={<Careers/>}/>
        <Route path="/careers/current-openings" element={<JobListings/>}/>
    <Route path="/careers/apply/:designationSlug" element={<JobForm />} />
        <Route path="*" element={<NotFoundPage />} />
          
        </Routes>
      </Layout>
    </>
  );
};

export default Siteroutes;
