import { Section } from "@/components/Section";

export const metadata = {
  title: "Teacher"
};

export default function TeachersPage() {
  return (
    <main>
      <Section eyebrow="About" title="Teacher">
        <div className="max-w-3xl space-y-6 text-lg leading-8 text-muted">
          <p>양우석 원장</p>
          <p>아쉬탕가 수련과 지도 철학을 바탕으로 개인의 몸 상태와 수련 경험에 맞는 방향을 안내합니다.</p>
        </div>
      </Section>
    </main>
  );
}
