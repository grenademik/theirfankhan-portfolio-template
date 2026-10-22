import { getTestimonials } from "./client";
import { ThreeDCardDemo } from "../components/3dCardEffect";
import { FlipWordsDemo } from "../components/FlipWordsDemo";
import irfanDesigner from "@/public/irfandesigner.png";
import Image from 'next/image'
import { InfiniteMovingCardsDemo } from "../components/InfiniteMovingCardsDemo";
import MouseHover from "../components/MouseHover";
import Skills from "../components/Skills";
import { HeroParallaxDemo } from "../components/HeroParallaxDemo";
import { BentoGridDemo } from "../components/BewtoGridDemo";
import { StackedProjects } from "../components/StackedProjects";
import { Testimonials } from "../components/Testimonials";

export default async function Home() {
  const testimonials = await getTestimonials();
  return (
    <>
      <div className="container mx-auto">
        <div className="flex items-center justify-center mx-10 md:mx-20 relative h-screen">
          <div className="absolute left-0">
            <FlipWordsDemo />
          </div>
          <div className="absolute right-0 -mt-20">
            <Image
              src={irfanDesigner}
              alt="Irfan"
              className="hidden lg:block md:h-screen w-full self-end"
            />
          </div>
        </div>
      </div>
      <div className="mt-[-80px]">
        <InfiniteMovingCardsDemo className="w-full" />
      </div>
      <div className="container my-40 mx-auto">
        <Skills />
      </div>
      {/* <div className="">
        <HeroParallaxDemo />
      </div> */}
      <div className="container mx-auto">
        <StackedProjects limit={4} />
      </div>
      <div className="mx-10 my-10">
        <BentoGridDemo />
      </div>
      <Testimonials items={testimonials} />
    </>
  );
}
