import { AboutDetailLayout } from "@/components/AboutDetailLayout";

export const metadata = {
  title: "Studio"
};

export default function StudioPage() {
  return (
    <AboutDetailLayout
      eyebrow="ABOUT"
      title="Studio"
      description="조용히 깊어지는 수련을 위한 공간"
      heroImage="/images/studio-hero.jpg"
      heroImageAlt=""
      heroImagePosition="50% 42%"
    >
      <div className="grid gap-6 lg:grid-cols-3">
        <article className="rounded-[1.25rem] border border-line/70 bg-background/70 p-6">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-gold">작은 관찰</p>
          <p className="mt-4 text-lg leading-8 text-muted">
            몸과 호흡, 그리고 감각을 세심하게 바라보는 것에서 수련은 시작됩니다.
          </p>
        </article>
        <article className="rounded-[1.25rem] border border-line/70 bg-background/70 p-6">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-gold">꾸준한 리듬</p>
          <p className="mt-4 text-lg leading-8 text-muted">
            특별한 재능보다 중요한 것은 반복과 리듬입니다. 작은 실천이 깊은 변화를 만듭니다.
          </p>
        </article>
        <article className="rounded-[1.25rem] border border-line/70 bg-background/70 p-6">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-gold">성장의 기록</p>
          <p className="mt-4 text-lg leading-8 text-muted">
            요가원 전용 앱을 통해 수련 데이터와 개인 피드백을 확인하며 자신의 변화를 객관적으로 파악하고, 꾸준한 성장을 이어갑니다.
          </p>
        </article>
      </div>
    </AboutDetailLayout>
  );
}
