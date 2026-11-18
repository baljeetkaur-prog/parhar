import "./Machines.css";
import { useInView } from "react-intersection-observer";
import SlideUpOnScroll from "./SlideUpOnScroll";
import { FaEnvelope, FaPaperPlane, FaTools } from "react-icons/fa";
import { Link } from "react-router-dom";

const MachineCard = ({ img, title, text, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div ref={ref} className="machine-card-wrapper">
      <SlideUpOnScroll delay={delay}>
        <div className="machine-card">
          <div className="machine-img-box">
            <img src={img} alt={title} />
          </div>

          <span className="machine-title">{title}</span>
          <p>{text}</p>

         <Link to="/contact-us"> <button className="machine-btn">
            <FaPaperPlane style={{ marginRight: "8px" }} />
            Contact Us
          </button></Link>
        </div>
      </SlideUpOnScroll>
    </div>
  );
};

const Machines = () => {
  const machinesData = [
    {
      img: "/images/ctscan_machine.png",
      title: "Advanced 32-Slice CT Scan",
      text: `Our state-of-the-art 32-slice CT scanner delivers fast, highly detailed 
accurate diagnosis while ensuring low radiation exposure.`,
      delay: 0.1,
    },
    {
      img: "/images/robotic_machine.png",
      title: "Fully Automatic Surgical Robot",
      text: `Our robotic system enhances precision, improves surgical outcomes, and 
ensures faster recovery with minimally invasive procedures.`,
      delay: 0.2,
    },
  ];

  return (
    <section className="machines-section">
      <div className="machines-container">

        <SlideUpOnScroll>
          <p className="machines-heading">
            Our Medical Machines{" "}
            <FaTools color="#ce1e3b" size={30} style={{ marginLeft: "8px" }} />
          </p>
        </SlideUpOnScroll>

        <div className="machines-grid">
          {machinesData.map((item, index) => (
            <MachineCard
              key={index}
              img={item.img}
              title={item.title}
              text={item.text}
              delay={item.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Machines;
