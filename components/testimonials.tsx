const testimonials = [
  {
    quote:
      "Hrax cut our dashboard rebuild from a 6-week project down to a long weekend. The bento blocks are unreasonably good.",
    name: "Mia Tanaka",
    role: "Eng Lead, Northwind",
    color: "#a78bfa",
  },
  {
    quote:
      "Finally a system where I don't fight the styles. Tokens just work, components just look right.",
    name: "Daniel Park",
    role: "Founder, Plotter",
    color: "#f472b6",
  },
  {
    quote:
      "Our design and engineering teams ship from the same source of truth now. Productivity is night and day.",
    name: "Sofia Alvarez",
    role: "Head of Design, Vertex",
    color: "#fb923c",
  },
  {
    quote:
      "Accessibility was the killer feature. Keyboard nav, focus rings, screen reader labels — all there.",
    name: "Marcus Lee",
    role: "Staff Engineer, Briar",
    color: "#34d399",
  },
  {
    quote:
      "We replaced three internal libraries with Hrax. Saved 40k LOC and our hiring story got way easier.",
    name: "Priya Raman",
    role: "VP Eng, Halcyon",
    color: "#60a5fa",
  },
  {
    quote:
      "The CLI is what every component library has been missing. Copy/paste with context.",
    name: "Otto Brandt",
    role: "Indie hacker",
    color: "#facc15",
  },
];

export function Testimonials() {
  return (
    <section className="border-b border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            <span className="text-gradient">Loved by teams who</span>
            <br />
            <span className="text-muted-foreground">obsess over the details.</span>
          </h2>
        </div>

        <div className="mt-14 columns-1 gap-4 md:columns-2 lg:columns-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="card mb-4 break-inside-avoid p-5"
            >
              <blockquote className="text-sm leading-relaxed text-foreground/90">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4 flex items-center gap-3">
                <div
                  className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold text-background"
                  style={{ background: t.color }}
                >
                  {t.name
                    .split(" ")
                    .map((s) => s[0])
                    .join("")}
                </div>
                <div>
                  <div className="text-sm font-medium">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
