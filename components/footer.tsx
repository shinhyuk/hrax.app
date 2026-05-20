import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 py-10 sm:flex-row sm:items-center">
        <div className="flex flex-col leading-tight">
          <span className="font-mono text-[10px] font-medium tracking-[0.18em] text-muted-foreground">
            HYUNDAI AUTOEVER
          </span>
          <span className="font-display text-sm font-bold text-foreground">
            HR AX Drive TFT
          </span>
        </div>

        <div className="text-xs text-muted-foreground">
          © 2026 Hyundai AutoEver ·{" "}
          <Link
            href="mailto:jsh@hyundai-autoever.com"
            className="transition-colors hover:text-accent-light"
          >
            jsh@hyundai-autoever.com
          </Link>
        </div>
      </div>
    </footer>
  );
}
