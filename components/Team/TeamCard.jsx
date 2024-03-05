import React from "react";
import { PinContainer } from "../ui/aceternity/3d-pin";

const TeamCard = ({ designation, name, src, description }) => {
  return (
    // <PinContainer title={designation} href="/">
      <div className="flex basis-full flex-col justify-center items-center tracking-tight text-slate-100/50 w-full my-2">
        {/* <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500 ">
                  Customizable Tailwind CSS and Framer Motion Components.
                </span>
              </div> */}
        {/* <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" /> */}
        
        <div className="py-2 h-full w-full">
        <img
          src={src}
          className="rounded-lg object-cover object-top w-full h-[15rem]"
        />
          <h2 className="max-w-xs mb-0 mt-2 font-bold  text-xl text-slate-100">
            {name}
          </h2>
          <p className="text-purple-500 font-semibold">{designation}</p>
        </div>
      </div>
    // </PinContainer>
  );
};

export default TeamCard;
