import Link from "next/link";

export function CTA() {
  return (
    <section className="relative overflow-hidden border-b border-border py-24">
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern [background-size:48px_48px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black,transparent)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full bg-gradient-to-b from-purple-600/15 via-transparent to-pink-500/10" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
          <span className="text-gradient">Build something</span>
          <br />
          <span className="text-gradient-brand">people remember.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
          Join thousands of teams shipping pixel-perfect, accessible interfaces
          with Hrax. No CC required.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Link
            href="#"
            className="inline-flex h-11 items-center gap-2 rounded-md bg-foreground px-6 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Get started for free
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
            className="inline-flex h-11 items-center rounded-md border border-border bg-muted/40 px-6 text-sm font-medium transition-colors hover:bg-muted"
          >
            Read the docs
          </Link>
        </div>
      </div>
    </section>
  );
}
