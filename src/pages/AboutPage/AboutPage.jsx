import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import "./AboutPage.scss";
import BannerSection from "../../components/BannerSection/BannerSection";
import { useToggleRoomStore } from "../../stores/toggleRoomStore";
import Footer from "../../components/footer/Footer";

const AboutPage = () => {
  const navigate = useNavigate();
  const { isDarkRoom, setDarkRoom } = useToggleRoomStore();

  useEffect(() => {
    setDarkRoom(true);
  }, []);

  const teamMembers = [
    {
      id: 1,
      name: "Sofia Chen",
      role: "Founder & Principal Architect",
      description:
        "Award-winning architect with over 20 years of experience in sustainable design.",
      image: "/images/team1.png",
    },
    {
      id: 2,
      name: "Marcus Rivera",
      role: "Design Director",
      description:
        "Specializes in innovative facade systems and computational design.",
      image: "/images/team2.png",
    },
    {
      id: 3,
      name: "Aya Tanaka",
      role: "Project Manager",
      description:
        "Expert in coordinating complex international projects and client relations.",
      image: "/images/team3.png",
    },
    {
      id: 4,
      name: "Lucas Baumann",
      role: "Sustainability Lead",
      description:
        "Focuses on net-zero building strategies and biophilic design principles.",
      image: "/images/team4.png",
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
          subtitle="Revolutionizing architecture for the AI future"
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
          We are more than architects — we are spatial storytellers, shaping environments that inspire, evolve, and endure.
Founded on the principles of design integrity, functional elegance, and client collaboration, our firm transforms ideas into spaces that speak for themselves. Whether it’s a modern home, a bold commercial space, or a concept yet to be imagined, we bring vision to structure, and purpose to design.

With every project, we blend creativity with precision — crafting experiences in concrete, steel, glass, and light.
          </motion.p>
        </div>
      </motion.div>

      <motion.section
        className="team-section"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          Meet Our Team
        </motion.h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              className="team-member"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
            >
              <div className="member-image">
                <img src={member.image} alt={member.name} />
              </div>
              <h3>{member.name}</h3>
              <h4>{member.role}</h4>
              <p>{member.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
      <Footer />
    </motion.div>
  );
};

export default AboutPage;
