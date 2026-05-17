import Link from "next/link";

const tiers = [
  {
    name: "Hobby",
    price: "Free",
    desc: "For personal projects and weekend hacks.",
    features: [
      "All open-source components",
      "Community templates",
      "MIT license",
      "Discord access",
    ],
    cta: "Start free",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$19",
    period: "/mo",
    desc: "For freelancers and small studios.",
    features: [
      "Everything in Hobby",
      "Premium bento blocks",
      "Figma library access",
      "Priority email support",
      "Commercial license",
    ],
    cta: "Upgrade to Pro",
    highlight: true,
  },
  {
    name: "Team",
    price: "$79",
    period: "/mo",
    desc: "For teams shipping production apps.",
    features: [
      "Everything in Pro",
      "Up to 10 seats",
      "SSO & audit logs",
      "Private template registry",
      "SLA-backed support",
    ],
    cta: "Talk to sales",
    highlight: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="border-b border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-3 py-1 text-xs text-muted-foreground">
            Pricing
          </div>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            <span className="text-gradient">Simple, fair pricing.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Start free. Upgrade when you&apos;re shipping real revenue.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`card relative p-6 ${
                tier.highlight ? "border-foreground/30 glow" : ""
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-3 right-6 rounded-full bg-foreground px-2.5 py-0.5 text-[10px] font-medium text-background">
                  Most popular
                </div>
              )}
              <div className="text-sm font-medium">{tier.name}</div>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-3xl font-semibold">{tier.price}</span>
                {tier.period && (
                  <span className="text-sm text-muted-foreground">
                    {tier.period}
                  </span>
                )}
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{tier.desc}</p>

              <Link
                href="#"
                className={`mt-5 inline-flex h-9 w-full items-center justify-center rounded-md text-sm font-medium transition-opacity ${
                  tier.highlight
                    ? "bg-foreground text-background hover:opacity-90"
                    : "border border-border bg-muted/40 text-foreground hover:bg-muted"
                }`}
              >
                {tier.cta}
              </Link>

              <ul className="mt-6 space-y-2.5">
                {tier.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2.5 text-sm text-muted-foreground"
                  >
                    <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5 text-foreground">
                      <path
                        d="M3.5 8L7 11.5L13 4.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
