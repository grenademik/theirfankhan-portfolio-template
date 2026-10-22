"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  IconStar,
  IconLayoutGrid,
  IconMail,
  IconBrandGithub,
} from "@tabler/icons-react";
import { cn } from "@/src/utils/cn";

const links = [
  { href: "/", label: "Home", icon: IconStar },
  { href: "/work", label: "Work", icon: IconLayoutGrid },
];

export function SiteNav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b-2 border-white bg-black">
      <nav className="flex h-16 items-stretch sm:h-[4.5rem]">
        <Link
          href="/"
          className="flex items-center justify-center border-r-2 border-white px-3 sm:px-4"
          aria-label="Irfan Khan home"
        >
          <Image
            src="/favicon.png"
            alt=""
            width={40}
            height={40}
            className="h-9 w-9 sm:h-10 sm:w-10"
          />
        </Link>

        <ul className="flex flex-1 items-stretch">
          {links.map((link) => {
            const Icon = link.icon;
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <li key={link.href} className="flex">
                <Link
                  href={link.href}
                  className={cn(
                    "flex items-center gap-2 px-4 text-xs font-bold uppercase tracking-[0.18em] sm:px-6 sm:text-sm",
                    active
                      ? "bg-white text-black"
                      : "text-white hover:bg-white/10"
                  )}
                >
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5" stroke={2.2} />
                  <span className="hidden sm:inline">{link.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-stretch">
          <a
            href="https://github.com/grenademik"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex items-center justify-center border-l-2 border-white px-4 text-white transition hover:bg-white hover:text-black sm:px-5"
          >
            <IconBrandGithub className="h-5 w-5" stroke={2} />
          </a>
          <a
            href="mailto:irfankm.dev@gmail.com"
            className="flex items-center justify-center gap-2 border-l-2 border-white bg-white px-4 text-xs font-bold uppercase tracking-[0.18em] text-black transition hover:bg-red-600 hover:text-white sm:px-6 sm:text-sm"
          >
            <IconMail className="h-4 w-4 sm:h-5 sm:w-5" stroke={2.2} />
            <span className="hidden sm:inline">Let&apos;s talk</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
