import Image from "next/image";
import { CTAButton } from "@/components/CTAButton";
import { PracticeCard } from "@/components/PracticeCard";
import { GeneralScheduleSection, MysoreScheduleSection, ScheduleNotes } from "@/components/ScheduleSections";
import { Section } from "@/components/Section";
import { externalLinks, practicePrograms, siteInfo, socialLinks, visitSteps } from "@/data/site";

export default function HomePage() {
  return (
    <main>
      <section className="relative grid min-h-[calc(100svh-72px)] overflow-hidden text-text">
        <Image
          src="/images/ashtanga-shala-hero.png"
          alt="아침 햇살이 들어오는 고요한 아쉬탕가 요가 수련실"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,26,32,0.9),rgba(8,26,32,0.55)_56%,rgba(8,26,32,0.24)),linear-gradient(0deg,rgba(8,26,32,0.58),rgba(8,26,32,0.08)_48%)]" />
        <div className="relative z-10 flex max-w-3xl flex-col justify-end px-5 pb-16 pt-28 sm:px-8 sm:pb-20 lg:px-20 lg:pb-28">
          <p className="mb-4 text-xs font-black uppercase text-gold">{siteInfo.tagline}</p>
          <h1 className="text-3xl font-black leading-tight sm:text-5xl lg:text-7xl">
            매일의 호흡을 쌓는 정통 아쉬탕가 수련
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-text/90 sm:mt-6 sm:text-lg">
            {siteInfo.address}에 위치한 {siteInfo.nameKo}입니다. 전통적인 마이솔 방식과 현대적 수업 구성을 
            조화롭게 운영하며, 몸과 호흡에 맞춰 꾸준히 이어갈 수 있도록 안내합니다.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <CTAButton href={externalLinks.kakaoTalk}>1회 체험 문의</CTAButton>
            <CTAButton href="/schedule" variant="secondary">
              시간표 보기
            </CTAButton>
            <CTAButton href={externalLinks.naverMap} variant="secondary">
              위치 보기
            </CTAButton>
            <CTAButton href="/practice#practice-app" variant="member">
              수련과 성장 기록
            </CTAButton>
          </div>
        </div>
      </section>

      <section className="grid border-y border-line bg-line sm:grid-cols-3">
        {[
          ["05:30", "평일 오픈"],
          ["20:40", "평일 마지막 수련"],
          ["10:00", "토요일 오전 수업"]
        ].map(([value, label]) => (
          <div key={value} className="min-h-32 bg-soft px-5 py-7 sm:px-8 lg:px-20">
            <strong className="block text-3xl font-black leading-none text-gold">{value}</strong>
            <span className="mt-3 block font-bold text-muted">{label}</span>
          </div>
        ))}
      </section>

      <Section eyebrow="Practice" title="같은 순서 안에서 오늘의 몸을 관찰합니다">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <p className="max-w-2xl text-lg text-muted">
            아쉬탕가는 정해진 순서 안에서 호흡, 시선, 움직임을 연결하는 수련입니다. 빠르게 많은
            동작을 해내기보다, 꾸준한 반복 속에서 몸의 상태를 정확히 보는 태도를 중요하게 다룹니다.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {practicePrograms.map((program) => (
              <PracticeCard key={program.title} {...program} />
            ))}
          </div>
        </div>
      </Section>

      <Section eyebrow="Schedule" title="수업 구성별 시간표" className="bg-charcoal" tone="dark">
        <div className="grid gap-10">
          <GeneralScheduleSection />
          <MysoreScheduleSection />
          <ScheduleNotes />
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <CTAButton href={externalLinks.reservationApp}>예약앱에서 일정 확인</CTAButton>
          <CTAButton href={externalLinks.kakaoTalk} variant="secondary">
            방문 전 문의
          </CTAButton>
        </div>
      </Section>

      <Section eyebrow="Connect" title="다양한 채널에서 아쉬탕가 요가 스튜디오를 만나보세요" className="bg-background">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {socialLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="rounded-lg border border-line bg-surface p-5 transition hover:border-gold hover:-translate-y-0.5"
            >
              <h3 className="text-lg font-black text-gold">{link.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{link.description}</p>
            </a>
          ))}
        </div>
      </Section>

      <Section eyebrow="First Visit" title="처음 오시는 분을 위한 안내" className="bg-background">
        <ol className="grid gap-4 md:grid-cols-3">
          {visitSteps.map((step, index) => (
            <li key={step.title} className="min-h-44 rounded-lg border border-line bg-paper p-6">
              <span className="text-sm font-black text-clay">0{index + 1}</span>
              <strong className="mt-5 block text-xl font-black text-ink">{step.title}</strong>
              <span className="mt-3 block text-muted">{step.body}</span>
            </li>
          ))}
        </ol>
      </Section>

      <section className="grid gap-10 bg-soft px-5 py-20 sm:px-8 lg:grid-cols-[0.9fr_0.7fr] lg:px-20 lg:py-28">
        <div>
          <p className="mb-3 text-xs font-black uppercase text-clay">Contact</p>
          <h2 className="text-3xl font-black leading-tight text-ink sm:text-4xl lg:text-5xl">
            방문 전 편하게 문의하세요
          </h2>
          <p className="mt-5 max-w-2xl text-muted">
            처음 수련, 수업 시간, 등록 방법은 상담 문의 페이지를 클릭하세요.
          <span className="block mt-2">
    예약 앱 이용을 위해서는 회원가입이 필요합니다.
  </span>
</p>
        </div>
        <div className="rounded-lg border border-line bg-surface p-6 shadow-soft">
          <p className="text-lg font-black text-ink">수련 예약 및 상담</p>
          <p className="mt-3 text-muted">{siteInfo.businessHours}</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            <CTAButton href={externalLinks.reservationApp} variant="dark" className="w-full">
              수업 예약하기(회원전용)
            </CTAButton>
            <CTAButton href="/contact" variant="dark" className="w-full">
              상담 문의 페이지
            </CTAButton>
          </div>
        </div>
      </section>
    </main>
  );
}
