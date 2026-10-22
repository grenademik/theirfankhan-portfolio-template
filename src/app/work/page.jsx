import { FeaturedWorks } from "@/src/components/FeaturedWorks";

export const metadata = {
  title: "Work — Irfan Khan",
  description:
    "Case studies of live frontend work: race products, booking sites, and browser tools.",
};

export default function WorkPage() {
  return (
    <FeaturedWorks
      heading="Featured works"
      kicker="explore my work"
      headingLevel="h1"
    />
  );
}
