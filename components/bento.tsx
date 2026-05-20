export function Bento() {
  return (
    <section id="initiatives" className="border-b border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-white/5 px-3 py-1 text-xs font-medium text-accent-light backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            추진 과제
          </div>
          <h2 className="font-display mt-5 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            <span className="text-gradient">AI 가 바꾸는</span>
            <br />
            <span className="text-gradient-brand">HR 의 모든 순간.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            채용부터 퇴직까지, 모든 임직원 경험 (EX) 의 접점에 AI 를 더해
            의사결정의 속도와 공정성을 동시에 끌어올립니다.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-6 md:grid-rows-2">
          <FeatureCard className="md:col-span-4 md:row-span-1">
            <RecruitVisual />
            <FeatureText
              tag="AI 채용"
              title="AI 채용 프로세스 도입으로 채용 리드타임 −47%"
              body="AI 가 직무 역량 모델을 기반으로 이력서를 스크리닝하고, 영상 인터뷰의 언어·표정·답변 패턴을 분석해 면접관에게 인사이트를 제공합니다."
            />
          </FeatureCard>

          <FeatureCard className="md:col-span-2 md:row-span-1">
            <CopilotVisual />
            <FeatureText
              tag="HR 코파일럿"
              title="모든 임직원에게 전담 AI 비서"
              body="휴가·증명서·이동 신청부터 사내 규정 질문까지, 자연어로 한 번에."
            />
          </FeatureCard>

          <FeatureCard className="md:col-span-2 md:row-span-1">
            <GrowthVisual />
            <FeatureText
              tag="성장 경로"
              title="개인화 학습 추천 엔진"
              body="역량 갭과 커리어 목표를 분석해 매주 새로운 콘텐츠를 큐레이션합니다."
            />
          </FeatureCard>

          <FeatureCard className="md:col-span-4 md:row-span-1">
            <CultureVisual />
            <FeatureText
              tag="조직 인사이트"
              title="조직문화를 실시간으로 진단합니다."
              body="익명 설문 + 협업 데이터 + 펄스 서베이를 AI 가 종합해, 리더가 손쓸 수 있는 시점에 이슈를 발견합니다. 프라이버시는 끝까지 지킵니다."
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
      className={`glass-card group relative flex flex-col overflow-hidden ${className}`}
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
      <div className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
        {tag}
      </div>
      <h3 className="font-display mt-2 text-lg font-bold tracking-tight text-foreground">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
    </div>
  );
}

function VisualShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-52 overflow-hidden border-b border-border bg-gradient-to-br from-brand-500/10 via-transparent to-accent/5">
      <div className="dotted-bg absolute inset-0 opacity-50" />
      {children}
    </div>
  );
}

