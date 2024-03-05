"use client";
import Navbar from "@/app/Navbar";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

const HeroNav = (props) => {
  // get current Pathname
  const path = usePathname();

  useEffect(() => {
    console.log("path", path);
  }, []);
  if (path === "/") {
    return <Navbar {...props} />;
  }
};

export default HeroNav;
