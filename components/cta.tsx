import Link from "next/link";

export function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden border-b border-border bg-brand-600 py-24 text-white">
      <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]" />
      <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-brand-400/30 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-balance text-4xl font-bold tracking-tight sm:text-6xl">
          HR 의 다음 페이지를
          <br />
          <span className="text-accent-light">함께 써 주세요.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-white/80">
          HR AX Drive TFT 는 임직원 한 명 한 명의 경험을 바꾸는 일을 합니다.
          제안·협업·피드백 모두 환영합니다.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="mailto:hr-ax@hyundai-autoever.com"
            className="inline-flex h-12 items-center gap-2 rounded-md bg-white px-7 text-sm font-semibold text-brand-600 transition-transform hover:scale-[1.02]"
          >
            TFT 에 문의하기
            <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5">
              <path
                d="M6 4L10 8L6 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <Link
            href="#initiatives"
            className="inline-flex h-12 items-center rounded-md border border-white/30 bg-white/10 px-7 text-sm font-medium text-white transition-colors hover:bg-white/20"
          >
            추진 과제 다시 보기
          </Link>
        </div>
      </div>
    </section>
  );
}
