import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import "./About.scss";
import axios from "axios";

// const abouts = [
//   { title: "Front-end", description: "Sheesh", imgUrl: images.about01 },
//   { title: "Back-end", description: "Sheesh", imgUrl: images.about02 },
//   { title: "UI/UX", description: "Sheesh", imgUrl: images.about03 },
//   { title: "UI/UX", description: "Sheesh", imgUrl: images.about04 },
// ];
const About = () => {
  const [aboutData, setAboutData] = useState([]);

  useEffect(() => {
    
    aboutDataHandler();
  }, [])
  
  const aboutDataHandler = async() => {
    const result = await axios.get('http://localhost:8081/portfolio/about');
    console.log(result);
    setAboutData(result.data);
  };
  return (
    <>
      <h2 className="head-text">
        There <span>are</span> <br />
        no <span>Accidents</span>
      </h2>

      <div className="app__profiles">
        {aboutData.map((about, index) => (
          <motion.div
            transition={{ duration: 0.5, delayChildren: 0.5 }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(About, "about");