function RecruitVisual() {
  return (
    <VisualShell>
      <div className="relative flex h-full items-center justify-center gap-3 p-6">
        <div className="glass flex w-40 flex-col gap-2 rounded-lg p-3">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-full bg-brand-500 text-center text-xs font-semibold leading-7 text-white">
              JL
            </div>
            <div>
              <div className="text-[11px] font-semibold text-foreground">이정현</div>
              <div className="text-[9px] text-muted-foreground">SW Engineer</div>
            </div>
          </div>
          <div className="text-[10px] text-muted-foreground">매칭률</div>
          <div className="h-1.5 rounded-full bg-white/10">
            <div className="h-1.5 w-[94%] rounded-full bg-gradient-to-r from-brand-500 to-accent" />
          </div>
          <div className="text-[10px] font-semibold text-accent-light">94%</div>
        </div>
        <div className="glass flex w-44 flex-col gap-1.5 rounded-lg p-3">
          <div className="font-mono text-[10px] font-bold uppercase tracking-wide text-accent">
            AI 면접 분석
          </div>
          <div className="mt-1 space-y-1">
            {[
              { label: "문제해결 역량", v: 92 },
              { label: "협업 성향", v: 88 },
              { label: "성장 마인드셋", v: 96 },
            ].map((m) => (
              <div key={m.label}>
                <div className="flex justify-between text-[9px]">
                  <span className="text-muted-foreground">{m.label}</span>
                  <span className="font-semibold text-foreground">{m.v}</span>
                </div>
                <div className="h-1 rounded-full bg-white/10">
                  <div
                    className="h-1 rounded-full bg-brand-400"
                    style={{ width: `${m.v}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex w-32 flex-col gap-2">
          <div className="glass rounded-lg p-2.5">
            <div className="text-[9px] text-muted-foreground">리드타임</div>
            <div className="text-base font-bold text-accent-light">−47%</div>
          </div>
          <div className="glass rounded-lg p-2.5">
            <div className="text-[9px] text-muted-foreground">채용만족도</div>
            <div className="text-base font-bold text-accent-light">+37%p</div>
          </div>
        </div>
      </div>
    </VisualShell>
  );
}

function CopilotVisual() {
  return (
    <VisualShell>
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="w-full max-w-[220px] space-y-2">
          <div className="ml-auto max-w-[80%] rounded-2xl rounded-tr-sm bg-brand-500 px-3 py-2 text-[11px] text-white">
            연차 3일만 신청해줘
          </div>
          <div className="glass max-w-[90%] rounded-2xl rounded-tl-sm px-3 py-2 text-[11px] text-foreground">
            <div className="font-semibold text-accent-light">HR 코파일럿</div>
            <div className="mt-1 text-muted-foreground">
              5/20–5/22 로 신청 준비 완료. 확정할까요?
            </div>
            <div className="mt-2 flex gap-1">
              <span className="rounded-md bg-brand-500 px-2 py-0.5 text-[9px] text-white">
                확정
              </span>
              <span className="rounded-md border border-border-strong px-2 py-0.5 text-[9px]">
                수정
              </span>
            </div>
          </div>
        </div>
      </div>
    </VisualShell>
  );
}

function GrowthVisual() {
  return (
    <VisualShell>
      <div className="absolute inset-0 p-4">
        <div className="font-mono text-[10px] font-bold uppercase tracking-wide text-accent">
          이번 주 추천
        </div>
        <div className="mt-2 space-y-1.5">
          {[
            { t: "Cloud Native 아키텍처", d: "8h · 중급" },
            { t: "AI Ethics for Leaders", d: "2h · 입문" },
            { t: "데이터 기반 의사결정", d: "5h · 중급" },
          ].map((c, i) => (
            <div
              key={c.t}
              className={`glass rounded-lg p-2 ${
                i === 0 ? "border-accent/30" : ""
              }`}
            >
              <div className="text-[10px] font-semibold text-foreground">
                {c.t}
              </div>
              <div className="text-[9px] text-muted-foreground">{c.d}</div>
            </div>
          ))}
        </div>
      </div>
    </VisualShell>
  );
}

function CultureVisual() {
  return (
    <VisualShell>
      <div className="absolute inset-0 flex items-end gap-1 p-6">
        {Array.from({ length: 48 }).map((_, i) => {
          const h = 25 + Math.sin(i * 0.4) * 25 + (i % 5) * 5;
          return (
            <div
              key={i}
              className="flex-1 rounded-sm bg-gradient-to-t from-brand-500 to-accent opacity-80"
              style={{ height: `${Math.min(95, h)}%` }}
            />
          );
        })}
      </div>
      <div className="glass absolute left-4 top-4 rounded-lg px-3 py-2 text-[10px]">
        <div className="text-muted-foreground">eNPS 지수</div>
        <div className="mt-0.5 text-base font-bold text-accent-light">
          +52 <span className="text-[9px] text-accent">▲ 8</span>
        </div>
      </div>
      <div className="glass absolute right-4 top-4 rounded-lg px-3 py-2 text-[10px]">
        <div className="text-muted-foreground">분기 응답률</div>
        <div className="mt-0.5 text-base font-bold text-accent-light">87%</div>
      </div>
    </VisualShell>
  );
}
