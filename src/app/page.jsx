import { getTestimonials } from "./client";
import { ThreeDCardDemo } from "../components/3dCardEffect";
import { FlipWordsDemo } from "../components/FlipWordsDemo";
// import irfanDesigner from "@/images/irfandesigner.png";
import Image from 'next/image'

export default async function Home() {
  const testimonials = await getTestimonials();
  console.log(testimonials)
  return (
    <div className="container mx-auto ">
      <div className="grid grid-cols-12 h-screen items-center">
        <div className="col-span-12 text-center ">
          <FlipWordsDemo />
        </div>
        {/* <Image
          src={irfanDesigner}
          width={500}
          height={500}
          alt="Irfan"
        /> */}
      </div>
      <div className="grid grid-cols-12 h-screen items-center">
        <div className="col-span-12 text-center ">
          <FlipWordsDemo />
        </div>

      </div>


    </div>
  );
}
