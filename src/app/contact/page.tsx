import { CTAButton } from "@/components/CTAButton";
import { Section } from "@/components/Section";
import { externalLinks, siteInfo } from "@/data/site";

export const metadata = {
  title: "문의"
};

export default function ContactPage() {
  return (
    <main>
      <Section eyebrow="Contact" title="처음 수련을 시작할 몸 상태를 알려주세요" className="bg-soft">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_0.7fr]">
          <div>
            <p className="max-w-2xl text-lg text-muted">
              아직 Supabase나 예약 시스템은 연결하지 않았습니다. MVP에서는 문의 흐름과 화면 구조만 준비했습니다.
            </p>
            <dl className="mt-8 grid gap-4 text-muted">
              <div>
                <dt className="font-black text-ink">운영 시간</dt>
                <dd>{siteInfo.businessHours}</dd>
              </div>
              <div>
                <dt className="font-black text-ink">위치</dt>
                <dd>{siteInfo.address}</dd>
              </div>
              <div>
                <dt className="font-black text-ink">전화번호</dt>
                <dd>{siteInfo.phone}</dd>
              </div>
            </dl>
            <div className="mt-8 flex flex-wrap gap-3">
              <CTAButton href={externalLinks.kakaoTalk} variant="dark">
                카카오톡 문의
              </CTAButton>
              <CTAButton href={externalLinks.naverMap} variant="dark">
                네이버 지도
              </CTAButton>
              <CTAButton href={externalLinks.reservationApp} variant="dark">
                예약 앱
              </CTAButton>
            </div>
          </div>
          <form className="grid gap-4 rounded-lg border border-line bg-surface p-6 shadow-soft">
            <label className="grid gap-2 text-sm font-black text-muted">
              이름
              <input className="min-h-12 rounded-md border border-line bg-background px-3 text-ink placeholder:text-muted" name="name" placeholder="홍길동" />
            </label>
            <label className="grid gap-2 text-sm font-black text-muted">
              연락처
              <input className="min-h-12 rounded-md border border-line bg-background px-3 text-ink placeholder:text-muted" name="phone" placeholder={siteInfo.phone} />
            </label>
            <label className="grid gap-2 text-sm font-black text-muted">
              관심 수련
              <select className="min-h-12 rounded-md border border-line bg-background px-3 text-ink" name="program">
                <option>입문 상담</option>
                <option>마이솔 클래스</option>
                <option>레드 클래스</option>
                <option>호흡 워크숍</option>
              </select>
            </label>
            <CTAButton href="/" variant="dark" className="mt-2 w-full">
              임시 문의 확인
            </CTAButton>
            <p className="text-sm text-muted">제출 기능은 다음 단계에서 예약 시스템과 연결합니다.</p>
          </form>
        </div>
      </Section>
    </main>
  );
}
