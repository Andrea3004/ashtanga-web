import Link from "next/link";
import type { ReactNode } from "react";

type AboutDetailLayoutProps = {
  eyebrow: string;
  title: string;
  description: string;
  heroImage?: string;
  children: ReactNode;
};

export function AboutDetailLayout({
  eyebrow,
  title,
  description,
  heroImage = "/images/about-hero.png",
  children
}: AboutDetailLayoutProps) {
  const heroBackground = heroImage
    ? `linear-gradient(95deg, rgba(8, 26, 32, 0.94) 0%, rgba(8, 26, 32, 0.72) 42%, rgba(8, 26, 32, 0.9) 100%), url(${heroImage})`
    : `linear-gradient(95deg, rgba(8, 26, 32, 0.94) 0%, rgba(8, 26, 32, 0.72) 100%)`;

  return (
    <main className="min-h-screen bg-background text-text">
      <section className="px-5 py-8 sm:px-8 lg:px-20 lg:py-10">
        <div
          className="relative overflow-hidden rounded-[2rem] border border-line/80 bg-surface shadow-soft"
          style={{
            backgroundImage: heroBackground,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
          }}
        >
          <div className="relative flex min-h-[320px] flex-col justify-between px-6 py-8 sm:px-10 sm:py-10 lg:px-14 lg:py-12">
            <div className="flex items-center justify-start">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-medium text-gold transition-colors duration-200 hover:text-text"
              >
                <span aria-hidden="true">←</span>
                <span>About</span>
              </Link>
            </div>

            <div className="max-w-2xl">
              <p className="mb-3 text-xs font-black uppercase tracking-[0.35em] text-gold/90">{eyebrow}</p>
              <h1 className="text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">{title}</h1>
              <p className="mt-4 max-w-xl text-base leading-7 text-text/80 sm:text-lg">{description}</p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-6xl">
          <div className="rounded-[1.5rem] border border-line/70 bg-surface/80 p-6 sm:p-8 lg:p-10">
            {children}

            <div className="mt-10 border-t border-line/60 pt-6">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-medium text-gold transition-colors duration-200 hover:text-text"
              >
                <span aria-hidden="true">←</span>
                <span>About으로 돌아가기</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
