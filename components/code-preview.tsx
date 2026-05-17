export function CodePreview() {
  return (
    <section className="border-b border-border bg-surface py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white px-3 py-1 text-xs font-medium text-brand-600">
              우리의 원칙
            </div>
            <h2 className="mt-4 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
              <span className="text-gradient-navy">기술보다</span>
              <br />
              <span className="text-gradient-brand">사람이 먼저입니다.</span>
            </h2>
            <p className="mt-4 max-w-md text-muted-foreground">
              HR AX 는 사람을 대체하는 도구가 아닌, 사람의 판단을 더 깊고 빠르게
              만드는 동반자입니다. 우리는 네 가지 원칙으로 일합니다.
            </p>
            <ul className="mt-7 space-y-4">
              {[
                {
                  t: "사람 중심 (Human-Centered)",
                  d: "AI 는 의사결정을 돕고, 최종 판단은 항상 사람이 합니다.",
                },
                {
                  t: "공정성 (Fairness)",
                  d: "모델의 편향을 지속적으로 검증하고 공개합니다.",
                },
                {
                  t: "프라이버시 (Privacy by Design)",
                  d: "개인 데이터는 최소 수집·최소 노출 원칙을 지킵니다.",
                },
                {
                  t: "투명성 (Explainability)",
                  d: "왜 그렇게 추천했는지 임직원이 이해할 수 있게 설명합니다.",
                },
              ].map((p) => (
                <li key={p.t} className="flex items-start gap-3">
                  <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand-600 text-white">
                    <svg viewBox="0 0 16 16" fill="none" className="h-3 w-3">
                      <path
                        d="M3.5 8L7 11.5L13 4.5"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">{p.t}</div>
                    <div className="mt-0.5 text-sm text-muted-foreground">{p.d}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-br from-brand-100 via-brand-50 to-transparent blur-2xl" />
            <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-xl">
              <div className="flex items-center justify-between border-b border-border bg-surface px-4 py-3">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-md bg-brand-600 text-white">
                    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                      <path d="M12 2L2 7l10 5 10-5-10-5z" fill="currentColor" />
                      <path
                        d="M2 17l10 5 10-5M2 12l10 5 10-5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-foreground">HR 코파일럿</div>
                    <div className="text-[10px] text-muted-foreground">
                      Powered by Hyundai AutoEver AX
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-accent">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  활성
                </div>
              </div>

              <div className="space-y-3 p-5">
                <div className="ml-auto max-w-[85%]">
                  <div className="rounded-2xl rounded-tr-sm bg-brand-600 px-4 py-2.5 text-sm text-white">
                    이번 분기 우리 팀 핵심 인재 유지율 보여줘
                  </div>
                  <div className="mt-1 text-right text-[10px] text-muted-foreground">
                    김지훈 책임 · 14:32
                  </div>
                </div>

                <div className="max-w-[90%]">
                  <div className="rounded-2xl rounded-tl-sm border border-border bg-surface px-4 py-3 text-sm text-foreground">
                    <div className="text-xs font-semibold text-brand-600">
                      HR 코파일럿
                    </div>
                    <div className="mt-1.5 text-foreground">
                      현재 팀 핵심 인재 유지율은{" "}
                      <span className="font-bold text-brand-600">94.2%</span> 입니다.
                      지난 분기 대비 +3.1%p 개선되었어요.
                    </div>
                    <div className="mt-3 rounded-lg border border-border bg-white p-3">
                      <div className="mb-2 text-[10px] font-semibold text-muted-foreground">
                        주목할 시그널
                      </div>
                      <div className="space-y-1.5 text-xs">
                        {[
                          { icon: "✓", color: "text-accent", text: "1:1 면담 빈도 +28%" },
                          { icon: "✓", color: "text-accent", text: "내부 이동 신청 0건" },
                          { icon: "!", color: "text-amber-500", text: "박OO 책임 번아웃 위험" },
                        ].map((s) => (
                          <div key={s.text} className="flex items-center gap-2">
                            <span className={`font-bold ${s.color}`}>{s.icon}</span>
                            <span className="text-foreground">{s.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mt-1 text-[10px] text-muted-foreground">
                    HR 코파일럿 · 14:32
                  </div>
                </div>

                <div className="flex items-center gap-2 rounded-xl border border-border bg-white px-3 py-2">
                  <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4 text-muted-foreground">
                    <path
                      d="M2 8a6 6 0 1112 0A6 6 0 012 8zM8 4v4l3 2"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                  <span className="flex-1 text-xs text-muted-foreground">
                    무엇을 도와드릴까요?
                  </span>
                  <span className="rounded-md bg-brand-600 px-2 py-1 text-[10px] font-medium text-white">
                    전송
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
