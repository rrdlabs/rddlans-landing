"use client";

import { useEffect, useState, type ReactNode } from "react";

const DURATION = 9000;
const STORAGE_KEY = "rrdlabs-intro-seen";

type Scene = {
  id: string;
  kicker: string;
  tint: string;
  title: ReactNode;
  sub: ReactNode;
  visual: ReactNode;
  final?: boolean;
};

function ReceiptScene() {
  return (
    <div className="relative mx-auto w-72 max-w-full rounded-md border border-cyber-rose/30 bg-panel/90 p-5 font-mono text-left shadow-2xl shadow-cyber-rose/10">
      <p className="text-[10px] uppercase tracking-[0.2em] text-mist/60">Market quote · a landing page</p>
      <div className="mt-4 space-y-2 text-sm text-mist">
        <p className="flex items-center gap-2">
          <span>Landing page</span>
          <span className="flex-1 border-b border-dashed border-edge" />
          <span>$599</span>
        </p>
        <p className="flex items-center gap-2">
          <span>Premium add-on</span>
          <span className="flex-1 border-b border-dashed border-edge" />
          <span>+$150</span>
        </p>
        <p className="flex items-center gap-2">
          <span>Rush fee</span>
          <span className="flex-1 border-b border-dashed border-edge" />
          <span>+$250</span>
        </p>
      </div>
      <p className="mt-4 flex items-center gap-2 border-t border-edge pt-3 text-base font-bold text-cyber-rose">
        Total <span className="flex-1" /> $999
      </p>
      <span className="intro-stamp absolute -right-3 -top-3 rounded border-2 border-cyber-rose px-2.5 py-1 text-xs font-black uppercase tracking-widest text-cyber-rose">
        Nope.
      </span>
    </div>
  );
}

function PriceScene() {
  return (
    <div className="relative grid place-items-center">
      <div className="absolute h-44 w-44 rounded-full bg-neon/15 blur-3xl" />
      <div className="relative">
        <p className="intro-slam font-display text-7xl font-bold leading-none text-neon text-glow-cyan">
          $100
        </p>
        <p className="mt-3 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-mist/70">
          hardened · custom · shipped
        </p>
      </div>
    </div>
  );
}

function GravityScene() {
  const bars = [
    { l: "G1", p: "$100", h: "30%", color: "#22d3ee" },
    { l: "G2", p: "$350", h: "46%", color: "#a78bfa" },
    { l: "G3", p: "$1,400", h: "68%", color: "#a3e635" },
    { l: "G4", p: "$4,800", h: "100%", color: "#ff4d6d" },
  ];
  return (
    <div className="flex h-48 items-end justify-center gap-5 sm:gap-8">
      {bars.map((b, i) => (
        <div key={b.l} className="flex h-full flex-col items-center justify-end gap-2">
          <span className="font-mono text-xs font-bold text-white">{b.p}</span>
          <div
            className="intro-rise w-12 rounded-t-md"
            style={{ height: b.h, background: `linear-gradient(to top, ${b.color}33, ${b.color})`, animationDelay: `${400 + i * 220}ms` }}
          />
          <span className="font-mono text-[10px] uppercase tracking-widest text-mist/70">{b.l}</span>
        </div>
      ))}
    </div>
  );
}

function StackScene() {
  const lines = [
    { p: "bcw-mobile", ok: "shipped · offline-first" },
    { p: "sp1d3r / network", ok: "nodes on-chain" },
    { p: "seedy / research", ok: "vuln tools public" },
    { p: "codpet / esp32", ok: "flashing ... ok" },
  ];
  return (
    <div className="mx-auto w-80 max-w-full rounded-lg border border-edge bg-abyss/90 p-4 font-mono text-left text-[13px] shadow-2xl shadow-black/50">
      <div className="flex items-center gap-2 border-b border-edge pb-2 text-[11px] text-mist/70">
        <span className="h-2.5 w-2.5 rounded-full bg-cyber-rose/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-gold/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-volt/80" />
        <span className="ml-2">rdd — shipped</span>
      </div>
      <div className="mt-3 space-y-2">
        {lines.map((l, i) => (
          <p key={l.p} className="intro-line text-mist/90" style={{ animationDelay: `${i * 500}ms` }}>
            <span className="text-volt">✓</span> <span className="text-white">{l.p}</span>
            <span className="float-right text-mist/60">{l.ok}</span>
          </p>
        ))}
        <p className="intro-line text-neon" style={{ animationDelay: `${lines.length * 500}ms` }}>
          <span className="text-volt">$</span> next ship: yours? <span className="animate-blink">▍</span>
        </p>
      </div>
    </div>
  );
}

