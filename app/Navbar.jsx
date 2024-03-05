"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "/public/assets/logo.png";
import Hamburger from "@/components/ui/Hamburger";
import { MotionDiv } from "@/components/animation/Transitions";
import { AnimatePresence,  useScroll, useMotionValueEvent } from "framer-motion";
const menuLinks = [
  {
    name: "Startup Showdown",
    href: "/startup-showdown",
  },
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Sponsors",
    href: "/sponsors",
  },
  {
    name: "Competitions",
    href: "/competitions",
  },
  {
    name: "Team",
    href: "/team",
  },
  
  // {
  //   name: "Hall of Fame",
  //   href: "/halloffame",
  // },
];

const secondLinks = [
  {
    name: "Login",
    href: "/login",
  },
  {
    name: "Register",
    href: "/register",
  },
];

const Navbar = (props) => {
  
  const [isActive, setIsActive] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [isOnTop, setIsOnTop] = useState(true);
  const {scrollY} = useScroll()
   useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if(latest <= 170) {
      setIsOnTop(true)
    } else {
      setIsOnTop(false)
    }
    if(latest > previous && latest > 150) {
      setHidden(true)
    } else {
      setHidden(false)
    }
   });
  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const containerVars = {
    initial: {
      transition: {
        staggeredChildren: 0.09,
        staggeredDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.5,
        staggeredChildren: 0.09,
        staggeredDirection: 1,
      },
    },
  };

  return (
    <>
      <MotionDiv {...props}  variants={{
            visible: { y: 0 },
            hidden: { y: "-100%" },
          }}
          animate={hidden ? "hidden" : "visible"}
          transition={{ duration: 0.35, ease: "easeInOut" }} className={`lg:fixed left-0 top-0 w-full px-7 ${isOnTop ? "bg-transparent" : "bg-lr"}`} style={{zIndex: 98}}>
        <div className="flex justify-between items-center w-full py-5">
          <div className="md:w-1/2">
            {/* logo */}
            <Link href="/" legacyBehavior passHref>
              <Image
                src="/assets/new-logo.png"
                width={300}
                height={300}
                alt="Procom LOGO"
              ></Image>
            </Link>
          </div>
          {/* hamburger button */}

          <div className=" hidden lg:block w-1/2 text-end">
            {menuLinks?.map((link) => link.name === "Startup Showdown" ? (
                <Link href={link.href} className="p-2 mr-2 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-2xl text-white font-bold" key={link.name} passHref>
                  {link.name}
                </Link>
            ): <Link href={link.href} className="px-2" key={link.name} passHref>
            {link.name}
          </Link>
          )}
          </div>
          {/* <div className="hidden lg:block w-1/4 text-end">
            
            {secondLinks?.map((link) => (
              <Link href={link.href} className="px-2" key={link.name} passHref>
                {link.name}
              </Link>
            ))}
          </div> */}
        </div>
      </MotionDiv>
      <button
        className="block lg:hidden fixed top-2 right-5 st-button w-[3rem] h-[3rem]"
        style={{zIndex: 99}}
        onClick={() => setIsActive(!isActive)}
      >
        <div
          className={`hm-burger ${isActive ? "hm-burger-active" : ""}`}
        ></div>
      </button>
      <AnimatePresence>
        {isActive && (
          <MotionDiv
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed top-0 left-0 origin-top bg-gray-950 sideNav h-screen w-full"
            style={{
              zIndex: 98
            }}
          >
            {/* <div className="absolute top-5 right-5">
      <Hamburger isActive={isActive} setIsActive={setIsActive}/>
    </div> */}
            <MotionDiv
              variants={containerVars}
              initial="initial"
              animate="open"
              exit="initial"
              className="flex flex-col gap-5 text-3xl text-center items-center justify-center h-full"
            >
              {menuLinks?.map((link) => (
                <div className="overflow-hidden " key={link.name}>
                  <NvLink
                    setHidden={setHidden}
                    setIsActive={setIsActive}
                    href={link.href}
                    title={link.name}
                  />
                </div>
              ))}
              {/* {secondLinks?.map((link) => (
                <div className="overflow-hidden " key={link.name}>
                  <NvLink
                    
                    href={link.href}
                    title={link.name}
                  />
                </div>
              ))} */}
            </MotionDiv>
          </MotionDiv>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

const mobileLinkVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7,
    },
  },
};

const NvLink = ({ href, title, setIsActive, setHidden }) => {
  return (
    <MotionDiv
      variants={mobileLinkVars}
      initial="initial"
      animate="open"
      exit="initial"
      onClick={() => {
        setIsActive(false) 
        setHidden(false)}}
    >
        <Link href={href} className="px-2 text-purple-500 font-bold" passHref>
          {title}
        </Link>
     
    </MotionDiv>
  );
};
