"use client";

import { useEffect, useRef, useState } from "react";

type CollapsibleSectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  summary: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
};

export default function CollapsibleSection({
  id,
  eyebrow,
  title,
  summary,
  defaultOpen = false,
  children,
}: CollapsibleSectionProps) {
  const ref = useRef<HTMLDetailsElement>(null);
  const [open, setOpen] = useState(defaultOpen);

  useEffect(() => {
    function reveal() {
      const hash = window.location.hash.slice(1);
      if (!hash) return;
      if (hash === id && ref.current) {
        ref.current.open = true;
        setOpen(true);
      }
    }

    reveal();
    window.addEventListener("hashchange", reveal);
    return () => window.removeEventListener("hashchange", reveal);
  }, [id]);

  return (
    <details
      ref={ref}
      id={id}
      open={open}
      onToggle={(e) => setOpen((e.currentTarget as HTMLDetailsElement).open)}
      className="group scroll-mt-24 border-b border-edge"
    >
      <summary className="flex cursor-pointer list-none items-center gap-6 px-6 py-7 transition hover:bg-panel/40 md:px-10">
        <div className="flex-1">
          <p className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-neon">
            <span className="inline-block h-px w-6 bg-neon/60" />
            {eyebrow}
          </p>
          <h2 className="mt-2 font-display text-xl font-semibold tracking-tight text-white sm:text-2xl">
            {title}
          </h2>
          <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-mist/70">{summary}</p>
        </div>

        <span
          aria-hidden="true"
          className="grid h-9 w-9 shrink-0 place-items-center rounded-md border border-edge-strong font-mono text-lg text-neon transition group-open:rotate-45 group-open:border-neon/60"
        >
          +
        </span>
      </summary>

      <div className="border-t border-edge/60 bg-abyss/40">{children}</div>
    </details>
  );
}
