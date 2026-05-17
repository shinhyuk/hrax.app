const phases = [
  {
    period: "2025",
    title: "Phase 1 · 기반 구축",
    status: "완료",
    statusTone: "done",
    items: [
      "HR 데이터 통합 플랫폼 구축",
      "AI 채용 분석 PoC 완료",
      "코파일럿 사내 베타 오픈",
      "AX 거버넌스 체계 수립",
    ],
  },
  {
    period: "2026",
    title: "Phase 2 · 확산",
    status: "진행 중",
    statusTone: "active",
    items: [
      "경영지원실 전 임직원 AX 교육 프로그램 운영",
      "조직 AI 리터러시 진단 및 향상 로드맵 수립",
      "직무별 AX 챔피언 양성 및 사내 사례 공유",
      "AI 활용 가이드라인·실무 플레이북 배포",
    ],
  },
  {
    period: "2027",
    title: "Phase 3 · 고도화",
    status: "예정",
    statusTone: "next",
    items: [
      "반복 업무 자동화로 운영 효율 30%+ 개선",
      "임직원이 코어 업무에 집중하는 환경 조성",
      "AX 성과 측정 체계 및 KPI 정착",
      "지속 가능한 AX 운영 모델 확립",
    ],
  },
];

export function Pricing() {
  return (
    <section id="journey" className="border-b border-border bg-surface py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white px-3 py-1 text-xs font-medium text-brand-600">
            로드맵
          </div>
          <h2 className="mt-4 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            <span className="text-gradient-navy">단계적으로,</span>
            <br />
            <span className="text-gradient-brand">그러나 멈추지 않고.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            3개년 로드맵을 따라 사내 적용 → 전사 확산 → 그룹사 표준화로 나아갑니다.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {phases.map((phase) => (
            <div
              key={phase.period}
              className={`relative rounded-2xl border bg-white p-6 ${
                phase.statusTone === "active"
                  ? "border-brand-600 shadow-xl glow-brand"
                  : "border-border"
              }`}
            >
              {phase.statusTone === "active" && (
                <div className="absolute -top-3 right-6 rounded-full bg-brand-600 px-3 py-0.5 text-[10px] font-semibold text-white">
                  진행 중
                </div>
              )}
              <div className="flex items-center justify-between">
                <div className="font-mono text-xs font-semibold tracking-wider text-brand-600">
                  {phase.period}
                </div>
                <StatusBadge tone={phase.statusTone} label={phase.status} />
              </div>
              <h3 className="mt-3 text-xl font-bold tracking-tight text-foreground">
                {phase.title}
              </h3>

              <ul className="mt-6 space-y-3">
                {phase.items.map((it) => (
                  <li
                    key={it}
                    className="flex items-start gap-2.5 text-sm text-muted-foreground"
                  >
                    <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-600" />
                    <span>{it}</span>
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

function StatusBadge({ tone, label }: { tone: string; label: string }) {
  const tones: Record<string, string> = {
    done: "bg-muted text-muted-foreground border-border",
    active: "bg-brand-50 text-brand-600 border-brand-100",
    next: "bg-white text-muted-foreground border-border",
  };
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-[10px] font-medium ${tones[tone]}`}
    >
      {tone === "active" && (
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-600" />
      )}
      {label}
    </span>
  );
}
