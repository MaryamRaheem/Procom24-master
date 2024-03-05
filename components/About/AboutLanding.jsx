import React from 'react'
import { HeroParallax } from '../ui/aceternity/hero-parallax';

const products = [
    {
      title: "Moonbeam",
      link: "https://gomoonbeam.com",
      thumbnail:
        "/assets/about-1.jpg",
    },
    {
      title: "Cursor",
      link: "https://cursor.so",
      thumbnail:
        "/assets/about-2.jpg",
    },
    {
      title: "Rogue",
      link: "https://userogue.com",
      thumbnail:
        "/assets/about-3.jpg",
    },
   
    {
      title: "Editorially",
      link: "https://editorially.org",
      thumbnail:
        "/assets/about-4.jpg",
    },
    {
      title: "Editrix AI",
      link: "https://editrix.ai",
      thumbnail:
      "/assets/about-5.jpg",
    },
    {
      title: "Pixel Perfect",
      link: "https://app.pixelperfect.quest",
      thumbnail:
      "/assets/about-6.jpg",
    },
   
    {
      title: "Algochurn",
      link: "https://algochurn.com",
      thumbnail:
      "/assets/about-7.jpg",
    },
    {
      title: "Aceternity UI",
      link: "https://ui.aceternity.com",
      thumbnail:
      "/assets/about-8.jpg",
    },
    {
      title: "Tailwind Master Kit",
      link: "https://tailwindmasterkit.com",
      thumbnail:
      "/assets/about-2.jpg",
    },
    {
      title: "SmartBridge",
      link: "https://smartbridgetech.com",
      thumbnail:
      "/assets/about-1.jpg",
    },
    {
      title: "Renderwork Studio",
      link: "https://renderwork.studio",
      thumbnail:
      "/assets/about-5.jpg",
    },
   
    {
      title: "Creme Digital",
      link: "https://cremedigital.com",
      thumbnail:
      "/assets/about-4.jpg",
    },
    {
      title: "Golden Bells Academy",
      link: "https://goldenbellsacademy.com",
      thumbnail:
      "/assets/about-7.jpg",
    },
    {
      title: "Invoker Labs",
      link: "https://invoker.lol",
      thumbnail:
      "/assets/about-5.jpg",
    },
    {
      title: "E Free Invoice",
      link: "https://efreeinvoice.com",
      thumbnail:
      "/assets/about-3.jpg",
    },
  ];

const AboutLanding = () => {
  return (
    <HeroParallax products={products} />
  )
}

export default AboutLanding