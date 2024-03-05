import AboutLanding from "@/components/About/AboutLanding";
import Celebrate from "@/components/About/Celebrate";
import CompetitionLanding from "@/components/Competitions/CompetitionLanding";
import HeroSection from "@/components/HeroSection";
import { DemoTeamMembers } from "@/components/Team";
import TeamCard from "@/components/Team/TeamCard";
import { MotionH1 } from "@/components/animation/Transitions";
import CustomButton from "@/components/ui/CustomButton";
import { PinContainer } from "@/components/ui/aceternity/3d-pin";
import { LampContainer, LampDemo } from "@/components/ui/aceternity/lamp";
import { StickyScroll } from "@/components/ui/aceternity/stick-scroll-reveal";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import {TeamData} from "@/lib/data";
import Link from 'next/link'

// import { motion } from "framer-motion";
const content = [
  {
    title: "About Procom",
    description:
      "We are a team of 5 students from the University of Pretoria. We are currently in our final year of our BSc Computer Science degree. We are passionate about software development and are always looking for ways to improve our skills.",
  },
  {
    title: "The Project",
    description:
      "The project we are working on is a web application that allows users to create and manage their own portfolios. The portfolios can be shared with other users and can be used to showcase the user's work.",
  },
  {
    title: "The Goal",
    description:
      "The goal of this project is to create a web application that allows users to create and manage their own portfolios. The portfolios can be shared with other users and can be used to showcase the user's work.",
  },
  {
    title: "The Future",
    description:
      "We are currently working on a web application that allows users to create and manage their own portfolios. The portfolios can be shared with other users and can be used to showcase the user's work.",
  },
  {
    title: "The End",
    description:
      "We are currently working on a web application that allows users to create and manage their own portfolios. The portfolios can be shared with other users and can be used to showcase the user's work.",
  },
];



export default function Home() {
  return (
    // flex min-h-screen flex-col items-center justify-between p-24
    <main className="relative">
      <HeroSection />
      <AboutLanding />
      {/* <section
        className="relative z-10 overflow-x-clip py-10 md:pt-80 "
        style={{ scrollSnapType: "y mandatory" }}
      >
        <div className="px-3 sm:px-8">
          <div className="flex flex-col-reverse lg:flex-row gap-5 gap-y-5 ">
            <div className="lg:w-1/2">
              <div
                className="flex flex-col py-10 md:py-0"
                style={{ scrollSnapAlign: "center" }}
              >
                <h1 className="text-4xl md:text-6xl font-bold mb-5 block w-full">
                  About Procom
                </h1>
                <p className=" text-base sm:text-md lg:text-lg xl:text-xl text-gray-400 block">
                  Embark on a transformative journey where &quot;Technology
                  Meets Innovation&quot; at Imperium Dynamics PROCOM 2024,
                  celebrating its Silver Jubilee as the 25th edition. As a
                  beacon of progress in STEM education, PROCOM&apos;24 goes
                  beyond conventional limits, offering two days of immersive
                  experiences. From dynamic competitions that push the
                  boundaries of creativity to collaborative forums redefining
                  networking, PROCOM&apos;24 is the epitome of cutting-edge
                  education.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="w-full h-full relative flex items-center md:items-start justify-center">
                <div className="relative w-11/12 sm:max-w-96 lg:w-10/12">
                  <img
                    className="relative object-cover z-10 w-full h-60vh"
                    src="/assets/about-1.jpg"
                  />
                  <img
                    className="absolute top-0 left-5 mt-10 object-fill w-full h-60vh opacity-15"
                    src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/cw3.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className="overflow-hidden">
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

      <section className="py-10">
        <MotionH1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="text-center text-5xl md:text-7xl font-bold"
        >
          Meet Our Team
        </MotionH1>
        <div className="responsive_container">
          <div className="flex flex-wrap flex-row py-10 justify-center">
            {
              // just map 4 team members
              TeamData.slice(0, 5).map((member, index) => (
                <div key={index} className="md:w-1/3 lg:w-1/5 my-4 px-4" >
                  <TeamCard {...member} />
                </div>
              ))
            }
          </div>
          <div className="text-center py-2">
            <Link href="/team">
            <CustomButton>View More</CustomButton>
            </Link>
          </div>
        </div>
      </section>
      <CompetitionLanding />
      {/* <section className="py-10">
        <div className="container">
        <h1 className="text-6xl text-center font-bold">Our Team</h1>
          <Card>
            <CardContent> 
              <Image width={200} height="300" src="data:image/jpeg;base64,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"/>
            </CardContent>
          </Card>
        </div>
      </section> */}
    </main>
  );
}
