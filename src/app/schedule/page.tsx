import { ScheduleCard } from "@/components/ScheduleCard";
import { Section } from "@/components/Section";
import { CTAButton } from "@/components/CTAButton";
import { externalLinks, scheduleItems, siteInfo } from "@/data/site";

export const metadata = {
  title: "시간표"
};

export default function SchedulePage() {
  return (
    <main>
      <Section eyebrow="Schedule" title="운영 시간과 수련 일정" className="bg-charcoal" tone="dark">
        <div className="grid gap-4">
          {scheduleItems.map((item) => (
            <ScheduleCard key={item.day} {...item} />
          ))}
        </div>
        <p className="mt-8 text-text/70">
          기본 운영 시간은 {siteInfo.businessHours}입니다. 공휴일, 레드 클래스, 워크숍 일정은 예약앱과
          공지를 기준으로 확인해 주세요.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <CTAButton href={externalLinks.reservationApp}>예약앱에서 확인</CTAButton>
          <CTAButton href={externalLinks.kakaoTalk} variant="secondary">
            카카오톡 문의
          </CTAButton>
        </div>
      </Section>
    </main>
  );
}
