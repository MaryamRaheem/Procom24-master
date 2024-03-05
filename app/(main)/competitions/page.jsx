import { MotionH1 } from "@/components/animation/Transitions";
import { DirectionAwareHover } from "@/components/ui/aceternity/direction-aware-hover";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {competitions} from "@/lib/data";
import CustomButton from "@/components/ui/CustomButton";

const Competitions = () => {
  return (
    <div className="flex">
      <section className="about-section relative w-full">
        <span
          className="absolute round-blur-effect-2"
          style={{ top: "20%", right: "10%" }}
        ></span>
        <span
          className="absolute round-blur-effect-1"
          style={{ top: "30%", left: "50%" }}
        ></span>
        <span className="absolute round-blur-effect-3 text-center"></span>
        <div className="flex flex-col justify-center mt-[30vh]">
          <div className="responsive_container">
            <div className="flex-flex-wrap justify-between"></div>
            <div className="px-2 sm:px-8">
                <MotionH1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold">
                Register For
                </MotionH1>
                <MotionH1 className="font-bold uppercase text-5xl sm:text-6xl lg:text-7xl xl:text-8xl highlight-text">
                Competitions
                </MotionH1>
            </div>
          </div>
        </div>

        <div className="py-5 responsive_container">
          <div className="text-right">
            <CustomButton>
              <a href="https://drive.google.com/drive/folders/1xHy6cUZnUxwN3gTUYvZ6IMIJ34gkC782?usp=sharing">View Competititon Rule Book</a>
            </CustomButton>
          </div>
            <div className="flex flex-wrap">
            
            {
                competitions.map((item, index) => (
                    <div className="w-full sm:!w-1/2 md:!w-1/3 lg:!w-1/4 p-3" key={index}>
                        <Link href={`/competitions/${item.slug}`}>
                            <div className="border p-4 rounded-2xl border-slate-600">
                                <Image src={item.imageUrl} alt={item.name} width={250} height={200} className="w-full h-52 object-cover rounded-xl" />
                                <h3 className="text-xl mt-2 font-bold">{item.name}</h3>
                                <p className="text-slate-600">{item.type}</p>
                            </div>
                            
                            
                        </Link>
                    </div>
                ))
            }
            </div>
          
        </div>
      </section>
    </div>
  );
};

export default Competitions;
