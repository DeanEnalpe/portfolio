import React from "react";
import "./Header.scss";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { AppWrap } from "../../wrapper";
const scaleVariants={
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition:{
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div id="home" className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 2 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>😎</span>
            <div style={{ margineLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Vonn</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text">Java Developer</p>
            <p className="p-text">Jr. Software Engineer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 3, delayChildren: 3 }}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile_bg" />
        <motion.img
          whileInView={{ scale: [0.1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="overlay_circle"
          src={images.circle}
          alt="profile_circle"
        />
      </motion.div>
        
      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.react, images.git, images.sass].map((circle, index) => (
          <div className = "cirlce-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="circle"/>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, 'home');
