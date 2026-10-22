import Link from "next/link";
import Image from "next/image";
import { projects } from "@/src/data/projects";

const themes = [
  {
    bg: "#2B57D6",
    text: "text-white",
    muted: "text-white/85",
    tag: "bg-white text-black",
    dot: "bg-white",
    rule: "border-white",
  },
  {
    bg: "#191510",
    text: "text-white",
    muted: "text-white/80",
    tag: "bg-white text-black",
    dot: "bg-red-600",
    rule: "border-white",
  },
  {
    bg: "#F7C948",
    text: "text-black",
    muted: "text-black/75",
    tag: "bg-black text-white",
    dot: "bg-black",
    rule: "border-black",
  },
  {
    bg: "#E11D48",
    text: "text-white",
    muted: "text-white/85",
    tag: "bg-white text-black",
    dot: "bg-white",
    rule: "border-white",
  },
];

function pad(index) {
  return String(index + 1).padStart(2, "0");
}

export function StackedProjects({ limit = 4 }) {
  const items = projects.slice(0, limit);

  return (
    <section className="relative mx-10 md:mx-20">
        <div className="mb-10">
          <p className="font-serif italic text-neutral-400">explore my work</p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-white md:text-6xl">
            Selected builds
          </h2>
        </div>

        <div className="flex flex-col gap-16 lg:gap-[12vh]">
        {items.map((project, index) => {
          const theme = themes[index % themes.length];
          return (
            <article
              key={project.slug}
              className="lg:sticky lg:top-20"
              style={{ zIndex: index + 1 }}
            >
              <div
                className="flex"
                style={{
                  marginLeft:
                    index === 0
                      ? 0
                      : `min(calc(${index * 21}% - 72px), calc(100% - 340px))`,
                }}
              >
                <span
                  className={`inline-flex items-center gap-2 py-3.5 pr-14 text-xs font-bold uppercase tracking-[0.2em] sm:gap-3.5 sm:py-5 sm:pr-28 sm:text-sm ${theme.text} ${
                    index === 0
                      ? "pl-5 [clip-path:polygon(0_0,calc(100%-44px)_0,100%_100%,0_100%)] sm:pl-9 sm:[clip-path:polygon(0_0,calc(100%-76px)_0,100%_100%,0_100%)]"
                      : "pl-16 [clip-path:polygon(44px_0,calc(100%-44px)_0,100%_100%,0_100%)] sm:pl-[6.75rem] sm:[clip-path:polygon(76px_0,calc(100%-76px)_0,100%_100%,0_100%)]"
                  }`}
                  style={{ backgroundColor: theme.bg }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-3 w-3 sm:h-4 sm:w-4"
                    aria-hidden
                  >
                    <path d="M12 2c1 5 4 8 9 9-5 1-8 4-9 9-1-5-4-8-9-9 5-1 8-4 9-9Z" />
                  </svg>
                  Project {pad(index)}
                </span>
              </div>

              <div
                className={`grid grid-cols-1 gap-6 p-6 sm:p-10 lg:grid-cols-[1fr_1.1fr] lg:gap-12 lg:p-14 lg:min-h-[calc(100vh-8rem)] ${theme.text}`}
                style={{ backgroundColor: theme.bg }}
              >
                <div className="flex flex-col">
                  <span
                    className={`inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] ${theme.text}`}
                  >
                    <span className={`h-3 w-3 rounded-full ${theme.dot}`} />
                    {project.date}
                  </span>
                  <h3 className="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl xl:text-7xl">
                    {project.title}
                  </h3>
                  <p
                    className={`mt-5 max-w-lg text-lg leading-relaxed ${theme.muted}`}
                  >
                    {project.tagline}
                  </p>
                  <Link
                    href={`/work/${project.slug}`}
                    className={`mt-8 inline-flex items-center gap-2 self-start border-b-2 pb-1 text-sm font-bold uppercase tracking-[0.2em] ${theme.rule} ${theme.text}`}
                  >
                    View project
                    <span aria-hidden>↗</span>
                  </Link>
                  <div className="mt-auto flex flex-wrap gap-2.5 pt-12">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-4 py-2 text-sm font-bold uppercase tracking-wide ${theme.tag}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="relative lg:self-center">
                  <div className="relative aspect-[16/11] overflow-hidden rounded-sm border border-black/20 bg-black/20">
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

        <div className="relative z-20 flex justify-center bg-black py-16">
          <Link
            href="/work"
            className="border-2 border-white px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-black"
          >
            See more
          </Link>
        </div>
    </section>
  );
}
