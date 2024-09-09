"use client"
import { cn } from "@/src/utils/cn";
import Image from "next/image";
import MagicButton from "./MagicButton";
import { useState } from "react";
import animationData from "../../data/confetti.json"
import Lottie from "react-lottie";
import {
  IconClipboardCopy,
} from "@tabler/icons-react";

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[12rem] grid-cols-1 md:grid-cols-3 gap-4 just max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  image,
  animate,
  button,
}) => {

  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "contact@theirfankhan.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-none p-4 bg-black border-white/[0.2] border justify-center flex flex-col items-start bg-center bg-origin-border ",
        className
      )}
    // style={{ backgroundImage: `url(${image})` }}
    >

      {
        animate &&
        <div className="my-[-30px]">
          <script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script>

          <iframe src="https://lottie.host/embed/26f749bb-df44-4c8c-a00f-cdcde52b2cb6/2sc2oT6Smy.json"></iframe>
        </div>
      }
      {/* <Image src={image} width={40} height={40}/> */}
      <div className="group-hover/bento:translate-x-2 transition duration-200">

        {icon}
        <div className="font-bold text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-normal text-xs text-neutral-300">
          {description}
        </div>
        {button &&
          <div className="mt-5 relative">
            {/* button border magic from tailwind css buttons  */}
            {/* add rounded-md h-8 md:h-8, remove rounded-full */}
            {/* remove focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 */}
            {/* add handleCopy() for the copy the text */}
            <div
              className={`absolute -bottom-5 right-0 ${copied ? "block" : "block"
                }`}
            >
              <Lottie options={defaultOptions} height={150} width={300} />
            </div>
            <MagicButton
              title={copied ? "Email is Copied!" : "Copy my email address"}
              icon={<IconClipboardCopy />}
              position="left"
              handleClick={handleCopy}
              otherClasses="!bg-[#161A31]"
            />
          </div>
        }
      </div>
    </div>
  );
};
