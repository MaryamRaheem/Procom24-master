"use client";
import React, { useEffect, useState } from "react";
// import NeuButton from '../NeuButton'
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { MotionH1, MotionP } from "@/components/animation/Transitions";
import CustomButton from "@/components/ui/CustomButton";
import { startupData } from "./startup-data";
import { usePathname } from "next/navigation";
import Image from "next/image";
import RegisterationForm from "./RegisterationForm";
// import UploadForm from "./uploadForm";
// import { RiMoneyDollarCircleFill } from "react-icons/ri";
// import { FiMousePointer } from "react-icons/fi";

function StartupShowdown() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const [showDown, setShowDown] = useState(startupData);
  const competitionName = "App Development";
  const registrationFee = "2500";
  const maxMembers = "3";
  const winnerAmount = "50000";
  const runnerUpAmount = "25000";
  //   const detailedPara =
  //     "In the dynamic realm of app development, creativity and innovation intersect to shape the digital landscape. Our app development competition is not just a showcase of technical prowess but a celebration of ingenuity and problem-solving. Participants are challenged to push the boundaries of possibility, transforming ideas into sleek, functional applications that address real-world needs.";
  useEffect(() => {
    setShowDown(startupData);
    setLoading(false);
  }, []);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
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
              <div className="flex items-center justify-between flex-wrap">
                {/* <MotionH1 className="leading-normal text-center md:text-start text-4xl md:text-6xl font-bold text-neutral-50">
                <span className="font-bold uppercase text-4xl sm:text-5xl lg:text-6xl xl:text-7xl highlight-text">{showDown.name}</span>
                
              </MotionH1> */}
                <Image
                  src="/assets/showdown-logo.png"
                  width={500}
                  height={200}
                  alt={showDown.name}
                />
                <div className="p-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-600">
                {showDown.winning === 0 ? <MotionH1>
                    Winning Prize will be announced soon

                </MotionH1> : <MotionH1 className="text-4xl text-center font-bold">
                    Prize Pool<br /><span className="text-6xl font-bold">Rs. {showDown.winning}</span>
                </MotionH1>}
                
              </div>
              </div>
              {/* <div className="rounded-lg py-4 px-2 my-10">
              <Image src={showDown.imageUrl} className="w-full rounded-lg object-contain " width={800} height={400}  alt={showDown.name} />
            </div> */}
              <div className="my-20">
                <p className="text-xl text-slate-400 leading-normal">
                  {showDown.info}
                </p>
                <h3 className="text-3xl my-5 font-bold">Key Benefits</h3>
                <ul className="list-disc list-inside my-5">
                  {showDown.benefits?.map((benefit, index) => (
                    <li key={index} className="text-lg text-slate-400">
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 my-10">
              <Card
                title={"Registration Fee"}
                amount={showDown.registration_fee}
              />
              <Card title={"Min Members Allowed"} amount={showDown.min} />
              <Card title={"Max Members Allowed"} amount={showDown.max} />
              {/* <Card title={"People Registered"} amount={"100+"} /> */}
            </div>
            {/* <UploadForm min={competition.min} max={competition.max} competitionName={competition.name} /> */}
            {/* <RegisterationForm
              min={showDown.min}
              max={showDown.max}
              note={showDown.note}
            /> */}
            <div className="text-center my-10">
            <a href="https://forms.gle/pYafDJLPRrYo3HDt6">
              <CustomButton>
                  Register Now
              </CustomButton>
            </a>
            </div>
          </div>
        </div>
        <div></div>
      </section>
    </div>
  );
}

const Card = ({ title, amount }) => {
  return (
    <div className="flex flex-col border border-t-4 shadow-sm rounded-xl bg-slate-900 border-gray-700 shadow-slate-700/[.7]">
      <div className="p-4 md:p-5">
        <h3 className="text-4xl font-mono font-bold dark:text-white">
          {amount}
        </h3>
        <p className="mt-2text-gray-400">{title}</p>
      </div>
    </div>
  );
};

export default StartupShowdown;
