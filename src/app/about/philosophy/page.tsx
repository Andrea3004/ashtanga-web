import { AboutDetailLayout } from "@/components/AboutDetailLayout";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "수련 철학",
  description: "아쉬탕가 요가를 움직임, 호흡, 집중, 몸과 의식의 균형으로 바라보는 스튜디오의 수련 철학을 소개합니다.",
  path: "/about/philosophy"
});

export default function PhilosophyPage() {
  return (
    <AboutDetailLayout
      eyebrow="ABOUT"
      title="Philosophy"
      description="체계적인 프로그램과 검증된 시스템"
      heroImage="/images/philosophy-hero.jpg"
      heroImageAlt="아쉬탕가 요가 수련 철학을 상징하는 자세"
      heroImagePosition="18% 50%"
      heroOverlay={false}
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <article className="rounded-[1.25rem] border border-line/70 bg-background/70 p-8">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-gold">철학의 핵심</p>
          <p className="mt-4 text-lg leading-8 text-muted">
            요가 철학에 근거한 체계적인 프로그램과 검증된 시스템이어서 너무나 쉬운 아쉬탕가 요가
          </p>
        </article>
        <article className="rounded-[1.25rem] border border-line/70 bg-background/70 p-8">
          <p className="text-lg leading-8 text-muted">
            아쉬탕가 요가는 단지 ‘운동’이 아닙니다.
            그것은 유연성, 근지구력, 신진대사, 집중력, 그리고 육체와 의식의 균형이라는
            다섯 개의 축을 통해 모든 연령의 결핍을 정교하게 보완하고,
            삶의 에너지를 회복하게 해주는 ‘완성형 요가 수련법’입니다.
          </p>
        </article>
      </div>
    </AboutDetailLayout>
  );
}
