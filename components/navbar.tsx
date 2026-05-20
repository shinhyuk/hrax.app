import Link from "next/link";

const links = [
  { href: "#initiatives", label: "추진 과제" },
  { href: "#principles", label: "원칙" },
  { href: "#journey", label: "로드맵" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/60 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center">
          <div className="flex flex-col leading-tight">
            <span className="font-mono text-[10px] font-medium tracking-[0.18em] text-muted-foreground">
              HYUNDAI AUTOEVER
            </span>
            <span className="font-display text-sm font-semibold tracking-tight text-foreground">
              HR AX Drive TFT
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-accent-light"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="mailto:jsh@hyundai-autoever.com"
          className="text-sm text-muted-foreground transition-colors hover:text-accent-light"
        >
          문의
        </Link>
      </div>
    </header>
  );
}
