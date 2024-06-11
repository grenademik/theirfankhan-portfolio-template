import Image from "next/image";
import { getTestimonials } from "./client";
import { ThreeDCardDemo } from "../components/3dCardEffect";
import { FlipWordsDemo } from "../components/FlipWordsDemo";

export default async function Home() {
  const testimonials = await getTestimonials();
  console.log(testimonials)
  return (
    <div className="container mx-auto h-screen">
      <div className="grid grid-cols-12 items-center justify-center align-middle">
        <div className="col-span-6 justify-self-center items-center align-middle">
          <FlipWordsDemo />
        </div>
        <div className="col-span-6">

        </div>

      </div>

    </div>
  );
}
