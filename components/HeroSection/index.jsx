"use client";
import { useRef, useState } from "react";
import {
  CodeRain,
  MotionDiv,
  MotionH1,
  MotionP,
  MotionSection,
  MotionSpan,
} from "@/components/animation/Transitions";
import Image from "next/image";
import HeroNav from "./HeroNav";
import DaysCounter from "../Counter";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import ParticleAnimation from "../animation/ParticleAnimation";
import Navbar from "@/app/Navbar";
const HeroSection = () => {
  const target = useRef(null);
  const { scrollYProgress } = useScroll({
    target,
    offset: ["end end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);
  
  
  return (
    <MotionSection className="hero-section h-screen relative w-full">
      <span
        className="absolute round-blur-effect-2"
        style={{ top: "20%", right: "10%" }}
      ></span>
      <span
        className="absolute round-blur-effect-1"
        style={{ top: "30%", left: "50%" }}
      ></span>
      <span className="absolute round-blur-effect-3 text-center"></span>
      <MotionDiv className=" w-full" ref={target}>
        {/* <Navbar
         
          
        /> */}

        <div className="px-2 sm:px-8 py-5 mt-[3rem]">
          {/* <MotionDiv className="hero_container" style={{opacity}}> */}
          {/* <ParticleAnimation /> */}
          <MotionDiv
            className="flex flex-col lg:flex-row relative z-10 text-center sm:text-start"
            style={{ scale }}
          >
            <div className="landing-content my-32 z-10 relative w-full lg:w-1/2">
              <MotionH1
                initial={{ x: -100 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 2 }}
                className="font-bold text-pretty"
              >
                <MotionSpan
                  initial={{ opacity: 0, y: -20 }}
                  // animate={{ opacity: 1, y: 0 }}
                  whileInView={{opacity: 1, y:0}}
                  transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                  className="text-4xl md:text-6xl"
                >
                  {" "}
                  Welcome to
                </MotionSpan>
                <br />
                <span className="uppercase text-6xl md:text-8xl highlight-text">
                  <MotionSpan
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                  >
                    Pro
                  </MotionSpan>
                  <MotionSpan
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                  >
                    com
                  </MotionSpan>
                  <MotionSpan
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
                  >
                    &apos;{new Date().getFullYear().toString().slice(-2)}
                  </MotionSpan>
                </span>
              </MotionH1>
              {/* <CodeRain text="PROCOM'24" /> */}
              <p>
                {"Legacy Meets Innovation"
                  .split(" ")
                  .map((word, index) => (
                    <MotionSpan
                      key={index}
                      initial={{ opacity: 0, y: -20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.8 + index / 10,
                        ease: "easeOut",
                      }}
                      className="text-pretty text-2xl md:text-3xl"
                    >
                      {word}{" "}
                    </MotionSpan>
                  ))}
              </p>
              {/* <MotionP className="text-pretty text-3xl">
        
      </MotionP> */}
              <div className="w-full">
                <DaysCounter
                  targetDate={new Date("2024-03-07T00:00:00").getTime()}
                />
              </div>
            </div>
            <div className="absolute lg:relative w-full lg:w-1/2 h-full">
              {/* <span className="absolute round-blur-effect-2" style={{top:"20%", right: "10%"}}></span>
              <span className="absolute round-blur-effect-1" style={{top: "30%", left: "50%"}}></span>
              <span className="absolute round-blur-effect-3 text-center"></span> */}
              <MotionDiv
                initial={{ y: 0 }}
                animate={{ y: 10 }}
                className="text-center h-full"
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              >
                <Image
                  src="/assets/Plogo.png"
                  className="w-auto h-full mx-auto opacity-20"
                  width={800}
                  height={60}
                  alt="Procom Logo"
                ></Image>
              </MotionDiv>
              <span className="p-shadow"></span>
            </div>
          </MotionDiv>
          {/* </MotionDiv> */}
        </div>
      </MotionDiv>
    </MotionSection>
  );
};

export default HeroSection;
