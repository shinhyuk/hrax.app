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
      "전사 임직원 HR 코파일럿 출시",
      "역량 기반 성장 추천 엔진 가동",
      "조직 인사이트 대시보드 정식 오픈",
      "그룹사 표준 모델 공유",
    ],
  },
  {
    period: "2027",
    title: "Phase 3 · 고도화",
    status: "예정",
    statusTone: "next",
    items: [
      "에이전트 기반 HR 자동화",
      "글로벌 법인 다국어 확장",
      "AI 윤리·설명가능성 인증",
      "그룹 HR Operating System 통합",
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
