import { Navbar } from "@/components/navbar";
import { Bento } from "@/components/bento";
import { CodePreview } from "@/components/code-preview";
import { Pricing } from "@/components/pricing";
import { Footer } from "@/components/footer";
import { Plasma } from "@/components/plasma";

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
    <section className="relative overflow-hidden border-b border-border">
      <div className="pointer-events-none absolute inset-0">
        <Plasma
          color="#3b82f6"
          speed={0.5}
          direction="forward"
          scale={1.2}
          opacity={0.7}
          mouseInteractive={true}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />

      <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-white/5 px-3.5 py-1.5 text-xs text-accent-light backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          <span className="font-mono tracking-wider">HR AX DRIVE TFT</span>
        </div>
        <h1 className="font-display mt-5 text-balance text-4xl font-bold leading-[1.1] tracking-tight sm:text-6xl">
          <span className="text-gradient">AI 로 새롭게 그리는</span>
          <br />
          <span className="text-gradient-brand">HR 의 다음 단계.</span>
        </h1>
        <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
          현대오토에버 HR AX Drive TFT 이 그리는 미래.
        </p>
      </div>
    </section>
  );
}
