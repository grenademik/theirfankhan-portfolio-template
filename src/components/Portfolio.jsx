"use client";

import React from "react";
import { InfiniteMovingCardsPortfolio } from "../components/ui/infinite-moving-cards-portfolio";

export function Portfolio() {
  return (
    <div className="rounded-md flex flex-col antialiased bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCardsPortfolio
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    image: 'https://images.unsplash.com/photo-1598493139190-2f76d4ae7ac7',
    title: "Mustang Trail Race",
    type: "Design",
    Link: '#'
  },  {
    image: 'https://images.unsplash.com/photo-1601783897742-c5803a085138?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: "Mustang Trail Race",
    type: "Design",
    Link: '#'
  },  {
    image: 'https://images.unsplash.com/photo-1602084090634-ffbb79961db8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: "Mustang Trail Race",
    type: "Design",
    Link: '#'
  },  {
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: "Mustang Trail Race",
    type: "Design",
    Link: '#'
  },

];
