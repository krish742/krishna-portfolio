import { createFileRoute, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/portfolio/SiteLayout";
import { CaseStudy } from "@/components/portfolio/CaseStudy";
import { getProject, projects } from "@/data/projects";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    const index = projects.findIndex((p) => p.slug === project.slug);
    const prev = projects[(index - 1 + projects.length) % projects.length]!;
    const next = projects[(index + 1) % projects.length]!;
    return { project, prev, next };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Case study not found — Krishna Pandya" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { project } = loaderData;
    const title = `${project.title} — ${project.org} | Krishna Pandya`;
    return {
      meta: [
        { title },
        { name: "description", content: project.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: project.summary },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
        { property: "og:url", content: `/projects/${project.slug}` },
      ],
      links: [{ rel: "canonical", href: `/projects/${project.slug}` }],
    };
  },
  component: CaseStudyPage,
});

function CaseStudyPage() {
  const { project, prev, next } = Route.useLoaderData();
  return (
    <SiteLayout>
      <CaseStudy project={project} prev={prev} next={next} />
    </SiteLayout>
  );
}
