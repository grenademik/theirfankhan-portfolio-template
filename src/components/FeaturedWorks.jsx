"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { allWork, projects } from "@/src/data/projects";

const PAGE_SIZE = 4;

export function FeaturedWorks({
  heading = "Featured works",
  kicker = "explore the builds",
  limit,
  headingLevel = "h2",
  paginate = false,
}) {
  const source = paginate ? allWork : projects;
  const [visible, setVisible] = useState(
    typeof limit === "number" ? limit : paginate ? PAGE_SIZE : source.length
  );
  const items = source.slice(0, visible);
  const hasMore = paginate && visible < source.length;
  const Heading = headingLevel;

  return (
    <section className="container mx-auto px-10 py-24 md:px-20">
      <p className="mb-3 font-serif italic text-neutral-400">{kicker}</p>
      <Heading className="mb-14 text-4xl font-bold tracking-tight text-white md:text-6xl">
        {heading}
      </Heading>
      {limit && !paginate && items.length < projects.length && (
        <p className="-mt-8 mb-10">
          <Link href="/work" className="text-sm text-neutral-400 underline underline-offset-4 hover:text-red-500">
            View all case studies
          </Link>
        </p>
      )}
      <div className="grid gap-10 md:grid-cols-2">
        {items.map((project) => {
          const href = project.external
            ? project.liveUrl
            : `/work/${project.slug}`;
          return (
            <Link
              key={project.slug}
              href={href}
              target={project.external ? "_blank" : undefined}
              rel={project.external ? "noreferrer" : undefined}
              className="group block"
            >
              <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
                <span className="h-2 w-2 rounded-full bg-red-600" />
                {project.date}
              </p>
              <div className="relative mb-6 aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-neutral-900">
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <h3 className="text-3xl font-bold text-white transition-colors group-hover:text-red-500 md:text-4xl">
                {project.title}
              </h3>
              <p className="mt-3 max-w-md text-base leading-relaxed text-neutral-400">
                {project.tagline}
              </p>
            </Link>
          );
        })}
      </div>
      {hasMore && (
        <div className="mt-14 flex justify-center">
          <button
            type="button"
            onClick={() =>
              setVisible((count) => Math.min(count + PAGE_SIZE, source.length))
            }
            className="border-2 border-white px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-black"
          >
            See more
          </button>
        </div>
      )}
    </section>
  );
}
