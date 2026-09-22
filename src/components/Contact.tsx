import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-grid mask-fade-b" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon/10 blur-[160px]" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <p className="flex items-center justify-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-neon">
            <span className="inline-block h-px w-8 bg-neon/60" />
            Ready when you are
            <span className="inline-block h-px w-8 bg-neon/60" />
          </p>
          <h2 className="mt-6 font-display text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            Have something <span className="text-gradient text-glow-cyan">hard</span> to build?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-mist sm:text-lg">
            An app for your mission, an engagement you want hit properly, or a board you
            can&apos;t find firmware for — describe it in one sentence and we&apos;ll reply
            within one business day.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:founder@rrdlabs.online?subject=Project%20inquiry%20—%20rddlans.online"
              className="animate-pulse-ring inline-flex items-center gap-2.5 rounded-md bg-neon px-7 py-4 font-mono text-sm font-bold uppercase tracking-[0.14em] text-void transition hover:bg-white"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="5" width="18" height="14" rx="2.5" />
                <path d="M3 7l9 6 9-6" />
              </svg>
              founder@rrdlabs.online
            </a>
            <a
              href="https://github.com/rrdlabs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-md border border-edge-strong px-7 py-4 font-mono text-sm font-semibold uppercase tracking-[0.14em] text-mist transition hover:border-white hover:text-white"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.17c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.69 1.25 3.34.95.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.35.77 1.04.77 2.1v3.12c0 .3.21.66.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
              </svg>
              github.com/rrdlabs
            </a>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-edge bg-edge sm:grid-cols-3">
            {[
              { k: "Scoping calls", v: "Free & no obligation" },
              { k: "Turnaround", v: "Spec within a week" },
              { k: "Remote", v: "Worldwide · async-friendly" },
            ].map((c) => (
              <div key={c.k} className="bg-abyss px-6 py-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-mist/60">{c.k}</p>
                <p className="mt-1 text-sm font-semibold text-white">{c.v}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}