"use client";
import React, { useEffect, useState } from "react";
// import NeuButton from '../NeuButton'
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { MotionH1, MotionP } from "@/components/animation/Transitions";
import CustomButton from "@/components/ui/CustomButton";
import { competitions } from "@/lib/data";
import { usePathname } from "next/navigation";
import Image from "next/image";
import UploadForm from "./uploadForm";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
// import { RiMoneyDollarCircleFill } from "react-icons/ri";
// import { FiMousePointer } from "react-icons/fi";

function CompetitionDetails() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const [competition, setCompetition] = useState();
  const competitionName = "App Development";
  const registrationFee = "2500";
  const maxMembers = "3";
  const winnerAmount = "50000";
  const runnerUpAmount = "25000";
  //   const detailedPara =
  //     "In the dynamic realm of app development, creativity and innovation intersect to shape the digital landscape. Our app development competition is not just a showcase of technical prowess but a celebration of ingenuity and problem-solving. Participants are challenged to push the boundaries of possibility, transforming ideas into sleek, functional applications that address real-world needs.";
  useEffect(() => {
    if (pathname) {
      const response = competitions.find(
        (comp) => comp.slug === `/${pathname.split("/")[2]}`
      );

      setCompetition(response);
      setLoading(false);
    }
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
              {competition?.alert && (
                <Alert variant="warning" className="border-2 my-5">
                  {/* <RocketIcon /> */}
                  <AlertTitle className="font-bold">
                    {competition.alert.title}
                  </AlertTitle>
                  <AlertDescription className=" font-semibold">
                    {competition.alert.description}
                  </AlertDescription>
                </Alert>
              )}
              <div className="flex items-center justify-center lg:justify-between flex-wrap">
                <MotionH1 className="leading-normal text-center md:text-start text-4xl md:text-6xl font-bold text-neutral-50">
                  <span className="uppercase text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold">
                    Competition
                  </span>
                  <br className="leading-normal" />
                  <span className="font-bold uppercase text-4xl sm:text-5xl lg:text-6xl xl:text-7xl highlight-text">
                    {competition.name}
                  </span>
                </MotionH1>
                <div className="p-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-600">
                  {competition.winning === 0 ? (
                    <MotionH1>Winning Prize will be announced soon</MotionH1>
                  ) : (
                    <MotionH1 className="text-4xl text-center font-bold">
                      Winning Prize
                      <br />
                      
                      <span className="text-6xl font-bold">
                        Rs. {competition.winning}
                      </span>
                    
                    </MotionH1>
                  )}
                </div>
              </div>
              <div className="rounded-lg py-4 px-2 my-10">
                <Image
                  src={competition.imageUrl}
                  className="w-full h-40 md:h-64 lg:h-96  rounded-lg object-cover "
                  width={800}
                  height={400}
                  alt={competition.name}
                />
              </div>
              <div className="text-center">
                <CustomButton>
                  <a href="https://drive.google.com/drive/folders/1xHy6cUZnUxwN3gTUYvZ6IMIJ34gkC782?usp=sharing">View Competititon Rule Book</a>
                </CustomButton>
              </div>
                {/* For futher inofrmation contact button telephone*/}
                <div className="p-10 bg-indigo-400 rounded-lg m-5">
                  For furhter information, contact: <a href="tel:+923497790080">+92 349 7790080</a>
                </div>  
                
              {/* <MotionP className="text-xl my-10">{detailedPara}</MotionP> */}
            </div>

            <div className="flex flex-wrap justify-center gap-4 my-10">
              <Card
                title={"Registration Fee"}
                discount={competition?.discount ? competition?.discount : "None"}
                amount={competition.registration_fee}
              />
              <Card title={"Min Members Allowed"} amount={competition.min} discount="None" />
              <Card title={"Max Members Allowed"} amount={competition.max} discount="None"/>
              {/* <Card title={"People Registered"} amount={"100+"} /> */}
            </div>
            {competition?.status === "closed" ? (
              <Alert variant="error" className="border-2 my-5">
                {/* <RocketIcon /> */}
                <AlertTitle className="font-bold">
                  Competition is closed
                  
                </AlertTitle>
                <AlertDescription className=" font-semibold">
                  Seats are full for this competition <br />
                  {competition?.message}
                </AlertDescription>
              </Alert>
            ) : (
              <UploadForm
                min={competition.min}
                max={competition.max}
                competitionName={competition.name}
                discount={competition?.discount ? competition?.discount : "None"}
              />
            )}
          </div>
        </div>
        <div></div>
      </section>
    </div>
  );
}

const Card = ({ title, amount, discount }) => {
  return (
    <div className="flex flex-col border border-t-4 shadow-sm rounded-xl bg-slate-900 border-gray-700 shadow-slate-700/[.7]">
      <div className="p-4 md:p-5">
        <h3 className="text-4xl font-mono font-bold dark:text-white">
          {discount !== "None" ? <><del>{amount}</del> <span>{discount}</span></> : amount}
        </h3>
        <p className="mt-2text-gray-400">{title}</p>
      </div>
    </div>
  );
};

export default CompetitionDetails;
