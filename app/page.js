import Image from "next/image";
import { getTestimonials } from "./client";

export default async function Home() {
  const testimonials = await getTestimonials();
  console.log(testimonials)
  return (
    <div>
      {testimonials.map((testimonial) => (
        <div key={testimonial._id}>
          {/* <Image
            src={testimonial.imageUrl.asset._ref} // Adjust this based on your actual image URL structure
            alt={testimonial.name}
            width={300} // Adjust these dimensions as needed
            height={300}
          /> */}
          <h3>{testimonial.name}</h3>
          <p>{testimonial.feedback}</p>
          <p>{testimonial.company}</p>
        </div>
      ))}
    </div>
  );
}
