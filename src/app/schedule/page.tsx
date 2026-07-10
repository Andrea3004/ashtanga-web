import { Section } from "@/components/Section";
import { CTAButton } from "@/components/CTAButton";
import { GeneralScheduleSection, MysoreScheduleSection, ScheduleNotes } from "@/components/ScheduleSections";
import { externalLinks, pricingItems, siteInfo } from "@/data/site";

export const metadata = {
  title: "시간표"
};

export default function SchedulePage() {
  return (
    <main>
      <Section eyebrow="Schedule" title="운영 시간과 수련 일정" className="bg-charcoal" tone="dark">
        <div className="grid gap-12">
          <GeneralScheduleSection />
          <MysoreScheduleSection />
          <ScheduleNotes />
          <section aria-labelledby="pricing-title" className="space-y-5">
            <div>
              <p className="text-xs font-black uppercase text-gold">Pricing</p>
              <h3 id="pricing-title" className="mt-2 text-2xl font-black text-text">
                수강료 안내
              </h3>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {pricingItems.map((item) => (
                <article key={item.title} className="rounded-lg border border-gold/25 bg-surface p-5">
                  <h4 className="text-lg font-black text-gold">{item.title}</h4>
                  <p className="mt-3 text-2xl font-black text-text">{item.price}</p>
                  <p className="mt-3 text-sm leading-6 text-muted">{item.description}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
        <p className="mt-8 text-text/70">
          기본 운영 시간은 {siteInfo.businessHours}입니다. 실제 예약 가능 인원과 변동 일정은 예약앱과
          별도 공지를 기준으로 확인해 주세요.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <CTAButton href={externalLinks.reservationApp} className="hover:!border-gold hover:!bg-gold/90">
            예약앱에서 확인
          </CTAButton>
          <CTAButton
            href={externalLinks.kakaoTalk}
            variant="secondary"
            className="border-gold text-gold hover:!border-gold hover:!bg-gold/10 hover:!text-gold"
          >
            카카오톡 문의
          </CTAButton>
        </div>
      </Section>
    </main>
  );
}
