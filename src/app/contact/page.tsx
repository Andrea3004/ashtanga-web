import { CTAButton } from "@/components/CTAButton";
import { Section } from "@/components/Section";
import { TrackedLink } from "@/components/TrackedLink";
import { contactLinks, externalLinks, siteInfo } from "@/data/site";
import { createPageMetadata, siteName } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "위치와 문의",
  description: "서울 서초구 아쉬탕가 요가 스튜디오의 위치, 운영 시간, 전화번호, 카카오톡 상담, 예약 앱과 SNS 채널을 안내합니다.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <main>
      <Section eyebrow="Contact" title="처음 수련을 시작할 몸 상태를 알려주세요" className="bg-soft">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_0.7fr]">
          <div>
            <p className="max-w-2xl text-lg text-muted">
              방문 전 위치, 수련 가능 시간, 1회 체험 가능 여부를 확인해 주세요. 예약과 상담은 우선
              카카오톡, 전화, 외부 예약 앱으로 연결합니다.
            </p>
            <p className="mt-4 text-xs font-medium text-gold">* 1회 체험은 유료 프로그램입니다.</p>
            <dl className="mt-8 grid gap-4 text-muted">
              <div>
                <dt className="font-black text-ink">상호</dt>
                <dd>{siteName}</dd>
              </div>
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
                <dd>
                  <TrackedLink
                    href={contactLinks.phone}
                    analytics={{ event: "phone_click", location: "contact", label: "전화번호", destination: "tel" }}
                    className="rounded-sm hover:text-clay focus-visible:outline focus-visible:outline-4 focus-visible:outline-gold/30"
                  >
                    {siteInfo.phone}
                  </TrackedLink>
                </dd>
              </div>
            </dl>
            <div className="mt-8 flex flex-wrap gap-3">
              <CTAButton
                href={externalLinks.kakaoTalk}
                variant="dark"
                analytics={{
                  event: "kakao_click",
                  location: "contact",
                  label: "카카오톡 문의",
                  destination: "kakao"
                }}
              >
                카카오톡 문의
              </CTAButton>
              <CTAButton
                href={externalLinks.naverMap}
                variant="dark"
                analytics={{
                  event: "map_click",
                  location: "contact",
                  label: "네이버 지도",
                  destination: "map"
                }}
              >
                네이버 지도
              </CTAButton>
              <CTAButton
                href={externalLinks.reservationApp}
                variant="dark"
                analytics={{
                  event: "reservation_app_click",
                  location: "contact",
                  label: "예약 앱",
                  destination: "reservation_app"
                }}
              >
                예약 앱
              </CTAButton>
            </div>
          </div>
          <div className="grid gap-4 rounded-lg border border-line bg-surface p-6 shadow-soft">
            <p className="text-lg font-black text-ink">외부 채널</p>
            <p className="text-sm leading-6 text-muted">
              이 MVP에서는 회원가입, DB 저장, 비회원 예약 저장 기능을 만들지 않습니다. 실제 상담과 예약은
              아래 외부 채널을 사용합니다.
            </p>
            <CTAButton
              href={externalLinks.kakaoTalk}
              variant="dark"
              className="w-full"
              analytics={{
                event: "trial_click",
                location: "contact",
                label: "카카오톡으로 1회 체험 문의",
                destination: "kakao"
              }}
            >
              카카오톡으로 1회 체험 문의
            </CTAButton>
            <CTAButton href={externalLinks.instagram} variant="dark" className="w-full">
              인스타그램 보기
            </CTAButton>
            <CTAButton href={externalLinks.naverBlog} variant="dark" className="w-full">
              네이버 블로그
            </CTAButton>
            <CTAButton href={externalLinks.naverCafe} variant="dark" className="w-full">
              네이버 카페
            </CTAButton>
          </div>
        </div>
      </Section>
    </main>
  );
}
