import Link from "next/link";

const cols = [
  {
    title: "TFT 소개",
    links: ["비전", "추진 과제", "원칙", "조직"],
  },
  {
    title: "자료실",
    links: ["AX 백서", "사례 모음", "발표 자료", "FAQ"],
  },
  {
    title: "협업",
    links: ["내부 협업 신청", "그룹사 표준화", "외부 파트너십", "채용"],
  },
  {
    title: "정책",
    links: ["AI 윤리 가이드", "개인정보 보호", "데이터 거버넌스"],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-6xl px-6 pb-12 pt-16">
        <div className="grid gap-10 md:grid-cols-6">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-600 text-white">
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                  <path
                    d="M4 6h6v5h4V6h6v12h-6v-5h-4v5H4V6z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-[10px] font-medium tracking-[0.15em] text-muted-foreground">
                  HYUNDAI AUTOEVER
                </span>
                <span className="text-sm font-bold text-brand-600">
                  HR AX Drive TFT
                </span>
              </div>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              AI Transformation 으로 HR 의 미래를 그리는, 현대오토에버
              내부 태스크포스 팀입니다.
            </p>
            <div className="mt-6">
              <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                Contact
              </div>
              <Link
                href="mailto:hr-ax@hyundai-autoever.com"
                className="mt-1 inline-block text-sm font-medium text-brand-600 hover:underline"
              >
                hr-ax@hyundai-autoever.com
              </Link>
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <div className="text-xs font-bold uppercase tracking-wider text-foreground">
                {col.title}
              </div>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-brand-600"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 sm:flex-row sm:items-center">
          <div className="text-xs text-muted-foreground">
            © 2026 Hyundai AutoEver Corp. — HR AX Drive TFT. 사내 사용 목적.
          </div>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <Link href="#" className="hover:text-brand-600">
              개인정보처리방침
            </Link>
            <span className="text-border">|</span>
            <Link href="#" className="hover:text-brand-600">
              AI 윤리 헌장
            </Link>
          </div>
        </div>
      </div>

      <div className="relative h-28 overflow-hidden border-t border-border bg-gradient-to-b from-white to-brand-50/40">
        <div className="absolute inset-x-0 bottom-0 select-none text-center font-sans text-[16vw] font-bold leading-none tracking-tighter text-gradient-brand opacity-[0.12]">
          HR · AX
        </div>
      </div>
    </footer>
  );
}
