import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t-2 border-white bg-black">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="font-serif italic text-neutral-400">open to roles</p>
            <p className="mt-3 text-3xl font-bold tracking-tight text-white md:text-5xl">
              Let&apos;s make something together
            </p>
            <p className="mt-5 max-w-lg text-lg text-neutral-400">
              Frontend engineer in Japan. React / Next.js products, dashboards, and
              browser tools — open to English-first or bilingual teams.
            </p>
            <a
              href="mailto:irfankm.dev@gmail.com"
              className="mt-8 inline-flex border-2 border-white px-8 py-3 text-lg text-white transition hover:bg-white hover:text-black"
            >
              Let&apos;s talk
            </a>
          </div>

          <div className="flex flex-col justify-between md:col-span-5 md:items-end md:text-right">
            <div>
              <p className="text-lg font-semibold text-white">
                Irfan Khan <span className="text-red-600">✷</span>
              </p>
              <p className="mt-1 text-sm text-neutral-400">Frontend Engineer</p>
              <p className="mt-1 text-sm text-neutral-400">
                Toride / Greater Tokyo, Japan
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-2 text-sm md:items-end">
              <a
                href="mailto:irfankm.dev@gmail.com"
                className="text-neutral-300 underline underline-offset-4 hover:text-red-500"
              >
                irfankm.dev@gmail.com
              </a>
              <a
                href="https://github.com/grenademik"
                target="_blank"
                rel="noreferrer"
                className="text-neutral-300 underline underline-offset-4 hover:text-red-500"
              >
                github.com/grenademik
              </a>
              <a
                href="https://www.theirfankhan.com"
                className="text-neutral-300 underline underline-offset-4 hover:text-red-500"
              >
                theirfankhan.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t-2 border-white pt-8 text-sm text-neutral-400 sm:flex-row sm:items-center sm:justify-between">
          <nav className="flex gap-6">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <Link href="/work" className="hover:text-white">
              Work
            </Link>
            <a href="mailto:irfankm.dev@gmail.com" className="hover:text-white">
              Contact
            </a>
          </nav>
          <p>© {new Date().getFullYear()} Irfan Khan</p>
        </div>
      </div>
    </footer>
  );
}
