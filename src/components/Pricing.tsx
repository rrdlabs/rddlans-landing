import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

type Rung = {
  level: string;
  name: string;
  price: string;
  unit: string;
  accent: string;
  ring: string;
  chip: string;
  scope: string;
};

const rungs: Rung[] = [
  {
    level: "G1",
    name: "Landing",
    price: "$100",
    unit: "from",
    accent: "text-neon",
    ring: "hover:border-neon/50 hover:shadow-[0_0_40px_-8px_rgba(34,211,238,0.45)]",
    chip: "border-neon/30 bg-neon/10 text-neon",
    scope: "Single landing page, custom-built and security-hardened. The market charges $599+ for this alone.",
  },
  {
    level: "G2",
    name: "Site",
    price: "$350",
    unit: "from",
    accent: "text-cyber-violet",
    ring: "hover:border-cyber-violet/50 hover:shadow-[0_0_40px_-8px_rgba(167,139,250,0.45)]",
    chip: "border-cyber-violet/30 bg-cyber-violet/10 text-cyber-violet",
    scope: "Multi-section site. Custom design, CMS so your team can edit it, SEO and analytics.",
  },
  {
    level: "G3",
    name: "Platform",
    price: "$1,400",
    unit: "from",
    accent: "text-volt",
    ring: "hover:border-volt/50 hover:shadow-[0_0_40px_-8px_rgba(163,230,53,0.45)]",
    chip: "border-volt/30 bg-volt/10 text-volt",
    scope: "Web app with logins, dashboards and a real backend. Stripe, Supabase and live sync included.",
  },
  {
    level: "G4",
    name: "Product",
    price: "$4,800",
    unit: "from",
    accent: "text-cyber-rose",
    ring: "hover:border-cyber-rose/50 hover:shadow-[0_0_40px_-8px_rgba(255,77,109,0.45)]",
    chip: "border-cyber-rose/30 bg-cyber-rose/10 text-cyber-rose",
    scope: "Full custom app — offline-first PWA or mobile. Payments, CI/CD, automated tests, security pass.",
  },
];

const gravityNotes = [
  "Price scales with the gravity of the sale — not with templates, seats or page counts.",
  "Each gravity rung accumulates on the last. Bigger sale, bigger build, bigger price. Systematically.",
  "Free quotes. Fixed price before a line of code ships. Pay in milestones.",
];

export default function Pricing() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-14 md:py-16">
      <div className="pointer-events-none absolute right-0 top-10 h-80 w-80 rounded-full bg-gold/8 blur-[130px]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Priced by gravity"
          title={
            <>
              Start small. <span className="text-gradient">Scale hard.</span> Always honest.
            </>
          }
          description="Free quotes, no strings. Landing pages from $100 — while the market charges $599+ for a page alone. Price accumulates upward with the gravity of the sale, not with markups."
        />

        <Reveal delay={80} className="mt-10">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 rounded-lg border border-edge bg-void/70 px-6 py-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-mist/60">
              Quotes are free · landing page from
            </p>
            <p className="font-mono text-2xl font-bold text-neon">$100</p>
            <span className="hidden font-mono text-mist/40 sm:inline">→</span>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-mist/60">
              Market average· landing page only
            </p>
            <p className="font-mono text-xl font-bold text-cyber-rose line-through decoration-2">
              $599<span className="ml-1 text-xs font-semibold text-mist/50">+ extras</span>
            </p>
          </div>
        </Reveal>

        <div className="mt-12">
          <div className="grid gap-px overflow-hidden rounded-t-xl border border-edge bg-edge sm:grid-cols-2 lg:grid-cols-4">
            {rungs.map((r, i) => (
              <Reveal key={r.level} delay={i * 90} className="h-full">
                <div className={`group relative flex h-full flex-col bg-panel/70 p-7 transition-colors duration-300 hover:bg-panel ${r.ring}`}>
                  <div className="flex items-center justify-between">
                    <span className={`rounded border px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] ${r.chip}`}>
                      {r.level}
                    </span>
                    <svg className="text-edge-strong transition group-hover:text-white" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 20l10-16M13 8l4 0 0 4" />
                    </svg>
                  </div>

                  <h3 className="mt-4 font-display text-lg font-semibold text-white">{r.name}</h3>
                  <p className="mt-3 flex items-baseline gap-2">
                    <span className={`font-display text-3xl font-semibold ${r.accent}`}>{r.price}</span>
                    <span className="font-mono text-xs uppercase tracking-[0.16em] text-mist/60">{r.unit}</span>
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-mist/90">{r.scope}</p>

                  {i < rungs.length - 1 && (
                    <p className={`mt-6 border-t border-edge pt-4 font-mono text-[11px] uppercase tracking-[0.16em] ${r.accent}`}>
                      + gravity → G{i + 2}
                    </p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="rounded-b-xl border border-t-0 border-edge bg-void/60 px-7 py-6">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded border border-gold/30 bg-gold/10 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-gold">
                    Registered charity
                  </span>
                  <span className="rounded border border-edge-strong px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-mist">
                    Limited slots · impact-ranked
                  </span>
                  <p className="text-sm text-mist">
                    Full custom app, <span className="font-display text-lg font-semibold text-gold">$0</span> — no catch, ever. Saskatchewan orgs move to the front.
                  </p>
                </div>
                <a
                  href="mailto:founder@rrdlabs.online?subject=Free%20charity%20build%20application"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md border border-gold/50 px-5 py-3 font-mono text-sm font-bold uppercase tracking-[0.12em] text-gold transition hover:bg-gold hover:text-void"
                >
                  Apply for a free build
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-edge bg-edge sm:grid-cols-3">
          {gravityNotes.map((n, i) => (
            <Reveal key={n} delay={i * 90}>
              <div className="h-full bg-abyss px-6 py-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-mist/60">Gravity rule {String(i + 1).padStart(2, "0")}</p>
                <p className="mt-1.5 text-sm font-semibold leading-relaxed text-white">{n}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}