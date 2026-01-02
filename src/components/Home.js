import { Helmet } from "react-helmet";
import Header from "./Header";
import Carousel from "./Carousel";
import Servicesection from "./Servicesection";
import Teamsection from "./Teamsection";
import Reviewsection from "./Reviewsection";
import Youtubesection from "./Youtubesection";
import Insightsection from "./Insightsection";
import Mediapresence from "./Mediapresence";
import Lifestory from "./Lifestory";
import Gallerysection from "./Gallerysection";
import Blogsection from "./Blogsection";
import Happypatients from "./Happypatients";
import Appointmentform from "./Appointmentform";
import Footer from "./Footer";
import Aboutsection from "./Aboutsection";
import ServiceHighlight from "./ServiceHighlight";
import Number from "./Number";
import Machines from "./Machines";
import Fellowships from "./Fellowships";

const Home = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Best Orthopaedic Hospital in Phagwara | Orthopedic Surgeon in Phagwara</title>
        <meta
          name="description"
          content="Best Orthopedic doctor in Phagwara at Parhar Hospital for Knee, hip, and shoulder replacement. Expert surgeon providing comprehensive care and advanced joint solutions."
        />
        <meta
          name="keywords"
         content="Parhar Hospital, Phagwara, Punjab, Orthopaedic, Surgeon, Doctor, Specialist, Bone Treatment, Joint Replacement, Spine Surgery, Health Care"
        />
      </Helmet>

      {/* Home Page Sections */}
      <Carousel />
      <ServiceHighlight/>
      <Number/>
      <Aboutsection />
      <Servicesection />
      <Teamsection />
      <Reviewsection />
      <Youtubesection />
      <Machines/>
      <Fellowships/>
      <Insightsection />
      <Mediapresence />
      <Lifestory />
      <Gallerysection />
      <Blogsection />
      <Happypatients />
      <Appointmentform />
    </>
  );
};

export default Home;
