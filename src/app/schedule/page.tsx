import { Section } from "@/components/Section";
import { CTAButton } from "@/components/CTAButton";
import { GeneralScheduleSection, MysoreScheduleSection, ScheduleNotes } from "@/components/ScheduleSections";
import {
  externalLinks,
  generalClassPricingTable,
  mysoreClassPricingTable,
  pricingItems,
  scheduleOperationGuide,
  siteInfo
} from "@/data/site";

type PricingTableData = {
  columns: string[];
  rows: string[][];
  coupons: string[];
};

function PricingTable({ title, data }: { title: string; data: PricingTableData }) {
  const periods = data.columns.slice(1);

  return (
    <div className="space-y-4">
      <h4 className="text-lg font-black text-text">{title}</h4>
      <div className="grid gap-4 md:hidden">
        {data.rows.map((row) => (
          <article key={row[0]} className="rounded-lg border border-gold/25 bg-surface p-5">
            <h5 className="text-lg font-black text-gold">{row[0]}</h5>
            <dl className="mt-4 grid gap-0 text-sm">
              {periods.map((period, index) => {
                const price = row[index + 1];

                return (
                  <div
                    key={`${row[0]}-${period}`}
                    className="flex items-center justify-between gap-4 border-t border-gold/15 py-3 first:border-t-0 first:pt-0 last:pb-0"
                  >
                    <dt className="text-muted">{period}</dt>
                    <dd className="text-right font-black text-text">{price === "-" ? "–" : `${price}원`}</dd>
                  </div>
                );
              })}
            </dl>
          </article>
        ))}
      </div>
      <div className="hidden overflow-x-auto rounded-lg border border-gold/25 md:block">
        <table className="w-full min-w-[680px] border-collapse bg-surface text-left text-sm">
          <thead>
            <tr className="bg-gold text-background">
              {data.columns.map((column) => (
                <th key={column} scope="col" className="whitespace-nowrap p-3 font-black">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.rows.map((row) => (
              <tr key={row[0]} className="border-t border-gold/20">
                {row.map((cell, index) => (
                  <td
                    key={`${row[0]}-${cell}-${index}`}
                    className={`whitespace-nowrap p-3 ${index === 0 ? "font-black text-gold" : "text-text/85"}`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm leading-6 text-muted">
        {data.coupons.map((coupon) => (
          <li key={coupon}>· {coupon}</li>
        ))}
      </ul>
    </div>
  );
}

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
                  {item.price ? <p className="mt-3 text-2xl font-black text-text">{item.price}</p> : null}
                  <p className="mt-3 text-sm leading-6 text-muted">{item.description}</p>
                </article>
              ))}
            </div>
            <div className="grid gap-8">
              <PricingTable title="일반 수업 회비" data={generalClassPricingTable} />
              <PricingTable title="마이솔 클래스 회비" data={mysoreClassPricingTable} />
              <aside className="rounded-lg border border-gold/25 bg-surface p-5">
                <p className="text-sm font-black uppercase text-gold">운영 안내</p>
                <ul className="mt-3 grid gap-2 text-sm leading-6 text-text/75">
                  {scheduleOperationGuide.map((guide) => (
                    <li key={guide}>· {guide}</li>
                  ))}
                </ul>
              </aside>
            </div>
          </section>
        </div>
        <p className="mt-8 text-text/70">
          기본 운영 시간은 {siteInfo.businessHours}입니다. 실제 예약 가능 인원과 변동 일정은 예약앱과
          별도 공지를 기준으로 확인해 주세요.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <CTAButton
            href={externalLinks.reservationApp}
            className="focus-visible:!border-text focus-visible:!bg-text focus-visible:!text-background active:!border-text active:!bg-text active:!text-background"
          >
            예약앱에서 확인
          </CTAButton>
          <CTAButton
            href={externalLinks.kakaoTalk}
            variant="secondary"
            className="!border-gold !bg-transparent !text-gold hover:!border-gold hover:!bg-gold hover:!text-background focus-visible:!border-gold focus-visible:!bg-gold focus-visible:!text-background active:!border-gold active:!bg-gold active:!text-background"
          >
            카카오톡 문의
          </CTAButton>
        </div>
      </Section>
    </main>
  );
}
