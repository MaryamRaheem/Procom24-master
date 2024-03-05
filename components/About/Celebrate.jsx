import React from "react";
import Image from "next/image";

import {
  CodeRain,
  MotionDiv,
  MotionH1,
  MotionP,
  MotionSpan,
} from "@/components/animation/Transitions";
import { AspectRatio } from "../ui/aspect-ratio";
import { LampContainer } from "../ui/aceternity/lamp";

const Celebrate = () => {
  return (
    
    <div className="responsive_container p-4 relative">
      <div className="flex flex-col items-center">
        <MotionDiv 
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="uppercase text-4xl sm:text-5xl lg:text-6xl font-bold text-center py-5 px-2">
          <span className="flex flex-wrap justify-center items-center ">
          Celebrating
          <span className="text-center uppercase text-5xl sm:text-6xl lg:text-7xl xl:text-8xl highlight-text">
            &nbsp;25&nbsp;
          </span>
          Years of
          </span>
          <span className="text-center uppercase text-5xl sm:text-6xl lg:text-7xl xl:text-8xl highlight-text">
            &nbsp;Procom&nbsp;
          </span>
        </MotionDiv>
        <p className="text-center my-4 text-xl text-slate-500 leading-normal">
          Join us in this extraordinary celebration, reflecting on milestones,
          setting the stage for limitless possibilities, and shaping the future
          where ideas soar. PROCOM&apos;24 is not just an event; it&apos;s a
          legacy of inspiration, resilience, and evolution.
        </p>
        
        {/* <span className="absolute round-blur-effect-3" style={{
          top: "80%",
          transform: "translate(-50%, -50%)",
          right: "0%"
        }}></span>
        <span className="absolute round-blur-effect-1"
        style={{
          top: "50%",
          transform: "translate(-50%, -50%)",
          left: "0"
        }}
        ></span> */}
        {/* <div
          style={{
            transform: "rotate(65deg)",
            position: "absolute",
            top: "65%",
            right: "15%",
            height: "300px",
          }}
        >
          
        </div> */}
      </div>
    </div>
    
  );
};

export default Celebrate;
