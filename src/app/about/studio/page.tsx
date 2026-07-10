import { Section } from "@/components/Section";

export const metadata = {
  title: "Studio"
};

export default function StudioPage() {
  return (
    <main>
      <Section eyebrow="About" title="Studio">
        <div className="max-w-3xl space-y-6 text-lg leading-8 text-muted">
          <p>작은 관찰</p>
          <p>몸과 호흡, 그리고 감각을 세심하게 바라보는 것에서 수련은 시작됩니다.</p>
          <p>꾸준한 리듬</p>
          <p>특별한 재능보다 중요한 것은 반복과 리듬입니다. 작은 실천이 깊은 변화를 만듭니다.</p>
          <p>성장의 기록</p>
          <p>수련 데이터와 개인 피드백을 통해 자신의 변화를 객관적으로 확인하며 꾸준한 성장을 이어갑니다.</p>
        </div>
      </Section>
    </main>
  );
}
