import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function SpiderArt() {
  const nodes = [
    { x: 210, y: 34, r: 7, c: "#22d3ee" },
    { x: 336, y: 74, r: 5, c: "#a3e635" },
    { x: 392, y: 186, r: 5, c: "#22d3ee" },
    { x: 330, y: 268, r: 7, c: "#a3e635" },
    { x: 210, y: 304, r: 5, c: "#22d3ee" },
    { x: 84, y: 268, r: 5, c: "#a3e635" },
    { x: 28, y: 186, r: 7, c: "#22d3ee" },
    { x: 84, y: 74, r: 5, c: "#a3e635" },
  ];
  return (
    <svg viewBox="0 0 420 340" className="h-full w-full" aria-hidden="true">
      <defs>
        <radialGradient id="spiderHub" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.08" />
        </radialGradient>
      </defs>
      <rect width="420" height="340" fill="#070c16" rx="14" />
      <path
        d="M0 20H420M0 40H420M0 60H420M0 80H420M0 100H420M0 120H420M0 140H420M0 160H420M0 180H420M0 200H420M0 220H420M0 240H420M0 260H420M0 280H420M0 300H420M0 320H420M20 0V340M40 0V340M60 0V340M80 0V340M100 0V340M120 0V340M140 0V340M160 0V340M180 0V340M200 0V340M220 0V340M240 0V340M260 0V340M280 0V340M300 0V340M320 0V340M340 0V340M360 0V340M380 0V340M400 0V340"
        stroke="#0e1626"
        strokeWidth="1"
      />
      <circle cx="210" cy="170" r="70" fill="url(#spiderHub)" />
      {nodes.map((n, i) => (
        <g key={i}>
          <line x1="210" y1="170" x2={n.x} y2={n.y} stroke={n.c} strokeOpacity="0.18" strokeWidth="1" />
          <line x1={nodes[i].x} y1={nodes[i].y} x2={nodes[(i + 1) % nodes.length].x} y2={nodes[(i + 1) % nodes.length].y} stroke="#1b2a45" strokeWidth="1" strokeDasharray="3 5" />
        </g>
      ))}
      <g transform="rotate(45 210 170)">
        <line x1="192" y1="170" x2="228" y2="170" stroke="#22d3ee" strokeOpacity="0.35" />
        <line x1="210" y1="152" x2="210" y2="188" stroke="#22d3ee" strokeOpacity="0.35" />
      </g>
      {nodes.map((n, i) => (
        <circle key={i} cx={n.x} cy={n.y} r={n.r} fill={n.c} fillOpacity="0.85">
          <animate attributeName="r" values={`${n.r};${n.r + 2};${n.r}`} dur="2.6s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
        </circle>
      ))}
      <circle cx="210" cy="170" r="11" fill="#04060c" stroke="#22d3ee" strokeWidth="2.5" />
      <circle cx="210" cy="170" r="11" fill="none" stroke="#22d3ee" strokeWidth="1.5" fillOpacity="0">
        <animate attributeName="r" values="11;30" dur="2.4s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.8;0" dur="2.4s" repeatCount="indefinite" />
      </circle>
      <text x="210" y="164" textAnchor="middle" fontSize="11" fontFamily="monospace" fontWeight="700" fill="#22d3ee">SP1D3R</text>
      <text x="392" y="180" textAnchor="middle" fontSize="8" fontFamily="monospace" fill="#a3e635">CRAWLR</text>
      <text x="60" y="180" textAnchor="middle" fontSize="8" fontFamily="monospace" fill="#22d3ee">NODE</text>
    </svg>
  );
}

