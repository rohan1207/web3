import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./AboutPage.scss";
import BannerSection from "../../components/BannerSection/BannerSection";
import { useToggleRoomStore } from "../../stores/toggleRoomStore";
import Footer from "../../components/footer/Footer";

const AboutPage = () => {
  const navigate = useNavigate();
  const { isDarkRoom, setDarkRoom } = useToggleRoomStore();
  const [hoveredMember, setHoveredMember] = useState(null);

  useEffect(() => {
    setDarkRoom(true);
  }, []);

  const teamMembers = [
    {
      id: 1,
      name: "Karan Chaturbhuj",
      role: "Founder, TheSocialKollab",
      founder:"UI/UX |Social media | Brand Strategy",
      description:
        "Creative lead with expertise in UI/UX, photography, videography, and brand strategy. Karan drives the visual and social identity of TheSocialKollab, blending aesthetics with strategy to craft impactful digital experiences.",
      image: "/images/team1.jpeg",
    },
    {
      id: 2,
      name: "Rohan Ambhore",
      role: "Full-Stack Web Developer (MERN)",
      description:
        "Rohan takes charge of the development process, turning ideas into powerful web applications. With strong command over the MERN stack, he ensures every line of code supports performance, scalability, and modern design.",
      image: "/images/team2.jpg",
    },
    {
      id: 3,
      name: "Himanshu Lokhande",
      role: "Full-Stack Developer (MERN)",
      description:
        "Himanshu specializes in building responsive, dynamic web apps using the MERN stack. From front-end finesse to backend logic, he's a tech craftsman who brings functionality and reliability together.",
      image: "/images/team3.jpg",
    },
  ];

  const handleBack = () => {
    navigate("/");
  };

  return (
    <motion.div
      className={`about-page${!isDarkRoom ? " light" : ""}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.button
        className="back-button"
        onClick={handleBack}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M15 18L9 12L15 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.button>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <BannerSection
          title="About Us"
          subtitle="konnect | kreate | kollaborate"
          backgroundImage="/images/about.jpg"
        />
      </motion.div>

      <motion.div
        className="about-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <div className="content-wrapper">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
          >
            We are a multidisciplinary team focused on delivering impactful
            digital experiences through strategic design, robust development,
            and creative storytelling. At TheSocialKollab, we bring together
            expertise in UI/UX, full-stack development, and visual content
            creation to build brands that resonate. Our mission is to help
            businesses grow through smart design, scalable technology, and
            compelling digital presence. Collaboration is at the core of what we
            do—because the best solutions are built together.
          </motion.p>
        </div>

        <section className="team-section">
          <motion.div
            className="team-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                className={`team-member ${
                  hoveredMember === index ? "hovered" : ""
                } ${index === teamMembers.length - 1 ? "last-member" : ""}`}
                onMouseEnter={() => setHoveredMember(index)}
                onMouseLeave={() => setHoveredMember(null)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.2 * index,
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                }}
              >
                <div className="member-content">
                  <motion.div
                    className="member-image"
                    whileHover={{ scale: 1.02 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                  >
                    <img src={member.image} alt={member.name} loading="lazy" />
                  </motion.div>
                  <div className="member-preview">
                    <motion.h3
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 * index }}
                    >
                      {member.name}
                    </motion.h3>
                    <motion.h4
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 * index }}
                    >
                      {member.role}
                      <br />
                      {<span>{member.founder}</span>}
                    </motion.h4>
                  </div>
                  <motion.div
                    className="member-details"
                    initial={{ x: 30, opacity: 0 }}
                    animate={
                      hoveredMember === index
                        ? { x: 0, opacity: 1 }
                        : { x: 30, opacity: 0 }
                    }
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 25,
                    }}
                  >
                    <h3>{member.name}</h3>
                    <h4>{member.role}</h4>
                    <p>{member.description}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <Footer />
      </motion.div>
    </motion.div>
  );
};

export default AboutPage;
