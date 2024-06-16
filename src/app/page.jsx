import { getTestimonials } from "./client";
import { ThreeDCardDemo } from "../components/3dCardEffect";
import { FlipWordsDemo } from "../components/FlipWordsDemo";
import irfanDesigner from "@/public/irfandesigner.png";
import Image from 'next/image'
import { InfiniteMovingCardsDemo } from "../components/InfiniteMovingCardsDemo";
import MouseHover from "../components/MouseHover";
import Skills from "../components/Skills";
import { Portfolio } from "../components/Portfolio";
import { HeroParallaxDemo } from "../components/HeroParallaxDemo";

export default async function Home() {
  const testimonials = await getTestimonials();
  return (
    <>
      <div className="container mx-auto">
        <div className="flex items-center justify-center mx-20 relative h-screen">

          <div className="absolute mt-20 left-0">
            <FlipWordsDemo />
          </div>
          <div className="absolute right-0 mt-20">
            {/* <Image
              src={irfanDesigner}
              alt="Irfan"
              className=" h-screen w-full self-end"
            /> */}
            {/* <MouseHover /> */}
          </div>
        </div>
      </div>
      <div className="">
        <InfiniteMovingCardsDemo className="w-full" />
      </div>
      <div className="container my-40 mx-auto">
        <Skills />
      </div>
      <div className="">
          <HeroParallaxDemo />
      </div>
    </>
  );
}
