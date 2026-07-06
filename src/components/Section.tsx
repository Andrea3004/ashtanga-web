import type { ReactNode } from "react";

type SectionProps = {
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "light" | "dark";
};

export function Section({ eyebrow, title, children, className = "", id, tone = "light" }: SectionProps) {
  const titleClass = tone === "dark" ? "text-white" : "text-ink";

  return (
    <section id={id} className={`px-5 py-20 sm:px-8 lg:px-20 lg:py-28 ${className}`}>
      {(eyebrow || title) && (
        <div className="mb-10 max-w-3xl">
          {eyebrow ? <p className="mb-3 text-xs font-black uppercase text-clay">{eyebrow}</p> : null}
          {title ? (
            <h2 className={`text-3xl font-black leading-tight sm:text-4xl lg:text-5xl ${titleClass}`}>{title}</h2>
          ) : null}
        </div>
      )}
      {children}
    </section>
  );
}
