import Link from "next/link";

const cols = [
  {
    title: "Product",
    links: ["Features", "Components", "Templates", "Pricing", "Changelog"],
  },
  {
    title: "Resources",
    links: ["Docs", "Examples", "Blog", "Guides", "Roadmap"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Press kit", "Contact"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "License", "Security"],
  },
];

export function Footer() {
  return (
    <footer id="changelog" className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 pb-12 pt-16">
        <div className="grid gap-10 md:grid-cols-6">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-foreground text-background">
                <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                  <path
                    d="M4 18L10 6L14 14L20 4"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-base font-semibold">hrax</span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              The interface toolkit for teams who care about craft.
            </p>
            <div className="mt-6 flex gap-2">
              {[
                { label: "GitHub", path: "M8 0C3.58 0 0 3.58 0 8a8 8 0 005.47 7.59c.4.07.55-.17.55-.38v-1.34c-2.23.49-2.7-1.08-2.7-1.08-.36-.92-.89-1.16-.89-1.16-.73-.5.05-.49.05-.49.81.06 1.23.83 1.23.83.72 1.22 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.13 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.11.16 1.93.08 2.13.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48v2.2c0 .21.15.46.55.38A8 8 0 0016 8c0-4.42-3.58-8-8-8z" },
                { label: "X", path: "M9.39 6.79L15.27 0H13.88L8.77 5.94 4.69 0H0L6.17 8.98 0 16h1.39L6.79 9.73 11.11 16H15.8L9.39 6.79zm-1.91 2.22l-.62-.89L1.89 1.04h2.14L8 6.5l.62.89 5.21 7.46h-2.14L7.48 9.01z" },
                { label: "Discord", path: "M13.55 3.04a13.23 13.23 0 00-3.36-1.05c-.15.27-.32.63-.44.92a12.27 12.27 0 00-3.68 0c-.12-.29-.3-.65-.44-.92a13.16 13.16 0 00-3.36 1.05A14.07 14.07 0 00.14 11.4a13.33 13.33 0 004.04 2.05c.33-.44.62-.91.87-1.4-.48-.18-.94-.4-1.37-.66.12-.08.23-.17.34-.26a9.5 9.5 0 008.08 0c.11.09.22.18.34.26-.43.26-.89.48-1.37.66.25.49.54.96.87 1.4a13.33 13.33 0 004.04-2.05 14.05 14.05 0 00-2.13-8.36zM5.38 9.49c-.81 0-1.47-.74-1.47-1.65 0-.91.65-1.65 1.47-1.65.82 0 1.48.74 1.47 1.65 0 .91-.65 1.65-1.47 1.65zm5.24 0c-.81 0-1.47-.74-1.47-1.65 0-.91.65-1.65 1.47-1.65.82 0 1.48.74 1.47 1.65 0 .91-.65 1.65-1.47 1.65z" },
              ].map((s) => (
                <Link
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="flex h-8 w-8 items-center justify-center rounded-md border border-border bg-muted/40 text-muted-foreground transition-colors hover:border-border hover:text-foreground"
                >
                  <svg viewBox="0 0 16 16" fill="currentColor" className="h-3.5 w-3.5">
                    <path d={s.path} />
                  </svg>
                </Link>
              ))}
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <div className="text-xs font-semibold uppercase tracking-wider text-foreground">
                {col.title}
              </div>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 sm:flex-row sm:items-center">
          <div className="text-xs text-muted-foreground">
            © 2026 Hrax Labs Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            All systems normal
          </div>
        </div>
      </div>

      <div className="relative h-32 overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 select-none text-center font-sans text-[18vw] font-bold leading-none tracking-tighter text-gradient opacity-[0.08]">
          hrax
        </div>
      </div>
    </footer>
  );
}