function BcwArt() {
  return (
    <svg viewBox="0 0 420 340" className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id="bcwBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2a0f38" />
          <stop offset="100%" stopColor="#16071f" />
        </linearGradient>
        <linearGradient id="bcwBtn" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ecaf3e" />
          <stop offset="100%" stopColor="#e8953a" />
        </linearGradient>
      </defs>
      <rect width="420" height="340" fill="url(#bcwBg)" rx="14" />
      <circle cx="80" cy="60" r="70" fill="#622286" opacity="0.25" />
      <circle cx="360" cy="300" r="90" fill="#ecaf3e" opacity="0.08" />
      <g transform="translate(150 26)">
        <rect x="0" y="0" width="120" height="288" rx="20" fill="#0d0512" stroke="#3b2050" strokeWidth="2" />
        <rect x="44" y="8" width="32" height="6" rx="3" fill="#3b2050" />
        <rect x="6" y="24" width="108" height="26" rx="8" fill="#622286" />
        <text x="60" y="41" textAnchor="middle" fontSize="9" fontFamily="monospace" fontWeight="700" fill="#ffffff">BCW</text>
        <rect x="12" y="60" width="96" height="7" rx="3.5" fill="#3d2b4d" />
        <rect x="12" y="74" width="70" height="7" rx="3.5" fill="#2a1e38" />
        <rect x="12" y="88" width="84" height="7" rx="3.5" fill="#2a1e38" />
        <g>
          <rect x="12" y="105" width="96" height="26" rx="13" fill="url(#bcwBtn)" />
          <text x="60" y="121" textAnchor="middle" fontSize="8.5" fontFamily="monospace" fontWeight="700" fill="#1c1206">Donate now</text>
        </g>
        <rect x="12" y="142" width="96" height="44" rx="9" fill="#160a20" stroke="#3b2050" strokeWidth="1.5" />
        <circle cx="30" cy="164" r="10" fill="none" stroke="#ecaf3e" strokeWidth="2.2" />
        <circle cx="30" cy="164" r="3.5" fill="#ecaf3e" />
        <rect x="46" y="152" width="52" height="5" rx="2.5" fill="#3d2b4d" />
        <rect x="46" y="163" width="40" height="5" rx="2.5" fill="#2a1e38" />
        <rect x="46" y="174" width="30" height="5" rx="2.5" fill="#2a1e38" />
        <g>
          <rect x="12" y="196" width="96" height="22" rx="6" fill="#622286" opacity="0.9" />
          <text x="60" y="210" textAnchor="middle" fontSize="7.5" fontFamily="monospace" fill="#e9d7f5">Pickup booked · 2:00 PM</text>
        </g>
        <g>
          <rect x="12" y="226" width="96" height="22" rx="6" fill="#1d0e2a" stroke="#622286" strokeWidth="1" />
          <text x="60" y="240" textAnchor="middle" fontSize="7.5" fontFamily="monospace" fill="#d8a0f5">Offline-first · PWA</text>
        </g>
        <rect x="12" y="256" width="96" height="22" rx="11" fill="#3b2050" />
        <text x="60" y="270" textAnchor="middle" fontSize="7.5" fontFamily="monospace" fontWeight="700" fill="#ecaf3e">Open in Maps</text>
      </g>
    </svg>
  );
}

