import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const steps = [
  {
    num: "01",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="3" />
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
      </svg>
    ),
    title: "Scope",
    body: "We listen hard — requirements, threats, constraints. You get a crisp spec and a fixed price before a line of code ships.",
  },
  {
    num: "02",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l2 4h4.5l-3.5 3 1.2 4.5L12 12.5 7.8 14.5 9 10 5.5 7H10l2-4z" />
        <path d="M5 21h14" />
      </svg>
    ),
    title: "Design & Prototype",
    body: "Architecture and UX on paper and in code. You see something walkable within days, not months.",
  },
  {
    num: "03",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4l-2.8 2.8-2.8-2.8 2.8-2.8z" />
        <path d="M6 6l3 3M15 15l3 3" />
      </svg>
    ),
    title: "Build & Harden",
    body: "Production code with the security hat on. Tests, review, and pentest-worthy hygiene from day one.",
  },
  {
    num: "04",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 20v-9l8-6 8 6v9" />
        <path d="M9 20v-6h6v6" />
        <path d="M12 5L3 10M21 10l-9-5" />
      </svg>
    ),
    title: "Ship & Support",
    body: "Deployed to your domain or ours. Monitored, documented, handed over clean — with retainer support if you want it.",
  },
];

export default function Approach() {
  return (
    <section id="approach" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-24 md:py-32">
      <SectionHeading
        eyebrow="How we work"
        title={
          <>
            Four moves, <span className="text-gradient">zero surprises</span>
          </>
        }
        description="A small, senior team working directly with you. No account managers, no hand-offs — the people you meet build your product."
      />

      <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-edge bg-edge sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <Reveal key={s.num} delay={i * 90} className="h-full">
            <div className="group relative h-full bg-panel/70 p-7 transition-colors duration-300 hover:bg-panel">
              <p className="font-mono text-xs text-edge-strong">{s.num}</p>
              <div className="mt-4 grid h-11 w-11 place-items-center rounded-lg border border-edge text-neon transition group-hover:border-neon/50 group-hover:bg-neon/10">
                {s.icon}
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mist">{s.body}</p>
              {i < steps.length - 1 && (
                <svg className="pointer-events-none absolute right-2 top-1/2 hidden -translate-y-1/2 text-edge-strong lg:block" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 6l6 6-6 6" />
                </svg>
              )}
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120} className="mt-10">
        <div className="flex flex-wrap items-center gap-3 rounded-lg border border-edge bg-abyss/70 px-6 py-5">
          <span className="rounded border border-cyber-rose/30 bg-cyber-rose/10 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-cyber-rose">
            Threat-modeled by default
          </span>
          <p className="text-sm text-mist">
            Every deliverable ships with a hardening and review pass — as much because we&apos;d want it done to us as because it&apos;s the right engineering.
          </p>
        </div>
      </Reveal>
    </section>
  );
}