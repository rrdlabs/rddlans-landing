const year = new Date().getFullYear();

const columns = [
  {
    title: "Services",
    links: [
      { label: "Custom Web & Mobile Apps", href: "#services" },
      { label: "Security Research & Pentesting", href: "#services" },
      { label: "Custom Electronics & Firmware", href: "#services" },
      { label: "Freelance Engineering", href: "#services" },
    ],
  },
  {
    title: "Work",
    links: [
      { label: "Spider Protocol", href: "https://spider.d31337m3.com/spider/" },
      { label: "BCW Mobile", href: "https://d31337m3.com/bcw/" },
      { label: "Spider nodes (ESP32)", href: "https://github.com/rrdlabs/Sp1d3r_Node_esp32" },
      { label: "Vuln research tools", href: "https://github.com/rrdlabs/seedy" },
    ],
  },
  {
    title: "Elsewhere",
    links: [
      { label: "GitHub", href: "https://github.com/rrdlabs" },
      { label: "Contact", href: "mailto:hello@rddlans.online" },
      { label: "Back to top", href: "#top" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-edge bg-abyss/70">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <span className="grid h-8 w-8 place-items-center rounded-md border border-neon/40 bg-neon/10 font-mono text-sm font-bold text-neon">
                R
              </span>
              <span className="font-mono text-sm tracking-tight text-mist">
                rddlans<span className="text-neon">.</span>online
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-mist/80">
              Ranger-Andrews Research &amp; Development — an independent studio for
              custom software, security research, and embedded hardware.
            </p>
            <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-volt/25 bg-volt/5 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-volt">
              <span className="h-1.5 w-1.5 rounded-full bg-volt animate-pulse" />
              Currently accepting new projects
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-neon">{col.title}</p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      target={l.href.startsWith("http") ? "_blank" : undefined}
                      rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-sm text-mist/80 transition hover:text-white"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-edge pt-6 sm:flex-row sm:items-center">
          <p className="font-mono text-[11px] text-mist/60">
            © {year} rddlans.online · Ranger-Andrews Research &amp; Development
          </p>
          <p className="font-mono text-[11px] text-mist/60">
            Built in-house. Security-reviewed. <span className="text-neon">No templates.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}