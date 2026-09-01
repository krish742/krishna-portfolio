import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/portfolio/SiteLayout";
import { Experience } from "@/components/portfolio/Experience";

const title = "Experience — Krishna Pandya, UX Researcher & Designer";
const description =
  "Professional internship, academic client projects, education, and self-directed UX practice for Krishna Pandya.";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/experience" },
    ],
    links: [{ rel: "canonical", href: "/experience" }],
  }),
  component: ExperiencePage,
});

function ExperiencePage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Experience"
        title="Professional Experience & Client Projects"
        intro="UX research, accessibility evaluation, interaction design, academic client projects, and self-directed practice."
      />
      <Experience />
    </SiteLayout>
  );
}
