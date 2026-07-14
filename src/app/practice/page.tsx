import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/Section";
import { practiceAppShowcase } from "@/data/practiceApp";
import { externalLinks } from "@/data/site";

const practiceSteps = [
  {
    title: "처음 방문하시는 분",
    body: "처음 방문 전 카카오톡 상담을 통해 수련 경험과 몸 상태를 알려주시면 가장 자연스러운 시작 방법을 안내해드립니다."
  },
  {
    title: "회원 전용 Practice App",
    body: "등록 회원은 Practice App에서 수업 예약과 공지 확인, 자신의 수련 기록과 성장 과정을 체계적으로 관리할 수 있습니다."
  },
  {
    title: "수련 기록과 성장 관리",
    body: "출석 히트맵, 레벨별 학습 진행도, 수련 데이터 분석 리포트를 통해 자신의 수련 과정을 확인할 수 있습니다."
  }
];

export const metadata = {
  title: "수련"
};

function PracticeAppScreenPlaceholder() {
  return (
    <div className="flex h-full flex-col rounded-[1.25rem] border border-gold/30 bg-surface/80 p-4">
      <div className="flex items-center justify-between border-b border-line/70 pb-3">
        <div className="h-2 w-16 rounded-full bg-gold/70" />
        <div className="h-5 w-5 rounded-full border border-gold/50" />
      </div>
      <div className="mt-5 space-y-3">
        <div className="h-3 rounded-full bg-text/20" />
        <div className="h-3 w-3/4 rounded-full bg-text/15" />
        <div className="grid grid-cols-4 gap-2">
          {Array.from({ length: 16 }).map((_, index) => (
            <span key={index} className={`h-7 rounded-md ${index % 4 === 0 ? "bg-gold/45" : "bg-text/10"}`} />
          ))}
        </div>
        <div className="h-20 rounded-lg border border-line/70 bg-background/70" />
        <div className="grid gap-2">
          <div className="h-8 rounded-lg bg-text/10" />
          <div className="h-8 rounded-lg bg-text/10" />
        </div>
      </div>
      <p className="mt-auto pt-5 text-center text-[0.65rem] font-medium tracking-[0.08em] text-muted">
        App screen coming soon
      </p>
      <div className="mt-4 grid grid-cols-4 gap-2 border-t border-line/70 pt-3">
        {Array.from({ length: 4 }).map((_, index) => (
          <span key={index} className="h-2 rounded-full bg-gold/30" />
        ))}
      </div>
    </div>
  );
}

