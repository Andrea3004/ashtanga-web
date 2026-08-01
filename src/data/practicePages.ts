import { externalLinks } from "@/data/site";

export type PracticeDetailPageData = {
  slug: "beginner" | "mysore" | "meditation";
  path: "/practice/beginner" | "/practice/mysore" | "/practice/meditation";
  eyebrow: string;
  title: string;
  lead: string;
  description: string;
  heroImage: string;
  heroImageAlt: string;
  diagramTitle: string;
  diagramItems: string[];
  features: Array<{
    title: string;
    body: string;
  }>;
  flow: string[];
  audience: string[];
  ctas: Array<{
    label: string;
    href: string;
    variant?: "primary" | "secondary" | "dark" | "member";
  }>;
  metadata: {
    title: string;
    description: string;
  };
};

export const practiceDetailPages = {
  beginner: {
    slug: "beginner",
    path: "/practice/beginner",
    eyebrow: "Beginner Class",
    title: "Beginner Class / 일반수업",
    lead: "운동과 요가, 호흡과 집중력 향상을 하나의 흐름으로 구성한 최고의 1시간 프로그램",
    description:
      "처음 요가를 시작하는 분도 아쉬탕가 요가 레벨 1~5 구조 안에서 유연성, 근지구력, 호흡, 집중을 단계적으로 익힙니다. 단순한 스트레칭을 넘어 자세 인식과 집중력을 회복하고, 몸과 마음의 균형을 다시 세우는 수업입니다.",
    heroImage: "/images/practice-hero.jpg",
    heroImageAlt: "아쉬탕가 요가 일반수업 자세",
    diagramTitle: "1시간 안의 5요소 흐름",
    diagramItems: ["유연성", "근지구력", "호흡·집중", "균형", "회복"],
    features: [
      {
        title: "Step-by-Step",
        body: "처음 방문한 분도 준비 동작부터 호흡, 기본 아사나까지 무리 없이 따라올 수 있도록 안내합니다."
      },
      {
        title: "Integrated Training",
        body: "유연성, 근지구력, 균형 감각을 따로 떼어내지 않고 하나의 수련 흐름 안에서 연결합니다."
      },
      {
        title: "Focused Awareness",
        body: "자세를 인식하고 호흡에 머무는 과정을 통해 몸의 감각과 집중력을 함께 깨웁니다."
      }
    ],
    flow: ["준비와 몸 깨우기", "호흡과 시선 정렬", "기본 아사나 수련", "균형과 자세 인식", "이완과 회복"],
    audience: [
      "요가를 처음 시작하거나 기초를 다시 다지고 싶은 분",
      "운동, 호흡, 집중을 한 시간 안에서 체계적으로 경험하고 싶은 분",
      "몸의 긴장과 흐트러진 자세를 차분히 회복하고 싶은 분"
    ],
    ctas: [
      { label: "일반수업 시간표 보기", href: "/schedule", variant: "primary" },
      { label: "1회 체험 문의", href: externalLinks.kakaoTalk, variant: "secondary" }
    ],
    metadata: {
      title: "Beginner Class / 일반수업",
      description: "초보자를 위한 1시간 아쉬탕가 요가 일반수업. 유연성, 근지구력, 호흡과 집중을 단계적으로 익힙니다."
    }
  },
  mysore: {
    slug: "mysore",
    path: "/practice/mysore",
    eyebrow: "Mysore Class",
    title: "Mysore Class / 마이솔 클래스",
    lead: "자신의 능력과 시간에 제한받지 않고, 깊이 있는 요가를 마음껏 수련하고 도전할 수 있는 클래스",
    description:
      "마이솔 클래스는 각자 자신의 호흡과 속도에 맞춰 시퀀스를 수행하고, 티쳐가 개별적으로 관찰하며 지도하는 전통적인 아쉬탕가 수련 방식입니다. 초보자와 숙련자가 같은 공간에서 서로 다른 진도로 수련하며 자신의 몸과 가능성을 깊이 이해합니다.",
    heroImage: "/images/practice-hero.jpg",
    heroImageAlt: "아쉬탕가 요가 마이솔 클래스 수련",
    diagramTitle: "마이솔 수련의 중심",
    diagramItems: ["Individual Guidance", "Self-Paced Practice", "Progressive Challenge"],
    features: [
      {
        title: "Individual Guidance",
        body: "티쳐가 수련자의 현재 상태와 진도를 관찰하고 필요한 지점을 개별적으로 안내합니다."
      },
      {
        title: "Self-Paced Practice",
        body: "정해진 구령보다 자신의 호흡과 흐름에 집중하며 스스로 수련의 리듬을 만들어갑니다."
      },
      {
        title: "Progressive Challenge",
        body: "특정 자세와 다음 단계에 자유롭게 도전하면서 자신의 가능성을 안전하게 넓혀갑니다."
      }
    ],
    flow: ["개별 준비", "자신의 호흡으로 시퀀스 수행", "티쳐의 관찰과 보조", "필요한 자세와 다음 단계 안내", "마무리와 회복"],
    audience: [
      "자신의 속도와 진도에 맞춰 깊이 있게 수련하고 싶은 분",
      "정해진 구령보다 호흡과 흐름에 더 집중하고 싶은 분",
      "개별 지도를 통해 다음 자세와 단계에 도전하고 싶은 분"
    ],
    ctas: [
      { label: "마이솔 시간표 보기", href: "/schedule", variant: "primary" },
      { label: "첫 방문 문의", href: externalLinks.kakaoTalk, variant: "secondary" }
    ],
    metadata: {
      title: "Mysore Class / 마이솔 클래스",
      description: "자신의 호흡과 진도에 따라 수련하며 개별 지도를 받는 전통적인 아쉬탕가 마이솔 클래스입니다."
    }
  },
  meditation: {
    slug: "meditation",
    path: "/practice/meditation",
    eyebrow: "Meditation",
    title: "Meditation / 명상",
    lead: "누구나 아주 쉽게 명상의 고급 단계를 체험해 볼 수 있는 체계적인 차크라 각성 명상 시스템",
    description:
      "명상을 어렵거나 특별한 사람만의 수행처럼 설명하지 않습니다. 이완, 집중, 심상화의 단계 안에서 몸의 감각을 회복하고, 호흡과 의식을 결합하며, 차크라 호흡과 심상화를 통해 깊은 안정으로 들어갑니다.",
    heroImage: "/images/philosophy-hero.jpg",
    heroImageAlt: "고요한 명상 자세",
    diagramTitle: "명상의 3단계",
    diagramItems: ["이완", "집중", "심상화"],
    features: [
      {
        title: "이완",
        body: "몸과 신경계의 긴장을 낮추고 잊고 있던 감각을 천천히 회복합니다."
      },
      {
        title: "집중",
        body: "호흡이나 하나의 대상에 의식을 머물게 하며 산만한 마음을 정돈합니다."
      },
      {
        title: "심상화",
        body: "호흡과 에너지의 흐름을 명확하게 인식하며 내면의 안정감을 깊게 합니다."
      }
    ],
    flow: ["몸의 긴장 내려놓기", "호흡 감각 회복", "의식의 초점 세우기", "차크라 호흡과 심상화", "깊은 이완과 안정"],
    audience: [
      "명상을 처음 시작하지만 쉽게 접근하고 싶은 분",
      "몸의 감각과 호흡을 차분히 회복하고 싶은 분",
      "깊은 이완과 집중, 내면의 안정을 경험하고 싶은 분"
    ],
    ctas: [
      { label: "명상 수업 문의", href: externalLinks.kakaoTalk, variant: "primary" },
      { label: "프로그램 안내", href: "/contact", variant: "secondary" }
    ],
    metadata: {
      title: "Meditation / 명상",
      description: "이완, 집중, 심상화의 3단계로 누구나 쉽게 깊은 명상을 체험하는 차크라 각성 명상 프로그램입니다."
    }
  }
} satisfies Record<string, PracticeDetailPageData>;
