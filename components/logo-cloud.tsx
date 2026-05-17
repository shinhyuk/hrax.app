export function LogoCloud() {
  const logos = [
    "Acmecorp",
    "Linear",
    "Cursor",
    "Vercel",
    "Supabase",
    "Resend",
    "Raycast",
    "Stripe",
  ];

  return (
    <section className="border-b border-border py-16">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Powering teams at fast-moving companies
        </p>
        <div className="relative mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <div className="flex w-max animate-marquee gap-16">
            {[...logos, ...logos].map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="flex h-8 items-center font-mono text-lg font-medium tracking-tight text-muted-foreground/70 transition-colors hover:text-foreground"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
