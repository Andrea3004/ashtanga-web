import Link from "next/link";
import { Section } from "@/components/Section";
import { siteInfo } from "@/data/site";

const aboutCards = [
  {
    title: "Studio",
    body: "넓은 매트 간격과 조용한 분위기 속에서 새벽 수련부터 저녁 수련까지 이어갈 수 있는 프리미엄 아쉬탕가 공간입니다.",
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
    <main>
      <Section eyebrow="About" title="조용히 깊어지는 수련을 위한 공간">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <p className="text-lg text-muted">
            {siteInfo.name}은 반복과 호흡을 통해 몸의 감각을 되찾는 전통 아쉬탕가 수련 공간입니다.
            요가 경험이 없는 분도 자신의 속도에 맞춰 안정적으로 시작할 수 있도록 안내합니다.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
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
        </div>
      </Section>
    </main>
  );
}
