"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-20 lg:px-96 origin-bottom -rotate-3 rounded-md flex flex-col antialiased bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="left"
        speed="fast"
      />
    </div>
  );
}

const testimonials = [
  {
    title: "Design",
  },
  {
    title: "Branding",
  },
  {
    title: "Development",
  },
  {
    title: "Product Design",
  },
  {
    title: "Photography",
  },
];
