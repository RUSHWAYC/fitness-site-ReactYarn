import React from "react";
import { motion } from "framer-motion";

import Header from "../Header/Header";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";

import "./Hero.css";

const Hero = () => {
  const transiton = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;

  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        {/* The best ad. */}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "178px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transiton, type: "tween" }}
          ></motion.div>
          <span>The best fitness club in the town.</span>
        </div>
        {/* Hero heading. */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest!
            </span>
          </div>
        </div>
        {/* Experience figures. */}
        <div className="figures">
          <div>
            <span>140+</span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>978</span>
            <span>members joined</span>
          </div>
          <div>
            <span>50</span>
            <span>fitness programs</span>
          </div>
        </div>
        {/* Hero buttons. */}
        <div className="hero-buttons">
          <butoon className="btn">Get Starter</butoon>
          <butoon className="btn">Learn More</butoon>
        </div>
      </div>
      {/* Right side. */}
      <div className="right-h">
        <button className="btn">Join Now</button>
        <motion.div
          className="heart-rate"
          transition={transiton}
          whileInView={{ right: "4rem" }}
          initial={{ right: "-1rem" }}
        >
          <img src={Heart} alt="heart" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>
        {/* Hero images. */}
        <img src={hero_image} alt="hero" className="hero-image" />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transiton}
          src={hero_image_back}
          alt="hero back"
          className="hero-image-back"
        />
        {/* Calories. */}
        <motion.div
          className="calories"
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          transition={transiton}
        >
          <img src={Calories} alt="calories" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