function CharityScene() {
  return (
    <div className="relative mx-auto w-fit">
      <div className="relative w-40 rounded-[22px] border border-gold/40 bg-[#16071f] p-3 shadow-2xl shadow-gold/10">
        <div className="rounded-lg bg-[#622286] px-2 py-1 text-center font-mono text-[10px] font-bold tracking-widest text-white">
          BCW
        </div>
        <div className="mt-2 h-1.5 w-4/5 rounded bg-[#3d2b4d]" />
        <div className="mt-1.5 h-1.5 w-3/5 rounded bg-[#2a1e38]" />
        <div className="mt-3 rounded-md bg-gradient-to-r from-[#ecaf3e] to-[#e8953a] py-1.5 text-center font-mono text-[9px] font-bold text-[#1c1206]">
          Donate now
        </div>
        <div className="mt-2 rounded-md border border-[#622286] py-1.5 text-center font-mono text-[9px] text-[#d8a0f5]">
          Offline-first · PWA
        </div>
      </div>
      <span className="intro-stamp absolute -right-8 top-1/2 -translate-y-1/2 rounded border-2 border-gold px-2.5 py-1 text-sm font-black uppercase tracking-widest text-gold">
        $0
      </span>
    </div>
  );
}

function SaskatoonScene() {
  return (
    <div className="relative mx-auto grid h-44 w-60 place-items-center">
      <div className="absolute inset-0 overflow-hidden rounded-2xl border border-edge bg-abyss/70">
        <div className="absolute inset-0 bg-grid opacity-50" />
      </div>
      <div className="relative flex flex-col items-center">
        <div className="relative grid h-16 w-16 place-items-center">
          <span className="intro-pin-ring absolute h-16 w-16 rounded-full border border-cyber-violet/60" />
          <span className="absolute h-10 w-10 rounded-full bg-cyber-violet/20" />
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinejoin="round">
            <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z" />
            <circle cx="12" cy="10" r="2.6" fill="#a78bfa" />
          </svg>
        </div>
        <p className="mt-3 font-mono text-sm font-bold uppercase tracking-[0.18em] text-white">
          Saskatoon · YXE
        </p>
        <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-cyber-violet">
          built here · for here
        </p>
      </div>
    </div>
  );
}

function FinalScene() {
  return (
    <div className="flex flex-col items-center">
      <span className="grid h-16 w-16 place-items-center rounded-xl border border-neon/40 bg-neon/10 font-mono text-2xl font-bold text-neon shadow-[0_0_40px_-8px_rgba(34,211,238,0.6)]">
        R
      </span>
      <p className="mt-4 font-display text-3xl font-semibold tracking-tight text-white">
        rrdlabs<span className="text-neon">.</span>online
      </p>
      <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.22em] text-mist/70">
        ranger-andrews · research &amp; development
      </p>
    </div>
  );
}

const scenes: Scene[] = [
  {
    id: "market",
    kicker: "The market",
    tint: "text-cyber-rose",
    title: (
      <>
        They quote <span className="text-cyber-rose">$599</span> for a
        <br className="hidden sm:block" /> landing page alone.
      </>
    ),
    sub: <>Then pile on the &ldquo;premium&rdquo; and &ldquo;rush&rdquo; fees.</>,
    visual: <ReceiptScene />,
  },
  {
    id: "price",
    kicker: "Reality check",
    tint: "text-neon",
    title: (
      <>
        Ours start at <span className="text-neon text-glow-cyan">$100</span>.
      </>
    ),
    sub: <>Free quotes. Fixed price. No surprise line items.</>,
    visual: <PriceScene />,
  },
  {
    id: "gravity",
    kicker: "Gravity pricing",
    tint: "text-volt",
    title: (
      <>
        Bigger builds scale by <span className="text-volt">gravity</span>, not greed.
      </>
    ),
    sub: <>G1 landing → G4 full product. Systematic, aggressive, always honest.</>,
    visual: <GravityScene />,
  },
  {
    id: "stack",
    kicker: "Proof, not promises",
    tint: "text-neon",
    title: (
      <>
        We ship the <span className="text-gradient">full stack.</span>
      </>
    ),
    sub: <>Apps, security research, and embedded hardware — all in-house.</>,
    visual: <StackScene />,
  },
  {
    id: "charity",
    kicker: "For good",
    tint: "text-gold",
    title: (
      <>
        Registered charity?
        <br /> Full app. <span className="text-gold">$0</span>. No catch.
      </>
    ),
    sub: <>BCW Mobile — a street-outreach crew&apos;s entire operation, built free.</>,
    visual: <CharityScene />,
  },
  {
    id: "yxe",
    kicker: "Home turf",
    tint: "text-cyber-violet",
    title: (
      <>
        Built in <span className="text-cyber-violet">Saskatoon</span>. For Saskatoon.
      </>
    ),
    sub: <>Local orgs move to the front of the build queue.</>,
    visual: <SaskatoonScene />,
  },
  {
    id: "enter",
    kicker: "rrdlabs.online",
    tint: "text-neon",
    title: (
      <>
        Let&apos;s <span className="text-gradient text-glow-cyan">ship it.</span>
      </>
    ),
    sub: <>Full pricing, real projects and free quotes on the other side.</>,
    visual: <FinalScene />,
    final: true,
  },
];

