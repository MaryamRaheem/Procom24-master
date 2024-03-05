"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const MotionH1 = motion.h1;
export const MotionH2 = motion.h2;
export const MotionH3 = motion.h3;
export const MotionH4 = motion.h4;
export const MotionH5 = motion.h5;
export const MotionH6 = motion.h6;
export const MotionP = motion.p;
export const MotionSpan = motion.span;
export const MotionDiv = motion.div;
export const MotionSection = motion.section;
export const MotionArticle = motion.article;
export const MotionAside = motion.aside;
export const MotionNav = motion.nav;
export const MotionHeader = motion.header;
export const MotionFooter = motion.footer;
export const MotionUl = motion.ul;
export const MotionOl = motion.ol;
export const MotionLi = motion.li;

export const CodeRain = ({ text }) => {
  const letters = text.split("");
  const [fallingLines, setFallingLines] = useState([]);

  useEffect(() => {
    setInterval(() => {
      setFallingLines((prevLines) => [
        ...prevLines,
        {
          letter: letters[Math.floor(Math.random() * letters.length)],
          y: -100,
        },
      ]);
    }, 50);
  }, []);

  return (
    <div>
      {fallingLines.map((line) => (
        <motion.span
          key={line.letter}
          style={{
            color: `hsl(${Math.random() * 360}, 100%, 50%)`,
            fontSize: "16px",
            position: "absolute",
            top: line.y + "px",
          }}
          animate={{
            y: window.innerHeight + 100,
            opacity: 0,
          }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          {line.letter}
        </motion.span>
      ))}
    </div>
  );
};
