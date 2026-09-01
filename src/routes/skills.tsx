import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/portfolio/SiteLayout";
import { Skills } from "@/components/portfolio/Skills";
import { Expertise } from "@/components/portfolio/Expertise";

const title = "Skills & Expertise — Krishna Pandya, UX Researcher & Designer";
const description =
  "UX research methods, design tools, accessibility frameworks, and design systems skills for Krishna Pandya.";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/skills" },
    ],
    links: [{ rel: "canonical", href: "/skills" }],
  }),
  component: SkillsPage,
});

function SkillsPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Skills & Expertise"
        title="UX Capabilities & Design Tooling"
        intro="Core research methodologies, interaction design practices, accessibility standards, and design tools."
      />
      <Expertise />
      <Skills />
    </SiteLayout>
  );
}
