import { Navbar } from "@/components/navbar";
import { Bento } from "@/components/bento";
import { CodePreview } from "@/components/code-preview";
import { Pricing } from "@/components/pricing";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <PageIntro />
        <Bento />
        <CodePreview />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}

function PageIntro() {
  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-600">
          HR AX Drive TFT
        </div>
        <h1 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          <span className="text-gradient-navy">AI 로 새롭게 그리는</span>{" "}
          <span className="text-gradient-brand">HR 의 다음 단계.</span>
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">
          현대오토에버 HR AX Drive TFT 의 추진 과제, 원칙, 그리고 로드맵을
          한 페이지에 정리했습니다.
        </p>
      </div>
    </section>
  );
}
