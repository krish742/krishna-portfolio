import type { ReactNode } from "react";
import { Toaster } from "@/components/ui/sonner";
import { SiteNav } from "./SiteNav";
import { Footer } from "./Footer";
import { BackToTop } from "./BackToTop";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh bg-background">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <SiteNav />
      <main id="main">{children}</main>
      <Footer />
      <BackToTop />
      <Toaster />
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="relative overflow-hidden pt-28 pb-14 sm:pt-36 sm:pb-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-24 size-[26rem] rounded-full bg-accent/60 blur-3xl"
      />
      <div className="container-page relative max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">{eyebrow}</p>
        <h1 className="mt-4 text-[2.25rem] leading-[1.1] text-foreground sm:text-5xl">{title}</h1>
        {intro ? (
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">{intro}</p>
        ) : null}
      </div>
    </section>
  );
}
