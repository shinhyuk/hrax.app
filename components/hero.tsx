import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern [background-size:48px_48px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-radial-fade" />

      <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-20 sm:pt-28">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <Link
            href="#changelog"
            className="group mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-3 py-1 text-xs text-muted-foreground backdrop-blur transition-colors hover:border-border hover:text-foreground"
          >
            <span className="rounded-full bg-foreground/10 px-2 py-0.5 text-[10px] font-medium text-foreground">
              New
            </span>
            v2.1 — Bento blocks &amp; CLI presets
            <svg viewBox="0 0 16 16" fill="none" className="h-3 w-3 transition-transform group-hover:translate-x-0.5">
              <path
                d="M6 4L10 8L6 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

          <h1 className="text-balance text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            <span className="text-gradient">Ship beautiful</span>
            <br />
            <span className="text-gradient-brand">interfaces, faster.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-balance text-base text-muted-foreground sm:text-lg">
            Hrax is the design system, component library, and CLI that turns
            production-grade interfaces into a 15-minute setup. Copy, paste,
            ship.
          </p>

          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
            <Link
              href="#"
              className="inline-flex h-10 items-center gap-1.5 rounded-md bg-foreground px-5 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              Start building
              <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5">
                <path
                  d="M6 4L10 8L6 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <Link
              href="#"
              className="inline-flex h-10 items-center gap-2 rounded-md border border-border bg-muted/40 px-4 font-mono text-xs text-muted-foreground transition-colors hover:border-border hover:text-foreground"
            >
              <span className="text-foreground/60">$</span>
              <span>npx hrax@latest init</span>
              <span className="ml-2 inline-flex h-5 w-5 items-center justify-center rounded border border-border">
                <svg viewBox="0 0 16 16" fill="none" className="h-3 w-3">
                  <path
                    d="M5 5V3.5C5 3.22 5.22 3 5.5 3H12.5C12.78 3 13 3.22 13 3.5V10.5C13 10.78 12.78 11 12.5 11H11"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                  <rect x="3" y="5" width="8" height="8" rx="0.5" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              </span>
            </Link>
          </div>

          <div className="mt-10 flex items-center gap-3 text-xs text-muted-foreground">
            <div className="flex -space-x-2">
              {["#a78bfa", "#f472b6", "#fb923c", "#34d399"].map((c, i) => (
                <div
                  key={i}
                  className="h-6 w-6 rounded-full border-2 border-background"
                  style={{ background: c }}
                />
              ))}
            </div>
            <span>Trusted by 12,400+ developers</span>
            <span className="text-border">•</span>
            <div className="flex items-center gap-1">
              <svg viewBox="0 0 16 16" fill="currentColor" className="h-3 w-3 text-yellow-400">
                <path d="M8 1l2.163 4.279 4.837.677-3.5 3.318.825 4.726L8 11.792l-4.325 2.208.825-4.726L1 5.956l4.837-.677z" />
              </svg>
              <span className="text-foreground">28.4k</span>
              <span>on GitHub</span>
            </div>
          </div>
        </div>

        <HeroPreview />
      </div>
    </section>
  );
}

function HeroPreview() {
  return (
    <div className="relative mx-auto mt-20 max-w-5xl">
      <div className="absolute -inset-x-8 -top-8 -z-10 h-40 bg-gradient-to-b from-purple-500/20 via-pink-500/10 to-transparent blur-2xl" />
      <div className="overflow-hidden rounded-xl border border-border bg-muted/50 shadow-2xl backdrop-blur">
        <div className="flex items-center gap-2 border-b border-border bg-background/50 px-4 py-2.5">
          <div className="flex gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
            <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
            <div className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
          </div>
          <div className="mx-auto flex items-center gap-1.5 rounded-md border border-border bg-muted px-3 py-1 text-xs text-muted-foreground">
            <svg viewBox="0 0 16 16" fill="none" className="h-3 w-3">
              <path
                d="M11 6.5V5.5C11 4.12 9.88 3 8.5 3H7.5C6.12 3 5 4.12 5 5.5V6.5"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <rect x="4" y="6.5" width="8" height="6" rx="1" stroke="currentColor" strokeWidth="1.2" />
            </svg>
            hrax.app/dashboard
          </div>
          <div className="w-12" />
        </div>

        <div className="grid grid-cols-12 gap-px bg-border">
          <div className="col-span-3 bg-background p-4">
            <div className="space-y-1">
              {["Overview", "Analytics", "Projects", "Team", "Settings"].map((item, i) => (
                <div
                  key={item}
                  className={`flex items-center gap-2 rounded-md px-2.5 py-1.5 text-xs ${
                    i === 0
                      ? "bg-muted text-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-current opacity-50" />
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-lg border border-border bg-muted/50 p-3">
              <div className="text-[10px] font-medium text-muted-foreground">
                STORAGE
              </div>
              <div className="mt-1 text-xs">42.1 GB / 100 GB</div>
              <div className="mt-2 h-1 overflow-hidden rounded-full bg-border">
                <div className="h-full w-2/5 bg-gradient-to-r from-purple-400 to-pink-400" />
              </div>
            </div>
          </div>

          <div className="col-span-9 bg-background p-5">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[11px] text-muted-foreground">Welcome back</div>
                <div className="text-lg font-semibold">Overview</div>
              </div>
              <div className="flex gap-1.5">
                <div className="h-7 rounded-md border border-border px-2.5 text-xs leading-7 text-muted-foreground">
                  Last 7d
                </div>
                <div className="h-7 rounded-md bg-foreground px-2.5 text-xs leading-7 text-background">
                  + New
                </div>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-3">
              {[
                { label: "Revenue", value: "$48,219", delta: "+12.4%" },
                { label: "Active users", value: "2,847", delta: "+8.1%" },
                { label: "Conversion", value: "4.32%", delta: "+1.2%" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg border border-border bg-muted/30 p-3"
                >
                  <div className="text-[10px] text-muted-foreground">
                    {stat.label}
                  </div>
                  <div className="mt-1 text-base font-semibold">{stat.value}</div>
                  <div className="mt-1 text-[10px] text-emerald-400">{stat.delta}</div>
                </div>
              ))}
            </div>

            <div className="mt-3 rounded-lg border border-border bg-muted/30 p-3">
              <div className="mb-3 flex items-center justify-between text-[10px] text-muted-foreground">
                <span>Activity (last 30 days)</span>
                <span>+18% vs prev period</span>
              </div>
              <div className="flex h-20 items-end gap-1">
                {Array.from({ length: 30 }).map((_, i) => {
                  const heights = [
                    32, 45, 38, 52, 41, 58, 64, 49, 67, 72, 58, 81, 75, 89, 70,
                    93, 85, 78, 92, 88, 95, 82, 98, 90, 86, 100, 92, 88, 96, 94,
                  ];
                  return (
                    <div
                      key={i}
                      className="flex-1 rounded-sm bg-gradient-to-t from-purple-500/30 to-pink-400/80"
                      style={{ height: `${heights[i]}%` }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
