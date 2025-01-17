import React from "react";
import { FlipWords } from "../components/ui/flip-words";

export function FlipWordsDemo() {
  const words = ["Designer", "Marketer"];

  return (
    <div className="">
      <div className="text-5xl md:text-7xl flex flex-col  mx-auto text-neutral-300 dark:text-neutral-400">
        <div>
          <span className="font-bold text-white leading-none z-30">Hi, I&apos;m Irfan.
          </span>
        </div>

        <div className="flex flex-row gap-2 items-center">
          <span className="stroke-text font-bold leading-none z-30">
            A Creative</span>
          <span className="text-red-600 text-6xl">✷</span>
        </div>

        <div>
          <FlipWords words={words} /> 
        </div>

        <div>
          <span className="stroke-text font-bold leading-none z-30">&</span>

          <span className="text-red-600  font-bold leading-none z-30"> Developer</span>
        </div>

        <div className="text-lg my-6 md:my-0 md:mt-6">
          <span >Innovating and transforming ideas into digital experiences. </span>
        </div>

        <div>
          <span className="text-lg bg-white p-2 md:p-4 text-black border-2 border-white"> Got a project?</span>

          <a href="mailto:contact@theirfankhan.com" className="border border-2 border-white hover:bg-white hover:text-black duration-300 ease-in p-2 md:p-4 text-lg">Let&apos;s talk</a>
        </div>


      </div>
    </div>
  );
}