export default function CinematicIntro() {
  const [phase, setPhase] = useState<"idle" | "playing" | "exiting" | "done">("idle");
  const [idx, setIdx] = useState(0);
  const [reduced, setReduced] = useState<boolean>(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (phase !== "idle") return;
    if (reduced || sessionStorage.getItem(STORAGE_KEY)) {
      sessionStorage.setItem(STORAGE_KEY, "1");
      const t = window.setTimeout(() => setPhase("done"), 0);
      return () => window.clearTimeout(t);
    }
    const t = window.setTimeout(() => setPhase("playing"), 400);
    return () => window.clearTimeout(t);
  }, [phase, reduced]);

  useEffect(() => {
    if (phase !== "playing") return;
    document.body.style.overflow = "hidden";
    const interval = window.setInterval(() => {
      setIdx((i) => (i < scenes.length - 1 ? i + 1 : i));
    }, DURATION);
    return () => window.clearInterval(interval);
  }, [phase]);

  useEffect(() => {
    if (phase === "playing" && idx >= scenes.length - 1) {
      const t = window.setTimeout(finish, DURATION - 500);
      return () => window.clearTimeout(t);
    }
  }, [phase, idx]);

  useEffect(() => {
    if (phase === "exiting" || phase === "done") document.body.style.overflow = "";
  }, [phase]);

  function finish() {
    sessionStorage.setItem(STORAGE_KEY, "1");
    setPhase((p) => (p === "playing" || p === "idle" ? "exiting" : p));
    window.setTimeout(() => setPhase("done"), 600);
  }

  if (phase === "done") return null;

  const active = scenes[idx];

  return (
    <section
      aria-label="rrdlabs cinematic intro"
      className={`fixed inset-0 z-[70] flex flex-col bg-void transition-opacity duration-500 ${
        phase === "exiting" ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30 mask-fade-b" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon/10 blur-[170px]" />

      <div className="absolute left-0 top-0 z-20 h-1 w-full bg-edge">
        <div
          key={idx}
          className="intro-progress h-full bg-gradient-to-r from-neon to-volt"
          style={{ animationDuration: `${DURATION}ms` }}
        />
      </div>

      <button
        type="button"
        onClick={finish}
        className="absolute right-4 top-4 z-30 rounded border border-edge-strong bg-void/60 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-mist backdrop-blur transition hover:border-neon/50 hover:text-neon"
      >
        Skip intro →
      </button>

      <div className="relative flex flex-1 items-center justify-center">
        {scenes.map((s, i) => (
          <div
            key={s.id}
            className={`intro-scene absolute inset-0 grid place-items-center px-6 ${i === idx ? "is-active" : ""}`}
          >
            <div className="w-full max-w-2xl text-center">
              <p className={`font-mono text-[11px] uppercase tracking-[0.24em] ${s.tint}`}>{s.kicker}</p>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl">
                {s.title}
              </h2>
              <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-mist sm:text-base">{s.sub}</p>
              <div className="mt-9 min-h-[11rem]">{s.visual}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="relative z-20 flex items-center justify-between border-t border-edge px-6 py-3">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-mist/50">rrdlabs.online</p>
        <div className="flex items-center gap-1.5">
          {scenes.map((s, i) => (
            <span
              key={s.id}
              className={`h-1 rounded-full transition-all duration-300 ${i === idx ? "w-6 bg-neon" : "w-1 bg-edge-strong"}`}
            />
          ))}
        </div>
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-mist/50">≈ 60 s</p>
      </div>

      {active.final && (
        <div className="intro-line absolute inset-x-0 bottom-16 z-30 flex justify-center" style={{ animationDelay: "600ms" }}>
          <button
            type="button"
            onClick={finish}
            className="animate-pulse-ring inline-flex items-center gap-2 rounded-md bg-neon px-7 py-3.5 font-mono text-sm font-bold uppercase tracking-[0.14em] text-void transition hover:bg-white"
          >
            Enter the lab
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}