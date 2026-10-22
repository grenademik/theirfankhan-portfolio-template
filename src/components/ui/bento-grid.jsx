"use client"
import { cn } from "@/src/utils/cn";
import Image from "next/image";
import MagicButton from "./MagicButton";
import { useState } from "react";
import animationData from "../../data/confetti.json"
import {
  IconClipboardCopy,
} from "@tabler/icons-react";

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "grid auto-rows-min md:grid-cols-3 grid-cols-2 gap-4 max-w-7xl mx-auto",
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
    const text = "irfankm.dev@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div
      className={cn(
        "row-span-1 flex min-h-[12rem] flex-col items-stretch justify-between rounded-none border-2 border-white bg-black p-4 group/bento transition duration-200 hover:shadow-xl",
        className
      )}
    // style={{ backgroundImage: `url(${image})` }}
    >

      {/* <Image src={image} width={40} height={40}/> */}
      <div className="w-full transition duration-200 group-hover/bento:translate-x-2">
        {icon}
        <div className="mt-2 mb-2 text-lg font-semibold text-white">
          {title}
        </div>
        <div className="text-sm font-normal leading-relaxed text-neutral-300">
          {description}
        </div>
      </div>
      {button && (
        <div className="mt-4 w-full">
          <MagicButton
            title={copied ? "Email is Copied!" : "Copy my email address"}
            icon={<IconClipboardCopy />}
            position="left"
            handleClick={handleCopy}
          />
        </div>
      )}
    </div>
  );
};
