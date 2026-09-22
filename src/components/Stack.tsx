const tech = [
  "React",
  "Next.js",
  "TypeScript",
  "React Native",
  "Python",
  "FastAPI",
  "PostgreSQL",
  "Redis",
  "Solidity",
  "Foundry",
  "Docker",
  "GitHub Actions",
  "Stripe",
  "Supabase",
  "Playwright",
  "Tailwind CSS",
  "ESP32",
  "ESP-IDF",
  "LVGL",
  "Workbox",
  "PWA",
  "C / C++",
];

export default function Stack() {
  const row = [...tech, ...tech];
  return (
    <section aria-hidden="true" className="relative overflow-hidden border-y border-edge bg-abyss/60 py-6">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-void to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-void to-transparent" />
      <div className="flex w-max animate-marquee items-center gap-10">
        {row.map((t, i) => (
          <span key={`${t}-${i}`} className="flex items-center gap-10 whitespace-nowrap font-mono text-xs uppercase tracking-[0.22em] text-mist/60">
            {t}
            <span className="text-neon/50">◆</span>
          </span>
        ))}
      </div>
    </section>
  );
}