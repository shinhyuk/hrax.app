import Link from "next/link";

export function Hero() {
  return (
    <section id="vision" className="relative overflow-hidden border-b border-border bg-gradient-to-b from-brand-50/40 to-white">
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern [background-size:48px_48px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-radial-fade" />

      <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-20 sm:pt-28">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white px-3.5 py-1.5 text-xs text-brand-600 shadow-sm">
            <span className="rounded-full bg-brand-600 px-2 py-0.5 text-[10px] font-semibold text-white">
              TFT
            </span>
            현대오토에버 HR AX Drive Task Force
          </div>

          <h1 className="text-balance text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl md:text-7xl">
            <span className="text-gradient-navy">사람 중심의</span>
            <br />
            <span className="text-gradient-brand">지능형 HR,</span>
            <br />
            <span className="text-gradient-navy">우리가 만듭니다.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-balance text-base text-muted-foreground sm:text-lg">
            HR AX Drive TFT 는 AI Transformation 을 통해 채용·육성·평가·조직문화의
            전 영역에서 임직원의 일하는 방식을 새롭게 정의합니다. 데이터와 AI 가
            만드는, 더 공정하고 더 빠른 인사 경험.
          </p>

          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
            <Link
              href="#initiatives"
              className="inline-flex h-11 items-center gap-1.5 rounded-md bg-brand-600 px-6 text-sm font-medium text-white transition-colors hover:bg-brand-700"
            >
              추진 과제 살펴보기
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
              href="#journey"
              className="inline-flex h-11 items-center gap-2 rounded-md border border-border bg-white px-5 text-sm font-medium text-foreground transition-colors hover:border-brand-200 hover:text-brand-600"
            >
              2026 로드맵 보기
            </Link>
          </div>

          <div className="mt-12 grid w-full max-w-2xl grid-cols-3 gap-px overflow-hidden rounded-xl border border-border bg-border">
            {[
              { value: "12+", label: "추진 과제" },
              { value: "4,300+", label: "참여 임직원" },
              { value: "2026", label: "완성 목표" },
            ].map((s) => (
              <div key={s.label} className="bg-white px-6 py-5">
                <div className="text-2xl font-bold text-brand-600">{s.value}</div>
                <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
              </div>
            ))}
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
      <div className="absolute -inset-x-8 -top-8 -z-10 h-40 bg-gradient-to-b from-brand-100/60 via-brand-50/40 to-transparent blur-2xl" />
      <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-2xl glow-brand">
        <div className="flex items-center gap-2 border-b border-border bg-surface px-4 py-3">
          <div className="flex gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <div className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <div className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          </div>
          <div className="mx-auto flex items-center gap-1.5 rounded-md border border-border bg-white px-3 py-1 text-xs text-muted-foreground">
            <svg viewBox="0 0 16 16" fill="none" className="h-3 w-3">
              <rect x="3" y="6.5" width="10" height="7" rx="1" stroke="currentColor" strokeWidth="1.2" />
              <path d="M5.5 6.5V4.5a2.5 2.5 0 015 0v2" stroke="currentColor" strokeWidth="1.2" />
            </svg>
            ax.hyundai-autoever.com / hr-cockpit
          </div>
          <div className="w-12" />
        </div>

        <div className="grid grid-cols-12 gap-px bg-border">
          <div className="col-span-3 bg-white p-4">
            <div className="mb-3 rounded-lg bg-brand-50 p-3">
              <div className="text-[10px] font-medium text-brand-600">로그인</div>
              <div className="mt-1 text-xs font-semibold text-foreground">김지훈 책임</div>
              <div className="text-[10px] text-muted-foreground">HR전략팀</div>
            </div>
            <div className="space-y-1">
              {[
                { label: "마이 코파일럿", active: true },
                { label: "성장 경로" },
                { label: "성과 리뷰" },
                { label: "조직 인사이트" },
                { label: "온보딩 허브" },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`flex items-center gap-2 rounded-md px-2.5 py-1.5 text-xs ${
                    item.active
                      ? "bg-brand-600 font-medium text-white"
                      : "text-muted-foreground hover:bg-surface"
                  }`}
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-current opacity-60" />
                  {item.label}
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-9 bg-surface p-5">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[11px] text-muted-foreground">HR AX Cockpit</div>
                <div className="text-lg font-bold text-foreground">2026 Q2 인사 인사이트</div>
              </div>
              <div className="flex gap-1.5">
                <div className="h-7 rounded-md border border-border bg-white px-2.5 text-xs leading-7 text-muted-foreground">
                  분기별
                </div>
                <div className="h-7 rounded-md bg-brand-600 px-2.5 text-xs font-medium leading-7 text-white">
                  + 리포트
                </div>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-3">
              {[
                { label: "AI 채용 자동화율", value: "82%", delta: "+14%p" },
                { label: "온보딩 만족도", value: "4.7 / 5", delta: "+0.4" },
                { label: "이직 리스크 감소", value: "−23%", delta: "YoY" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-border bg-white p-3"
                >
                  <div className="text-[10px] text-muted-foreground">{stat.label}</div>
                  <div className="mt-1 text-base font-bold text-brand-600">{stat.value}</div>
                  <div className="mt-1 text-[10px] font-medium text-accent">{stat.delta}</div>
                </div>
              ))}
            </div>

            <div className="mt-3 rounded-xl border border-border bg-white p-3">
              <div className="mb-3 flex items-center justify-between text-[10px] text-muted-foreground">
                <span>AX 도입 후 업무 절감 시간 (월별, 시간)</span>
                <span className="text-brand-600">+ 누적 18,420시간</span>
              </div>
              <div className="flex h-20 items-end gap-1">
                {[
                  28, 32, 38, 42, 48, 55, 61, 58, 67, 72, 76, 82, 78, 88, 91,
                  85, 94, 96, 92, 100, 98, 95, 102, 110, 108, 115, 118, 120,
                  124, 128,
                ].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm bg-gradient-to-t from-brand-600 to-accent"
                    style={{ height: `${(h / 128) * 100}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
