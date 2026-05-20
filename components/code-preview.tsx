const principles = [
  {
    no: "01",
    t: "사람 중심 (Human-Centered)",
    d: "AI 는 의사결정을 돕고, 최종 판단은 항상 사람이 합니다.",
  },
  {
    no: "02",
    t: "공정성 (Fairness)",
    d: "모델의 편향을 지속적으로 검증하고 공개합니다.",
  },
  {
    no: "03",
    t: "프라이버시 (Privacy by Design)",
    d: "개인 데이터는 최소 수집·최소 노출 원칙을 지킵니다.",
  },
  {
    no: "04",
    t: "투명성 (Explainability)",
    d: "왜 그렇게 추천했는지 임직원이 이해할 수 있게 설명합니다.",
  },
];

export function CodePreview() {
  return (
    <section id="principles" className="border-b border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-white/5 px-3 py-1 text-xs font-medium text-accent-light backdrop-blur">
            우리의 원칙
          </div>
          <h2 className="font-display mt-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            <span className="text-gradient">기술보다</span>{" "}
            <span className="text-gradient-brand">사람이 먼저입니다.</span>
          </h2>
          <p className="mt-3 max-w-xl text-sm text-muted-foreground sm:text-base">
            HR AX 는 사람을 대체하는 도구가 아닌, 판단을 더 깊고 빠르게 만드는
            동반자입니다. 우리는 네 가지 원칙으로 일합니다.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {principles.map((p) => (
            <div key={p.no} className="glass-card p-6">
              <div className="font-mono text-xs font-semibold tracking-wider text-accent">
                {p.no}
              </div>
              <div className="font-display mt-3 text-base font-bold text-foreground">
                {p.t}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {p.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
