export type TeacherTimelineItem = {
  period: string;
  title: string;
  description?: string;
};

export type TeacherProfile = {
  name: string;
  role: string;
  credential?: string;
  intro: string;
  image: string;
  imageAlt: string;
  objectPosition?: string;
};

export type HeadTeacherProfile = TeacherProfile & {
  eyebrow: string;
  timeline: TeacherTimelineItem[];
};

export type TeachingPhilosophyItem = {
  title: string;
  description: string;
};

export const headTeacher: HeadTeacherProfile = {
  eyebrow: "HEAD TEACHER",
  name: "양우석",
  role: "Founder & Head Teacher",
  credential: "Authorized Level 2 Teacher",
  intro:
    "전통적인 아쉬탕가 요가 수련을 바탕으로 각 수련자의 몸과 호흡을 세심하게 관찰하며 안정적인 수련의 방향을 안내합니다.",
  image: "/images/teacher-hero.jpg",
  imageAlt: "아쉬탕가 요가 수련을 지도하는 양우석 원장",
  objectPosition: "50% 40%",
  timeline: [
    {
      period: "2003",
      title: "아쉬탕가 요가 수련 시작"
    },
    {
      period: "2010",
      title: "KPJAYI Authorized Level 2",
      description: "한국 공인 1호 Authorized Teacher"
    },
    {
      period: "현재",
      title: "Ashtanga Yoga Studio Founder & Head Teacher"
    }
  ]
};

export const teachingPhilosophy: TeachingPhilosophyItem[] = [
  {
    title: "전통",
    description: "정해진 시퀀스와 전통적인 수련 방식을 존중합니다."
  },
  {
    title: "관찰",
    description: "각 수련자의 몸과 호흡을 세심하게 관찰합니다."
  },
  {
    title: "지속",
    description: "꾸준한 Practice를 가장 중요한 가치로 생각합니다."
  }
];

export const teachers: TeacherProfile[] = [
  {
    name: "Teacher Name",
    role: "Mysore Teacher",
    intro: "수련자의 현재 상태에 맞춰 호흡과 움직임의 균형을 차분하게 안내합니다.",
    image: "/images/teacher-hero.jpg",
    imageAlt: "마이솔 수업 지도자",
    objectPosition: "50% 35%"
  },
  {
    name: "Teacher Name",
    role: "Led Class Teacher",
    intro: "정해진 시퀀스 안에서 안정적인 리듬과 집중을 경험할 수 있도록 돕습니다.",
    image: "/images/teacher-hero.jpg",
    imageAlt: "레드 클래스 지도자",
    objectPosition: "50% 35%"
  },
  {
    name: "Teacher Name",
    role: "Beginner Class Teacher",
    intro: "처음 수련을 시작하는 분들이 기본 자세와 호흡을 편안하게 익히도록 안내합니다.",
    image: "/images/teacher-hero.jpg",
    imageAlt: "비기너 클래스 지도자",
    objectPosition: "50% 35%"
  },
  {
    name: "Teacher Name",
    role: "Assistant Teacher",
    intro: "수련자가 자신의 속도 안에서 안정적으로 Practice를 이어갈 수 있도록 돕습니다.",
    image: "/images/teacher-hero.jpg",
    imageAlt: "아쉬탕가 요가 어시스턴트 지도자",
    objectPosition: "50% 35%"
  },
  {
    name: "Teacher Name",
    role: "Practice Guide",
    intro: "기본 시퀀스와 호흡의 흐름을 중심으로 꾸준한 수련의 기반을 안내합니다.",
    image: "/images/teacher-hero.jpg",
    imageAlt: "아쉬탕가 요가 수련 안내자",
    objectPosition: "50% 35%"
  }
];
