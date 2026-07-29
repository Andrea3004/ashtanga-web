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
            전통적으로는 파탄잘리 요가 철학에 근거한 체계적인 프로그램과 검증된 시스템을 계승합니다.
          </p>
        </article>
        <article className="rounded-[1.25rem] border border-line/70 bg-background/70 p-8">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-gold">현대적 가치</p>
          <p className="text-lg leading-8 text-muted">
            현대적으로는 유연성, 근지구력, 호흡집중력의 수련체계로 이미 검증된 심신의 밸런스, 신진대사
            를 향상시켜 근골격계의 퇴화방지와 노화지연을 추구합니다.
          </p>
        </article>
        <article className="rounded-[1.25rem] border border-line/70 bg-background/70 p-8 lg:col-span-2">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-gold">개별적인 수련</p>
          <p className="mt-4 text-lg leading-8 text-muted">
            아쉬탕가 요가는 모든 사람이 같은 방식으로 수련하는 것이 아니라, 각자의 신체 구조와 움직임, 호흡의
            특성, 회복 속도를 존중합니다. 세심한 관찰과 신체 리딩, 지속적인 피드백을 통해 현재 단계에 가장 적합한
            수련을 이어가며, 안전하고 지속 가능한 성장을 추구합니다.
          </p>
        </article>
      </div>
    </AboutDetailLayout>
  );
}
