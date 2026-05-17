import Link from "next/link";

const links = [
  { href: "#vision", label: "비전" },
  { href: "#initiatives", label: "추진 과제" },
  { href: "#journey", label: "로드맵" },
  { href: "#voices", label: "임직원 보이스" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-white">
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
            <span className="text-sm font-semibold tracking-tight text-brand-600">
              HR AX Drive TFT
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-brand-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="#contact"
            className="hidden text-sm text-muted-foreground transition-colors hover:text-brand-600 sm:inline-block"
          >
            문의하기
          </Link>
          <Link
            href="#vision"
            className="inline-flex h-9 items-center gap-1.5 rounded-md bg-brand-600 px-4 text-xs font-medium text-white transition-colors hover:bg-brand-700"
          >
            자세히 보기
            <svg viewBox="0 0 16 16" fill="none" className="h-3 w-3">
              <path
                d="M6 4L10 8L6 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
}
