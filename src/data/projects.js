export const projects = [
  {
    slug: "himalayan-trail-running",
    title: "Himalayan Trail Running",
    tagline:
      "Turning race week from spreadsheets into a product operators can actually run.",
    date: "2021 — 2022",
    tags: ["Next.js", "Payments", "Admin"],
    role: "Frontend Engineer",
    timeline: "Multi-year product",
    team: "Small product team",
    year: "2021–2022",
    liveUrl: "https://www.himalayantrailrunning.com",
    thumbnail: "/homepage-himalayantrailrunning.jpeg",
    heroImage: "/homepage-himalayantrailrunning.jpeg",
    challenge:
      "Registration lived in Google Forms and Sheets. Race week meant hunting rows, chasing payments, and hoping the right people had access. Athletes got a form. Staff got chaos.",
    approach:
      "I built a real registration product: payments, multi-role admin, and the flows race staff actually use on event week. One system for entries, status, and ops instead of a pile of tools.",
    results:
      "The event now runs on a site staff can log into, not a spreadsheet they are afraid to touch. Entries, payments, and roles live in one place — and the public site is the product, not a brochure.",
    stats: [
      { value: "1 system", label: "replaced Forms + Sheets", hint: "Ops" },
      { value: "Multi-role", label: "admin for race week", hint: "Access" },
    ],
  },
  {
    slug: "freedom-adventure-treks",
    title: "Freedom Adventure Treks",
    tagline:
      "Rebuilding a booking site so it loads, ranks, and actually converts.",
    date: "2022 — 2023",
    tags: ["SSR", "Performance", "Booking"],
    role: "Frontend Engineer",
    timeline: "Rebuild + ongoing",
    team: "Solo frontend · client ops",
    year: "2022–2023",
    liveUrl: "https://freedomadventuretreks.com",
    thumbnail: "/homepage-freedomadventuretreks.jpeg",
    heroImage: "/homepage-freedomadventuretreks.jpeg",
    challenge:
      "The old site was slow, hard to maintain, and barely usable on a trail-town connection. Lighthouse sat around 40. Booking and payments felt bolted on.",
    approach:
      "I rebuilt it as a Next.js SSR app: faster first paint, cleaner trip pages, and booking plus payments wired into dashboards staff can use. Performance was a product requirement, not a polish pass.",
    results:
      "Lighthouse moved from roughly 40 to 90+. The site is the booking desk now — trips, payments, and dashboards — instead of a slow brochure that sent people to email.",
    stats: [
      { value: "~40 → 90+", label: "Lighthouse scores", hint: "Performance" },
      { value: "SSR", label: "Next.js rebuild", hint: "Stack" },
    ],
  },
  {
    slug: "elevprof",
    title: "ElevProf",
    tagline:
      "GPX in, a clean elevation chart out — in the browser, for trail runners.",
    date: "2024",
    tags: ["SVG", "GPX", "Tool"],
    role: "Designer & Engineer",
    timeline: "Side product",
    team: "Solo",
    year: "2024",
    liveUrl: "https://elevprof.vercel.app",
    thumbnail:
      "https://himalayancreatives.com/wp-content/uploads/2024/07/Screenshot_11-7-2024_184839_elevprof.vercel.app_.jpeg",
    heroImage:
      "https://himalayancreatives.com/wp-content/uploads/2024/07/Screenshot_11-7-2024_184839_elevprof.vercel.app_.jpeg",
    challenge:
      "Runners needed elevation profiles for race pages, tattoos, and print. The usual path was desktop GIS tools, messy exports, and a lot of cleanup.",
    approach:
      "A browser tool: drop a GPX, get an SVG. No install, no Illustrator first pass. The chart is the deliverable — sized and styled for the web or for print.",
    results:
      "A live utility trail teams can actually open. Same core idea later became Elevation Tattoo: hours of manual tracing down to minutes.",
    stats: [
      { value: "GPX → SVG", label: "in the browser", hint: "Flow" },
      { value: "0 install", label: "open and export", hint: "Access" },
    ],
  },
  {
    slug: "race-bib-generator",
    title: "Race Bib Generator",
    tagline:
      "Print-ready race bibs without opening Illustrator the night before.",
    date: "2024",
    tags: ["SVG", "Print", "Events"],
    role: "Designer & Engineer",
    timeline: "Event tool",
    team: "Solo",
    year: "2025",
    liveUrl: "https://racebib.vercel.app",
    thumbnail: "/homepage-racebib.png",
    heroImage: "/homepage-racebib.png",
    challenge:
      "Bib files were a design bottleneck. Someone had to set type, numbers, and sponsor marks in Illustrator, then export for print — usually under time pressure.",
    approach:
      "An in-browser SVG designer: numbers, layout, and export aimed at print. Race staff can generate bibs without a design seat in the loop for every change.",
    results:
      "Bibs go from a late-night file hunt to a page you open and export. Same event world as the trail-running products — tools that survive race week.",
    stats: [
      { value: "In-browser", label: "SVG bib designer", hint: "Tool" },
      { value: "Print-ready", label: "no Illustrator pass", hint: "Output" },
    ],
  },
  {
    slug: "elevation-tattoo",
    title: "Elevation Tattoo",
    tagline:
      "Turn a GPX trace into a print-ready tattoo stencil in minutes, not hours.",
    date: "2025",
    tags: ["SVG", "Print", "Freelance"],
    role: "Product engineer",
    timeline: "Freelance product",
    team: "Solo",
    year: "2025",
    liveUrl: "https://elevationtattoo.com",
    thumbnail:
      "https://himalayancreatives.com/wp-content/uploads/2024/07/Screenshot_11-7-2024_184839_elevprof.vercel.app_.jpeg",
    heroImage:
      "https://himalayancreatives.com/wp-content/uploads/2024/07/Screenshot_11-7-2024_184839_elevprof.vercel.app_.jpeg",
    challenge:
      "People wanted their route as a tattoo. The work was tracing elevation by hand, cleaning noise, and producing something a studio could print. It took hours per file.",
    approach:
      "Reuse the GPX → SVG pipeline, then tune it for stencil output: cleaner lines, print-ready files, and a flow a non-designer can finish without a custom illustration job.",
    results:
      "What used to be a manual freelance grind is a product: upload, preview, export. Hours of tracing collapsed into minutes.",
    stats: [
      { value: "Hours → min", label: "from trace to stencil", hint: "Time" },
      { value: "Print SVG", label: "studio-ready output", hint: "Deliverable" },
    ],
  },
  {
    slug: "wholesale-dai",
    title: "Wholesale Dai",
    tagline: "A React B2B marketplace tuned so merchants can actually browse it.",
    date: "2025",
    tags: ["React", "B2B", "Performance"],
    role: "Frontend Engineer",
    timeline: "Product build",
    team: "Small team",
    year: "2025",
    liveUrl: "https://wholesaledai.com",
    thumbnail: "/homepage-wholesaledai.png",
    heroImage: "/homepage-wholesaledai.png",
    challenge:
      "Wholesale catalogs get heavy fast. If product grids stutter, buyers bounce — and B2B traffic is too expensive to waste on a sluggish UI.",
    approach:
      "A React storefront with performance work on lists, images, and the browse path. Keep the marketplace feel, but make scrolling and filtering something merchants can do on a work laptop.",
    results:
      "A live B2B marketplace that holds up as a catalog, not a demo. Same frontend discipline as the tourism products: ship it, then keep it fast.",
    stats: [
      { value: "B2B", label: "React marketplace", hint: "Type" },
      { value: "Tuned", label: "browse & catalog UI", hint: "Focus" },
    ],
  },
];

export const additionalWork = [

];

export const allWork = [...projects, ...additionalWork];

export function getProject(slug) {
  return projects.find((project) => project.slug === slug);
}

export function getMoreProjects(slug, count = 2) {
  const rest = projects.filter((project) => project.slug !== slug);
  return rest.slice(0, count);
}
