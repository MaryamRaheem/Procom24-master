import { MotionH1, MotionP } from "@/components/animation/Transitions";
import React from "react";
import {TeamData} from "@/lib/data";
import {DevelopmentTeam} from "@/lib/developmentTeam";
import TeamCard from "@/components/Team/TeamCard";

const Team = () => {
  return (
    <section className="competition-detail relative w-full">
      <span
        className="absolute round-blur-effect-2"
        style={{ top: "20%", right: "10%" }}
      ></span>
      <span
        className="absolute round-blur-effect-1"
        style={{ top: "30%", left: "50%" }}
      ></span>
      <span
        className="absolute round-blur-effect-2"
        style={{ top: "50%", left: "10%" }}
      ></span>
      <span
        className="absolute round-blur-effect-1"
        style={{ top: "60%", right: "10%" }}
      ></span>
      <span className="absolute round-blur-effect-3 text-center"></span>
      <div className="flex flex-col justify-center pt-40">
        <div className="responsive_container">
          <div className="px-2 sm:px-8">
          <MotionH1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="text-5xl md:text-7xl font-bold"
        >
          Meet Our <span className="highlight-text">Team</span>
        </MotionH1>
        <MotionP 
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="text-slate-500 mt-3 text-base sm:text-xl md:text-2xl">Dedication Beyond Boundaries - Unveiling the PROCOM&apos;24 Team</MotionP>
        <div className="responsive_container">
          <div className="flex flex-wrap flex-row py-5 mt-5 justify-center">
            {
              // just map 4 team members
              TeamData.map((member, index) => (
                <div key={index} className="md:w-1/3 lg:w-1/5 my-4 px-4" >
                  <TeamCard {...member} />
                </div>
              ))
            }
          </div>
          <MotionH1 className="text-4xl md:text-6xl font-bold">
            Faculty
          </MotionH1>
          <div className="flex flex-wrap flex-row py-5 my-5 justify-center">
            {
              // just map 4 team members
              [{
                designation: "Head",
                name: "Dr. Farrukh Shahid",
                src: "/assets/farrukh.jpg"
              }, 
            {
              designation: "Co-Head",
              name: "Ms. Nida Munawwar",
              src: "/assets/nida.jpg"
            },{
              designation: "Co-Head",
              name: "Mr. Sohail Ahmed",
              src: "/assets/sohail.jpg"
            }].map((member, index) => (
                <div key={index} className="md:w-1/3 lg:w-1/5 my-4 px-4" >
                  <TeamCard {...member} />
                </div>
              ))
            }
          </div>
          <MotionH1 className="text-4xl md:text-6xl font-bold">
            Developed By
          </MotionH1>
          <div className="flex flex-wrap flex-row py-5 mt-5 justify-center">
            {
              // just map 4 team members
              DevelopmentTeam.map((member, index) => (
                <div key={index} className="md:w-1/3 lg:w-1/5 my-4 px-4" >
                  <TeamCard {...member} />
                </div>
              ))
            }
          </div>
          
        </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
