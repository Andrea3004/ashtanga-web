import { AboutDetailLayout } from "@/components/AboutDetailLayout";

const teachers = [
  {
    name: "양우석 원장",
    description: "아쉬탕가 수련과 지도 철학을 바탕으로 개인의 몸 상태와 수련 경험에 맞는 방향을 안내합니다."
  },
  { name: "선생님2", description: "향후 실제 소개와 경력 정보로 교체될 예정입니다." },
  { name: "선생님3", description: "향후 실제 소개와 경력 정보로 교체될 예정입니다." },
  { name: "선생님4", description: "향후 실제 소개와 경력 정보로 교체될 예정입니다." },
  { name: "선생님5", description: "향후 실제 소개와 경력 정보로 교체될 예정입니다." },
  { name: "선생님6", description: "향후 실제 소개와 경력 정보로 교체될 예정입니다." }
];

export const metadata = {
  title: "Teacher"
};

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
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {teachers.map((teacher) => (
          <article key={teacher.name} className="overflow-hidden rounded-[1.25rem] border border-line/70 bg-background/70">
            <div className="h-36 border-b border-line/70 bg-[radial-gradient(circle_at_top_left,_rgba(185,151,91,0.25),_transparent_70%)]" />
            <div className="p-6">
              <p className="text-lg font-black text-text">{teacher.name}</p>
              <p className="mt-3 text-base leading-7 text-muted">{teacher.description}</p>
            </div>
          </article>
        ))}
      </div>
    </AboutDetailLayout>
  );
}
