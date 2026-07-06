import { PracticeCard } from "@/components/PracticeCard";
import { Section } from "@/components/Section";
import { practicePrograms } from "@/data/site";

export const metadata = {
  title: "수련"
};

export default function PracticePage() {
  return (
    <main>
      <Section eyebrow="Practice" title="호흡, 시선, 움직임을 하나의 리듬으로 연결합니다">
        <div className="grid gap-4 md:grid-cols-3">
          {practicePrograms.map((program) => (
            <PracticeCard key={program.title} {...program} />
          ))}
        </div>
        <div className="mt-12 rounded-lg border border-line bg-surface p-6">
          <h2 className="text-2xl font-black text-ink">수련 원칙</h2>
          <p className="mt-4 max-w-3xl text-muted">
            강도를 높이는 것보다 호흡을 잃지 않는 범위에서 움직입니다. 선생님의 안내에 따라
            필요한 자세만 더하고, 몸의 상태에 맞춰 휴식과 변형 동작을 사용합니다.
          </p>
        </div>
      </Section>
    </main>
  );
}
