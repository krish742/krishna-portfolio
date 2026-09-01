import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/portfolio/SiteLayout";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { AboutConnect } from "@/components/portfolio/AboutConnect";

const title = "About Krishna Pandya — UX Researcher & Designer";
const description =
  "How Krishna Pandya works: research-led, accessibility-first UX design, shaped by a background in Information Technology and a Post-Graduate Certificate in UX Design.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="About"
        title="Design, to me, starts with listening."
        intro="An early-career UX Researcher and Designer in Ontario, Canada — a technology background, a research habit, and a stubborn streak about accessibility."
      />
      <About />
      <Skills />
      <Experience />
      <AboutConnect />
    </SiteLayout>
  );
}