export default function PracticePage() {
  return (
    <main className="min-h-screen bg-background text-text">
      <section className="px-5 pt-8 sm:px-8 lg:px-20 lg:pt-10">
        <div className="relative overflow-hidden rounded-[2rem] border border-line/80 bg-surface shadow-soft">
          <Image
            src="/images/practice-hero.jpg"
            alt=""
            fill
            priority
            sizes="(min-width: 1024px) calc(100vw - 10rem), (min-width: 640px) calc(100vw - 4rem), calc(100vw - 2.5rem)"
            className="object-cover"
            style={{ objectPosition: "50% 45%" }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,26,32,0.86),rgba(8,26,32,0.58)_54%,rgba(8,26,32,0.32)),linear-gradient(0deg,rgba(8,26,32,0.54),rgba(8,26,32,0.1)_52%)]" />
          <div className="relative z-10 flex min-h-[320px] items-end px-6 py-8 sm:px-10 sm:py-10 lg:px-14 lg:py-12">
            <div className="max-w-2xl [text-shadow:0_2px_10px_rgba(8,26,32,0.38)]">
              <p className="mb-3 text-xs font-black uppercase tracking-[0.35em] text-gold/90">PRACTICE</p>
              <h1 className="text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
                호흡, 시선, 움직임을 하나의 리듬으로 연결합니다
              </h1>
              <p className="mt-4 max-w-xl text-base leading-7 text-text/80 sm:text-lg">
                아쉬탕가 요가는 몸과 호흡을 함께 읽어가며, 각자의 속도에 맞춘 수련을 이어가는 방식입니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Section className="pt-10 lg:pt-14">
        <div className="grid gap-4 lg:grid-cols-3">
          <article className="rounded-[1.25rem] border border-line bg-surface p-6">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-gold">For Beginner</p>
            <h2 className="mt-4 text-2xl font-black text-text">일반 수업 · Beginner Class</h2>
            <p className="mt-4 leading-7 text-muted">
              아쉬탕가 요가를 처음 접하는 분들을 위한 입문 수업입니다.
              기본 순서와 호흡, 움직임의 원리를 단계적으로 배워갑니다.
            </p>
            <Link
              href="/schedule"
              className="mt-6 inline-flex items-center gap-2 rounded-md border border-gold/40 bg-gold/10 px-4 py-2.5 text-sm font-semibold text-gold transition-colors hover:border-gold/70 hover:bg-gold/20 focus-visible:outline focus-visible:outline-4 focus-visible:outline-gold/30"
            >
              일반 수업 시간표 보기
              <span aria-hidden="true">→</span>
            </Link>
          </article>

          <article className="rounded-[1.25rem] border border-line bg-surface p-6 lg:col-span-2">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-gold">For Practitioner</p>
            <h2 className="mt-4 text-2xl font-black text-text">마이솔 클래스 · Mysore Class</h2>
            <p className="mt-4 max-w-3xl leading-7 text-muted">
              개인의 호흡과 리듬에 맞추어 자신의 수련을 만들어가는 전통적인 아쉬탕가 수련 방식입니다.
            </p>

            <div className="mt-6 grid gap-4 xl:grid-cols-2">
              <div className="rounded-[1rem] border border-line/70 bg-background/70 p-5">
                <h3 className="text-lg font-black text-text">Self Practice</h3>
                <p className="mt-3 text-sm leading-7 text-muted">
                  자신의 호흡과 리듬에 맞춰 스스로 수련하며,
                  선생님의 개별 지도를 받는 방식입니다.
                </p>
              </div>
              <div className="rounded-[1rem] border border-line/70 bg-background/70 p-5">
                <h3 className="text-lg font-black text-text">Led Class</h3>
                <p className="mt-3 text-sm leading-7 text-muted">
                  선생님의 산스크리트 구령에 따라
                  호흡과 빈야사의 정확한 리듬을 함께 익히는 수련입니다.
                </p>
              </div>
            </div>
            <Link
              href="/schedule#mysore"
              className="mt-6 inline-flex items-center gap-2 rounded-md border border-gold/40 bg-gold/10 px-4 py-2.5 text-sm font-semibold text-gold transition-colors hover:border-gold/70 hover:bg-gold/20 focus-visible:outline focus-visible:outline-4 focus-visible:outline-gold/30"
            >
              마이솔 시간표 보기
              <span aria-hidden="true">→</span>
            </Link>
          </article>

          <article className="rounded-[1.25rem] border border-line bg-surface p-6 lg:col-span-3">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-gold">Meditation</p>
            <h2 className="mt-4 text-2xl font-black text-text">명상</h2>
            <p className="mt-4 leading-7 text-muted">
              이완과 집중, 감각의 회복을 통해
              몸과 의식의 균형을 경험하는 수련입니다.
            </p>
          </article>
        </div>

        <div className="mt-10 rounded-[1.25rem] border border-line bg-surface p-6 sm:p-8">
          <h2 className="text-2xl font-black text-text">처음 방문과 회원 전용 수련 관리 안내</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {practiceSteps.map((step) => (
              <div key={step.title} className="rounded-[1rem] border border-line/70 bg-background/70 p-5">
                <h3 className="text-lg font-black text-text">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{step.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <a
              href={externalLinks.kakaoTalk}
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-gold bg-gold px-4 py-2 font-black text-background transition hover:-translate-y-0.5 hover:border-text hover:bg-text hover:text-background focus-visible:border-text focus-visible:bg-text focus-visible:text-background focus-visible:outline focus-visible:outline-4 focus-visible:outline-gold/30 active:border-text active:bg-text active:text-background"
              target="_blank"
              rel="noreferrer"
            >
              카카오톡 상담하기
            </a>
            <a
              href={externalLinks.reservationApp}
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-gold bg-transparent px-4 py-2 font-black text-gold transition hover:-translate-y-0.5 hover:bg-gold hover:text-background focus-visible:bg-gold focus-visible:text-background focus-visible:outline focus-visible:outline-4 focus-visible:outline-gold/30 active:bg-gold active:text-background"
              target="_blank"
              rel="noreferrer"
            >
              Practice App 로그인
            </a>
          </div>
          <p className="mt-4 text-sm leading-6 text-muted">Practice App은 등록 회원 전용이며 회원가입 후 이용할 수 있습니다.</p>
        </div>

        <section className="mt-10 rounded-[1.25rem] border border-line bg-surface p-7 sm:p-8 lg:p-9">
          <div className="max-w-2xl">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-gold">Members Only</p>
            <h2 className="mt-4 text-2xl font-black text-text sm:text-3xl">회원 전용 Practice App</h2>
            <p className="mt-4 text-xl font-black leading-relaxed text-text sm:text-2xl">
              예약을 넘어
              <br />
              수련의 성장 과정을
              <br />
              기록하고 관리합니다.
            </p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {practiceAppShowcase.map((feature) => (
              <article key={feature.title} className="rounded-[1rem] border border-line/70 bg-background/70 px-5 py-4">
                <h3 className="text-lg font-black text-text">{feature.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{feature.description}</p>
              </article>
            ))}
          </div>

          <div className="-mx-7 mt-7 flex snap-x snap-mandatory gap-4 overflow-x-auto px-7 pb-2 sm:-mx-8 sm:px-8 md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 md:pb-0 lg:-mx-3 lg:grid-cols-4 lg:gap-3">
            {practiceAppShowcase.map((screen) => (
              <article
                key={screen.title}
                className="min-w-[82%] snap-start overflow-hidden rounded-[1rem] border border-line/70 bg-background/70 sm:min-w-[54%] md:min-w-0"
              >
                <div className="relative aspect-[9/16] overflow-hidden border-b border-line/70 bg-background p-4">
                  {screen.image ? (
                    <Image
                      src={screen.image}
                      alt={screen.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 260px, (min-width: 768px) 45vw, 78vw"
                      className="object-contain"
                    />
                  ) : (
                    <PracticeAppScreenPlaceholder />
                  )}
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-black text-text">{screen.title}</h3>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <p className="max-w-xl text-sm leading-7 text-muted">
              Practice App은 등록 회원에게 제공되는 회원 전용 수련 관리 시스템입니다.
            </p>
            <a
              href={externalLinks.reservationApp}
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-gold bg-transparent px-4 py-2 text-sm font-black text-gold transition hover:-translate-y-0.5 hover:bg-gold hover:text-background focus-visible:bg-gold focus-visible:text-background focus-visible:outline focus-visible:outline-4 focus-visible:outline-gold/30 active:bg-gold active:text-background"
              target="_blank"
              rel="noreferrer"
            >
              Practice App 로그인
            </a>
          </div>
        </section>
      </Section>
    </main>
  );
}
