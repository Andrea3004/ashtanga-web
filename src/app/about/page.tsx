import Link from "next/link";
import Image from "next/image";
import { siteInfo } from "@/data/site";

const aboutCards = [
  {
    title: "Studio",
    body: "전문 요가원의 조용한 분위기 속에서 새벽 수련부터 저녁 수련까지 이어갈 수 있는 프리미엄 아쉬탕가 공간입니다.",
    href: "/about/studio"
  },
  {
    title: "Teacher",
    body: "각자의 몸 상태와 수련 경험을 살피며 필요한 자세, 호흡, 휴식의 범위를 안내합니다.",
    href: "/about/teachers"
  },
  {
    title: "Philosophy",
    body: "정해진 순서를 반복하며 성취보다 관찰을, 빠른 변화보다 꾸준한 리듬을 중요하게 여깁니다.",
    href: "/about/philosophy"
  }
];

export const metadata = {
  title: "요가원 소개"
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-text">
      <section className="px-5 py-8 sm:px-8 lg:px-20 lg:py-10">
        <div className="relative overflow-hidden rounded-[2rem] border border-line/80 bg-surface shadow-soft">
          <Image
            src="/images/about-hero.jpg"
            alt=""
            fill
            priority
            sizes="(min-width: 1024px) calc(100vw - 10rem), (min-width: 640px) calc(100vw - 4rem), calc(100vw - 2.5rem)"
            className="object-cover"
            style={{ objectPosition: "34% 50%" }}
          />
          <div className="relative z-10 flex min-h-[320px] flex-col justify-end px-6 py-8 [text-shadow:0_2px_10px_rgba(8,26,32,0.38)] sm:px-10 sm:py-10 lg:px-14 lg:py-12">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.35em] text-gold/90">About</p>
            <h1 className="max-w-2xl text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
              조용히 깊어지는 수련을 위한 공간
            </h1>
            <p className="mt-4 max-w-xl text-base leading-7 text-text/80 sm:text-lg">
              {siteInfo.name}은 반복과 호흡을 통해 몸의 감각을 되찾는 전통 아쉬탕가 수련 공간입니다.
              요가 경험이 없는 분도 자신의 속도에 맞춰 안정적으로 시작할 수 있도록 안내합니다.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-10 grid max-w-6xl gap-4 md:grid-cols-3">
          {aboutCards.map((section) => (
            <Link
              key={section.title}
              href={section.href}
              className="group rounded-lg border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/80 hover:shadow-[0_12px_30px_rgba(255,204,102,0.12)] focus:outline-none focus:ring-2 focus:ring-gold/60"
            >
              <article className="h-full">
                <h2 className="text-xl font-black text-gold">
                  {section.title}
                  <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </h2>
                <p className="mt-3 text-muted">{section.body}</p>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
