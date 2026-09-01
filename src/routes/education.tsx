import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/portfolio/SiteLayout";
import { Experience } from "@/components/portfolio/Experience";

const title = "Education & Certifications — Krishna Pandya";
const description =
  "Academic degrees, post-graduate certificates, and professional certifications for Krishna Pandya.";

export const Route = createFileRoute("/education")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/education" },
    ],
    links: [{ rel: "canonical", href: "/education" }],
  }),
  component: EducationPage,
});

function EducationPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Education"
        title="Academic Credentials & Certifications"
        intro="UX Design, Software Quality Assurance, Information Technology degree, and Certified Scrum Master credential."
      />
      <Experience />
    </SiteLayout>
  );
}
