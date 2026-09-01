import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/portfolio/SiteLayout";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { projects } from "@/data/projects";

const title = "Projects & Case Studies — Krishna Pandya, UX";
const description =
  "UX case studies by Krishna Pandya: civic innovation and housing research with the City of Kingston, accessibility design at Vosyn.ai, and independent UX practice.";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const clientProjects = projects.filter((p) => p.slug !== "independent-ux-projects");
  const independentProjects = projects.filter((p) => p.slug === "independent-ux-projects");

  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Work & Case Studies"
        title="Applied UX projects and continuous practice"
        intro="Evidence-led case studies walking through research questions, findings, synthesis, and design iterations."
      />
      <section className="border-t border-border py-16 sm:py-20">
        <div className="container-page space-y-16">
          {/* Section 1: Client & Academic Case Studies */}
          <div>
            <div className="mb-8 flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                  Applied Experience
                </span>
                <h2 className="mt-1 font-display text-2xl text-foreground sm:text-3xl">
                  Client &amp; Academic Projects
                </h2>
              </div>
              <span className="hidden text-xs font-medium text-muted-foreground sm:inline">
                External &amp; Team Contexts
              </span>
            </div>
            <ul className="grid gap-8 lg:grid-cols-2">
              {clientProjects.map((p, i) => (
                <ProjectCard key={p.slug} project={p} delay={(i % 2) * 90} />
              ))}
            </ul>
          </div>

          {/* Section 2: Self-Directed UX Practice */}
          <div className="border-t border-border pt-12">
            <div className="mb-8">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Continuous Learning
              </span>
              <h2 className="mt-1 font-display text-2xl text-foreground sm:text-3xl">
                Self-Directed UX Practice
              </h2>
              <p className="mt-2 text-sm text-muted-foreground max-w-[56ch]">
                Ongoing practice applying usability evaluations, information architecture,
                wireframing, and accessibility reviews outside of client work.
              </p>
            </div>
            <ul className="grid gap-8 lg:grid-cols-2">
              {independentProjects.map((p) => (
                <ProjectCard key={p.slug} project={p} delay={100} />
              ))}
            </ul>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
