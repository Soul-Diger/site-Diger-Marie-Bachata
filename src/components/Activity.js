import React, { useEffect, useState } from "react";
import { activitysData } from "../data/activitysData";
import { motion } from "framer-motion";

const Activity = ({ activityNumber }) => {
  const [currentactivity] = useState(activitysData[activityNumber]);
  const [left, setLeft] = useState();
  const [top, setTop] = useState();
  const [size, setSize] = useState();

  useEffect(() => {
    setLeft(Math.floor(Math.random() * 200 + 700) + "px");
    setTop(Math.floor(Math.random() * 200 + 150) + "px");
    setSize("scale(" + (Math.random() + 0.7) + ")");
  }, []);

  const variants = {
    initial: {
      opacity: 0,
      transition: { duration: 0.5 },
      x: 200,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0.4,
      transition: { duration: 0.35 },
      x: -800,
    },
  };

  const transition = {
    ease: [0.03, 0.87, 0.73, 0.9],
    duration: 0.6,
  };

  const imgAnim = {
    initial: {
      opacity: 0,
      x: Math.random() * 350 * (Math.random() > 0.4 ? 1 : -1),
      y: Math.random() * 120 * (Math.random() > 0.4 ? 1 : -1),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };

  return (
    <motion.div
      className="activity-main"
      initial="initial"
      animate="visible"
      exit="exit"
      transition={transition}
      variants={variants}
    >
      <div className="activity-content">
        <h1>{currentactivity.title}</h1>
        <p>{currentactivity.date}</p>

        <ul className="languages">
          {currentactivity.languages.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <motion.div
        className="img-content"
        initial="initial"
        animate="visible"
        variants={imgAnim}
        transition={{ duration: 1.2 }}
      >
        <div className="img-container hover">
          <span>
            <h3>{currentactivity.title}</h3>
            <p>{currentactivity.infos}</p>
          </span>
          {/* dans la base de donnée, l'img a son chemin d'entré, donc ici, pas besoin de tout retaper */}
          <img
            src={currentactivity.img}
            alt={currentactivity.title}
            className="img"
          />
        </div>
        <div className="button-container">
          <a
            href={currentactivity.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover"
          >
            <span className="button">Voir le site</span>
          </a>
        </div>
      </motion.div>
      <span
        className="random-circle"
        style={{ left, top, transform: size }}
      ></span>
    </motion.div>
  );
};

export default Activity;
