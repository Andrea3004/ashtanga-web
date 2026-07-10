import Link from "next/link";
import { Section } from "@/components/Section";
import { externalLinks } from "@/data/site";

const practiceSteps = [
  {
    title: "1. 예약 앱 공지 확인 (회원 전용)",
    body: "기존 회원은 예약 앱에서 수업 공지와 예약 가능 시간을 확인합니다."
  },
  {
    title: "2. 카카오톡 상담",
    body: "처음 방문하시는 분은 수련 경험과 몸 상태를 공유하면 가장 자연스러운 시작 방법을 안내받을 수 있습니다."
  },
  {
    title: "3. 1회 체험 예약 후 방문",
    body: "체험 예약 후 수업의 흐름을 경험하며 편안하게 첫 수련을 시작할 수 있습니다."
  }
];

export const metadata = {
  title: "수련"
};

export default function PracticePage() {
  return (
    <main>
      <Section eyebrow="PRACTICE" title="호흡, 시선, 움직임을 하나의 리듬으로 연결합니다">
        <p className="mb-10 max-w-3xl text-lg leading-8 text-muted">
          아쉬탕가 요가는 몸과 호흡을 함께 읽어가며, 각자의 속도에 맞춘 수련을 이어가는 방식입니다.
        </p>

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
          <h2 className="text-2xl font-black text-text">처음 수련을 시작하는 분들을 위한 안내</h2>
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
              href={externalLinks.reservationApp}
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-gold bg-gold px-4 py-2 font-black text-background transition hover:-translate-y-0.5 hover:border-text hover:bg-text hover:text-background focus-visible:border-text focus-visible:bg-text focus-visible:text-background focus-visible:outline focus-visible:outline-4 focus-visible:outline-gold/30 active:border-text active:bg-text active:text-background"
              target="_blank"
              rel="noreferrer"
            >
              예약 앱 바로가기
            </a>
            <a
              href={externalLinks.kakaoTalk}
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-gold bg-transparent px-4 py-2 font-black text-gold transition hover:-translate-y-0.5 hover:bg-gold hover:text-background focus-visible:bg-gold focus-visible:text-background focus-visible:outline focus-visible:outline-4 focus-visible:outline-gold/30 active:bg-gold active:text-background"
              target="_blank"
              rel="noreferrer"
            >
              카카오톡 상담하기
            </a>
          </div>
        </div>
      </Section>
    </main>
  );
}
