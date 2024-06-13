import React from "react";
import { FlipWords } from "../components/ui/flip-words";

export function FlipWordsDemo() {
  const words = ["Designer", "Photographer", "Videographer"];

  return (
    <div className="px-4">
      <div className="text-8xl mx-auto text-neutral-300 dark:text-neutral-400">
        <span className="text-xl font-light tracking-wider">My name is Irfan and I'm a </span> <br />
        <FlipWords words={words} /> <br />
        <span className="stroke-text font-bold leading-none">& Developer</span><br />
        <div className="flex flex-row justify-center gap-40">

        <p className="text-lg mt-2 text-center font-thin tracking-wider">based in Pokhara, Nepal</p>
        <p className="text-lg mt-2 text-center font-thin tracking-wider">Logo</p>

        </div>
      </div>
    </div>
  );
}
