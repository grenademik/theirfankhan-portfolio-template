"use client";

import { useEffect, useState } from "react";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

const quotes = [
  {
    quote:
      "Irfan did a fantastic job on our project. He was efficient, professional, and delivered high-quality work on time. Communication was smooth throughout, and he was always responsive and open to feedback. Highly recommend!",
    name: "Jason Drewsen",
    role: "Elevation Tattoo",
    url: "https://elevationtat.com/",
  },
  {
    quote:
      "After only a few minutes speaking with Irfan, he completely understood my project and had a plan to put together a custom plugin that would allow us to display registration information to my participants easily and securely. He completed the job very quickly, was responsive and helpful with installation and testing, and even when my site had a caching issue on our end, he walked me through resolving it with one email. He’s knowledgeable and I would highly recommend him to anyone needing development help.",
    name: "Kathy Webber",
    role: "North of 89 Outdoors, Inc / Coordinator, OUTRace",
    url: "https://n89.ca/",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) {
      return;
    }
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % quotes.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [paused]);

  return (
    <section className="py-12 md:py-24">
      <div className="container mx-auto px-4 text-center sm:px-10 md:px-20">
        <p className="mb-3 font-serif italic text-neutral-400">what people say</p>
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-6xl">
          Testimonials
        </h2>

        <div
          className="relative mx-auto mt-8 w-full sm:mt-12"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="grid border-2 border-white bg-black text-center">
            {quotes.map((quote, i) => (
              <figure
                key={quote.name}
                className={`col-start-1 row-start-1 flex h-full flex-col items-center justify-center px-5 py-8 transition-opacity duration-300 sm:px-8 sm:py-12 md:px-16 md:py-16 ${
                  i === index
                    ? "opacity-100"
                    : "pointer-events-none opacity-0"
                }`}
              >
                <blockquote className="mx-auto max-w-4xl text-base font-semibold leading-relaxed text-white sm:text-lg md:text-2xl">
                  “{quote.quote}”
                </blockquote>
                <figcaption className="mt-6 sm:mt-10">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white sm:text-sm sm:tracking-[0.18em]">
                    {quote.name}
                  </p>
                  {quote.url ? (
                    <a
                      href={quote.url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 inline-block max-w-full break-words px-1 text-xs text-neutral-400 underline underline-offset-4 hover:text-red-500 sm:text-sm"
                    >
                      {quote.role}
                    </a>
                  ) : (
                    <p className="mt-2 text-xs text-neutral-400 sm:text-sm">{quote.role}</p>
                  )}
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-5 flex items-center justify-center gap-3 sm:mt-6 sm:gap-4">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() =>
                setIndex((current) => (current - 1 + quotes.length) % quotes.length)
              }
              className="flex h-10 w-10 items-center justify-center border-2 border-white text-white transition hover:bg-white hover:text-black"
            >
              <IconChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {quotes.map((quote, i) => (
                <button
                  key={quote.name}
                  type="button"
                  aria-label={`Show testimonial from ${quote.name}`}
                  onClick={() => setIndex(i)}
                  className={`h-2.5 w-2.5 border-2 border-white ${
                    i === index ? "bg-white" : "bg-transparent"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => setIndex((current) => (current + 1) % quotes.length)}
              className="flex h-10 w-10 items-center justify-center border-2 border-white text-white transition hover:bg-white hover:text-black"
            >
              <IconChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
