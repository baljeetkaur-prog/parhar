import { FaUsers } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Teamsection.css";

const Teamsection = () => {
  const teamRef = useRef([]);
  const [visible, setVisible] = useState([]);

  const teamMembers = [
    {
      img: "/images/male_dr.png",
      name: "Dr. Amrik Singh Parhar",
      description: "Senior ortho consultant, chief trauma surgeon",
      designation: "MBBS, M.S Ortho (Bombay)",
    },
    {
      img: "/images/team2.png",
      name: "Dr. Rohan Singh Parhar",
      description:
        "Advanced robotic joint replacement & complex trauma surgeon",
      designation: "MBBS, DNB (Ortho) MNAMS",
    },
    {
      img: "/images/female_dr.png",
      name: "Dr. Parul Arora Parhar",
      description: "Ex registrar GMCH-32 (Chandigarh)",
      designation: "MBBS, DNB (Obstetrics and Gynaecology)",
    },
  ];

  useEffect(() => {
    setVisible(new Array(teamMembers.length).fill(false));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = entry.target.dataset.index;
          if (entry.isIntersecting && !visible[index]) {
            setVisible((prev) => {
              const newArr = [...prev];
              newArr[index] = true; // animate once
              return newArr;
            });
          }
        });
      },
      { threshold: 0.3 } // trigger when 30% visible
    );

    teamRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      teamRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section className="team-section">
      <div className="team-container">
        <p style={{ display: "flex", alignItems: "center", gap: "10px" }} className="teamsection-heading">
          Team of Dr. Rohan Singh Parhar <FaUsers className="team-icon" />
        </p>

        <div className="team-cards">
          {teamMembers.map((member, index) => (
            <div
              className={`team-card ${visible[index] ? "fade-up" : ""}`}
              key={index}
              ref={(el) => (teamRef.current[index] = el)}
              data-index={index}
            >
              <div className="team-card-image">
                <img src={member.img} alt={member.name} />
              </div>
              <div className="team-card-content">
               {member.name === "Dr. Rohan Singh Parhar" ? (
  <h2 className="teammember-name">{member.name}</h2>
) : (
  <span className="teammember-name">{member.name}</span>
)}

                <p className="description">{member.description}</p>
                <p className="designation">{member.designation}</p>
                <div className="card-buttons">
                  <Link to="/book-an-appointment">
                    <button className="enquiry-btn">Enquiry</button>
                  </Link>
                  <Link
                    to={`/doctor/${member.name
                      .toLowerCase()
                      .replace(/dr\./, "dr")
                      .replace(/\s+/g, "-")
                      .replace(/[^\w-]/g, "")}`}
                    className="view-profile-btn"
                  >
                    View Profile
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teamsection;
