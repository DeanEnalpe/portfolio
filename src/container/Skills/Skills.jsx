import React, { useState, useEffect } from "react";
import "./Skills.scss";
import { motion } from "framer-motion";
import { AppWrap } from "../../wrapper";
import axios from "axios";
const Skills = () => {
  const [experiences, setExperience] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    experienceDataHandler();
  }, []);

  useEffect(() => {
    skillsDataHandler();
  }, []);

  const experienceDataHandler = async () => {
    const result = await axios.get(
      "http://localhost:8081/portfolio/experience"
    );
    console.log(result);
    setExperience(result.data);
  };

  const skillsDataHandler = async () => {
    const result = await axios.get("http://localhost:8081/portfolio/skills");
    console.log(result);
    setSkills(result.data);
  };

  return (
    <div>
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.iconUrl} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div
              className="app__skills-exp-item"
              key={experiences.yearDate}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.yearDate}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                <motion.div
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                  className="app__skills-exp-work"
                  key={experience.index}
                >
                  <h4 className="bold-text">{experience.jobTitle}</h4>
                  <p className="p-text">{experience.company}</p>
                  <p className="skills-tooltip">{experience.description}</p>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppWrap(Skills, "skills");
