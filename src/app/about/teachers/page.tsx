import Image from "next/image";
import Link from "next/link";
import { AboutDetailLayout } from "@/components/AboutDetailLayout";
import { externalLinks } from "@/data/site";
import { headTeacher, teachers, teachingPhilosophy } from "@/data/teachers";

export const metadata = {
  title: "Teacher"
};

function getTeacherCardLayoutClass(index: number, total: number) {
  const lastRowCount = total % 3;
  const firstLastRowIndex = total - lastRowCount;

  if (lastRowCount === 1 && index === firstLastRowIndex) {
    return "lg:col-start-3";
  }

  if (lastRowCount === 2 && index === firstLastRowIndex) {
    return "lg:col-start-2";
  }

  return "";
}

export default function TeachersPage() {
  return (
    <AboutDetailLayout
      eyebrow="ABOUT"
      title="Teachers"
      description="함께 수련을 안내하는 선생님들"
      heroImage="/images/teacher-hero.jpg"
      heroImageAlt=""
      heroImagePosition="58% 44%"
    >
      <section className="grid gap-7 lg:grid-cols-[minmax(0,0.58fr)_minmax(0,1fr)] lg:items-center lg:gap-10">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[1.25rem] border border-line/70 bg-background">
          <Image
            src={headTeacher.image}
            alt={headTeacher.imageAlt}
            fill
            priority
            sizes="(min-width: 1024px) 360px, (min-width: 640px) 68vw, 100vw"
            className="object-cover"
            style={{ objectPosition: headTeacher.objectPosition }}
          />
        </div>

        <div className="lg:py-2">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-gold">{headTeacher.eyebrow}</p>
          <h2 className="mt-4 text-3xl font-black leading-tight text-text sm:text-4xl">{headTeacher.name}</h2>
          <p className="mt-2 text-base font-semibold text-gold">{headTeacher.role}</p>
          {headTeacher.credential ? (
            <p className="mt-1 text-sm font-semibold uppercase tracking-[0.18em] text-muted">
              {headTeacher.credential}
            </p>
          ) : null}
          <p className="mt-5 max-w-2xl text-base leading-8 text-muted sm:text-lg">{headTeacher.intro}</p>

          <div className="mt-6 grid gap-0 border-y border-line/70 sm:grid-cols-3 sm:border-x sm:border-y-0">
            {headTeacher.timeline.map((item) => (
              <div key={`${item.period}-${item.title}`} className="border-line/70 py-4 sm:border-r sm:px-5 sm:last:border-r-0">
                <p className="text-sm font-black text-gold">{item.period}</p>
                <p className="mt-2 text-sm font-black leading-6 text-text">{item.title}</p>
                {item.description ? <p className="mt-1 text-sm leading-6 text-muted">{item.description}</p> : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-12 border-y border-line/70 py-9">
        <p className="mx-auto max-w-3xl text-center text-2xl font-black leading-relaxed text-text sm:text-3xl">
          수련은 자세를 완성하는 것이 아니라
          <br />
          호흡과 집중을 통해
          <br />
          자신을 알아가는 과정입니다.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {teachingPhilosophy.map((item) => (
            <article key={item.title} className="rounded-[1.25rem] border border-line/70 bg-background/70 p-5">
              <h3 className="text-lg font-black text-gold">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <div className="mb-6">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-gold">Our Teachers</p>
          <h2 className="mt-3 text-2xl font-black text-text sm:text-3xl">함께 수련을 이끄는 지도진</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-6">
          {teachers.map((teacher, index) => (
            <article
              key={`${teacher.name}-${teacher.role}`}
              className={`flex h-full flex-col overflow-hidden rounded-[1.25rem] border border-line/70 bg-background/70 md:col-span-1 lg:col-span-2 ${getTeacherCardLayoutClass(
                index,
                teachers.length
              )}`}
            >
             <div className="relative aspect-square bg-background md:aspect-[4/5]">
                <Image
                  src={teacher.image}
                  alt={teacher.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 320px, (min-width: 640px) 45vw, 100vw"
                  className="object-cover"
                  style={{ objectPosition: teacher.objectPosition }}
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-black text-text">{teacher.name}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-gold">{teacher.role}</p>
                <p className="mt-3 line-clamp-3 text-sm leading-7 text-muted">{teacher.intro}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-[1.25rem] border border-line bg-background/70 p-6 sm:p-8">
        <h2 className="text-2xl font-black text-text">수련을 시작할 준비가 되셨나요?</h2>
        <div className="mt-6 flex flex-wrap gap-3 text-sm">
          <Link
            href="/schedule"
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-gold bg-gold px-4 py-2 font-black text-background transition hover:-translate-y-0.5 hover:border-text hover:bg-text hover:text-background focus-visible:border-text focus-visible:bg-text focus-visible:text-background focus-visible:outline focus-visible:outline-4 focus-visible:outline-gold/30 active:border-text active:bg-text active:text-background"
          >
            수련 시간표 보기
          </Link>
          <a
            href={externalLinks.kakaoTalk}
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-gold bg-transparent px-4 py-2 font-black text-gold transition hover:-translate-y-0.5 hover:bg-gold hover:text-background focus-visible:bg-gold focus-visible:text-background focus-visible:outline focus-visible:outline-4 focus-visible:outline-gold/30 active:bg-gold active:text-background"
            target="_blank"
            rel="noreferrer"
          >
            카카오톡 상담하기
          </a>
        </div>
      </section>
    </AboutDetailLayout>
  );
}
