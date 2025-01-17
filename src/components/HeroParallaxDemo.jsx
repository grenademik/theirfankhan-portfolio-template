"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";
import himalayanHome from '@/public/homepage-himalayantrailrunning.jpeg';
import freedomHome from '@/public/homepage-freedomadventuretreks.jpeg';
import ramBhaktaHome from '@/public/homepage-rambhaktajojiju.jpeg';
import sailungHome from '@/public/homepage-sailungultra.jpeg';

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Ram Bhakta Jojiju",
    link: "https://rambhaktajojiju.com/",
    techStack: ["ReactJS", "Framer Motion", "Tailwind CSS"],

    thumbnail:
      `${ramBhaktaHome.src}`,
  },
  {
    title: "Himalayan Trail Running",
    link: "https://www.himalayantrailrunning.com",
    type: "Development",
    thumbnail:
      `${himalayanHome.src}`,
  },
  {
    title: "Freedom Adventures",
    link: "https://freedomadventuretreks.com",
    thumbnail:
      `${freedomHome.src}`,
  },
  {
    title: "Sailung Ultra",
    link: "https://sailungultra.com/",
    thumbnail:
      `${sailungHome.src}`,
  },
  {
    title: "Ram Bhakta Jojiju",
    link: "https://rambhaktajojiju.com/",
    techStack: ["ReactJS", "Framer Motion", "Tailwind CSS"],

    thumbnail:
      `${ramBhaktaHome.src}`,
  },
  {
    title: "Himalayan Trail Running",
    link: "https://www.himalayantrailrunning.com",
    type: "Development",
    thumbnail:
      `${himalayanHome.src}`,
  },
  {
    title: "Ram Bhakta Jojiju",
    link: "https://rambhaktajojiju.com/",
    techStack: ["ReactJS", "Framer Motion", "Tailwind CSS"],

    thumbnail:
      `${ramBhaktaHome.src}`,
  },
  {
    title: "Sailung Ultra",
    link: "https://sailungultra.com/",
    thumbnail:
      `${sailungHome.src}`,
  },
  {
    title: "ElevProf",
    link: "https://elevprof.vercel.app",
    thumbnail:
      `https://himalayancreatives.com/wp-content/uploads/2024/07/Screenshot_11-7-2024_184839_elevprof.vercel.app_.jpeg`,
  },
];
