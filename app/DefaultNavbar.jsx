"use client";
import Navbar from "./Navbar";
import { usePathname } from "next/navigation";

const DefaultNavbar = () => {
  const path = usePathname();
  if (path !== "/" && path !== '/about') return <Navbar />;

};

export default DefaultNavbar;
