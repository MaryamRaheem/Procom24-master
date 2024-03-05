"use client";
import Navbar from "@/app/Navbar";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

const AboutNav = () => {
  const path = usePathname();

  useEffect(() => {
    console.log("path", path);
  }, []);
  if (path === "/about") {
    return <Navbar />;
  }
};

export default AboutNav;
