import type { Metadata } from "next";
import Image from "next/image";
import { CTAButton } from "@/components/CTAButton";
import { EnglishFaq } from "@/components/EnglishFaq";
import { Section } from "@/components/Section";
import { externalLinks, siteInfo } from "@/data/site";
import { headTeacher } from "@/data/teachers";
import { ogImage, siteName, siteUrl } from "@/lib/seo";

const pageTitle = "Ashtanga Yoga Studio Seoul | Mysore & Led Classes";
const pageDescription =
  "Traditional Ashtanga Yoga studio in Seoul offering Mysore practice, beginner classes, Primary and Intermediate led classes, and meditation.";

const studioHighlights = [
  "Traditional Ashtanga method",
  "Small-group guidance",
  "Beginner-friendly instruction",
  "Personal adjustments",
  "Basic guidance in English is available"
];

const classCards = [
  {
    title: "Beginner Class",
    description: "A structured introduction to breathing, standing poses, finishing poses, and the basic sequence.",
    recommendedFor: "First-time students and those new to Ashtanga Yoga."
  },
  {
    title: "Mysore Practice",
    description:
      "Students practice individually within the traditional sequence while receiving personal guidance from the teacher.",
    recommendedFor: "Students with previous Ashtanga experience or those who have learned the basic sequence."
  },
  {
    title: "Primary Led Class",
    description: "A counted group class following the traditional Primary Series rhythm and sequence.",
    recommendedFor: "Students familiar with the standing and seated sequence."
  },
  {
    title: "Intermediate Led Class",
    description: "A guided class for students who are already practicing the Intermediate Series.",
    recommendedFor: "Experienced practitioners with teacher approval."
  },
  {
    title: "Meditation",
    description: "A short practice focused on relaxation, breath awareness, concentration, and inner balance.",
    recommendedFor: "Students who want to support practice with breath awareness and concentration."
  }
];

const teacherFacts = [
  "Ashtanga practice since 2003",
  "KPJAYI Authorized Level 2 Teacher",
  "Traditional sequence-based instruction",
  "Individual guidance",
  "Primary and Intermediate practice"
];

const visitSteps = [
  {
    title: "Contact us",
    body: "Send us a message before your first visit."
  },
  {
    title: "Choose a class",
    body: "We will help you choose a suitable class based on your experience."
  },
  {
    title: "Arrive early",
    body: "Please arrive 10-15 minutes before class."
  },
  {
    title: "Begin your practice",
    body: "The teacher will guide you according to your level."
  }
];

const bringItems = ["Comfortable practice clothes", "A small towel", "Water", "Your own mat, if available"];

const faqItems = [
  {
    question: "Can beginners join?",
    answer:
      "Yes. Beginners are guided through the basic breathing method, standing poses, and finishing sequence step by step."
  },
  {
    question: "Do I need to book in advance?",
    answer: "Yes. Please contact the studio before your first visit so we can recommend the right class."
  },
  {
    question: "Can I join Mysore practice as a beginner?",
    answer:
      "Complete beginners usually begin with a beginner class or introductory guidance before joining regular Mysore practice."
  },
  {
    question: "Are classes taught in English?",
    answer: "Basic guidance in English is available. Please contact us in advance so we can prepare for your visit."
  },
  {
    question: "What should I wear?",
    answer: "Wear comfortable clothes that allow you to move freely. Avoid eating a heavy meal before practice."
  },
  {
    question: "Is the trial class free?",
    answer: "No. Trial classes are paid programs."
  }
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/en",
    languages: {
      "ko-KR": "/",
      "en-US": "/en"
    }
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: new URL("/en", siteUrl).toString(),
    siteName,
    type: "website",
    locale: "en_US",
    images: [ogImage]
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [ogImage.url]
  }
};

