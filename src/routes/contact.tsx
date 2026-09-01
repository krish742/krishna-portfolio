import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/portfolio/SiteLayout";
import { Contact } from "@/components/portfolio/Contact";

const title = "Contact Krishna Pandya — UX Researcher & Designer";
const description =
  "Get in touch with Krishna Pandya about UX research and design roles, accessibility work, or collaboration in Ontario, Canada and remote.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk about the problem."
        intro="Open to UX research and design opportunities, accessibility work, and good conversations."
      />
      <Contact />
    </SiteLayout>
  );
}
