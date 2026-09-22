import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center items-center" : "text-left items-start";

  return (
    <Reveal className={`flex max-w-2xl flex-col ${alignment}`}>
      <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-neon">
        <span className="inline-block h-px w-8 bg-neon/60" />
        {eyebrow}
        {align === "center" && <span className="inline-block h-px w-8 bg-neon/60" />}
      </p>
      <h2 className="mt-5 font-display text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-mist">{description}</p>
      )}
    </Reveal>
  );
}