import { Section } from "@/components/Section";

export const metadata = {
  title: "Philosophy"
};

export default function PhilosophyPage() {
  return (
    <main>
      <Section eyebrow="About" title="Philosophy">
        <div className="max-w-3xl space-y-6 text-lg leading-8 text-muted">
          <p>체계적인 프로그램과 검증된 시스템이어서 너무나 쉬운 아쉬탕가 요가</p>
          <p>
            아쉬탕가 요가는 단지 ‘운동’이 아닙니다.
            그것은 유연성, 근지구력, 신진대사, 집중력, 그리고 육체와 의식의 균형이라는
            다섯 개의 축을 통해 모든 연령의 결핍을 정교하게 보완하고,
            삶의 에너지를 회복하게 해주는 ‘완성형 요가 수련법’입니다.
          </p>
        </div>
      </Section>
    </main>
  );
}
