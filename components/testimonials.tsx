const testimonials = [
  {
    quote:
      "AI 면접 분석 리포트가 들어온 뒤로 면접관 사이의 평가 편차가 눈에 띄게 줄었습니다. 객관적인 데이터로 대화하게 된 게 가장 큰 변화예요.",
    name: "김민지 책임",
    role: "인재채용팀",
    color: "#002c5f",
  },
  {
    quote:
      "휴가 신청, 증명서 발급, 사내 규정 확인을 코파일럿 한 곳에서 끝낼 수 있어요. 인사팀에 직접 문의할 일이 정말 줄었습니다.",
    name: "이도현 선임",
    role: "MX기획팀",
    color: "#1e4d8e",
  },
  {
    quote:
      "팀의 펄스 데이터를 매주 받아보면서 1:1 면담 주제가 훨씬 구체화됐어요. 이슈가 커지기 전에 손쓸 수 있다는 게 리더로서 든든합니다.",
    name: "박서윤 팀장",
    role: "클라우드사업팀",
    color: "#00aad2",
  },
  {
    quote:
      "내가 어떤 역량이 부족한지, 어떤 강의를 들어야 할지 코파일럿이 알려줘요. 막연했던 커리어 고민이 매주 풀리는 느낌입니다.",
    name: "정현우 책임",
    role: "AI플랫폼팀",
    color: "#002c5f",
  },
  {
    quote:
      "온보딩 첫 2주 동안 챗봇이 동기처럼 옆에 있어줬어요. 누구에게 물어봐야 할지 모르는 질문이 가장 많은 시기에 큰 도움이 됐습니다.",
    name: "최예린 사원",
    role: "데이터엔지니어링팀",
    color: "#1e4d8e",
  },
  {
    quote:
      "조직문화 진단 결과가 익명성을 지키면서도 실행 가능한 인사이트로 정리돼 옵니다. 그동안 본 어떤 서베이 리포트보다 유용했어요.",
    name: "오재훈 실장",
    role: "조직문화실",
    color: "#00aad2",
  },
];

export function Testimonials() {
  return (
    <section id="voices" className="border-b border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-xs font-medium text-brand-600">
            임직원 보이스
          </div>
          <h2 className="mt-4 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            <span className="text-gradient-navy">현장에서 들려오는</span>
            <br />
            <span className="text-gradient-brand">변화의 이야기.</span>
          </h2>
        </div>

        <div className="mt-14 columns-1 gap-4 md:columns-2 lg:columns-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="card mb-4 break-inside-avoid p-6">
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-brand-200">
                <path
                  d="M9 7H5C4 7 3 8 3 9V13C3 14 4 15 5 15H7L5 19H9V11C9 9 9 7 9 7ZM19 7H15C14 7 13 8 13 9V13C13 14 14 15 15 15H17L15 19H19V11C19 9 19 7 19 7Z"
                  fill="currentColor"
                />
              </svg>
              <blockquote className="mt-3 text-sm leading-relaxed text-foreground">
                {t.quote}
              </blockquote>
              <figcaption className="mt-4 flex items-center gap-3 border-t border-border pt-4">
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-full text-xs font-semibold text-white"
                  style={{ background: t.color }}
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{t.name}</div>
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
