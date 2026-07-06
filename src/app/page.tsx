import Image from "next/image";
import { CTAButton } from "@/components/CTAButton";
import { PracticeCard } from "@/components/PracticeCard";
import { ScheduleCard } from "@/components/ScheduleCard";
import { Section } from "@/components/Section";
import { practicePrograms, scheduleItems, siteInfo, visitSteps } from "@/data/site";

export default function HomePage() {
  return (
    <main>
      <section className="relative grid min-h-[calc(100svh-72px)] overflow-hidden text-white">
        <Image
          src="/images/ashtanga-shala-hero.png"
          alt="아침 햇살이 들어오는 고요한 아쉬탕가 요가 수련실"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(23,28,22,0.78),rgba(23,28,22,0.28)_56%,rgba(23,28,22,0.08)),linear-gradient(0deg,rgba(23,28,22,0.34),rgba(23,28,22,0.02)_48%)]" />
        <div className="relative z-10 flex max-w-3xl flex-col justify-end px-5 pb-20 pt-32 sm:px-8 lg:px-20 lg:pb-28">
          <p className="mb-4 text-xs font-black uppercase text-[#f0c8a8]">Mysore · Led Class · Breathwork</p>
          <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-7xl">
            호흡으로 시작해 몸의 리듬을 되찾는 아쉬탕가 수련
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/90">
            매트 위에서 반복과 집중을 쌓아가는 전통 {siteInfo.nameKo}. 처음 방문하는 분도 자신의
            속도에 맞춰 안정적으로 시작할 수 있습니다.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <CTAButton href="/contact">상담 예약</CTAButton>
            <CTAButton href="/schedule" variant="secondary">
              수련 시간 보기
            </CTAButton>
          </div>
        </div>
      </section>

      <section className="grid border-y border-line bg-line sm:grid-cols-3">
        {[
          ["06:30", "평일 아침 마이솔"],
          ["1:1", "개별 호흡과 자세 관찰"],
          ["Beginner", "입문자 오리엔테이션"]
        ].map(([value, label]) => (
          <div key={value} className="min-h-32 bg-soft px-5 py-7 sm:px-8 lg:px-20">
            <strong className="block text-3xl font-black leading-none text-ink">{value}</strong>
            <span className="mt-3 block font-bold text-muted">{label}</span>
          </div>
        ))}
      </section>

      <Section eyebrow="Practice" title="매일 같은 순서 안에서 매일 다른 몸을 만납니다">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <p className="max-w-2xl text-lg text-muted">
            아쉬탕가는 정해진 시퀀스를 바탕으로 호흡, 시선, 움직임을 연결하는 수련입니다.
            빠르게 잘하는 것보다 꾸준히 관찰하는 태도를 중요하게 다룹니다.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {practicePrograms.map((program) => (
              <PracticeCard key={program.title} {...program} />
            ))}
          </div>
        </div>
      </Section>

      <Section eyebrow="Schedule" title="이번 주 기본 시간표" className="bg-charcoal" tone="dark">
        <div className="grid gap-4">
          {scheduleItems.map((item) => (
            <ScheduleCard key={item.day} {...item} />
          ))}
        </div>
      </Section>

      <Section eyebrow="First Visit" title="처음 오시는 분을 위한 안내" className="bg-white">
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
            오늘의 몸 상태에서 시작하세요
          </h2>
          <p className="mt-5 max-w-2xl text-muted">
            방문 상담, 체험 수련, 정규 등록 문의를 한 곳에서 받을 수 있도록 MVP 영역을 마련했습니다.
          </p>
        </div>
        <div className="rounded-lg border border-line bg-white p-6 shadow-soft">
          <p className="text-lg font-black text-ink">체험 수련 문의</p>
          <p className="mt-3 text-muted">현재는 예약 시스템 연결 전 단계입니다. 다음 단계에서 폼 저장을 연결합니다.</p>
          <CTAButton href="/contact" variant="dark" className="mt-6 w-full">
            문의 페이지로 이동
          </CTAButton>
        </div>
      </section>
    </main>
  );
}
