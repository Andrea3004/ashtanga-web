import { Section } from "@/components/Section";
import { aboutSections, siteInfo } from "@/data/site";

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
            {aboutSections.map((section) => (
              <article key={section.title} className="rounded-lg border border-line bg-surface p-6">
                <h2 className="text-xl font-black text-gold">{section.title}</h2>
                <p className="mt-3 text-muted">{section.body}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
}
