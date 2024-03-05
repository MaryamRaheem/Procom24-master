"use client";
import React from "react";
import HeroNav from "../HeroSection/HeroNav";
import Faq from "./Faq";
import ScrollarComp from "./ScrollarComp";
import Celebrate from "./Celebrate";
import AboutNav from "./AboutNav";
import {
  CodeRain,
  MotionDiv,
  MotionH1,
  MotionP,
  MotionSpan,
} from "@/components/animation/Transitions";
import { LampContainer } from "../ui/aceternity/lamp";
import AboutLanding from "./AboutLanding";
import { AspectRatio } from "../ui/aspect-ratio";

const About = () => {
  return (
    <div className="about-section">
      {/* <AboutNav /> */}
      <div
        style={{
          transform: "rotate(25deg)",
          position: "absolute",
          top: "8%",
          right: "35%",
          height: "600px",
        }}
      >
        <span className="absolute round-blur-effect-2"></span>
        <span className="absolute round-blur-effect-1"></span>
        <span className="absolute round-blur-effect-3 text-center"></span>
      </div>

      <div
        style={{
          transform: "rotate(25deg)",
          position: "absolute",
          top: "15%",
          left: "22%",
        }}
      >
        <span className="absolute round-blur-effect-1"></span>
      </div>

      <div
        style={{
          transform: "rotate(25deg)",
          position: "absolute",
          bottom: "1%",
          left: "1%",
        }}
      >
        <span className="absolute round-blur-effect-2"></span>
        <span className="absolute round-blur-effect-1"></span>
      </div>

      <div className="flex flex-wrap py-16">
        <div className="responsive_container">
        <div className="  w-full h-full mt-16">
          <div className="font-bold uppercase text-5xl sm:text-6xl lg:text-7xl xl:text-8xl highlight-text">
            <MotionSpan
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            >
              About US
            </MotionSpan>
          </div>

          <div className="mt-4 uppercase text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold">
            <MotionSpan
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            >
              What is PROCOM
            </MotionSpan>
          </div>

          <div className="mt-5 text-slate-300 text-base sm:text-md lg:text-lg xl:text-xl">
            <MotionSpan
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            >
              <p>
              Embark on a transformative journey where &apos;Technology Meets Innovation&apos; at Imperium Dynamics PROCOM 2024, the 25th edition. As a beacon of progress in STEM education, PROCOM&apos;24 goes beyond conventional limits, offering two days of immersive experiences. From dynamic competitions that push the boundaries of creativity to collaborative forums redefining networking, PROCOM&apos;24 is the epitome of cutting-edge education. Join us in this extraordinary event, reflecting on milestones, setting the stage for limitless possibilities, and shaping the future where ideas soar. PROCOM&apos;24 is not just an event; it&apos;s a legacy of inspiration, resilience, and evolution.
              </p>
            </MotionSpan>
          </div>
        </div>
        </div>
        {/* <div className="w-full h-full sm:w-1/2 sm:h-full flex items-center justify-end overflow-hidden relative">
          <div
            style={{
              position: "absolute",
              bottom: 0,
              height: "150px",
              width: "100%",
              zIndex: 9999,
              background: "linear-gradient(180deg, #00000000, #000000);",
            }}
          ></div>

          <MotionSpan
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            <ScrollarComp />
          </MotionSpan>
        </div> */}
      </div>
      <AboutLanding />
      <section className="overflow-hidden mb-10">
        <LampContainer>
          <Celebrate />
        </LampContainer>
        <div className="responsive_container" style={{ marginTop: "-30vh" }}>
          <AspectRatio ratio={16 / 9}>
            <video
              src="/assets/procom.mp4"
              controls
              autoPlay
              className="w-full h-full"
            ></video>
          </AspectRatio>
        </div>
        </section>

      {/* <div class="flex justify-center items-center p-42">
        <Faq />
      </div> */}
    </div>
  );
};

export default About;
