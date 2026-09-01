import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/portfolio/SiteLayout";
import { Experience } from "@/components/portfolio/Experience";
import { ResumeSection } from "@/components/portfolio/ResumeSection";

const title = "Resume — Krishna Pandya, UX Researcher & Designer";
const description =
  "Experience, education, certifications, and UX methods for Krishna Pandya — UX Researcher and Designer based in Ontario, Canada.";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/resume" },
    ],
    links: [{ rel: "canonical", href: "/resume" }],
  }),
  component: ResumePage,
});

function ResumePage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Resume"
        title="The full story, on one page."
        intro="Experience, education, certifications, and the methods I use day to day."
      />
      <ResumeSection />
      <Experience />
    </SiteLayout>
  );
}
