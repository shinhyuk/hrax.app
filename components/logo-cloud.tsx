export function LogoCloud() {
  const partners = [
    "현대자동차",
    "기아",
    "현대모비스",
    "현대글로비스",
    "현대제철",
    "현대건설",
    "현대로템",
    "현대위아",
  ];

  return (
    <section className="border-b border-border bg-surface py-16">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center text-xs font-medium uppercase tracking-[0.25em] text-brand-600">
          현대자동차그룹과 함께 그리는 HR 의 미래
        </p>
        <div className="relative mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <div className="flex w-max animate-marquee gap-16">
            {[...partners, ...partners].map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="flex h-10 items-center text-xl font-semibold tracking-tight text-muted-foreground transition-colors hover:text-brand-600"
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
