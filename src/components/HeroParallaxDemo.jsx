"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";
import himalayanHome from '@/public/homepage-himalayantrailrunning.jpeg';
import freedomHome from '@/public/homepage-freedomadventuretreks.jpeg';
import ramBhaktaHome from '@/public/homepage-rambhaktajojiju.jpeg';
import wholesaleDaiHome from '@/public/homepage-wholesaledai.png';
import sailungHome from '@/public/homepage-sailungultra.jpeg';
import raceBibHome from '@/public/homepage-racebib.png';

const elevProfThumb =
  "https://himalayancreatives.com/wp-content/uploads/2024/07/Screenshot_11-7-2024_184839_elevprof.vercel.app_.jpeg";

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}

export const products = [
  {
    title: "ElevProf",
    link: "/work/elevprof",
    type: "GPX → SVG elevation charts",
    thumbnail: elevProfThumb,
  },
  {
    title: "Himalayan Trail Running",
    link: "/work/himalayan-trail-running",
    type: "Registration, payments, multi-role admin",
    thumbnail: `${himalayanHome.src}`,
  },
  {
    title: "Freedom Adventure Treks",
    link: "/work/freedom-adventure-treks",
    type: "Next.js SSR rebuild · Lighthouse ~40 → 90+",
    thumbnail: `${freedomHome.src}`,
  },
  {
    title: "Race Bib Generator",
    link: "/work/race-bib-generator",
    type: "In-browser SVG bib designer",
    thumbnail: `${raceBibHome.src}`,
  },
  {
    title: "Elevation Tattoo",
    link: "/work/elevation-tattoo",
    type: "GPX → print-ready SVG · hours → minutes",
    thumbnail: elevProfThumb,
  },
  {
    title: "Wholesale Dai",
    link: "/work/wholesale-dai",
    type: "React B2B marketplace · performance-tuned",
    thumbnail: `${wholesaleDaiHome.src}`,
  },
  {
    title: "Race tracking UI",
    link: "https://tracking-next.vercel.app",
    type: "Next.js · github.com/grenademik/tracking-next",
    thumbnail: `${himalayanHome.src}`,
  },
  {
    title: "Sailung Ultra",
    link: "https://sailungultra.com/",
    type: "Event site",
    thumbnail: `${sailungHome.src}`,
  },
  {
    title: "Ram Bhakta Jojiju",
    link: "https://rambhaktajojiju.com/",
    type: "React · Framer Motion · Tailwind",
    thumbnail: `${ramBhaktaHome.src}`,
  },
  {
    title: "ElevProf",
    link: "/work/elevprof",
    type: "Browser tool for trail runners",
    thumbnail: elevProfThumb,
  },
  {
    title: "Himalayan Trail Running",
    link: "/work/himalayan-trail-running",
    type: "Replaced Forms + Sheets with a real product",
    thumbnail: `${himalayanHome.src}`,
  },
  {
    title: "Freedom Adventure Treks",
    link: "/work/freedom-adventure-treks",
    type: "Booking + payments + dashboards",
    thumbnail: `${freedomHome.src}`,
  },
  {
    title: "Race Bib Generator",
    link: "/work/race-bib-generator",
    type: "Print-ready bibs without Illustrator",
    thumbnail: `${raceBibHome.src}`,
  },
  {
    title: "Race tracking UI",
    link: "https://tracking-next.vercel.app",
    type: "Live demo + public repo",
    thumbnail: `${himalayanHome.src}`,
  },
  {
    title: "Elevation Tattoo",
    link: "/work/elevation-tattoo",
    type: "Freelance automation product",
    thumbnail: elevProfThumb,
  },
];
