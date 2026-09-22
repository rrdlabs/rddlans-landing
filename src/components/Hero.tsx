const stats = [
  { value: "10,000+", label: "active Spider nodes" },
  { value: "1M+", label: "searches processed" },
  { value: "21", label: "E2E flows tested" },
  { value: "99.9%", label: "uptime, in production" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid animate-grid-pan mask-fade-b" />
      <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-neon/15 blur-[140px]" />
      <div className="pointer-events-none absolute -right-32 top-64 h-96 w-96 rounded-full bg-volt/10 blur-[140px]" />

      <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-32 md:pb-24 md:pt-44">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-neon">
              <span className="inline-block h-px w-8 bg-neon/60" />
              Ranger-Andrews Research &amp; Development
            </p>

            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Custom software.{" "}
              <span className="text-gradient text-glow-cyan">Hard security.</span>{" "}
              <span className="text-gradient text-glow-lime">Real hardware.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-mist sm:text-lg">
              rddlans.online is an independent R&amp;D studio. We design and ship
              custom mobile &amp; web apps, run security research and penetration
              testing, and engineer bespoke electronics and firmware — end to end,
              to production, rarely off the shelf.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="animate-pulse-ring group inline-flex items-center gap-2 rounded-md bg-neon px-6 py-3.5 font-mono text-sm font-bold uppercase tracking-[0.14em] text-void transition hover:bg-white"
              >
                Start a project
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-md border border-edge-strong px-6 py-3.5 font-mono text-sm font-semibold uppercase tracking-[0.14em] text-mist transition hover:border-neon/60 hover:text-neon"
              >
                See the work
              </a>
            </div>

            <p className="mt-7 font-mono text-[11px] uppercase tracking-[0.2em] text-mist/60">
              Web · Mobile · Infosec · Embedded — building since day zero
            </p>
          </div>

          {/* terminal */}
          <div aria-hidden="true" className="animate-float relative">
            <div className="absolute -inset-8 rounded-2xl bg-neon/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-lg border border-edge bg-abyss/90 shadow-2xl shadow-black/60">
              <div className="flex items-center gap-2 border-b border-edge bg-panel/60 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-cyber-rose/80" />
                <span className="h-3 w-3 rounded-full bg-gold/80" />
                <span className="h-3 w-3 rounded-full bg-volt/80" />
                <span className="ml-3 font-mono text-[11px] text-mist/70">rdd — terminal</span>
              </div>
              <div className="space-y-2.5 p-5 font-mono text-[12.5px] leading-relaxed sm:text-[13px]">
                <p className="text-mist">
                  <span className="text-volt">$</span> rdd deploy --project bcw-mobile
                </p>
                <p className="pl-4 text-mist/80">
                  built 223 KB (71 KB gzip) <span className="text-volt">...ok</span>
                </p>
                <p className="pl-4 text-mist/80">
                  service worker offline-first <span className="text-volt">...ok</span>
                </p>
                <p className="text-mist">
                  <span className="text-volt">$</span> rdd scan --target rddlans.online
                </p>
                <p className="pl-4 text-mist/80">
                  [443] tls/1.3 <span className="text-cyber-rose">open</span> · [22] ssh <span className="text-cyber-rose">open</span>
                </p>
                <p className="pl-4 text-mist/80">
                  headers hardened <span className="text-volt">passed</span>
                </p>
                <p className="pl-4 font-semibold text-neon">
                  result: clean — ship it
                </p>
                <p className="text-mist">
                  <span className="text-volt">$</span> rdd flash --target spider-node/esp32
                </p>
                <p className="pl-4 text-mist/80">
                  esp-idf ✓ lvgl ✓ firmware 98.2 KB <span className="text-volt">...ok</span>
                </p>
                <p className="flex items-center text-mist">
                  <span className="text-volt">$</span> <span className="ml-2 inline-block h-3.5 w-2 bg-volt animate-blink" />
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* stats */}
        <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-edge bg-edge md:mt-24 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-abyss px-6 py-7">
              <p className="font-display text-3xl font-semibold text-white sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-mist/70">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}