import React from "react";
import { FlipWords } from "../components/ui/flip-words";

export function FlipWordsDemo() {
  const words = ["Engineer", "Builder"];

  return (
    <div className="">
      <div className="text-5xl md:text-7xl flex flex-col  mx-auto text-neutral-300 dark:text-neutral-400">
        <div>
          <span className="font-bold text-white leading-none z-30">Hi, I&apos;m Irfan.
          </span>
        </div>

        <div className="flex flex-row gap-2 items-center">
          <span className="stroke-text font-bold leading-none z-30">
            Frontend</span>
          <span className="text-red-600 text-6xl">✷</span>
        </div>

        <div>
          <FlipWords words={words} /> 
        </div>

        <div>
          <span className="stroke-text font-bold leading-none z-30">&</span>

          <span className="text-red-600  font-bold leading-none z-30"> Designer</span>
        </div>

        <div className="text-lg my-6 md:my-0 md:mt-6">
          <span >Shipping React / Next.js products from Japan — live demos on this site and GitHub. </span>
        </div>

        <div>
          <span className="text-lg bg-white p-2 md:p-4 text-black border-2 border-white"> Open to roles</span>

          <a href="mailto:irfankm.dev@gmail.com" className="border border-2 border-white hover:bg-white hover:text-black duration-300 ease-in p-2 md:p-4 text-lg">Let&apos;s talk</a>
        </div>


      </div>
    </div>
  );
}
