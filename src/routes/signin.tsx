import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/portfolio/SiteLayout";
import { Reveal } from "@/components/portfolio/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { LogIn, CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";

interface SigninErrors {
  email?: string;
  password?: string;
}

const title = "Sign In — Jr. Innovation Challenge Portal";
const description =
  "Sign in to your participant, mentor, or educator portal for the Kingston Jr. Innovation Challenge.";

export const Route = createFileRoute("/signin")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/signin" }],
  }),
  component: SigninPage,
});

function SigninPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [errors, setErrors] = useState<SigninErrors>({});
  const [signedIn, setSignedIn] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: SigninErrors = {};
    if (!email.trim() || !email.includes("@")) {
      errs.email = "Please enter a valid email address";
    }
    if (!password.trim() || password.length < 4) {
      errs.password = "Password must be at least 4 characters";
    }
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSignedIn(true);
  };

  return (
    <SiteLayout>
      <section className="py-12 sm:py-20">
        <div className="container-page max-w-md">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              <LogIn className="size-3.5" aria-hidden="true" />
              Participant Portal
            </span>

            <h1 className="mt-4 font-display text-3xl font-normal tracking-tight text-foreground sm:text-4xl">
              Sign In
            </h1>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Access your team portal, workshop schedule, and submission dashboard.
            </p>

            {signedIn ? (
              <div className="mt-8 rounded-3xl border border-emerald-500/20 bg-emerald-500/10 p-6 text-center animate-in fade-in duration-300">
                <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-emerald-500 text-white">
                  <CheckCircle2 className="size-6" aria-hidden="true" />
                </div>
                <h2 className="mt-4 text-xl font-semibold text-foreground">Welcome Back!</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  You are signed in as <strong className="text-foreground">{email}</strong>.
                  (Frontend demo state).
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  <Button asChild size="sm" className="rounded-full">
                    <Link to="/challenge">View Challenge Hub</Link>
                  </Button>
                  <Button asChild size="sm" variant="outline" className="rounded-full">
                    <Link to="/resources">Resources</Link>
                  </Button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mt-8 space-y-5 rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8"
              >
                <div className="space-y-2">
                  <Label htmlFor="signin-email">Email Address</Label>
                  <Input
                    id="signin-email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="rounded-xl"
                  />
                  {errors.email ? (
                    <p className="flex items-center gap-1 text-xs text-destructive">
                      <AlertCircle className="size-3" aria-hidden="true" />
                      {errors.email}
                    </p>
                  ) : null}
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="signin-password">Password</Label>
                    <span className="text-xs text-muted-foreground hover:underline cursor-pointer">
                      Forgot password?
                    </span>
                  </div>
                  <Input
                    id="signin-password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="rounded-xl"
                  />
                  {errors.password ? (
                    <p className="flex items-center gap-1 text-xs text-destructive">
                      <AlertCircle className="size-3" aria-hidden="true" />
                      {errors.password}
                    </p>
                  ) : null}
                </div>

                <div className="flex items-center justify-between pt-1">
                  <label className="flex items-center gap-2 cursor-pointer text-xs text-muted-foreground">
                    <input
                      type="checkbox"
                      checked={remember}
                      onChange={(e) => setRemember(e.target.checked)}
                      className="size-4 rounded border-input text-primary focus:ring-primary"
                    />
                    <span>Remember me on this device</span>
                  </label>
                </div>

                <Button type="submit" size="lg" className="w-full min-h-12 rounded-full">
                  Sign In to Dashboard
                  <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                </Button>

                <p className="text-center text-xs text-muted-foreground">
                  Don't have an account yet?{" "}
                  <Link
                    to="/signup"
                    className="font-medium text-foreground underline hover:text-primary"
                  >
                    Register here
                  </Link>
                </p>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
