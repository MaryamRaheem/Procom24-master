"use client";
import React, { useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { MotionDiv, MotionH2, MotionP } from "@/components/animation/Transitions";

export const StickyScroll = ({content}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    cardsBreakpoints.forEach((breakpoint, index) => {
      if (latest > breakpoint - 0.2 && latest <= breakpoint) {
        setActiveCard(() => index);
      }
    });
  });

  const backgroundColors = [
    // var(--neutral-900), convert to hex
    
    "#111827",
    "#000",
    "#111827",

  ];
//   const linearGradients = [
//     "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
//     "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
//     "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
//   ];
const linearGradients = [
    "#000",
    "#efefef",
    "#ccc",
]
  return (
    <MotionDiv
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="h-[40rem] overflow-y-auto flex justify-center relative space-x-10 rounded-md p-10"
      ref={ref}
    >
      <div className="div relative flex items-start px-4 w-1/2">
        <div className="">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20 h-screen">
              <MotionH2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-slate-100"
              >
                {item.title}
              </MotionH2>
              <MotionP
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-kg text-slate-300 mt-10"
              >
                {item.description}
              </MotionP>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <MotionDiv
        animate={{
          background: linearGradients[activeCard % linearGradients.length],
        }}
        className="hidden lg:block h-60 w-1/2 rounded-md bg-white sticky top-10 overflow-hidden"
      ></MotionDiv>
    </MotionDiv>
  );
};
