import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import type { ReactNode } from "react";

type Service = {
  icon: ReactNode;
  accent: string;
  ring: string;
  text: string;
  chip: string;
  title: string;
  description: string;
  deliverables: string[];
  chips: string[];
  proof: string;
};

const svg = {
  web: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2.5" />
      <path d="M3 9h18M9 21V9M7.5 6h.01M10.5 6h.01" />
    </svg>
  ),
  shield: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" />
      <path d="M9.5 12l2 2 3.5-4" />
    </svg>
  ),
  chip: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="6" width="12" height="12" rx="2" />
      <rect x="10" y="10" width="4" height="4" />
      <path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3" />
    </svg>
  ),
  wrench: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4l-2.8 2.8-2.8-2.8 2.8-2.8z" />
    </svg>
  ),
};

const services: Service[] = [
  {
    icon: svg.web,
    accent: "text-neon",
    ring: "group-hover:border-neon/50 group-hover:shadow-[0_0_40px_-8px_rgba(34,211,238,0.45)]",
    text: "text-neon",
    chip: "border-neon/30 bg-neon/10 text-neon",
    title: "Custom Web & Mobile Apps",
    description:
      "Full product delivery — not just a repo. We scope, design, build and deploy web apps, PWAs and mobile experiences that people actually keep using.",
    deliverables: ["App-store-free PWA installs", "Offline-first architecture", "Stripe, Supabase & live sync", "CI/CD to production"],
    chips: ["React", "Next.js", "React Native", "PWA", "Stripe", "Supabase"],
    proof: "Recent: BCW Mobile — installable, offline-first donation & dispatch app for a street-outreach crew.",
  },
  {
    icon: svg.shield,
    accent: "text-cyber-rose",
    ring: "group-hover:border-cyber-rose/50 group-hover:shadow-[0_0_40px_-8px_rgba(255,77,109,0.45)]",
    text: "text-cyber-rose",
    chip: "border-cyber-rose/30 bg-cyber-rose/10 text-cyber-rose",
    title: "Security Research & Pentesting",
    description:
      "We find the cracks before the market does. Offensive engagements, infrastructure and web penetration testing, and deep crypto / seed-recovery research — with findings you can act on.",
    deliverables: ["Web & infra penetration tests", "Vulnerability & tool research", "Crypto wallet & seed recovery", "Clear disclosure reports"],
    chips: ["Pentest", "Vuln research", "OSINT tooling", "Secure code review", "Disclosure"],
    proof: "Recent: seed-recovery & vulnerability research tools shipped as public projects.",
  },
  {
    icon: svg.chip,
    accent: "text-volt",
    ring: "group-hover:border-volt/50 group-hover:shadow-[0_0_40px_-8px_rgba(163,230,53,0.45)]",
    text: "text-volt",
    chip: "border-volt/30 bg-volt/10 text-volt",
    title: "Custom Electronics & Firmware",
    description:
      "From schematic to shipping firmware. Bespoke embedded systems on ESP32-class silicon with polished touch UIs, distributed node devices, and hardware-software integration that just works.",
    deliverables: ["ESP32 / ESP-IDF firmware", "LVGL touch UIs", "Wireless node devices", "Board bring-up & tuning"],
    chips: ["ESP32", "ESP-IDF", "LVGL", "C / C++", "Connected nodes"],
    proof: "Recent: CODEPET — an AI digital pet on the Waveshare ESP32-S3 Touch AMOLED.",
  },
  {
    icon: svg.wrench,
    accent: "text-gold",
    ring: "group-hover:border-gold/50 group-hover:shadow-[0_0_40px_-8px_rgba(236,175,62,0.45)]",
    text: "text-gold",
    chip: "border-gold/30 bg-gold/10 text-gold",
    title: "Freelance Engineering & Consulting",
    description:
      "Senior hands without a permanent seat. Architecture reviews, codebase rescues, CI/CD and infrastructure, and the occasional impossible integration. Tell us where it hurts.",
    deliverables: ["Architecture reviews", "Codebase rescue ops", "DevOps & CI/CD builds", "Technical strategy"],
    chips: ["Architecture", "DevOps", "Audits", "Rescue ops"],
    proof: "Hourly, sprint-by-sprint, or outcome-based — sized to your budget.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-24 md:py-32">
      <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-cyber-violet/8 blur-[130px]" />
      <SectionHeading
        eyebrow="What we do"
        title={
          <>
            Four lanes. <span className="text-gradient">One mission.</span>
          </>
        }
        description="Every service is run the same way: seriously, to production, and with the security hat on. If a build needs a hostile review, firmware, or a backend, it's all in-house."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 90}>
            <article className={`group relative h-full overflow-hidden rounded-xl border border-edge bg-panel/70 p-7 transition-all duration-300 hover:-translate-y-1 ${s.ring}`}>
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-px opacity-60"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(148,163,184,0.35), transparent)",
                }}
              />
              <div className={`mb-6 grid h-12 w-12 place-items-center rounded-lg border border-edge ${s.text}`}>
                {s.icon}
              </div>
              <h3 className="flex items-baseline gap-3 font-display text-xl font-semibold text-white">
                <span className="font-mono text-xs text-edge-strong">0{i + 1}</span>
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-mist">{s.description}</p>

              <ul className="mt-5 space-y-2">
                {s.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-2.5 text-sm text-mist/90">
                    <svg className={`mt-1.5 shrink-0 ${s.accent}`} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    {d}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {s.chips.map((c) => (
                  <span key={c} className={`rounded border px-2 py-1 font-mono text-[10px] uppercase tracking-wider ${s.chip}`}>
                    {c}
                  </span>
                ))}
              </div>

              <p className={`mt-6 border-t border-edge pt-4 font-mono text-[11px] leading-relaxed ${s.accent}`}>
                {s.proof}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}