export function CodePreview() {
  return (
    <section id="docs" className="border-b border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-3 py-1 text-xs text-muted-foreground">
              <span className="font-mono">{"</>"} </span>
              Open source
            </div>
            <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
              <span className="text-gradient">Composable.</span>
              <br />
              <span className="text-muted-foreground">Not a framework.</span>
            </h2>
            <p className="mt-4 max-w-md text-muted-foreground">
              Components live in your codebase, not in a vendored package. You
              own the source — fork it, tweak it, ship it.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {[
                "Zero runtime — pure server components",
                "Type-safe variants with cva",
                "Works with App Router & Pages Router",
                "MIT licensed. Commercial use OK.",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-muted-foreground">
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    className="h-4 w-4 flex-shrink-0 text-foreground"
                  >
                    <path
                      d="M3.5 8L7 11.5L13 4.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-2xl bg-gradient-to-br from-purple-500/20 via-pink-500/10 to-transparent blur-xl" />
            <div className="overflow-hidden rounded-xl border border-border bg-muted/40 shadow-xl">
              <div className="flex items-center gap-2 border-b border-border bg-background/50 px-4 py-2 text-xs text-muted-foreground">
                <svg viewBox="0 0 16 16" fill="currentColor" className="h-3.5 w-3.5">
                  <path d="M9 2H4a1 1 0 00-1 1v10a1 1 0 001 1h8a1 1 0 001-1V6L9 2zm3 11H4V3h4v4h4v6z" />
                </svg>
                <span>button.tsx</span>
                <span className="ml-auto rounded bg-muted px-2 py-0.5 font-mono text-[10px]">
                  TSX
                </span>
              </div>
              <pre className="overflow-x-auto p-5 font-mono text-[12.5px] leading-relaxed">
                <code>
                  <span className="text-pink-400">import</span>{" "}
                  <span className="text-foreground">{"{ cva }"}</span>{" "}
                  <span className="text-pink-400">from</span>{" "}
                  <span className="text-emerald-300">{'"cva"'}</span>
                  <span className="text-muted-foreground">;</span>
                  {"\n\n"}
                  <span className="text-pink-400">export const</span>{" "}
                  <span className="text-purple-300">button</span>{" "}
                  <span className="text-muted-foreground">=</span>{" "}
                  <span className="text-blue-300">cva</span>
                  <span className="text-muted-foreground">(</span>
                  {"\n  "}
                  <span className="text-emerald-300">{'"inline-flex rounded-md font-medium"'}</span>
                  <span className="text-muted-foreground">,</span>
                  {"\n  "}
                  <span className="text-muted-foreground">{"{"}</span>
                  {"\n    "}
                  <span className="text-foreground">variants</span>
                  <span className="text-muted-foreground">: {"{"}</span>
                  {"\n      "}
                  <span className="text-foreground">intent</span>
                  <span className="text-muted-foreground">: {"{"}</span>
                  {"\n        "}
                  <span className="text-foreground">primary</span>
                  <span className="text-muted-foreground">: </span>
                  <span className="text-emerald-300">{'"bg-foreground text-background"'}</span>
                  <span className="text-muted-foreground">,</span>
                  {"\n        "}
                  <span className="text-foreground">ghost</span>
                  <span className="text-muted-foreground">: </span>
                  <span className="text-emerald-300">{'"hover:bg-muted"'}</span>
                  <span className="text-muted-foreground">,</span>
                  {"\n      "}
                  <span className="text-muted-foreground">{"},"}</span>
                  {"\n      "}
                  <span className="text-foreground">size</span>
                  <span className="text-muted-foreground">: {"{"}</span>
                  {"\n        "}
                  <span className="text-foreground">sm</span>
                  <span className="text-muted-foreground">: </span>
                  <span className="text-emerald-300">{'"h-8 px-3 text-xs"'}</span>
                  <span className="text-muted-foreground">,</span>
                  {"\n        "}
                  <span className="text-foreground">md</span>
                  <span className="text-muted-foreground">: </span>
                  <span className="text-emerald-300">{'"h-10 px-5 text-sm"'}</span>
                  <span className="text-muted-foreground">,</span>
                  {"\n      "}
                  <span className="text-muted-foreground">{"},"}</span>
                  {"\n    "}
                  <span className="text-muted-foreground">{"},"}</span>
                  {"\n  "}
                  <span className="text-muted-foreground">{"}"}</span>
                  {"\n"}
                  <span className="text-muted-foreground">);</span>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
