import { notFound } from "next/navigation";
import { CaseStudy } from "@/src/components/CaseStudy";
import { getMoreProjects, getProject, projects } from "@/src/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }) {
  const project = getProject(params.slug);
  if (!project) {
    return { title: "Work — Irfan Khan" };
  }
  return {
    title: `${project.title} — Irfan Khan`,
    description: project.tagline,
  };
}

export default function CaseStudyPage({ params }) {
  const project = getProject(params.slug);
  if (!project) {
    notFound();
  }

  return (
    <CaseStudy project={project} moreProjects={getMoreProjects(project.slug)} />
  );
}
