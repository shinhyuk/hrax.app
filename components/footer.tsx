import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 py-10 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-brand-600 text-white">
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
              <path d="M4 6h6v5h4V6h6v12h-6v-5h-4v5H4V6z" fill="currentColor" />
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

        <div className="text-xs text-muted-foreground">
          © 2026 Hyundai AutoEver — 사내 사용 목적 ·{" "}
          <Link
            href="mailto:hr-ax@hyundai-autoever.com"
            className="hover:text-brand-600"
          >
            hr-ax@hyundai-autoever.com
          </Link>
        </div>
      </div>
    </footer>
  );
}
