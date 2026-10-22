import Image from "next/image";
import Link from "next/link";

const metaCardStyles = [
  "bg-sky-400/15 text-sky-100",
  "bg-amber-400/15 text-amber-100",
  "bg-emerald-400/15 text-emerald-100",
  "bg-pink-400/15 text-pink-100",
];

export function CaseStudy({ project, moreProjects }) {
  const meta = [
    { label: "Role", value: project.role },
    { label: "Timeline", value: project.timeline },
    { label: "Team", value: project.team },
    { label: "Year", value: project.year },
  ];

  return (
    <article className="container mx-auto px-10 pb-24 pt-16 md:px-20">
      <Link
        href="/work"
        className="text-sm text-neutral-400 transition-colors hover:text-white"
      >
        ← All work
      </Link>

      <p className="mt-10 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
        <span className="h-2 w-2 rounded-full bg-red-600" />
        {project.date}
      </p>

      <h1 className="mt-6 text-5xl font-bold uppercase tracking-tight text-white md:text-7xl">
        {project.title}
      </h1>
      <p className="mt-6 max-w-2xl text-xl leading-relaxed text-neutral-400">
        {project.tagline}
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-neutral-200 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-black"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {meta.map((item, index) => (
          <div
            key={item.label}
            className={`rounded-xl px-5 py-5 ${metaCardStyles[index]}`}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] opacity-80">
              {item.label}
            </p>
            <p className="mt-2 text-lg font-medium text-white">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="relative mt-14 aspect-[16/9] overflow-hidden rounded-3xl border border-white/10 bg-neutral-900">
        <Image
          src={project.heroImage}
          alt={`${project.title} screenshot`}
          fill
          className="object-cover object-top"
          sizes="(max-width: 1280px) 100vw, 1280px"
          priority
        />
      </div>

      {project.liveUrl && (
        <p className="mt-4 text-sm text-neutral-500">
          Live:{" "}
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="text-neutral-300 underline underline-offset-4 hover:text-red-500"
          >
            {project.liveUrl.replace(/^https?:\/\//, "")}
          </a>
        </p>
      )}

      <Narrative label="the challenge">{project.challenge}</Narrative>
      <Narrative label="my approach">{project.approach}</Narrative>
      <Narrative label="the results">{project.results}</Narrative>

      <div className="mt-16 grid gap-10 border-t border-white/10 pt-12 sm:grid-cols-2">
        {project.stats.map((stat) => (
          <div key={stat.label}>
            <p className="text-5xl font-bold text-white md:text-6xl">{stat.value}</p>
            <p className="mt-2 text-lg text-neutral-300">{stat.label}</p>
            <p className="mt-1 text-sm text-neutral-500">{stat.hint}</p>
          </div>
        ))}
      </div>

      {moreProjects?.length > 0 && (
        <section className="mt-24">
          <p className="mb-8 font-serif italic text-neutral-400">more projects</p>
          <div className="grid gap-8 md:grid-cols-2">
            {moreProjects.map((item) => (
              <Link key={item.slug} href={`/work/${item.slug}`} className="group block">
                <p className="mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                  <span className="h-2 w-2 rounded-full bg-red-600" />
                  {item.date}
                </p>
                <div className="relative mb-4 aspect-[16/10] overflow-hidden rounded-2xl border border-white/10">
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    fill
                    className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <h2 className="text-2xl font-bold text-white group-hover:text-red-500">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                  {item.tagline}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="mt-24 rounded-3xl border border-white/10 bg-white/[0.03] px-8 py-12 text-center">
        <p className="font-serif italic text-neutral-400">got a product to ship?</p>
        <p className="mt-4 text-2xl font-semibold text-white md:text-3xl">
          Let&apos;s make something together
        </p>
        <a
          href="mailto:irfankm.dev@gmail.com"
          className="mt-8 inline-block border-2 border-white px-6 py-3 text-white transition hover:bg-white hover:text-black"
        >
          irfankm.dev@gmail.com
        </a>
      </section>
    </article>
  );
}

function Narrative({ label, children }) {
  return (
    <section className="mt-16">
      <h2 className="font-serif text-2xl italic text-white">{label}</h2>
      <p className="mt-5 text-lg leading-relaxed text-neutral-300">{children}</p>
    </section>
  );
}