const projects = [
  {
    accent: "#22d3ee",
    chipClass: "border-[#22d3ee]/30 bg-[#22d3ee]/10 text-[#22d3ee]",
    dot: "bg-[#22d3ee]",
    title: "Spider Protocol",
    tagline: "Decentralized Privacy Platform",
    status: "Live network · Launching",
    description:
      "A privacy platform that finds where your data lives on the web and helps you remove it — run by a decentralized network of encrypted crawler nodes secured on-chain. Powered by a custom PoA blockchain and a two-token economy.",
    features: [
      "Decentralized, encrypted search & crawling",
      "Blockchain-secured evidence of data exposure",
      "Automated removal requests — 50+ legal templates",
      "Custodial BIP-39 wallets, exportable to MetaMask",
      "SP1D3R / CRAWLR token economy across a cross-chain bridge",
    ],
    metrics: [
      { v: "10,000+", l: "active nodes" },
      { v: "1M+", l: "searches" },
      { v: "50+", l: "legal templates" },
      { v: "99.9%", l: "uptime" },
    ],
    links: [
      { label: "Visit app", href: "https://spider.d31337m3.com/spider/", external: true },
      { label: "Read the launch", href: "https://github.com/rrdlabs/Sp1d3r_alpha", external: true },
    ],
    art: <SpiderArt />,
  },
  {
    accent: "#ecaf3e",
    chipClass: "border-gold/30 bg-gold/10 text-gold",
    dot: "bg-gold",
    title: "BCW Mobile",
    tagline: "Bridge City Warmth — street-outreach app",
    status: "Live PWA · In production",
    description:
      "The entire operation of a Saskatoon street-outreach charity, turned into one installable, offline-first mobile app — so a neighbour can donate winter gear, a volunteer can claim a pickup, and someone in need can find a warm meal in under a minute.",
    features: [
      "Four ways to give on one screen — Stripe, e-Transfer, pledges, in-kind",
      "Free home pickups tracked scheduled → assigned → picked up → delivered",
      "Hand-verified resource directory with live embedded Google Maps",
      "Fully anonymous help requests — privacy as a feature",
      "Self-updating PWA: 223 KB bundle, offline-first, zero app-store wait",
    ],
    metrics: [
      { v: "21", l: "E2E flows tested" },
      { v: "223 KB", l: "single bundle" },
      { v: "2 taps", l: "to install" },
      { v: "100%", l: "offline-capable UI" },
    ],
    links: [
      { label: "Live preview", href: "https://d31337m3.com/bcw/", external: true },
      { label: "GitHub", href: "https://github.com/rrdlabs/bcw-mobile", external: true },
    ],
    art: <BcwArt />,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative scroll-mt-24 border-y border-edge bg-abyss/60 py-24 md:py-32">
      <div className="pointer-events-none absolute left-0 top-1/3 h-96 w-96 rounded-full bg-[#622286]/10 blur-[140px]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Featured work"
          title={
            <>
              Recent projects, <span className="text-gradient">shipped for real</span>
            </>
          }
          description="Not templates, not mockups — these are deployed products with live URLs, real brands, automated tests and working backends."
        />

        <div className="mt-16 space-y-20">
          {projects.map((p, i) => (
            <Reveal key={p.title}>
              <article className="grid gap-10 rounded-xl border border-edge bg-void/70 p-7 sm:p-10 lg:grid-cols-2 lg:items-center lg:gap-14">
                <div className={`order-2 ${i % 2 === 0 ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] ${p.chipClass}`}>
                      <span className={`h-1.5 w-1.5 rounded-full ${p.dot} animate-pulse`} />
                      {p.status}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                    {p.title}
                  </h3>
                  <p className="mt-1 font-mono text-sm text-mist">{p.tagline}</p>
                  <p className="mt-5 leading-relaxed text-mist">{p.description}</p>

                  <ul className="mt-6 space-y-2.5">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-mist/90">
                        <svg className="mt-1 shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={p.accent} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-edge bg-edge sm:grid-cols-4">
                    {p.metrics.map((m) => (
                      <div key={m.l} className="bg-panel/80 px-4 py-4">
                        <p className="font-display text-lg font-semibold text-white">{m.v}</p>
                        <p className="mt-0.5 font-mono text-[10px] uppercase tracking-wider text-mist/70">{m.l}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-wrap gap-4">
                    <a
                      href={p.links[0].href}
                      target={p.links[0].external ? "_blank" : undefined}
                      rel={p.links[0].external ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-2 rounded-md border border-edge-strong bg-panel/60 px-5 py-3 font-mono text-[13px] font-semibold uppercase tracking-[0.12em] text-white transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                      style={{ "--accent": p.accent } as React.CSSProperties}
                    >
                      {p.links[0].label}
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17L17 7M9 7h8v8" />
                      </svg>
                    </a>
                    <a
                      href={p.links[1].href}
                      target={p.links[1].external ? "_blank" : undefined}
                      rel={p.links[1].external ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-2 px-5 py-3 font-mono text-[13px] uppercase tracking-[0.12em] text-mist transition hover:text-white"
                    >
                      {p.links[1].label}
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17L17 7M9 7h8v8" />
                      </svg>
                    </a>
                  </div>
                </div>

                <div className={`order-1 ${i % 2 === 0 ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="overflow-hidden rounded-xl border border-edge shadow-2xl shadow-black/50">
                    {p.art}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}