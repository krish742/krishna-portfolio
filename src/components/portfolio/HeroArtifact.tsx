/**
 * Hand-authored hero visual: abstract wireframe fragments with annotation marks.
 * Pure SVG using design tokens — no imagery, no stock illustration.
 */
export function HeroArtifact({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 420"
      role="img"
      aria-label="Abstract wireframe fragments with annotation marks, referencing an interface being sketched and reviewed"
      className={className}
      fill="none"
    >
      <defs>
        <pattern id="hero-dots" width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" className="fill-foreground/10" />
        </pattern>
      </defs>

      <rect x="0" y="0" width="480" height="420" fill="url(#hero-dots)" />

      {/* main interface frame */}
      <g className="stroke-foreground/25" strokeWidth="1.25">
        <rect x="46" y="52" width="286" height="230" rx="14" className="fill-card" />
        <line x1="46" y1="86" x2="332" y2="86" />
      </g>
      <g className="fill-foreground/20">
        <circle cx="64" cy="69" r="3.5" />
        <circle cx="76" cy="69" r="3.5" />
        <circle cx="88" cy="69" r="3.5" />
      </g>

      {/* content blocks */}
      <g className="fill-secondary">
        <rect x="66" y="106" width="112" height="72" rx="8" />
        <rect x="66" y="192" width="76" height="9" rx="4.5" />
        <rect x="66" y="210" width="132" height="9" rx="4.5" />
        <rect x="66" y="228" width="98" height="9" rx="4.5" />
      </g>
      <g className="fill-accent">
        <rect x="196" y="106" width="116" height="34" rx="8" />
        <rect x="196" y="150" width="116" height="28" rx="8" />
      </g>
      <rect x="196" y="196" width="86" height="30" rx="15" className="fill-primary/85" />

      {/* offset fragment card */}
      <g>
        <rect
          x="292"
          y="216"
          width="150"
          height="112"
          rx="14"
          className="fill-card stroke-foreground/20"
          strokeWidth="1.25"
        />
        <g className="fill-secondary">
          <rect x="310" y="238" width="60" height="8" rx="4" />
          <rect x="310" y="254" width="104" height="8" rx="4" />
          <rect x="310" y="270" width="82" height="8" rx="4" />
        </g>
        <rect x="310" y="292" width="52" height="18" rx="9" className="fill-teal/80" />
      </g>

      {/* research sticky note */}
      <g transform="rotate(-6 96 318)">
        <rect x="46" y="296" width="112" height="88" rx="4" className="fill-beige" />
        <g className="stroke-foreground/25" strokeWidth="1.25" strokeLinecap="round">
          <line x1="60" y1="320" x2="140" y2="320" />
          <line x1="60" y1="336" x2="128" y2="336" />
          <line x1="60" y1="352" x2="136" y2="352" />
        </g>
      </g>

      {/* annotation marks */}
      <g
        className="stroke-teal"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="4 5"
        opacity="0.75"
      >
        <path d="M352 120c34 6 46 34 34 60" />
      </g>
      <circle cx="352" cy="120" r="4" className="fill-teal" />
      <g className="stroke-primary" strokeWidth="1.5" strokeLinecap="round" opacity="0.8">
        <path d="M186 268c26 12 62 12 96 2" />
      </g>

      {/* cursor motif */}
      <g transform="translate(300 178)">
        <path
          d="M0 0l7 20 3.5-8.5L19 8z"
          className="fill-foreground/80 stroke-background"
          strokeWidth="1"
        />
      </g>
    </svg>
  );
}
