import { Link } from "@tanstack/react-router";
import { FileText, Linkedin, Mail, Phone } from "lucide-react";
import { EMAIL, LINKEDIN_URL, PHONE, RESUME_PATH } from "@/data/profile";

const socials = [
  { icon: Linkedin, label: "LinkedIn profile (opens in a new tab)", href: LINKEDIN_URL },
  { icon: Mail, label: `Email Krishna at ${EMAIL}`, href: `mailto:${EMAIL}` },
  { icon: Phone, label: `Call Krishna at ${PHONE}`, href: `tel:${PHONE}` },
  { icon: FileText, label: "Download resume (PDF)", href: RESUME_PATH },
];

const portfolioPages = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Me" },
  { to: "/projects", label: "Work & Case Studies" },
  { to: "/resume", label: "Resume" },
  { to: "/contact", label: "Contact" },
] as const;

const featuredCaseStudies = [
  {
    to: "/projects/$slug",
    params: { slug: "kingston-junior-innovation-challenge" },
    label: "Junior Innovation Challenge",
  },
  {
    to: "/projects/$slug",
    params: { slug: "housing-research-project" },
    label: "Housing Research Project",
  },
  {
    to: "/projects/$slug",
    params: { slug: "vosyn-ai-accessibility" },
    label: "Accessibility & Inclusive Design",
  },
  {
    to: "/projects/$slug",
    params: { slug: "independent-ux-projects" },
    label: "Independent UX Projects",
  },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="container-page grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr] lg:items-start">
        <div>
          <p className="font-display text-base font-medium text-foreground">Krishna Pandya</p>
          <p className="mt-1 max-w-[42ch] text-sm text-muted-foreground">
            UX Researcher &amp; UX Designer — accessible, research-led digital experiences in
            Ontario, Canada.
          </p>

          <ul className="mt-5 flex items-center gap-2">
            {socials.map(({ icon: Icon, label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-foreground"
                >
                  <Icon className="size-4" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Portfolio Links">
          <p className="text-xs font-semibold uppercase tracking-wider text-foreground">
            Navigation
          </p>
          <ul className="mt-3 flex flex-col gap-1">
            {portfolioPages.map((p) => (
              <li key={p.to}>
                <Link
                  to={p.to}
                  activeOptions={{ exact: p.to === "/" }}
                  className="inline-flex min-h-9 items-center text-sm text-muted-foreground transition-colors hover:text-foreground"
                  activeProps={{ className: "text-foreground font-medium" }}
                >
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Case Studies">
          <p className="text-xs font-semibold uppercase tracking-wider text-foreground">
            Featured Case Studies
          </p>
          <ul className="mt-3 flex flex-col gap-1">
            {featuredCaseStudies.map((cs) => (
              <li key={cs.label}>
                <Link
                  to={cs.to}
                  params={cs.params}
                  className="inline-flex min-h-9 items-center text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {cs.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="container-page mt-8 border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Krishna Pandya. All rights reserved.</p>
        <p className="text-right">Designed with empathy. Built with curiosity.</p>
      </div>
    </footer>
  );
}
