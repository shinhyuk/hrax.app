export function Bento() {
  return (
    <section id="features" className="border-b border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-3 py-1 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Designed for speed
          </div>
          <h2 className="mt-5 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            <span className="text-gradient">Everything you need.</span>
            <br />
            <span className="text-muted-foreground">Nothing you don&apos;t.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            An opinionated toolkit that scales from your weekend project to your
            Series C — without the rewrite.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-3 md:grid-cols-6 md:grid-rows-2">
          <FeatureCard className="md:col-span-4 md:row-span-1">
            <ComponentsVisual />
            <FeatureText
              tag="Components"
              title="60+ accessible primitives, ready to copy."
              body="Buttons, dialogs, command menus, data tables — all WAI-ARIA compliant, keyboard-first, and themable."
            />
          </FeatureCard>

          <FeatureCard className="md:col-span-2 md:row-span-1">
            <ThemingVisual />
            <FeatureText
              tag="Theming"
              title="One CSS variable. Reskin everything."
              body="Tokens that map across light, dark, and your brand colors."
            />
          </FeatureCard>

          <FeatureCard className="md:col-span-2 md:row-span-1">
            <CLIVisual />
            <FeatureText
              tag="CLI"
              title="Init in under 60 seconds."
              body="Detects your stack and wires up Tailwind, fonts, and presets."
            />
          </FeatureCard>

          <FeatureCard className="md:col-span-4 md:row-span-1">
            <AnalyticsVisual />
            <FeatureText
              tag="Insights"
              title="Performance telemetry, built in."
              body="Track CLS, LCP, and component-level render times per route. Ship faster without flying blind."
            />
          </FeatureCard>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`card group relative flex flex-col overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
}

function FeatureText({
  tag,
  title,
  body,
}: {
  tag: string;
  title: string;
  body: string;
}) {
  return (
    <div className="relative z-10 p-6">
      <div className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
        {tag}
      </div>
      <h3 className="mt-2 text-lg font-semibold tracking-tight text-foreground">
        {title}
      </h3>
      <p className="mt-2 text-sm text-muted-foreground">{body}</p>
    </div>
  );
}

function ComponentsVisual() {
  return (
    <div className="relative h-48 overflow-hidden border-b border-border bg-muted/20">
      <div className="dotted-bg absolute inset-0 opacity-50" />
      <div className="relative flex h-full items-center justify-center gap-3 p-6">
        <div className="flex flex-col gap-2">
          <div className="inline-flex h-8 items-center rounded-md bg-foreground px-3 text-xs font-medium text-background">
            Primary
          </div>
          <div className="inline-flex h-8 items-center rounded-md border border-border bg-muted px-3 text-xs">
            Secondary
          </div>
          <div className="inline-flex h-8 items-center rounded-md px-3 text-xs text-muted-foreground">
            Ghost
          </div>
        </div>
        <div className="flex w-48 flex-col gap-1.5 rounded-lg border border-border bg-background p-2 shadow-xl">
          <div className="rounded-md px-2 py-1.5 text-xs">
            <span className="text-muted-foreground">›</span> Search docs…
          </div>
          <div className="rounded-md bg-muted px-2 py-1.5 text-xs">
            New project
            <span className="float-right font-mono text-[10px] text-muted-foreground">
              ⌘N
            </span>
          </div>
          <div className="rounded-md px-2 py-1.5 text-xs text-muted-foreground">
            Invite team
            <span className="float-right font-mono text-[10px]">⌘I</span>
          </div>
        </div>
        <div className="flex w-32 flex-col gap-2">
          <div className="rounded-md border border-border bg-muted p-2">
            <div className="text-[10px] text-muted-foreground">Email</div>
            <div className="text-xs">jane@hrax.app</div>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <div className="relative h-4 w-7 rounded-full bg-foreground">
              <div className="absolute right-0.5 top-0.5 h-3 w-3 rounded-full bg-background" />
            </div>
            <span className="text-muted-foreground">Notifications</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ThemingVisual() {
  const swatches = [
    "#a78bfa",
    "#f472b6",
    "#fb923c",
    "#34d399",
    "#60a5fa",
    "#facc15",
    "#f87171",
    "#fafafa",
  ];
  return (
    <div className="relative h-48 overflow-hidden border-b border-border bg-muted/20">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="grid grid-cols-4 gap-2">
          {swatches.map((c, i) => (
            <div
              key={c}
              className="h-10 w-10 rounded-lg ring-1 ring-white/10 transition-transform group-hover:scale-105"
              style={{
                background: c,
                transitionDelay: `${i * 30}ms`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function CLIVisual() {
  return (
    <div className="relative h-48 overflow-hidden border-b border-border bg-muted/20">
      <div className="absolute inset-0 p-4 font-mono text-[11px] leading-relaxed">
        <div className="text-muted-foreground">
          <span className="text-emerald-400">$</span> npx hrax init
        </div>
        <div className="mt-1 text-muted-foreground">
          <span className="text-purple-400">✓</span> Detected Next.js 14
        </div>
        <div className="mt-1 text-muted-foreground">
          <span className="text-purple-400">✓</span> Installed Tailwind
        </div>
        <div className="mt-1 text-muted-foreground">
          <span className="text-purple-400">✓</span> Added theme tokens
        </div>
        <div className="mt-1 text-muted-foreground">
          <span className="text-pink-400 animate-pulse">▶</span> Generating
          components…
        </div>
      </div>
    </div>
  );
}

function AnalyticsVisual() {
  return (
    <div className="relative h-48 overflow-hidden border-b border-border bg-muted/20">
      <div className="absolute inset-0 flex items-end gap-1 p-6">
        {Array.from({ length: 48 }).map((_, i) => {
          const h = 20 + Math.sin(i * 0.45) * 30 + (i % 7) * 4;
          return (
            <div
              key={i}
              className="flex-1 rounded-sm bg-gradient-to-t from-purple-500/40 to-pink-400/90 transition-all"
              style={{ height: `${Math.min(95, h)}%` }}
            />
          );
        })}
      </div>
      <div className="absolute right-4 top-4 rounded-md border border-border bg-background/80 px-2.5 py-1.5 text-[10px] backdrop-blur">
        <div className="text-muted-foreground">LCP p75</div>
        <div className="mt-0.5 font-semibold">1.24s</div>
      </div>
    </div>
  );
}
