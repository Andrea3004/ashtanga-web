import { ScheduleCard } from "@/components/ScheduleCard";
import { Section } from "@/components/Section";
import { scheduleItems } from "@/data/site";

export const metadata = {
  title: "시간표"
};

export default function SchedulePage() {
  return (
    <main>
      <Section eyebrow="Schedule" title="생활 리듬에 맞춰 고를 수 있는 기본 시간표" className="bg-charcoal" tone="dark">
        <div className="grid gap-4">
          {scheduleItems.map((item) => (
            <ScheduleCard key={item.day} {...item} />
          ))}
        </div>
        <p className="mt-8 text-white/70">
          공휴일, 워크숍, 선생님 일정에 따라 시간표는 조정될 수 있습니다. 실제 예약 연동은 다음 단계에서 진행합니다.
        </p>
      </Section>
    </main>
  );
}