export default function EnglishPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/en#webpage`,
        url: `${siteUrl}/en`,
        name: pageTitle,
        description: pageDescription,
        isPartOf: {
          "@id": `${siteUrl}/#website`
        },
        about: {
          "@id": `${siteUrl}/#studio`
        },
        inLanguage: "en-US"
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteUrl}/en#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteUrl
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "English",
            item: `${siteUrl}/en`
          }
        ]
      }
    ]
  };

  return (
    <main lang="en">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative grid min-h-[calc(100svh-72px)] overflow-hidden text-text">
        <Image
          src="/images/ashtanga-shala-hero.png"
          alt="Traditional Ashtanga Yoga practice room in Seoul"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,26,32,0.92),rgba(8,26,32,0.62)_58%,rgba(8,26,32,0.28)),linear-gradient(0deg,rgba(8,26,32,0.64),rgba(8,26,32,0.08)_52%)]" />
        <div className="relative z-10 flex max-w-4xl flex-col justify-end px-5 pb-16 pt-28 sm:px-8 sm:pb-20 lg:px-20 lg:pb-28">
          <p className="mb-4 text-xs font-black uppercase text-gold">ASHTANGA YOGA STUDIO - SEOUL</p>
          <h1 className="max-w-3xl text-3xl font-black leading-tight sm:text-5xl lg:text-7xl">
            Traditional Ashtanga Yoga in Seoul
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-text/90 sm:mt-6 sm:text-lg">
            A dedicated practice space for Mysore-style practice, led classes, beginner classes, and meditation.
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-text/80 sm:text-base">
            Students of all levels are welcome. Guidance is adapted to each student&apos;s experience and condition.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CTAButton
              href="/schedule"
              analytics={{ event: "schedule_click", location: "english_page", label: "View Class Schedule", destination: "internal" }}
            >
              View Class Schedule
            </CTAButton>
            <CTAButton
              href={externalLinks.kakaoTalk}
              variant="secondary"
              analytics={{ event: "kakao_click", location: "english_page", label: "Contact Us", destination: "kakao" }}
            >
              Contact Us
            </CTAButton>
          </div>
        </div>
      </section>

      <Section eyebrow="About" title="About the Studio" className="bg-background">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-line bg-surface shadow-soft">
            <Image
              src="/images/studio-hero.jpg"
              alt="Calm Ashtanga Yoga Studio practice space"
              fill
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <div className="max-w-2xl space-y-4 text-base leading-8 text-muted sm:text-lg">
              <p>Ashtanga Yoga Studio is a dedicated practice space in Seoul for traditional Ashtanga Yoga.</p>
              <p>
                We offer Mysore-style practice, led classes, beginner-friendly classes, and meditation in a calm and focused
                environment.
              </p>
              <p>
                The practice is taught with attention to breath, sequence, strength, mobility, and individual condition.
              </p>
            </div>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {studioHighlights.map((item) => (
                <div key={item} className="rounded-lg border border-line bg-surface px-4 py-3 text-sm font-black text-text">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section eyebrow="Practice" title="Classes" className="bg-soft">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {classCards.map((item) => (
            <article key={item.title} className="rounded-lg border border-line bg-background p-5 shadow-soft">
              <h3 className="text-xl font-black text-gold">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted">{item.description}</p>
              <p className="mt-5 text-xs font-black uppercase text-clay">Recommended for</p>
              <p className="mt-2 text-sm leading-6 text-text/85">{item.recommendedFor}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Teacher" title="Your Teacher" className="bg-background">
        <div className="grid gap-8 lg:grid-cols-[0.45fr_0.55fr] lg:items-center">
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-line bg-surface shadow-soft">
            <Image
              src={headTeacher.image}
              alt="Wooseok Yang, head teacher at Ashtanga Yoga Studio"
              fill
              sizes="(min-width: 1024px) 38vw, 100vw"
              className="object-cover"
              style={{ objectPosition: headTeacher.objectPosition }}
            />
          </div>
          <div>
            <p className="text-sm font-black uppercase text-gold">Head Teacher</p>
            <h3 className="mt-3 text-3xl font-black text-text sm:text-4xl">Wooseok Yang</h3>
            <p className="mt-2 text-base font-semibold text-gold">Founder & Head Teacher</p>
            <div className="mt-6 max-w-2xl space-y-4 text-base leading-8 text-muted sm:text-lg">
              <p>
                Wooseok Yang has practiced Ashtanga Yoga since 2003 and is a KPJAYI Authorized Level 2 Teacher.
              </p>
              <p>
                His teaching is rooted in the traditional Ashtanga method, with close attention to breathing, sequence,
                strength, mobility, and each student&apos;s individual condition.
              </p>
              <p>Students are guided step by step rather than being pushed into advanced poses.</p>
            </div>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {teacherFacts.map((fact) => (
                <div key={fact} className="rounded-lg border border-line bg-surface px-4 py-3 text-sm font-black text-text">
                  {fact}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section eyebrow="First Visit" title="Your First Visit" className="bg-soft">
        <ol className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {visitSteps.map((step, index) => (
            <li key={step.title} className="rounded-lg border border-line bg-background p-5">
              <span className="text-sm font-black text-gold">0{index + 1}</span>
              <h3 className="mt-4 text-xl font-black text-text">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <article className="rounded-lg border border-line bg-background p-5">
            <h3 className="text-xl font-black text-gold">What to bring</h3>
            <ul className="mt-4 grid gap-2 text-sm leading-7 text-muted">
              {bringItems.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </article>
          <article className="rounded-lg border border-line bg-background p-5">
            <h3 className="text-xl font-black text-gold">Before you come</h3>
            <p className="mt-4 text-sm leading-7 text-muted">Trial classes are paid programs.</p>
            <p className="mt-3 text-sm leading-7 text-muted">
              Your visit is confirmed after you receive a reply from the studio.
            </p>
          </article>
        </div>
      </Section>

      <Section eyebrow="FAQ" title="Questions Before Visiting" className="bg-background">
        <div className="max-w-3xl">
          <EnglishFaq items={faqItems} />
        </div>
      </Section>

      <Section eyebrow="Contact" title="Contact & Visit" className="bg-charcoal" tone="dark">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-lg border border-line bg-surface p-6 shadow-soft">
            <dl className="grid gap-5 text-sm leading-7">
              <div>
                <dt className="font-black uppercase text-gold">Studio name</dt>
                <dd className="mt-1 text-text">{siteName}</dd>
              </div>
              <div>
                <dt className="font-black uppercase text-gold">Address</dt>
                <dd className="mt-1 text-text">{siteInfo.address}</dd>
              </div>
              <div>
                <dt className="font-black uppercase text-gold">Phone</dt>
                <dd className="mt-1">
                  <CTAButton
                    href="tel:025824401"
                    variant="secondary"
                    className="min-h-11 px-4"
                    analytics={{ event: "phone_click", location: "english_page", label: siteInfo.phone, destination: "tel" }}
                  >
                    {siteInfo.phone}
                  </CTAButton>
                </dd>
              </div>
              <div>
                <dt className="font-black uppercase text-gold">Hours</dt>
                <dd className="mt-1 text-text">{siteInfo.businessHours}</dd>
              </div>
            </dl>
          </div>
          <div className="flex flex-col justify-between rounded-lg border border-line bg-surface p-6 shadow-soft">
            <div>
              <h3 className="text-2xl font-black text-text">Please contact us before your first visit.</h3>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">
                Tell us about your yoga experience and preferred time. We will reply with the most suitable class option.
              </p>
            </div>
            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              <CTAButton
                href={externalLinks.kakaoTalk}
                className="w-full"
                analytics={{
                  event: "kakao_click",
                  location: "english_page",
                  label: "Contact on KakaoTalk",
                  destination: "kakao"
                }}
              >
                Contact on KakaoTalk
              </CTAButton>
              <CTAButton
                href="/schedule"
                variant="secondary"
                className="w-full"
                analytics={{
                  event: "schedule_click",
                  location: "english_page",
                  label: "View Class Schedule",
                  destination: "internal"
                }}
              >
                View Class Schedule
              </CTAButton>
              <CTAButton
                href={externalLinks.naverMap}
                variant="secondary"
                className="w-full"
                analytics={{ event: "map_click", location: "english_page", label: "View Location", destination: "map" }}
              >
                View Location
              </CTAButton>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
