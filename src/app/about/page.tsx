import { Section } from "@/components/Section";
import { siteInfo } from "@/data/site";

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
          <div className="grid gap-4 md:grid-cols-2">
            <article className="rounded-lg border border-line bg-white p-6">
              <h2 className="text-xl font-black text-ink">작은 관찰</h2>
              <p className="mt-3 text-muted">자세의 완성보다 오늘의 호흡, 균형, 긴장을 먼저 살핍니다.</p>
            </article>
            <article className="rounded-lg border border-line bg-white p-6">
              <h2 className="text-xl font-black text-ink">꾸준한 리듬</h2>
              <p className="mt-3 text-muted">정해진 시퀀스 안에서 수련의 변화를 차분히 쌓아갑니다.</p>
            </article>
          </div>
        </div>
      </Section>
    </main>
  );
}
