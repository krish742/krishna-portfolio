import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "@tanstack/react-router";
import {
  Menu,
  X,
  ChevronDown,
  FolderKanban,
  FileText,
  Building2,
  Accessibility,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { NAME, RESUME_PATH } from "@/data/profile";

const workCaseStudies = [
  {
    to: "/projects/$slug" as const,
    params: { slug: "kingston-junior-innovation-challenge" },
    label: "Junior Innovation Challenge",
    desc: "Academic Client Project • City of Kingston",
    icon: Building2,
  },
  {
    to: "/projects/$slug" as const,
    params: { slug: "housing-research-project" },
    label: "Housing Research Project",
    desc: "Qualitative UX Research • City of Kingston",
    icon: FileText,
  },
  {
    to: "/projects/$slug" as const,
    params: { slug: "vosyn-ai-accessibility" },
    label: "Accessibility & Inclusive Design",
    desc: "WCAG Audits & Research • Vosyn.ai",
    icon: Accessibility,
  },
] as const;

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll to hash section whenever hash changes or page finishes navigating
  useEffect(() => {
    const rawHash = location.hash || (typeof window !== "undefined" ? window.location.hash : "");
    if (!rawHash) return;
    const id = rawHash.replace("#", "");
    const element = document.getElementById(id);
    if (!element) return;

    const timer = setTimeout(() => {
      element.scrollIntoView({ behavior: "smooth" });
    }, 120);
    return () => clearTimeout(timer);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSectionClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false);

    if (location.pathname === "/") {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        window.history.pushState({}, "", `/#${id}`);
      }
    } else {
      navigate({ to: "/", hash: id });
    }
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/90 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav
        aria-label="Main navigation"
        className="container-page flex h-16 items-center justify-between gap-4 sm:h-20"
      >
        <Link
          to="/"
          className="font-display text-base font-semibold tracking-tight text-foreground sm:text-lg"
        >
          {NAME}
          <span className="ml-2 hidden text-xs font-normal tracking-normal text-muted-foreground sm:inline">
            UX Researcher &amp; Designer
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-1 lg:flex">
          <li>
            <Link
              to="/"
              activeOptions={{ exact: true }}
              className="rounded-full px-3.5 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground font-medium" }}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className="rounded-full px-3.5 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground font-medium" }}
            >
              About
            </Link>
          </li>

          {/* Work Dropdown */}
          <li className="relative">
            <button
              type="button"
              onClick={() => setWorkOpen((v) => !v)}
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget)) setWorkOpen(false);
              }}
              aria-expanded={workOpen}
              className="flex items-center gap-1 rounded-full px-3.5 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <span>Work</span>
              <ChevronDown
                className={cn(
                  "size-3.5 transition-transform duration-200",
                  workOpen && "rotate-180",
                )}
                aria-hidden="true"
              />
            </button>

            {workOpen ? (
              <div
                className="absolute left-0 top-full mt-2 w-80 rounded-2xl border border-border bg-card p-2 shadow-lift animate-in fade-in slide-in-from-top-2 duration-150"
                onMouseDown={(e) => e.preventDefault()}
              >
                <div className="px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-wider text-muted-foreground">
                  Case Studies &amp; Projects
                </div>
                <div className="flex flex-col gap-0.5">
                  {workCaseStudies.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.label}
                        to={item.to}
                        params={item.params}
                        onClick={() => setWorkOpen(false)}
                        className="group flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-secondary"
                      >
                        <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          <Icon className="size-4" aria-hidden="true" />
                        </div>
                        <div>
                          <p className="text-xs font-medium text-foreground">{item.label}</p>
                          <p className="text-[0.7rem] text-muted-foreground">{item.desc}</p>
                        </div>
                      </Link>
                    );
                  })}
                  <div className="my-1 border-t border-border" />
                  <Link
                    to="/projects"
                    onClick={() => setWorkOpen(false)}
                    className="group flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-secondary"
                  >
                    <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <FolderKanban className="size-4" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-foreground">All UX Projects</p>
                      <p className="text-[0.7rem] text-muted-foreground">
                        View complete portfolio case studies
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            ) : null}
          </li>

          <li>
            <Link
              to="/experience"
              className="rounded-full px-3.5 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground font-medium" }}
            >
              Experience
            </Link>
          </li>

          <li>
            <Link
              to="/skills"
              className="rounded-full px-3.5 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground font-medium" }}
            >
              Skills
            </Link>
          </li>

          <li>
            <Link
              to="/education"
              className="rounded-full px-3.5 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground font-medium" }}
            >
              Education
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className="rounded-full px-3.5 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground font-medium" }}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Action CTAs */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            asChild
            size="sm"
            variant="outline"
            className="hidden rounded-full sm:inline-flex"
          >
            <a href={RESUME_PATH} download>
              Resume &darr;
            </a>
          </Button>
          <Button asChild size="sm" className="hidden rounded-full sm:inline-flex">
            <Link to="/contact">Let's Connect</Link>
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex size-11 items-center justify-center rounded-full border border-border text-foreground lg:hidden"
          >
            {open ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open ? (
        <div
          id="mobile-menu"
          className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-border bg-background lg:hidden"
        >
          <div className="container-page py-6">
            <ul className="flex flex-col gap-1">
              <li>
                <Link
                  to="/"
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: true }}
                  className="flex min-h-10 items-center rounded-xl px-3 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  activeProps={{ className: "text-foreground font-medium bg-secondary/60" }}
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  onClick={() => setOpen(false)}
                  className="flex min-h-10 items-center rounded-xl px-3 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  activeProps={{ className: "text-foreground font-medium bg-secondary/60" }}
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/experience"
                  onClick={() => setOpen(false)}
                  className="flex min-h-10 items-center rounded-xl px-3 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  activeProps={{ className: "text-foreground font-medium bg-secondary/60" }}
                >
                  Experience
                </Link>
              </li>

              <li>
                <Link
                  to="/skills"
                  onClick={() => setOpen(false)}
                  className="flex min-h-10 items-center rounded-xl px-3 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  activeProps={{ className: "text-foreground font-medium bg-secondary/60" }}
                >
                  Skills
                </Link>
              </li>

              <li>
                <Link
                  to="/education"
                  onClick={() => setOpen(false)}
                  className="flex min-h-10 items-center rounded-xl px-3 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  activeProps={{ className: "text-foreground font-medium bg-secondary/60" }}
                >
                  Education
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="flex min-h-10 items-center rounded-xl px-3 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  activeProps={{ className: "text-foreground font-medium bg-secondary/60" }}
                >
                  Contact
                </Link>
              </li>
            </ul>

            <div className="mt-6 border-t border-border pt-4 text-[0.7rem] font-semibold uppercase tracking-wider text-primary">
              Featured Case Studies
            </div>
            <ul className="mt-2 flex flex-col gap-1">
              {workCaseStudies.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    params={item.params}
                    onClick={() => setOpen(false)}
                    className="flex min-h-10 items-center justify-between rounded-xl px-3 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  >
                    <span>{item.label}</span>
                    <span className="text-[0.7rem] text-muted-foreground/80">
                      {item.desc.split("•")[0]}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-col gap-2 border-t border-border pt-5">
              <Button asChild className="min-h-11 rounded-full">
                <Link to="/contact" onClick={() => setOpen(false)}>
                  Let's Connect
                </Link>
              </Button>
              <Button asChild variant="outline" className="min-h-11 rounded-full">
                <a href={RESUME_PATH} download onClick={() => setOpen(false)}>
                  Download Resume &darr;
                </a>
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
